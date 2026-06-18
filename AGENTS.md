# Web Template — Alchemy v2 + Effect + Solid.js

## Stack

- **Alchemy v2** — infra-as-code (Cloudflare Workers, D1, R2, etc.)
- **Effect** — typed errors, dependency injection, Effect Schema, Effect RPC
- **Solid.js** — reactive UI with Solid Router
- **Drizzle ORM** — type-safe SQL for D1 (schema + migrations)
- **Vite+** — build toolchain (`vp`): dev, build, fmt (oxfmt), lint (oxlint), test
- **Vitest** — test runner (bundled in `vp` via `@voidzero-dev/vite-plus-test`)
- **@effect/vitest** — Effect-aware test helpers (available for direct `vitest` runs; with `vp test`, use `Effect.runPromise`)
- **TypeScript 7** beta (`@typescript/native-preview`) — `tsgo --noEmit`
- **pnpm** — package manager

## Architecture

- `alchemy.run.ts` declares all Cloudflare resources (D1 database, Worker with static assets)
- `src/worker.ts` exports a standard `ExportedHandler<Env>` — the Worker entry point
- `src/` contains the Solid.js frontend (routes, components) and D1 schema
- Cloud resources are provisioned by Alchemy and passed to the Worker via `env` bindings

## Conventions

- Model all domain types with **Effect Schema** for end-to-end type safety (client ↔ server ↔ storage)
- Use **Effect** idioms (`Effect.gen`, `Layer`, `Context.Tag`, `Effect.catchTag`) in server-side code
- Keep infrastructure in `alchemy.run.ts` at the root; runtime code in `src/`
- Worker uses standard `{ fetch() }` export with typed `Env` bindings
- D1 schema lives in `src/db/schema.ts` (Drizzle); migrations in `src/migrations/`
- Solid.js components use `createSignal` for local state, fetch API for server communication
- Keep tests next to source files as `*.test.ts` in `src/`
- When using `vp test` (bundled vitest), use `Effect.runPromise` to run Effect code in tests instead of `@effect/vitest`'s `it.effect`
- Use `vp test` to run all tests (vitest under the hood)

## Commands

| Run                | What it does                  |
| ------------------ | ----------------------------- |
| `vp run deploy`    | Deploy stack via Alchemy      |
| `vp run destroy`   | Tear down stack               |
| `vp run dev`       | Local worker with hot reload  |
| `vp check`         | Lint + fmt + typecheck        |
| `vp fmt`           | Format (oxfmt)                |
| `vp test`          | Run all tests (vitest)        |
| `vp run typecheck` | TypeScript 7 check            |
| `pnpm db:generate` | Generate D1 migration         |
| `pnpm db:migrate`  | Apply migrations to remote D1 |
