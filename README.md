# Web Template

**Alchemy v2 + Effect + Solid.js** — opinionated template for Cloudflare Workers with full-stack type safety.

## Stack

| Layer         | Tool                                                              |
| ------------- | ----------------------------------------------------------------- |
| Infra-as-code | [Alchemy v2](https://github.com/nicedoc/alchemy)                  |
| Runtime       | [Effect](https://effect.website) (typed errors, DI, Schema, RPC)  |
| Frontend      | [Solid.js](https://solidjs.com) + Solid Router                    |
| Build         | [Vite+](https://viteplus.dev) (`vp`): dev, build, fmt, lint, test |
| Tests         | [Vitest](https://vitest.dev) (bundled in `vp`)                    |
| Deploy        | Cloudflare Workers + R2 + D1                                      |

## Quick start

```bash
pnpm install
```

## Commands

| Run              | What it does                 |
| ---------------- | ---------------------------- |
| `vp run dev`     | Local worker with hot reload |
| `vp check`       | Lint + fmt + typecheck       |
| `vp test`        | Run all tests                |
| `vp run deploy`  | Deploy stack via Alchemy     |
| `vp run destroy` | Tear down stack              |

## Testing

Tests use plain `vitest` with `Effect.runPromise`. Keep test files next to source as `*.test.ts`.

```typescript
import { Effect } from "effect";
import { describe, expect, it } from "vitest";

it("works", async () => {
  const result = await Effect.runPromise(Effect.succeed(42));
  expect(result).toBe(42);
});
```
