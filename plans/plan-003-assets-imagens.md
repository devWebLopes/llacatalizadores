# Plan 003 — Recuperação e implementação dos assets visuais

## Contexto

- **Projeto:** Site institucional LLA Catalisadores (WEB, one-page).
- **PRD de origem:** `prds/prd_002_assets_imagens.md`.
- **Tarefa:** eliminar imagens quebradas, recuperar/aprovar assets visuais e substituir dependências `/manus-storage/` por arquivos locais.
- **Nome curto:** `assets-imagens`.

## Agente responsável e skills

- **Responsável principal:** **Frontend Dev** (`agents/frontend-dev.md`).
- **Apoio:** **Designer UI** (aprovação das imagens e crops) → **QA Review** (gates finais).
- **Skills aplicadas:** `react-frontend`, `design-oficina-editorial`, `qualidade-check`.
- **Docs:** `docs/arquitetura.md`, `docs/guia-estilo.md`, `docs/conteudo-dados.md`, `docs/padroes-codigo.md`.

## Passo a passo

1. Solicitar/receber os arquivos A01–A05 e confirmar autorização de uso.
2. Registrar para cada arquivo finalidade, alt text, proporção, foco do recorte e decisão decorativa/informativa.
3. Otimizar os arquivos para web e armazená-los em `client/public/assets/` com nomes descritivos.
4. Substituir em `client/src/pages/Home.tsx` as referências `/manus-storage/` pelo caminho local.
5. Implementar a fotografia do hero com overlay, posicionamento responsivo e carregamento adequado.
6. Implementar as fotos dos dois cards de materiais sem alterar a hierarquia textual.
7. Implementar A05 na seção de contato apenas após confirmar se é foto, textura, marca d’água ou mapa estático.
8. Adicionar fallback seguro para evitar o ícone nativo de imagem quebrada.
9. Rodar `pnpm check`, `pnpm build` e revisar as referências geradas no bundle.
10. Fazer smoke visual em desktop/mobile, checar Network/HTTP 200 e encaminhar para aprovação do Designer UI/QA Review.

## Bloqueio

Os prints e a URL de referência permitem especificar o problema, mas não fornecem de forma confiável os binários originais das fotos. A implementação fica bloqueada até o recebimento ou aprovação formal de A01–A05.

## Validação

- `pnpm check` sem erros.
- `pnpm build` sem erros.
- Nenhuma referência visual residual a `/manus-storage/`.
- Nenhum broken image em desktop/mobile.
- Assets retornam HTTP 200 no build servido.
- Alt texts, fallbacks, crops e contraste aprovados.
- CTAs e âncoras sem regressão.

## Critérios de aceite

- [ ] A01–A05 recebidos/aprovados.
- [ ] Assets locais instalados e nomeados.
- [ ] Logo, hero, cards e contato carregam corretamente.
- [ ] Fallback seguro implementado.
- [ ] Responsividade e acessibilidade validadas.
- [ ] `pnpm check` e `pnpm build` aprovados.

## Entrega

Código com assets locais, referências externas removidas, documentação dos arquivos e relatório do QA Review. Se os arquivos não forem fornecidos, entregar apenas a especificação e manter o bloqueio explícito; não publicar placeholders como solução final.