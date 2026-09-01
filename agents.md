# agents.md — Arquivo mestre da IA

Este é o **ponto de entrada obrigatório** de qualquer agente de IA neste repositório. Leia este arquivo antes de iniciar qualquer tarefa ou modificar código.

## 1. Contexto do projeto

- **Projeto:** Site institucional da **LLA Catalisadores** — compra e avaliação de catalisadores e materiais automotivos em São Leopoldo/RS.
- **Tipo:** WEB — one-page com âncoras (`#inicio`, `#como-funciona`, `#materiais`, `#contato`) e CTAs reais (WhatsApp, telefone, mapa, Instagram).
- **Stack:** React 19 + Vite 7 + TypeScript 5.6 + Tailwind CSS 4 + shadcn/ui (Radix) + Wouter 3 + Express 4 (server de produção). Gerenciador: **pnpm 10**.
- **Direção visual:** "Oficina Editorial" — grafite `#111315`/`#17191B`, off-white `#F0EEE9` e **Vermelho Catalisador `#E83A2D`** como sinal de ação; composição assimétrica; tipografia Barlow Condensed / Manrope / IBM Plex Mono.

## 2. Objetivos gerais

1. Converter visitantes em contatos reais via WhatsApp/telefone/visita.
2. Comunicar precisão e confiança de oficina organizada — nunca uma landing page genérica de tech.
3. Publicar apenas dados confirmados; pendências viram CTA de consulta, não suposição.

## 3. Mapa da estrutura

```
lla/
├── docs/                    # Documentação base (arquitetura, stack, padrões, estilo, dados)
│   ├── README.md            #   Índice da documentação
│   ├── arquitetura.md
│   ├── stack.md
│   ├── padroes-codigo.md
│   ├── guia-estilo.md
│   ├── conteudo-dados.md
│   └── operacoes.md
├── skills/                  # Habilidades técnicas/regras para os agentes
│   ├── README.md            #   Índice das skills
│   ├── react-frontend.md
│   ├── design-oficina-editorial.md
│   ├── copy-conteudo.md
│   ├── integracoes-contato.md
│   └── qualidade-check.md
├── agents/                  # Agentes especializados
│   ├── README.md            #   Índice dos agentes e quando acioná-los
│   ├── frontend-dev.md
│   ├── designer-ui.md
│   ├── copywriter.md
│   └── qa-review.md
├── plans/                   # Planejamentos numerados
│   ├── README.md            #   Índice de planos
│   └── plan-001-estrutura-inicial.md
├── client/                  # Frontend React/Vite
├── server/                  # Express (serve dist em produção)
├── shared/                  # Constantes compartilhadas
└── agents.md                # ESTE ARQUIVO
```

## 4. Regras rígidas de funcionamento

1. **Sempre consultar primeiro:** antes de qualquer tarefa, ler `agents.md` → `docs/README.md` (e docs específicos conforme o tema) → agents/skills relevantes.
2. **Fonte canônica:** em conflito, `docs/` vence `skills/`; `skills/` vence opinião de agente. Nada vence os dados confirmados em `docs/conteudo-dados.md`.
3. **Workflow padrão:** Definir agente via `agents/README.md` → carregar suas skills → executar → validar com QA Review → entregar.
4. **Planos:** tarefas não triviais geram `plans/plan-NNN-<nome-curto>.md` numerado e indexado em `plans/README.md`.
5. **Qualidade mínima:** `pnpm check` sem erros antes de entregar; `pnpm format` em entregas longas.
6. **Sem suposições:** horário completo, lista definitiva de materiais, preços e depoimentos não se inventam — usar CTA de contato.
7. **Manutenção deste mapa:** ao criar/mover pastas ou mudar workflow, atualizar `agents.md` e os READMEs da estrutura.
8. **Escopo de segurança:** agir somente dentro deste repositório; nunca comitar segredos, `node_modules/` ou `dist/`.

## 5. Como começar uma tarefa (checklist da IA)

- [ ] Li este arquivo.
- [ ] Identifiquei o agente correto em `agents/README.md` e as skills em `skills/README.md`.
- [ ] Verifiquei `docs/` relacionados ao tema (estilo, dados, arquitetura, padrões).
- [ ] Plano definido (arquivo em `plans/` se não trivial).
- [ ] QA Review passou (ver `skills/qualidade-check.md`).
