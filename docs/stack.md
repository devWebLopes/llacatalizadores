# Stack técnica

## Frontend

| Tecnologia | Versão | Papel |
|---|---|---|
| React | 19 | Renderização UI |
| Vite | 7 | Bundler/dev server |
| TypeScript | 5.6 | Tipagem estática |
| Tailwind CSS | 4 | Utilitários de estilo (com `@tailwindcss/vite`) |
| shadcn/ui + Radix | — | Componentes de UI base |
| Wouter | 3 | Roteamento client-side leve |
| Framer Motion | 12 | (disponível) animações avançadas |
| Zod | 4 | Validação de schemas (quando houver forms/API) |

## Backend

| Tecnologia | Versão | Papel |
|---|---|---|
| Express | 4 | Servidor de produção (serve `dist`) |
| esbuild | — | Empacota `server/index.ts` |

## Ferramentas

- **pnpm 10** — gerenciador de pacotes (lockfile + patches).
- **Prettier** — formatação (`pnpm format`).
- **tsc `--noEmit`** — checagem de tipos (`pnpm check`).
- **Vitest** — disponível para testes quando introduzidos.
- **Patches pnpm** — `patches/wouter@3.7.1.patch` aplica correção local ao roteador.

## Plugins Vite ativos

- `@vitejs/plugin-react` — JSX/React.
- `@tailwindcss/vite` — Tailwind 4 no pipeline.
- `vite-plugin-manus-runtime` — runtime da plataforma Manus (não remover).
- `@builder.io/vite-plugin-jsx-loc` — localização JSX para edição visual.

## Fonts e assets

Tipografia via Google Fonts no `client/index.html`: **Barlow Condensed** (display), **Manrope** (corpo), **IBM Plex Mono** (rótulos técnicos). Imagens da marca vivem em `client/public/manus-storage/` (favícones/heros/seções) — novos assets devem seguir nomes descritivos.
