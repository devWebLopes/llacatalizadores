# PRD 001 — Correção visual: logo WhatsApp, horário real e microinterações

| Campo | Valor |
|---|---|
| **ID** | `prd_001_correcao_visual` |
| **Data** | 2026-08-30 |
| **Status** | Aprovado para implementação |
| **Solicitante** | Cliente (dono do produto) |
| **Agente responsável** | Frontend Dev (`agents/frontend-dev.md`) |
| **Agentes de apoio** | Designer UI (aprovação visual) → Copywriter (microcopy do horário) → QA Review (gate final) |
| **Skills aplicáveis** | `react-frontend`, `design-oficina-editorial`, `integracoes-contato`, `copy-conteudo`, `qualidade-check` |
| **Docs relacionados** | `docs/guia-estilo.md`, `docs/conteudo-dados.md`, `docs/padroes-codigo.md` |

---

## 1. Contexto e problema

O site one-page da LLA Catalisadores está funcional, mas três pontos reduzem a confiança e a conversão:

1. **CTAs de WhatsApp sem identidade.** Os botões "Falar com a equipe", "Quero avaliar meu material" e "Chamar no WhatsApp" usam o ícone genérico `ArrowUpRight` (lucide) — nenhum sinal visual do WhatsApp, que é o canal principal de conversão.
2. **Horário genérico.** A seção `#contato` exibe "Atendimento até 18h — confirme o horário do dia antes de vir" porque a grade semanal era uma pendência de conteúdo (`docs/conteudo-dados.md`). O cliente **confirmou oficialmente**: **segunda a sexta, 8:30–12:00 e 13:30–18:00**.
3. **Página "parada".** Fora o `reveal` de entrada na hero e o zoom 1.02 nos cards de materiais, não há resposta visual consistente ao hover, ao foco de teclado ou à rolagem — o que descaracteriza a "oficina bem cuidada" e fere a diretriz de interações do `docs/guia-estilo.md`.

**Estado atual (verificado em código):**

- `client/src/pages/Home.tsx` — CTAs de WhatsApp com `ArrowUpRight`; bloco de horário com texto genérico; `reveal` apenas na hero.
- `client/src/index.css` — já existe `html { scroll-behavior: smooth }` e transição base de 180ms em `a, button`, mas **sem** compensação do header fixo (76px) nas âncoras e **sem** estilos de `:focus-visible` dedicados.

---

## 2. Objetivos

| Nº | Objetivo | Métrica de sucesso |
|---|---|---|
| O1 | Todos os CTAs de WhatsApp exibem o **logo oficial** do WhatsApp | Reconhecimento visual imediato do canal nos 4 pontos de CTA |
| O2 | Publicar a grade de horários confirmada | `#contato` exibe "Segunda a sexta · 8:30–12:00 · 13:30–18:00" |
| O3 | Sistema de microinterações hover/foco em todos os elementos interativos | Nenhum link/botão/card sem resposta visual a hover e `:focus-visible` |
| O4 | Rolagem suave com âncoras corretas e reveal on scroll | Clique em âncora rola suave e a seção não fica escondida sob o header; seções revelam ao entrar na viewport |

Fora de escopo: novas seções, mudança de copy estrutural, novos canais de contato, alterações em `server/`, formulários.

---

## 3. Requisitos funcionais

### RF-01 — Logo real do WhatsApp nos CTAs

1. Criar `client/src/components/icons/WhatsAppIcon.tsx`: componente React com o **SVG oficial do glyph do WhatsApp** (brand asset público da Meta), com:
   - `fill="currentColor"` para herdar a cor do texto do botão;
   - props `size?: number` (default 18) e `className?: string`;
   - `aria-hidden="true"` (o texto do botão já descreve a ação).
2. Substituir o `ArrowUpRight` pelo `WhatsAppIcon` **somente nos CTAs que apontam para o WhatsApp**:
   - Header desktop: "Falar com a equipe";
   - Menu mobile: "Chamar no WhatsApp";
   - Hero: "Quero avaliar meu material";
   - Seção `#contato`: "Chamar no WhatsApp".
3. **Manter** `ArrowUpRight` onde o destino não é WhatsApp (ex.: "Abrir no mapa" no footer).
4. **Decisão de marca (Designer UI):** o botão primário permanece Vermelho Catalisador `#E83A2D` (guia de estilo); o glyph fica branco/`currentColor`. **Não** aplicar verde `#25D366` como fundo — a cor da marca WhatsApp pode aparecer, no máximo, em microdetalhe, e somente se o Designer UI aprovar. O que é "real" aqui é o glyph oficial, não o esquema de cor.
5. Regras de integração mantidas (`skills/integracoes-contato.md`): `target="_blank" rel="noreferrer"`, URL canônica `https://wa.me/5551981935442`.

### RF-02 — Grade de horários confirmada

1. **Atualizar a fonte canônica primeiro** (`docs/conteudo-dados.md`, regra de ouro nº 1): substituir a linha de horário por:
   > **Horário:** Segunda a sexta — 8:30 às 12:00 e 13:30 às 18:00 (confirmado pelo cliente em 2026-08-30). Fim de semana/feriados: consulte a equipe.
   
   E remover "Grade completa de horários" das pendências.
2. Atualizar também a regra 4 de `skills/integracoes-contato.md` (a grade deixou de ser "inventada" — passa a ser dado confirmado).
3. Em `Home.tsx`, bloco "Dados de atendimento" da seção `#contato`, item com ícone `Clock3`:
   - Título (display): **"Seg a Sex"** ou **"Segunda a sexta"**;
   - Detalhe: **"8:30 às 12:00 · 13:30 às 18:00"**;
   - Microcopy prudente (Copywriter): algo como "Fora desse horário, chame no WhatsApp" — **sem inventar** horário de sábado/domingo.
4. Não exibir a grade em outras seções neste PRD (hero mantém foco em conversão).

### RF-03 — Animações de hover

Aplicar resposta visual a **todos** os elementos interativos, respeitando o guia: duração **160–260ms**, easing `var(--ease-out)`, apenas `transform`/`opacity`/cores (nunca mover layout).

| Elemento | Animação de hover |
|---|---|
| CTA primário (vermelho) | Inverte para branco/grafite (já existe) **+** leve compressão `scale(.98)` |
| CTA secundário (borda) | Borda vai a 100% de opacidade + fundo `white/5` |
| Links de navegação (header) | Cor sobe a `text-white` **+** underline vermelho que cresce da esquerda (`::after` com `scaleX`) |
| Linhas de contato (`#contato`) | Deslize de 2–4px (`translateX`) + texto fica `#E83A2D` (ícone já é vermelho) |
| Cards de materiais | Manter zoom de imagem `1.02` + elevação do card `translateY(-4px)` |
| Faixa de sinais (vermelha) | Ícone ganha leve `scale(1.05)` + título sobe opacidade |
| Links do footer / Instagram | Cor a `text-white` + `translateY(-2px)` no ícone |
| Logo (header/footer) | Opacidade ou leve `scale(1.02)` |

Implementação preferencial: classes utilitárias no `@layer components` do `index.css` (ex.: `.link-underline`) + `group-hover` Tailwind nos cards, sem JavaScript.

### RF-04 — Animações/estados de foco (acessibilidade)

1. Todo elemento interativo com `:focus-visible` deve exibir **anel de foco Vermelho Catalisador**: `outline: 2px solid #E83A2D; outline-offset: 3px;` (visível sobre grafite e sobre off-white).
2. O foco de teclado dispara a **mesma animação** do hover quando aplicável (links de navegação com underline, linhas de contato) — usar `:is(:hover, :focus-visible)` onde fizer sentido.
3. Nunca remover o outline sem substituto visível (proibido `outline: none` puro).
4. Navegação completa por Tab: header → CTAs da hero → faixa de sinais → steps → cards → contato → footer, sempre com indicador visível.

### RF-05 — Smooth scroll + reveal on scroll

1. **Rolagem suave com compensação do header:** manter `html { scroll-behavior: smooth }` e adicionar `scroll-padding-top: 92px` (header de 76px + 16px de respiro) no `html`, garantindo que `#como-funciona`, `#materiais` e `#contato` não fiquem escondidas sob o header fixo.
2. **Respeito a movimento reduzido:** dentro de `@media (prefers-reduced-motion: reduce)`, forçar `scroll-behavior: auto` e desativar todas as animações/transições deste PRD.
3. **Reveal on scroll:** estender o padrão `reveal`/`reveal-delay-*` (hoje só na hero) para as demais seções via `IntersectionObserver`:
   - Criar hook `client/src/hooks/useReveal.ts` (threshold ~0.15, dispara uma única vez, `unobserve` após revelar);
   - Aplicar em: eyebrow + título de cada seção, steps (cascata 01→03), cards de materiais, itens da faixa de sinais e bloco de contato;
   - **Regra de segurança:** o estado padrão do conteúdo é **visível**; a classe que oculta (`opacity: 0; translateY(12px)`) só é aplicada via JS quando o observer está ativo — se o JS falhar ou `prefers-reduced-motion` estiver ligado, o conteúdo aparece normalmente;
   - Animação: fade + 12px, cascata de 40–100ms, `.7s var(--ease-out)` — idêntica ao padrão já definido no `index.css`.

---

## 4. Requisitos não funcionais

- **Performance:** animações somente com `transform` e `opacity` (compositing); nenhuma dependência nova de animação (sem framer-motion etc.).
- **Acessibilidade:** `prefers-reduced-motion` respeitado em 100% das animações; foco visível; `aria-hidden` em ícones decorativos; nenhuma regressão nos `aria-label` existentes.
- **Consistência visual:** nada fora de `docs/guia-estilo.md` (paleta, durações 160–260ms, ease-out, sem gradientes roxos/azuis, sem sombras coloridas).
- **Dados:** somente o horário confirmado pelo cliente entra no ar; fim de semana permanece como CTA de consulta.
- **Tipagem:** `pnpm check` com zero erros.

---

## 5. Arquivos afetados

| Arquivo | Tipo de mudança |
|---|---|
| `docs/conteudo-dados.md` | Registrar grade de horários como dado confirmado |
| `skills/integracoes-contato.md` | Atualizar regra 4 (horário confirmado) |
| `client/src/components/icons/WhatsAppIcon.tsx` | **Novo** — glyph oficial do WhatsApp |
| `client/src/hooks/useReveal.ts` | **Novo** — IntersectionObserver para reveal on scroll |
| `client/src/pages/Home.tsx` | Trocar ícones dos CTAs, novo bloco de horário, classes de hover/foco, hooks de reveal |
| `client/src/index.css` | `scroll-padding-top`, `:focus-visible`, utilitários de hover, media query de reduced-motion |

Não tocar em: `server/`, `shared/`, `client/public/__manus__/`, configurações de build.

---

## 6. Validação (gates do QA Review)

1. `pnpm check` — zero erros de TypeScript.
2. `pnpm build` — client e servidor empacotam.
3. Smoke `pnpm dev`:
   - Os 4 CTAs de WhatsApp mostram o logo real e abrem `wa.me/5551981935442` em nova aba;
   - `#contato` exibe a grade 8:30–12:00 / 13:30–18:00;
   - Clique em cada âncora do menu rola suave e a seção aparece abaixo do header;
   - Hover em cada item da tabela RF-03 produz a animação descrita;
   - Navegação por Tab mostra anel vermelho em todos os interativos;
   - Com `prefers-reduced-motion` emulado (DevTools), nenhuma animação ocorre e o scroll é instantâneo;
   - Scroll da página revela as seções em cascata suave.
4. Review Designer UI: glyph correto, vermelho como sinal, durações dentro de 160–260ms.
5. Review Copywriter: microcopy do horário franca, sem promessa de fim de semana.

---

## 7. Critérios de aceite

- [ ] Os 4 CTAs de WhatsApp usam o glyph oficial (`WhatsAppIcon`) em vez de `ArrowUpRight`; demais links mantêm seus ícones.
- [ ] `docs/conteudo-dados.md` e `skills/integracoes-contato.md` atualizados com a grade confirmada.
- [ ] `#contato` exibe "Segunda a sexta" + "8:30 às 12:00 · 13:30 às 18:00" + microcopy prudente.
- [ ] Todo link, botão, card e linha de contato tem animação de hover conforme tabela RF-03.
- [ ] `:focus-visible` com anel `#E83A2D` em 100% dos interativos; Tab percorre a página inteira com indicador visível.
- [ ] Âncoras rolam suavemente e param com a seção visível abaixo do header (sem corte).
- [ ] Seções revelam ao entrar na viewport; conteúdo permanece visível com JS desligado/observer inativo.
- [ ] `prefers-reduced-motion` desativa smooth scroll, reveal e todas as transições novas.
- [ ] `pnpm check` e `pnpm build` sem erros.

---

## 8. Entrega e próximos passos

**Entrega:** as 5 mudanças acima em uma única tarefa, validadas pelo QA Review conforme seção 6.

**Próximos passos sugeridos (fora deste PRD):**

1. Botão flutuante de WhatsApp (canto inferior direito) com o mesmo glyph — avaliar com Designer UI.
2. Aproveitar o hook `useReveal` em futuras seções/páginas.
3. Registrar em `plans/` o plano de implementação deste PRD (ex.: `plan-002-correcao-visual`) e indexar em `plans/README.md`, conforme o workflow do `agents.md`.
