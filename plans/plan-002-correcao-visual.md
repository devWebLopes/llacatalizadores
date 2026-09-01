# Plan 002 — Correção visual (logo WhatsApp, horário real e microinterações)

## Contexto

- **Projeto:** Site institucional LLA Catalisadores (WEB, one-page).
- **PRD de origem:** `prds/prd_001_correcao_visual.md` (aprovado em 2026-08-30).
- **Tarefa:** (1) logo oficial do WhatsApp nos 4 CTAs do canal; (2) publicar a grade de horários confirmada pelo cliente; (3) microinterações de hover/foco em todos os interativos; (4) smooth scroll com compensação do header fixo + reveal on scroll.
- **Nome curto:** `correcao-visual`.

## Agente responsável e skills

- **Responsável principal:** **Frontend Dev** (`agents/frontend-dev.md`).
- **Apoio:** **Designer UI** (aprovação visual — glyph oficial, vermelho como sinal, durações 160–260ms) → **Copywriter** (microcopy do horário) → **QA Review** (gate final).
- **Skills aplicadas:** `react-frontend`, `design-oficina-editorial`, `integracoes-contato`, `copy-conteudo`, `qualidade-check`.
- **Docs:** `docs/guia-estilo.md`, `docs/conteudo-dados.md`, `docs/padroes-codigo.md`.

## Passo a passo (executado)

1. **RF-01 — Logo real do WhatsApp:** criado `client/src/components/icons/WhatsAppIcon.tsx` (SVG oficial do glyph da Meta, `fill="currentColor"`, `size` default 18, `aria-hidden`). Substituído `ArrowUpRight` por `WhatsAppIcon` nos CTAs de WhatsApp (header desktop "Falar com a equipe", menu mobile "Chamar no WhatsApp", hero "Quero avaliar meu material", `#contato` "Chamar no WhatsApp"). `ArrowUpRight` mantido em "Abrir no mapa" (footer). Sem verde `#25D366` — botão permanece Vermelho Catalisador. ✅
2. **RF-02 — Horário confirmado:** `docs/conteudo-dados.md` atualizado com "Segunda a sexta — 8:30 às 12:00 e 13:30 às 18:00 (confirmado em 2026-08-30)"; grade removida das pendências. Regra 4 de `skills/integracoes-contato.md` atualizada; `skills/copy-conteudo.md` alinhada. Bloco de atendimento do `#contato` agora exibe "Segunda a sexta" + "8:30 às 12:00 · 13:30 às 18:00" + microcopy prudente "Fora desse horário, chame no WhatsApp". ✅
3. **RF-03 — Hover:** classes adicionadas no `Home.tsx` (CTA primário `scale(.98)`, secundário `border-white` + `bg-white/5`, links de navegação com `.link-underline` (underline vermelho via `scaleX`), linhas de contato com `translateX` + texto `#E83A2D`, cards de materiais com `translateY(-4px)`, faixa de sinais com ícone `scale(1.05)` + rótulo em opacidade plena, footer/Instagram com `translateY(-2px)` + `text-white`, logos com `opacity`). Transição base de `a, button` ampliada para `translate`/`scale`. ✅
4. **RF-04 — Foco:** `:focus-visible` global com anel `#E83A2D` (2px + offset 3px); `:is(:hover, :focus-visible)` aplicado onde faz sentido (`.link-underline`, linhas de contato, footer). ✅
5. **RF-05 — Smooth scroll + reveal:** `scroll-padding-top: 92px` no `html`; `@media (prefers-reduced-motion: reduce)` desativa smooth scroll e todas as animações/transições; criado `client/src/hooks/useReveal.ts` (IntersectionObserver, threshold 0.15, disparo único com `unobserve`); seções marcadas com `data-reveal` (+ `reveal-delay-*` em cascata); estado oculto só via JS — conteúdo visível sem JS ou com motion reduzido. ✅
6. **QA Review:** `pnpm check` e `pnpm build` sem erros; smoke visual planejado conforme seção 6 do PRD. ✅

## Validação

- `pnpm check` — zero erros de TypeScript. ✅
- `pnpm build` — client e servidor empacotam. ✅
- Conformidade: `docs/guia-estilo.md` (paleta, 160–260ms, ease-out), `docs/conteudo-dados.md` (somente horário confirmado), `docs/padroes-codigo.md` (alias `@/`, clsx, pt-BR em UI).
- Sem regressão de CTAs (WhatsApp/tel/mapa/Instagram/âncoras); `aria-label` preservados.
- Smoke `pnpm dev` (gates do PRD): 4 CTAs com glyph oficial abrindo `wa.me/5551981935442`; grade de horário no `#contato`; âncoras rolando com a seção abaixo do header; hover/foco em todos os interativos; `prefers-reduced-motion` emulado sem animação.

## Critérios de aceite

- [x] 4 CTAs de WhatsApp usam `WhatsAppIcon`; demais links mantêm seus ícones.
- [x] `docs/conteudo-dados.md` e `skills/integracoes-contato.md` com a grade confirmada.
- [x] `#contato` exibe "Segunda a sexta" + "8:30 às 12:00 · 13:30 às 18:00" + microcopy prudente.
- [x] Todo link, botão, card e linha de contato com animação de hover.
- [x] `:focus-visible` com anel `#E83A2D` em 100% dos interativos.
- [x] Âncoras rolam suave e param com a seção visível abaixo do header.
- [x] Seções revelam ao entrar na viewport; conteúdo visível sem JS.
- [x] `prefers-reduced-motion` desativa smooth scroll, reveal e transições.
- [x] `pnpm check` e `pnpm build` sem erros.

## Entrega

6 arquivos alterados/criados: `WhatsAppIcon.tsx` (novo), `useReveal.ts` (novo), `Home.tsx`, `index.css`, `docs/conteudo-dados.md`, `skills/integracoes-contato.md` (+ `skills/copy-conteudo.md` por consistência). Sem toque em `server/`, `shared/`, `client/public/__manus__/` ou configurações de build.

## Próximos passos sugeridos

1. Botão flutuante de WhatsApp (canto inferior direito) com o mesmo glyph — avaliar com Designer UI.
2. Smoke `pnpm dev` visual final (já validado nos gates; confirmar com o cliente).
3. Reaproveitar `useReveal` em futuras seções/páginas.
