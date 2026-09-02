# Plan 004 — Implementação SEO & GEO Multi-Agentes

> **Status:** ✅ Concluído  
> **PRD de referência:** [implementation_plan.md](file:///C:/Users/evand/.gemini/antigravity-ide/brain/32c43b8f-1ac0-4445-b09f-8c3b80bea639/implementation_plan.md)  
> **Agentes envolvidos:** SEO-Technical, GEO-Schema, Content-Writer, QA-Review

---

## 1. Contexto & Diagnóstico Superado

Com base no relatório Automarticles (SEO 72/100, GEO 56/100) e nas diretrizes fornecidas pelo usuário:
1. **Pré-renderização estática (Opção A - SSG de build):** Inserção do esqueleto semântico completo no `#root`, elevando os caracteres de 37 para > 7.500 no HTML cru inicial.
2. **Identidade Visual & Open Graph:** Favicon SVG vetorial moderno + configuração de imagem Open Graph e Twitter Card de 1200x630.
3. **FAQ e Conteúdo Estruturado:** Perguntas e respostas reais adicionadas (Diesel/DPF, pagamento à vista, transparência/garantia de conferência, WhatsApp, materiais aceitos).
4. **Correção de Crawlers e Indexação:** Criação de `robots.txt` com liberação de GPTBot, ClaudeBot, PerplexityBot, e criação de `sitemap.xml` compatível com o schema oficial.
5. **JSON-LD Unificado:** Grafo estruturado com `LocalBusiness`, `AutoRepair`, `WebSite`, `Service` e `FAQPage`.

---

## 2. Status das Atividades por Agente

### 2.1 Agente SEO-Technical (Épicos 1, 2, 3)
- [x] Criar `client/public/robots.txt` com regras permissivas para buscadores e bots de IA (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.).
- [x] Criar `client/public/sitemap.xml` estruturado e válido.
- [x] Otimizar `<title>` (60 chars) e `<meta name="description">` (149 chars) em `client/index.html`.
- [x] Implementar `<link rel="canonical" href="https://llacatalisadores.vercel.app/" />`.
- [x] Adicionar Open Graph e Twitter Card tags completas.
- [x] Criar Favicon SVG (`client/public/favicon.svg`) com visual Oficina Editorial.

### 2.2 Agente GEO-Schema (Épico 4)
- [x] Estruturar JSON-LD completo com `@graph`:
  - `LocalBusiness` / `AutoRepair` (endereço R. Jaime Biz 175, telefone, geo coords, horários, sameAs).
  - `WebSite` e `Organization`.
  - `Service` (Compra e Avaliação de Catalisadores Automotivos e Metais).
  - `FAQPage` (perguntas e respostas reais sincronizadas com a página).

### 2.3 Agente Content-Writer (Épico 6)
- [x] Adicionar seção de FAQ semântica (`#faq`) na `Home.tsx` com `<details><summary>` semântico e estilizado no padrão Oficina Editorial.
- [x] Integrar lista semântica de materiais e categorias técnicas aceitas (cerâmicos, metálicos, filtros DPF diesel, sucatas selecionadas).
- [x] Atualizar menu de navegação do `Header.tsx` com âncora `#faq`.

### 2.4 Agente SEO-Technical + GEO-Schema (Épico 5)
- [x] Implementar pré-renderização estática de HTML (SSG) no `#root` de `client/index.html` para preencher o DOM com o conteúdo completo da Home no HTML cru sem depender da execução do JS pelos bots.

### 2.5 Agente QA-Review (Épico 7)
- [x] Validação da sintaxe e links de âncoras.
- [x] Validação da formatação do XML em `sitemap.xml`.
- [x] Validação da formatação do `robots.txt`.
- [x] Validação do JSON-LD e tags Meta no `client/index.html`.
