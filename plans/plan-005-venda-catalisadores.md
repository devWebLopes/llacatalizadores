# Plan 005 — Venda de catalisadores como complemento

## Contexto

- **Projeto:** Site institucional LLA Catalisadores (WEB, one-page).
- **Tarefa:** Planejar a inclusão da venda de catalisadores como complemento da reciclagem, compra/avaliação e manutenção.
- **PRD relacionado:** [`prd_003_venda_catalisadores.md`](../prds/prd_003_venda_catalisadores.md).
- **Nome curto:** `venda-catalisadores`.
- **Decisão principal:** inserir o conteúdo dentro de `#materiais`, sem nova página ou item principal do menu nesta etapa.

## Agentes responsáveis e skills

- **Responsável principal:** Frontend Dev (`agents/frontend-dev.md`).
- **Direção visual:** Designer UI (`agents/designer-ui.md`).
- **Conteúdo:** Copywriter (`agents/copywriter.md`).
- **Validação:** QA Review (`agents/qa-review.md`).
- **Skills:** `react-frontend`, `design-oficina-editorial`, `copy-conteudo`, `integracoes-contato`, `qualidade-check`.

## Passo a passo

1. Validar com o cliente disponibilidade, aplicação, instalação, emissões, parcelamento, desconto, frete e garantia.
2. Registrar em `docs/conteudo-dados.md` somente as condições formalmente confirmadas.
3. Definir a copy final e as ressalvas comerciais com Copywriter.
4. Aprovar com Designer UI a composição assimétrica do módulo, sem competir com o conteúdo principal de reciclagem.
5. Implementar `#venda-catalisadores` dentro de `#materiais` em `client/src/pages/Home.tsx`.
6. Usar o WhatsApp canônico com CTA qualificado para consultar aplicação e condições.
7. Adicionar FAQ de venda apenas com respostas confirmadas.
8. Rodar QA visual, funcional, de acessibilidade e de conteúdo.

## Execução (2026-09-02)

**Status:** estrutura implementada pelo Frontend Dev; **validação comercial do cliente e QA formal ainda pendentes** (PRD §7).

### O que foi feito

1. **Bloco `#venda-catalisadores`** criado dentro de `#materiais` em `client/src/pages/Home.tsx`, após os cards de compra/reciclagem e a lista técnica — painel off-white `#F0EEE9` com recorte `angled` (ritmo de fundos alternados), composição assimétrica em duas áreas (RF-01/RF-02 do PRD).
2. **Área A (mensagem e ação):** eyebrow `04 / solução complementar` (red-mark), título display "Catalisador certo para o próximo passo.", copy prudente do PRD §5, CTA primário **"Consultar opções no WhatsApp"** (constante `WHATSAPP_OPCOES` → `wa.me/5551981935442` com mensagem qualificada RF-04, `target="_blank" rel="noreferrer"`), CTA secundário **"Falar com a equipe"** → `#contato`, microcopy "Envie o modelo do veículo ou uma foto…".
3. **Área B (faixa técnica):** 4 sinais com ícones `Boxes`/`ShieldCheck`/`Leaf`/`Wrench` e índices mono — Variedade, Qualidade, Emissões, Instalação — sem transformar a seção em grade de cards SaaS.
4. **Numeração das seções reordenada** para manter sequência coerente: FAQ `04 → 05 / dúvidas frequentes`, Contato `05 → 06 / fale com a LLA`.
5. **FAQ (RF-05):** 2 novas perguntas de venda ("A LLA também vende catalisadores para veículos?" e "Como consultar um catalisador para o meu veículo?") com respostas que direcionam ao WhatsApp — sem prazo, preço, estoque, cobertura ou garantia inventados.
6. **Condições comerciais NÃO publicadas** (parcelamento, 10% OFF, frete grátis, garantia LLA) — aguardando confirmação formal do cliente, conforme nota de governança do PRD §1.

### Gates executados

- [x] `pnpm check` sem erros.
- [x] `pnpm build` sem erros.
- [x] Menu, âncoras (`#inicio`, `#como-funciona`, `#materiais`, `#faq`, `#contato`), WhatsApp, telefone, mapa e Instagram preservados.
- [x] Novo CTA abre `https://wa.me/5551981935442` em nova aba com mensagem orientada.
- [x] Reciclagem/compra/avaliação continuam dominantes em `#materiais` (venda é complemento).
- [x] Copy de consulta ("confirme com a equipe") — nenhum dado não confirmado publicado.
- [x] Foco visível e `prefers-reduced-motion` respeitados (`Reveal`/`TactileLink`).
- [ ] Validação comercial do cliente (10 itens do PRD §7) — **pendente**.
- [ ] Revisão formal do Designer UI / QA em desktop, mobile e a11y — **pendente**.

## Validação

- `pnpm check` sem erros.
- `pnpm build` sem erros.
- Âncoras atuais, menu, WhatsApp, telefone, mapa e Instagram preservados.
- Novo CTA abre `https://wa.me/5551981935442` em nova aba.
- Reciclagem, compra/avaliação e manutenção continuam ocupando a posição principal da jornada.
- Condições comerciais não confirmadas permanecem fora da publicação ou aparecem somente como “consulte a equipe”.
- Layout responsivo e sem overflow horizontal.
- Foco visível e `prefers-reduced-motion` respeitado.

## Critérios de aceite

- [ ] Cliente validou os termos comerciais antes da publicação. _(pendente — PRD §7)_
- [x] Bloco `#venda-catalisadores` implementado dentro de `#materiais`.
- [x] Venda apresentada como solução complementar, não como reposicionamento da marca.
- [x] Copy sem catálogo, preço, estoque, prazo, cobertura ou promessa técnica inventada.
- [x] CTA com próximo passo explícito e destino real.
- [x] Visual implementado conforme Oficina Editorial (revisão formal do Designer UI pendente).
- [x] FAQ, se criado, está sincronizado com os dados confirmados.
- [x] `pnpm check` e `pnpm build` passam.
- [ ] QA Review aprovou desktop, mobile, a11y e regressão dos CTAs. _(pendente)_

## Entrega

Estrutura do módulo de venda implementada e validada com `pnpm check`/`pnpm build`. Condições comerciais seguem bloqueadas até validação formal do cliente (PRD §7); o bloco e o FAQ usam linguagem de consulta à equipe.

## Próximos passos

1. Cliente responder às dez validações comerciais do PRD §7.
2. Após confirmação, registrar condições em `docs/conteudo-dados.md` e liberar a faixa de condições no bloco (RF-03), com ressalva validada.
3. Copywriter revisar redação final; Designer UI aprovar a composição formalmente.
4. QA Review executar gates completos em desktop, mobile e a11y.
5. Em tarefa posterior, avaliar SEO/meta para "venda de catalisadores" (PRD §12.6).
