# Arquitetura do projeto

## Visão geral

Site institucional **one-page**: um único route (`/`) renderizado globalmente, com âncoras internas (`#inicio`, `#como-funciona`, `#materiais`, `#contato`). O backend existe apenas para servir o bundle em produção e manter o scaffold standard de projetos gerados; quase toda a lógica vive no client.

## Estrutura de pastas

```
lla/
├── client/                  # Frontend React + Vite
│   ├── index.html           # HTML de entrada (fonts, meta, plugin Manus)
│   ├── public/              # Assets estáticos servidos na raiz
│   │   └── __manus__/       # Artefatos da plataforma Manus (não editar manualmente)
│   └── src/
│       ├── App.tsx          # Router (Wouter) + providers (Theme, Tooltip, Toaster)
│       ├── main.tsx         # Entrypoint React
│       ├── const.ts         # Constantes de client (ex.: login URL)
│       ├── index.css        # Tokens CSS globais (design system)
│       ├── pages/           # Rotas de página (Home, NotFound)
│       ├── components/      # Componentes próprios (ErrorBoundary, Map...)
│       ├── components/ui/   # Biblioteca shadcn/ui + Radix (não editar sem necessidade)
│       ├── hooks/           # Hooks customizados
│       ├── contexts/        # Contextos (ThemeContext)
│       └── lib/             # Utilitários (clsx + tailwind-merge)
├── server/
│   └── index.ts             # Express: serve dist em produção
├── shared/
│   └── const.ts             # Constantes compartilhadas client/server
├── dist/                    # Saída de build (client bundle + server bundle)
├── patches/                 # Patches pnpm (ex.: wouter)
├── docs/                    # Documentação base (esta pasta)
├── skills/                  # Habilidades técnicas para agentes
├── agents/                  # Definições dos agentes especializados
├── plans/                   # Planejamentos numerados de tarefas
└── agents.md                # Arquivo mestre da IA (ponto de entrada)
```

## Fluxo de build

1. **Dev:** `pnpm dev` → Vite serve `client/` com HMR; inclui plugins `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-plugin-manus-runtime` e `@builder.io/vite-plugin-jsx-loc`.
2. **Build:** `pnpm build` → `vite build` gera `client/dist/public`, depois esbuild empacota `server/index.ts` para `dist/index.js` (ESM, node).
3. **Produção:** `pnpm start` (ou `npm start`) → `node dist/index.js` serve o conteúdo estático e a página.

## Decisões arquiteturais

- **Wouter** para roteamento client-side (leve, compatível com React 19, com patch local via pnpm).
- **shadcn/ui + Radix:** componentes de UI genéricos ficam em `client/src/components/ui/`; componentes de projeto ficam em `client/src/components/`.
- **Alias `@/`** aponta para `client/src/`; **`@shared/`** aponta para `shared/`.
- **Dados de contato/links** são constantes definidas nos componentes de página (ex.: `WHATSAPP`, `MAP` em `Home.tsx`). Centralizar caso comecem a se duplicar.
- **Express** sem rotas API ativas no momento; quando APIs surgirem, registrar antes do fallback do SPA.
