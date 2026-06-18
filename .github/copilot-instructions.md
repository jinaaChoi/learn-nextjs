# Copilot Instructions for learn-nextjs14

- This is a minimal Next.js app using the App Router. The main entry point is `app/page.tsx`, which exports a React component named `Tomato`.
- Keep changes compatible with the app router conventions: page routes live under `app/<route>/page.tsx`, layouts are `app/<route>/layout.tsx`, and all files under `app/` are part of the server-rendered app.
- The repo currently has no custom API routes, no tests, and no build script beyond `npm run dev`.

## Key project specifics

- Run locally with `npm install` then `npm run dev`.
- The only dependencies are `next`, `react`, and `react-dom`.
- TypeScript is enabled via `tsconfig.json`; the project uses `moduleResolution: bundler` and `jsx: react-jsx`.
- `app/page.tsx` is a default server component. If you need client behavior, add `'use client'` at the top of the file.

## What to edit

- Add new pages by creating new folders in `app/` and exporting `page.tsx`.
- If you add client-side interactivity, keep the existing server-first structure and only opt into client components where needed.
- Keep routes simple; there are no established shared components or utilities yet.

## What not to assume

- There is no existing `README.md` or test harness in this repo.
- There are no API endpoints or backend service files in this codebase yet.
- Do not introduce framework conventions from pages-router or custom Babel/webpack configs; this app is built on Next.js app router defaults.

## Useful files

- `package.json` for local start command and dependency list.
- `app/page.tsx` as the only current user-facing route.
- `tsconfig.json` for TypeScript compiler settings.

If any section is unclear or incomplete, please ask and I can refine the instructions.