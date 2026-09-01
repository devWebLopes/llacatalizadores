# Skill — React Frontend

Domínio do frontend deste projeto (React 19 + Vite 7 + TypeScript + Wouter + Tailwind 4).

## Quando aplicar

- Criar/alterar componentes, páginas, hooks e rotas.
- Estruturar layout, responsividade e acessibilidade.

## Diretrizes

1. **Roteamento:** `Switch`/`Route` de Wouter no `App.tsx`; fallback para `NotFound`. Novas páginas vão em `client/src/pages/`.
2. **Componentes próprios vs shadcn/ui:** usa-se `@/components/ui` como base pronta; componentes de projeto vão em `@/components/`. Não editar `ui/` sem necessidade real.
3. **Estilos:** Tailwind 4 com tokens arbitrários para cores de marca (`#E83A2D`, `#111315`, `#17191B`, `#F0EEE9`, `#666A6D`). Tokens customizados (`eyebrow`, `display`, `red-mark`, `grid-lines`, `reveal*`) vivem em `client/src/index.css`.
4. **Hooks:** mínimos e tipados; para navegação por âncoras, fechar menu mobile no clique (padrão de `Home.tsx`).
5. **Acessibilidade:** `aria-label` em botões só-ícone, `nav` nomeado, `alt` em imagens relevantes.
6. **Performance:** imagens em `client/public/`; evitar JS desnecessário; animações conforme `docs/guia-estilo.md`.

## Antes de entregar

`pnpm check` sem erros; quando possível, validar `pnpm dev` para smoketest visual.
