import * as Context from "effect/Context";
import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import { HttpRouter, HttpServerRequest, HttpServerResponse } from "effect/unstable/http";

type Env = {
  ASSETS: { fetch(request: Request): Promise<Response> };
  DB: D1Database;
};

const D1DatabaseTag = Context.Service<D1Database>("D1Database");

const GetMessages = HttpRouter.route(
  "GET",
  "/api/messages",
  Effect.gen(function* () {
    const db = yield* D1DatabaseTag;
    const { results } = yield* Effect.promise(() =>
      db
        .prepare("SELECT id, content, created_at FROM messages ORDER BY created_at DESC LIMIT 50")
        .all<{ id: string; content: string; created_at: string }>(),
    );
    return yield* HttpServerResponse.json(results);
  }),
);

const PostMessage = HttpRouter.route(
  "POST",
  "/api/messages",
  Effect.gen(function* () {
    const db = yield* D1DatabaseTag;
    const req = yield* HttpServerRequest.HttpServerRequest;
    const text = yield* req.text;
    const body = JSON.parse(text) as { content: string };

    if (!body.content || typeof body.content !== "string" || !body.content.trim()) {
      return yield* HttpServerResponse.json({ error: "Content is required" }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    yield* Effect.promise(() =>
      db
        .prepare("INSERT INTO messages (id, content, created_at) VALUES (?, ?, ?)")
        .bind(id, body.content.trim(), createdAt)
        .run(),
    );

    return yield* HttpServerResponse.json(
      { id, content: body.content.trim(), created_at: createdAt },
      { status: 201 },
    );
  }),
);

const ApiRoutes = HttpRouter.addAll([GetMessages, PostMessage]);

const appLayer = Layer.merge(HttpRouter.layer, ApiRoutes);

const { handler } = HttpRouter.toWebHandler(appLayer);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return await handler(request, Context.make(D1DatabaseTag, env.DB));
    }

    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status === 404) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url.origin)));
    }
    return assetResponse;
  },
} satisfies ExportedHandler<Env>;
