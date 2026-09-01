# Skill — Integrações de contato

Como usar os pontos de contato confirmados no site (todas as CTAs devem ser ações reais).

## Constantes canônicas

```ts
const WHATSAPP = "https://wa.me/5551981935442";
const PHONE = "tel:+5551981935442";
const MAP =
  "https://www.google.com/maps/search/?api=1&query=R.%20Jaime%20Biz%2C%20175%20-%20Scharlau%2C%20S%C3%A3o%20Leopoldo%20-%20RS";
const INSTAGRAM = "https://www.instagram.com/llacatalisadores/";
```

## Regras

1. **WhatsApp/tel/map/Instagram:** links externos com `target="_blank" rel="noreferrer"`.
2. **CTAs primários** → WhatsApp; **secundários** → âncora da página (`#como-funciona`, `#contato`).
3. **Endereço exato:** R. Jaime Biz, 175 — Scharlau, São Leopoldo/RS.
4. **Horário (dado confirmado):** Segunda a sexta — 8:30 às 12:00 e 13:30 às 18:00 (fonte: `docs/conteudo-dados.md`). Fim de semana/feriados segue como CTA de consulta; nunca inventar horários.
5. Se os links aparecerem duplicados em mais de um lugar, extrair para `client/src/const.ts` ou um data module.

## Checklist de CTA

- Destino externo? `target="_blank" rel="noreferrer"`.
- Apenas âncora? Confirma que o `id` existe na página.
- Ícone só? `aria-label` descritivo.
