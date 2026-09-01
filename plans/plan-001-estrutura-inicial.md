# Plan 001 — Estruturação inicial da base

## Contexto

- **Projeto:** Site institucional LLA Catalisadores (WEB, one-page).
- **Stack:** React 19 + Vite 7 + TypeScript + Tailwind CSS 4 + shadcn/ui + Wouter + Express 4.
- **Tarefa:** Inicializar a estrutura base de workflow de IA do projeto: `docs/`, `skills/`, `agents/`, `plans/` e o arquivo mestre `agents.md`, seguindo o prompt `prompts/prompt_longo_estruturado.txt`.
- **Nome curto:** `estrutura-inicial`.

## Agente responsável e skills

- **Responsável principal:** papel **Arquiteto/PM** (definido em `agents.md`), orquestrando a scaffold.
- **Validação:** agente **QA Review** (`agents/qa-review.md`).
- **Skills aplicadas:** `qualidade-check` (gates do entregável) + base de documentação de `docs/README.md`.
- As demais skills (`react-frontend`, `design-oficina-editorial`, `copy-conteudo`, `integracoes-contato`) foram **definidas** nesta tarefa, não usadas diretamente para a scaffold.

## Passo a passo (executado)

1. **Ler contexto do projeto** — `ideas.md` (direção "Oficina Editorial"), `research-notes.md` (dados confirmados), `package.json`, `client/src/App.tsx` e `client/src/pages/Home.tsx` (estado atual do site). ✅
2. **Criar `docs/`** — README-índice + 6 documentos: arquitetura, stack, padrões de código, guia de estilo, conteúdo/dados confirmados e operações. ✅
3. **Criar `skills/`** — README-índice + 5 skills: `react-frontend`, `design-oficina-editorial`, `copy-conteudo`, `integracoes-contato`, `qualidade-check`. ✅
4. **Criar `agents/`** — README-índice + 4 agentes: `frontend-dev`, `designer-ui`, `copywriter`, `qa-review`, cada um com skills atribuídas. ✅
5. **Criar `plans/`** — README-índice + este `plan-001`. ✅
6. **Criar `agents.md`** na raiz — arquivo mestre com contexto, mapa da estrutura e regras rígidas de operação da IA. ✅
7. **Registrar plano e agrupar referências** — garantir links cruzados entre READMEs. ✅

## Validação

- **Estrutura:** todas as 5 etapas do prompt existem e estão linkadas via READMEs.
- **Consistência:** nomes de skills e agentes batem entre índices e arquivos.
- **Conteúdo:** dados citados batem com `research-notes.md`; direção visual bate com `ideas.md`.
- **Semântica da scaffold:** bloqueio de IA não consulta este arquivo não-executável — apenas documentado.

## Critérios de aceite

- `docs/README.md`, `skills/README.md`, `agents/README.md`, `plans/README.md`, `agents.md` existem e indexam seus arquivos.
- Cada agente lista skills; cada skill referencia docs.
- `plans/plan-001-estrutura-inicial.md` existe, numerado, com validação e aceite.

## Entrega

Estrutura base pronta: `docs/` (7 arquivos), `skills/` (6), `agents/` (5), `plans/` (2) e `agents.md` na raiz, todos em Markdown, em pt-BR, sem alteração no código do site.

## Próximos passos sugeridos

1. Validar com o cliente as pendências de conteúdo (ver `docs/conteudo-dados.md`) — plano `plan-002`.
2. Rodar `pnpm check` e smoke `pnpm dev` para baseline saudável.
3. Definir processo de atualização: novos planos numerados + atualização de `plans/README.md` e `agents.md` quando o workflow mudar.
