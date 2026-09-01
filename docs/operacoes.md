# Operações (comandos)

Executados na raiz do projeto (`lla/`). Gerenciador: **pnpm 10**.

| Comando | Ação |
|---|---|
| `pnpm dev` | Sobe Vite com HMR em modo host. |
| `pnpm build` | Gera bundle do client e empacota `server/index.ts` em `dist/`. |
| `pnpm start` | Roda `node dist/index.js` em produção. |
| `pnpm preview` | Preview do build do client. |
| `pnpm check` | `tsc --noEmit` — valida tipos de todo o projeto. |
| `pnpm format` | Prettier em todo o repositório. |

## Fluxo mínimo de entrega

1. `pnpm check` — zero erros de tipo.
2. (Opcional, recomendado) `pnpm build` — garante que client e servidor empacotam.
3. `pnpm format` antes de commits grandes.

## Notas

- Não comitar `node_modules/`, `dist/` nem segredos; `.gitignore` já cobre `dist` conforme convenção.
- Patch local do Wouter em `patches/wouter@3.7.1.patch` é aplicado automaticamente pelo pnpm.
- `client/public/__manus__/` e `vite-plugin-manus-runtime` pertencem à plataforma Manus — não remover.
