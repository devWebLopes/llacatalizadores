# Documentação — LLA Catalisadores

Índice principal da documentação base do projeto. Todo agente ou desenvolvedor deve ler esta pasta antes de alterar código, copy ou direção visual.

## Contexto

- **Projeto:** Site institucional da **LLA Catalisadores**, empresa de compra/avaliação de catalisadores e materiais automotivos em São Leopoldo/RS.
- **Tipo:** WEB — landing page de página única (one-page), construída com foco em conversão via WhatsApp/telefone/mapa.
- **Stack:** React 19 + Vite 7 + TypeScript 5.6 + Tailwind CSS 4 + shadcn/ui (Radix) + Wouter + Express 4 (server de produção).
- **Direção visual:** "Oficina Editorial" — grafite, off-white e Vermelho Catalisador `#E83A2D`, composição assimétrica, tipografia Barlow Condensed / Manrope / IBM Plex Mono.

## Arquivos desta pasta

| Arquivo | O que define |
|---|---|
| [`arquitetura.md`](./arquitetura.md) | Estrutura de pastas, fluxo de build (`client/`, `server/`, `shared/`) e como o Express serve o site. |
| [`stack.md`](./stack.md) | Versões, bibliotecas e papel de cada dependência relevante. |
| [`padroes-codigo.md`](./padroes-codigo.md) | Convenções de código: TypeScript, React, imports, nomes, classes Tailwind. |
| [`guia-estilo.md`](./guia-estilo.md) | Design system "Oficina Editorial": cores, tipografia, layout, animação, componentes. |
| [`conteudo-dados.md`](./conteudo-dados.md) | Dados públicos confirmados (endereço, telefone, links) e regras de copy prudente. |
| [`operacoes.md`](./operacoes.md) | Comandos de desenvolvimento, build, checagem de tipos e formatação. |

## Regras de ouro

1. **Sem dados inventados.** Só publicamos informação confirmada em `research-notes.md` / `conteudo-dados.md`. Horário completo, lista definitiva de materiais e preços nunca são criados por suposição — sempre CTAs para consulta.
2. **CTAs reais.** Todo botão deve levar a uma ação real: WhatsApp, telefone, mapa, Instagram ou âncora da própria página.
3. **Marca primeiro.** Qualquer mudança visual deve respeitar `guia-estilo.md` (Vermelho Catalisador, grafite, composição assimétrica, barras diagonais).
4. **Qualidade antes de entregar.** `pnpm check` (tipos) e, quando possível, build local devem passar sem erros.
