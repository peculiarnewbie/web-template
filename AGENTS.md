# Web Template — Alchemy v2 + Effect + Solid.js

## Stack

- **Alchemy v2** — infra-as-code (Cloudflare Workers, R2, D1, etc.)
- **Effect** — typed errors, dependency injection, Effect Schema, Effect RPC
- **Solid.js** — reactive UI with Solid Router
- **Vite+** — build toolchain (`vp`): dev, build, fmt (oxfmt), lint (oxlint), test
- **Vitest** — test runner (bundled in `vp` via `@voidzero-dev/vite-plus-test`)
- **@effect/vitest** — Effect-aware test helpers (available for direct `vitest` runs; with `vp test`, use `Effect.runPromise`)
- **TypeScript 7** beta (`@typescript/native-preview`) — `tsgo --noEmit`
- **pnpm** — package manager

## Conventions

- Model all domain types with **Effect Schema** for end-to-end type safety (client ↔ server ↔ storage)
- Use **Effect** idioms (`Effect.gen`, `Layer`, `Context.Tag`, `Effect.catchTag`) in server code
- Keep infrastructure in `alchemy.run.ts` at the root; runtime code in `src/`
- Bind cloud resources with `Cloudflare.X.bind(resource)` at init time
- Write tests with `@effect/vitest` using `it.effect` (with TestServices) or `it.live` (for live services)
- Use `it.layer(Layer)` to share a provided Layer across multiple tests
- Use `vp test` to run all tests (vitest under the hood)
- Keep tests next to source files as `*.test.ts` in `src/`
- When using `vp test` (bundled vitest), use `Effect.runPromise` to run Effect code in tests instead of `@effect/vitest`'s `it.effect`

## Commands

| Run                | What it does                 |
| ------------------ | ---------------------------- |
| `vp run deploy`    | Deploy stack via Alchemy     |
| `vp run destroy`   | Tear down stack              |
| `vp run dev`       | Local worker with hot reload |
| `vp check`         | Lint + fmt + typecheck       |
| `vp fmt`           | Format (oxfmt)               |
| `vp test`          | Run all tests (vitest)       |
| `vp run typecheck` | TypeScript 7 check           |
