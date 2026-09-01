# Padrões de código

## Idioma e comentários

- Código em inglês técnico; **textos de UI e comentários estruturais em pt-BR**.
- Comentários de direção de marca no topo de arquivos de página (ver `Home.tsx`), descrevendo a intenção visual.

## TypeScript

- Tipos explícitos em props e retornos públicos; evitar `any`.
- Objetos de dados declarados como `const` tipados (ex.: arrays de steps/materials em `Home.tsx`).
- Executar `pnpm check` antes de considerar entregue.

## React

- Componentes funcionais com hooks; `useState`/efeitos mínimos.
- Providers no `App.tsx`: `ErrorBoundary` → `ThemeProvider` → `TooltipProvider` → `Router` + `Toaster`.
- Rotas em `Router()` com `Switch`/`Route` de Wouter; fallback para `NotFound`.
- Estado local por padrão; `ThemeContext` só para tema global.

## Imports

- Ordem sugerida: React → libs externas → alias `@/` (componentes/hooks/contexts) → `@shared`.
- Alias `@/` sempre preferido sobre caminhos relativos longos (`../../../`).

## Estilos (Tailwind 4)

- Classes utilitárias diretamente em JSX; arbitrárias com colchetes apenas para tokens de marca (ex.: `bg-[#e83a2d]`, `text-[4.2rem]`).
- Tokens customizados (`eyebrow`, `display`, `red-mark`, `grid-lines`, etc.) vivem em `client/src/index.css` — verificar antes de inventar classes novas.
- `hover:`/transições curtas; nada de animações longas ou que alterem layout (ver `guia-estilo.md`).
- `clsx` + `tailwind-merge` via `@/lib/utils` quando condicionais aparecerem.

## Acessibilidade

- `aria-label` em ícones/links com só símbolo; `alt` descritivo em imagens essenciais; `nav` nomeado quando múltiplo.
- Foco visível e semântica HTML preservada (header/main/footer/section).

## Commits e formato

- Não comitar artefatos de build (`dist/`) nem segredos.
- `pnpm format` (Prettier) para padronizar antes de entregas grandes.
