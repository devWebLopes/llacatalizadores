# Skills do projeto

Índice das habilidades técnicas/regras de negócio que os agentes de IA precisam para operar neste projeto. Cada skill é autocontida e referencia os docs relevantes.

| Skill | O que cobre | Usada por |
|---|---|---|
| [`react-frontend.md`](./react-frontend.md) | React 19 + Vite + Wouter + Tailwind 4 neste repo: estrutura, imports, hooks, roteamento. | Frontend |
| [`design-oficina-editorial.md`](./design-oficina-editorial.md) | Design system "Oficina Editorial": paleta, tipografia, assinatura visual, tokens CSS. | Designer UI |
| [`copy-conteudo.md`](./copy-conteudo.md) | Voz da marca, dados confirmados, regras de copy prudente em pt-BR. | Copywriter |
| [`integracoes-contato.md`](./integracoes-contato.md) | URLs/constantes de WhatsApp, telefone, mapa, Instagram e como usá-las em CTAs. | Frontend / Copywriter |
| [`qualidade-check.md`](./qualidade-check.md) | Gates de qualidade: `pnpm check`, formatação, a11y básica, checklist de entrega. | QA |

## Como usar

1. O agente carrega as skills listadas em sua definição (ver `agents/README.md`).
2. Antes de codar, confere `docs/README.md` e o doc ligado à skill.
3. Em caso de conflito entre skill e doc, o doc vence (docs são a fonte canônica).
