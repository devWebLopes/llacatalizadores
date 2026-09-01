# Agentes especializados

Índice dos agentes de IA do ciclo de desenvolvimento deste projeto. Cada agente tem um papel, um conjunto de **skills** (ver `skills/README.md`) e uma regra de quando ser acionado.

| Agente | Papel | Skills | Acionar quando |
|---|---|---|---|
| [`frontend-dev.md`](./frontend-dev.md) | Implementa componentes, páginas, hooks, rotas, estilos Tailwind. | `react-frontend`, `integracoes-contato` | Mudanças de código no `client/` (estrutura/funcionalidade). |
| [`designer-ui.md`](./designer-ui.md) | Guardião da direção "Oficina Editorial"; aprova/reprova propostas visuais. | `design-oficina-editorial` | Qualquer alteração visual: cores, tipografia, layout, animação, ícones. |
| [`copywriter.md`](./copywriter.md) | Escreve/revisa textos em pt-BR nas regras de dados confirmados. | `copy-conteudo`, `integracoes-contato` | Headlines, CTAs, microcopy, descrições, meta textos. |
| [`qa-review.md`](./qa-review.md) | Executa gates de qualidade e review final antes da entrega. | `qualidade-check` | Sempre, ao final de qualquer tarefa relevante. |

## Regras de coordenação

1. **Ordem padrão de trabalho:** Designer UI (aprova direção) → Frontend Dev (implementa) → Copywriter (refina texto quando aplicável) → QA Review.
2. **Conflito:** docs (`docs/`) vencem skills; skills vencem opinião de agente.
3. **Escopo:** Frontend Dev não decide cor/tipografia fora do guia; Copywriter não publica dados fora de `docs/conteudo-dados.md`; QA pode bloquear entrega até corrigir regressões.
