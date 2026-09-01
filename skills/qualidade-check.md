# Skill — Qualidade & Review

Gates de qualidade antes de considerar qualquer tarefa entregue.

## Gates obrigatórios

1. `pnpm check` — zero erros de TypeScript.
2. Conformidade com `docs/guia-estilo.md` (visual) e `docs/conteudo-dados.md` (copy/dados).
3. Sem regressão de links/CTAs reais.
4. Acessibilidade básica: `aria-label` em ícones, `alt` em imagens essenciais, semântica intacta.

## Gates recomendados

- `pnpm build` para confirmar que client e servidor empacotam.
- `pnpm format` antes de entregas longas.
- Smoketest visual com `pnpm dev` (header fixo, menu mobile, âncoras).

## Checklist de review (para QA)

- [ ] Tipagem limpa.
- [ ] Cor de marca usada corretamente (vermelho como sinal, não preenchimento).
- [ ] Copy sem dados inventados.
- [ ] CTAs apontam para destinos reais.
- [ ] Responsivo: menu mobile funciona, seções empilham corretamente.
- [ ] Sem alterações acidentais em `client/public/__manus__/` ou plugins da plataforma.
