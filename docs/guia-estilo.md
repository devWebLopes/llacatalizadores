# Guia de estilo — Oficina Editorial

Resumo operacional da direção definida em `ideas.md`. Qualquer alteração visual deve passar por este documento.

## Filosofia

Neo-industrial editorial com precisão: grafite + off-white sustentam a leitura; **Vermelho Catalisador `#E83A2D`** é sinal de ação e inspeção, nunca fundo dominante. Composição assimétrica, sem "centro perfeito".

## Paleta

| Uso | Cor |
|---|---|
| Vermelho proprietário | `#E83A2D` |
| Grafite escuro (hero/header/footer) | `#111315` |
| Grafite seção | `#17191B` |
| Grafite card | `#2B2D2E` |
| Off-white fundo | `#F0EEE9` |
| Cinza corpo sobre claro | `#666A6D` |

Uso do vermelho: barras diagonais, estados ativos, CTAs, divisores `eyebrow`. Evitar gradientes roxos e preto chapado (sempre camada sutil de textura/linhas).

## Tipografia

- **Display:** `Barlow Condensed` (600–800), títulos/números, caixa alta controlada, tracking levemente negativo.
- **Body:** `Manrope` (400–700) parágrafos, navegação, botões, dados de contato.
- **Mono técnico:** `IBM Plex Mono` 11–12px para tags, metadados, marcadores de processo (tracking `0.14em`).

Escala: h1 `clamp(~3.8rem–7.5rem)`; h2 `2.4rem–4.8rem`; corpo `1rem–1.125rem`.

## Classes utilitárias do projeto (definidas em `index.css`)

- `display` — títulos em Barlow Condensed.
- `eyebrow` — rótulos em mono/caixa alta (com `red-mark` para barras diagonais vermelhas).
- `grid-lines` — textura de linhas de inspeção sobre off-white.
- `reveal`, `reveal-delay-*` — revelação em cascata suave (ver Animação).

## Elementos de assinatura

- Duas barras diagonais vermelhas como marcadores de seção.
- Fina linha/inspeção + contadores numéricos (`01`, `02`...) e rótulos em caixa alta.
- Recortes angulares discretos; bordas retas, sombras suaves.
- Hero dividida entre mensagem e fotografia; faixa de "sinais rápidos" com ícones + títulos fortes.

## Interações e animação

- Transições **160–260ms**, ease-out forte, em hover/foco/menus.
- Botões comprimem levemente; links ganham linha vermelha; cards deslizam poucos pixels; imagens `zoom 1.02` no hover, nunca mais.
- `reveal` usa fade + deslocamento 12px, cascata de 40ms, apenas quando `prefers-reduced-motion` permite.
- Menu mobile abre como "prancheta lateral".

## Componentes recorrentes

- **CTA primário:** fundo `#E83A2D`, texto branco, hover inverte para branco/grafite.
- **CTA secundário:** borda branca/30 (sobre escuro) ou grafite (sobre claro).
- **Seções numeradas:** `02 / sem complicação`, `03 / o que fazemos`, `04 / fale com a LLA` com `red-mark`.
- **Faixa vermelha de sinais:** 3 colunas com ícone + eyebrow + título display.

## O que não fazer

- Gradients roxos/azuis, sombras pesadas coloridas, ícones genéricos de "tech", center-perfect layouts, Lorem ipsum, promessas vagas.
