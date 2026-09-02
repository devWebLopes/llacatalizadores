# PRD 003 — Venda de catalisadores como solução complementar

| Campo | Valor |
|---|---|
| **ID** | `prd_003_venda_catalisadores` |
| **Data** | 2026-09-02 |
| **Status** | Proposto — aguardando validação comercial e implementação |
| **Solicitante** | Cliente / dono do produto |
| **Agente responsável** | Frontend Dev (`agents/frontend-dev.md`) |
| **Agentes de apoio** | Designer UI → Copywriter → QA Review |
| **Skills aplicáveis** | `react-frontend`, `design-oficina-editorial`, `copy-conteudo`, `integracoes-contato`, `qualidade-check` |
| **Docs relacionados** | `docs/arquitetura.md`, `docs/guia-estilo.md`, `docs/conteudo-dados.md`, `docs/padroes-codigo.md` |
| **Plano relacionado** | [`plans/plan-005-venda-catalisadores.md`](../plans/plan-005-venda-catalisadores.md) |

---

## 1. Contexto e problema

A LLA Catalisadores tem como foco principal a **reciclagem, compra e avaliação de catalisadores e materiais automotivos**, além da manutenção. O cliente deseja acrescentar a **venda de catalisadores** como uma possibilidade complementar para pessoas que precisam encontrar uma solução para o próprio veículo.

O risco de comunicação é apresentar a venda como se fosse o negócio principal ou como uma loja virtual completa, criando expectativas sobre estoque, modelos, preços, instalação e cobertura de entrega que ainda não estão documentadas como dados públicos confirmados.

O produto precisa, portanto:

1. Apresentar a venda sem deslocar a hierarquia da reciclagem, compra/avaliação e manutenção.
2. Aproveitar a arquitetura one-page e a seção existente `#materiais`, sem criar uma navegação paralela desnecessária.
3. Comunicar benefícios com clareza, mas conduzir o visitante ao WhatsApp para confirmar aplicação, disponibilidade e condições.
4. Usar as condições comerciais informadas pelo cliente apenas após validação operacional.

### Briefing recebido do cliente

#### Características do produto

- Ampla variedade de catalisadores disponíveis.
- Qualidade garantida para melhor desempenho.
- Redução efetiva de emissões poluentes.
- Instalação fácil e rápida.

#### Vantagens e condições comerciais

- Parcelamento facilitado.
- 10% OFF para pagamento à vista.
- Entrega gratuita — consultar a região.
- Qualidade e garantia LLA.

> **Nota de governança:** os itens acima são requisitos de negócio recebidos no briefing, não dados confirmados em `docs/conteudo-dados.md`. Antes de publicar, o cliente deve confirmar a redação, abrangência, regras, exceções e validade de cada condição.

---

## 2. Objetivos

| Nº | Objetivo | Métrica / evidência |
|---|---|---|
| O1 | Introduzir a venda como complemento da oferta principal | A seção aparece após o conteúdo de materiais/reciclagem e não substitui o CTA principal da home |
| O2 | Gerar conversas qualificadas sobre compra | CTA específico para WhatsApp com mensagem orientada a aplicação, veículo ou necessidade |
| O3 | Reduzir dúvidas sobre valor da oferta | Visitante identifica variedade, qualidade, emissões, instalação e condições em poucos segundos |
| O4 | Evitar promessa indevida | Disponibilidade, aplicação, preço, região de frete e garantia são confirmados pela equipe antes da publicação definitiva |
| O5 | Preservar a identidade Oficina Editorial | Novo módulo utiliza tokens, tipografia, contraste, linhas e marcadores já existentes |

### Fora de escopo

- Criar e-commerce, carrinho, checkout ou pagamento online.
- Publicar catálogo de modelos, códigos, preços ou estoque em tempo real.
- Criar uma nova rota ou página independente para a venda nesta etapa.
- Alterar o foco do hero ou substituir o CTA de avaliação/reciclagem.
- Prometer instalação própria da LLA sem confirmação específica.
- Afirmar compatibilidade universal, redução percentual de emissões ou desempenho mensurável sem evidência técnica.
- Inventar regiões atendidas, prazo de entrega, política de troca ou termos de garantia.

---

## 3. Decisão de arquitetura de informação

### Solução recomendada

**Adicionar um bloco “Venda de catalisadores” dentro da seção `#materiais`, depois dos cards/conteúdos de compra e reciclagem.** O bloco deve ser visualmente reconhecível, mas subordinado à jornada principal.

Hierarquia sugerida da página:

1. **Hero / início:** mensagem principal sobre avaliação, compra e orientação.
2. **Como funciona:** processo de contato, conferência e decisão.
3. **Materiais:** compra, reciclagem e materiais recebidos.
4. **Bloco complementar dentro de materiais:** venda de catalisadores.
5. **FAQ:** dúvidas gerais e dúvidas qualificadoras da venda.
6. **Contato:** WhatsApp como próximo passo para confirmar a solução.

### Navegação

- **Não adicionar “Venda” como item principal do header** nesta primeira versão.
- Opcionalmente, adicionar um link contextual “Conheça as opções de venda” no interior de `#materiais`, apontando para um sub-id `#venda-catalisadores`.
- Se a equipe decidir que a venda se tornou uma frente comercial prioritária, isso deve gerar um novo PRD de arquitetura e SEO, não uma expansão silenciosa deste escopo.

### Justificativa

O visitante que chega pela venda provavelmente já possui uma necessidade relacionada a catalisador. Inserir o conteúdo junto de “Materiais” mantém a associação de marca e permite que a LLA se apresente primeiro como especialista em catalisadores, sem parecer uma loja genérica. O CTA continua sendo conversa direta, coerente com a operação atual e com a regra de dados prudentes.

---

## 4. Requisitos funcionais

### RF-01 — Bloco complementar de venda

Criar, na seção `#materiais`, um bloco semântico com:

- `id="venda-catalisadores"`;
- eyebrow numerado, por exemplo `04 / solução complementar`;
- título display curto e afirmativo;
- texto de enquadramento deixando claro que a venda complementa a compra/reciclagem e a manutenção;
- CTA primário para WhatsApp;
- CTA secundário para `#contato` ou para orientação sobre avaliação, sem competir visualmente com o CTA primário.

### RF-02 — Estrutura visual do bloco

O bloco deve seguir uma composição assimétrica, preferencialmente em duas áreas:

**Área A — mensagem e ação**

- Título sugerido: **“Catalisador certo para o próximo passo.”**
- Subtítulo sugerido: “Além de avaliar e reciclar, a LLA também orienta você na compra de catalisadores — conforme aplicação, disponibilidade e condição do veículo.”
- CTA sugerido: **“Consultar opções no WhatsApp”**.

**Área B — sinais de produto**

Exibir quatro sinais curtos, sem transformar a seção em uma grade SaaS:

1. Variedade — “Opções conforme aplicação”.
2. Qualidade — “Conferência e orientação LLA”.
3. Emissões — “Solução adequada para o sistema do veículo”.
4. Instalação — “Orientação para um processo rápido”.

Os textos acima são uma proposta de copy prudente. A redação final deve ser revisada pelo Copywriter e validada comercialmente, principalmente “qualidade garantida”, “redução efetiva” e “instalação fácil e rápida”.

### RF-03 — Condições comerciais

Apresentar as condições em uma faixa ou painel técnico de quatro itens, somente depois da confirmação do cliente:

| Item | Conteúdo do briefing | Regra de publicação |
|---|---|---|
| Parcelamento | Parcelamento facilitado | Confirmar número de parcelas, meios de pagamento e eventuais juros |
| Pagamento à vista | 10% OFF | Confirmar base de cálculo, produtos elegíveis e validade |
| Frete | Entrega gratuita* | Confirmar regiões, prazo, transportadora e texto da ressalva |
| Garantia | Qualidade e garantia LLA | Confirmar prazo, cobertura, exclusões e responsável pelo atendimento |

Texto de ressalva mínimo, caso aprovado: **“Condições sujeitas à disponibilidade, aplicação e região. Consulte a equipe.”**

Não publicar apenas “garantia” como promessa aberta se os termos ainda não estiverem definidos.

### RF-04 — CTA qualificado para WhatsApp

O CTA deve abrir o WhatsApp canônico `https://wa.me/5551981935442` e incentivar o visitante a enviar informações úteis, sem exigir formulário nesta etapa.

Mensagem sugerida para o link:

> “Olá! Quero consultar a venda de um catalisador. Posso enviar o modelo do veículo e saber disponibilidade, aplicação e condições?”

O link deve abrir em nova aba com `target="_blank" rel="noreferrer"`, conforme `skills/integracoes-contato.md`.

### RF-05 — FAQ da venda

Adicionar perguntas ao FAQ existente apenas quando as respostas forem confirmadas. Perguntas recomendadas:

1. “Como consultar um catalisador para meu veículo?”
2. “A LLA confirma a aplicação antes da venda?”
3. “Quais são as condições de pagamento?”
4. “A entrega gratuita atende minha região?”
5. “Como funciona a garantia?”

Enquanto houver pendência, a resposta deve direcionar para o WhatsApp, sem inventar prazo, cobertura ou política comercial.

---

## 5. Copy proposta

### Versão recomendada para primeira publicação

**Eyebrow:** `04 / solução complementar`

**Título:** `Catalisador certo para o próximo passo.`

**Texto:**

> A LLA também orienta você na compra de catalisadores. Consulte as opções disponíveis para o seu veículo, confirme a aplicação e fale com uma equipe que entende do assunto — sem deixar de lado a reciclagem, a avaliação e a manutenção.

**CTA primário:** `Consultar opções no WhatsApp`

**CTA secundário:** `Falar com a equipe`

**Microcopy abaixo do CTA:**

> Envie o modelo do veículo ou uma foto. A disponibilidade e as condições são confirmadas diretamente pela equipe.

### Copy a evitar até validação

- “Temos todos os modelos em estoque.”
- “Instalação garantida em poucos minutos.”
- “Reduz até X% das emissões.”
- “Frete grátis para todo o Brasil.”
- “Garantia total e sem exceções.”

Essas frases criam promessas de estoque, desempenho, prazo ou cobertura que não estão confirmadas na fonte canônica.

---

## 6. Requisitos visuais

- Fundo alternado entre `#17191B` e `#F0EEE9`, respeitando o ritmo visual da seção `#materiais`.
- Vermelho Catalisador `#E83A2D` usado em eyebrow, barras diagonais, ícones/sinais e CTA; não usar como fundo dominante do bloco inteiro.
- Títulos em Barlow Condensed; corpo em Manrope; metadados/condições em IBM Plex Mono.
- Usar linha de inspeção, contador numérico e recorte angular discreto para conectar o bloco aos componentes existentes.
- Evitar quatro cards idênticos centralizados. Os sinais comerciais devem funcionar como uma faixa técnica ou composição editorial irregular.
- Hover e foco devem seguir 160–260ms, com `:focus-visible` evidente e respeito a `prefers-reduced-motion`.
- Ícones devem ser funcionais e discretos: por exemplo, `Boxes`, `ShieldCheck`, `Leaf`/`Wind` e `Wrench`, caso já estejam disponíveis em `lucide-react` e façam sentido após revisão do Designer UI.
- Não adicionar fotografia de produto sem asset aprovado e alt text definido.

---

## 7. Requisitos de conteúdo e validações pendentes

Antes da implementação final, o cliente deve confirmar:

1. Se “ampla variedade” significa variedade de aplicações, marcas, modelos ou tipos de catalisadores.
2. Quais produtos realmente estão disponíveis no momento.
3. Se a LLA instala, indica instalador ou apenas vende/orienta.
4. Qual é a evidência e o limite da alegação de redução de emissões.
5. O que “qualidade garantida” significa na prática.
6. Regras completas do parcelamento.
7. Regras do desconto de 10% à vista.
8. Regiões abrangidas pelo frete gratuito e respectiva exceção.
9. Prazo e cobertura da garantia LLA.
10. Se preço será informado apenas no WhatsApp ou em outro canal oficial.

Até que essas respostas estejam registradas em `docs/conteudo-dados.md`, a implementação deve usar linguagem de consulta: **“consulte disponibilidade, aplicação e condições com a equipe”**.

---

## 8. Métricas e instrumentação sugeridas

Como o site é one-page e não possui checkout nesta etapa, medir:

- Cliques no CTA “Consultar opções no WhatsApp”.
- Cliques no CTA contextual dentro de `#materiais`.
- Cliques no telefone a partir do bloco.
- Profundidade de rolagem até `#venda-catalisadores`.
- Cliques em perguntas do FAQ relacionadas à venda.
- Conversão assistida: visitante que visualiza a seção e depois aciona o WhatsApp da seção `#contato`.

Os nomes de eventos e a ferramenta de analytics devem seguir a infraestrutura já presente; não adicionar dependência nova neste PRD.

---

## 9. Arquivos previstos

| Arquivo | Mudança prevista |
|---|---|
| `client/src/pages/Home.tsx` | Adicionar bloco de venda dentro de `#materiais`, CTA e, se aprovado, perguntas no FAQ |
| `client/src/index.css` | Somente se necessário; preferir classes e tokens já existentes |
| `client/src/components/motion/*` | Reutilizar componentes existentes; não criar sistema paralelo de animação |
| `docs/conteudo-dados.md` | Atualizar apenas após confirmação formal das condições comerciais |
| `client/index.html` | Avaliar atualização de conteúdo SEO apenas em tarefa específica, após validação da oferta |
| `plans/plan-005-venda-catalisadores.md` | Registrar execução, gates e critérios de aceite |

Não tocar em `server/`, `shared/`, `client/public/__manus__/` ou infraestrutura de plataforma sem necessidade comprovada.

---

## 10. Validação e gates do QA Review

1. `pnpm check` sem erros.
2. `pnpm build` sem erros.
3. O menu e as âncoras existentes continuam funcionando.
4. `#materiais` mantém reciclagem/compra/avaliação como conteúdo dominante.
5. O novo bloco é acessível por teclado e tem foco visível.
6. O CTA aponta para `wa.me/5551981935442`, abre em nova aba e possui texto de ação claro.
7. Nenhum preço, estoque, prazo, região, garantia ou percentual técnico não confirmado foi publicado.
8. Desktop e mobile mantêm composição legível, sem overflow horizontal.
9. O bloco segue paleta, tipografia, marcadores e movimento da Oficina Editorial.
10. Com `prefers-reduced-motion`, não há animações essenciais para compreender ou usar a oferta.
11. Se as condições comerciais forem publicadas, todas possuem regra/ressalva validada pelo cliente.
12. O FAQ não contém respostas contraditórias com `docs/conteudo-dados.md`.

---

## 11. Critérios de aceite

- [ ] Existe um bloco semântico `#venda-catalisadores` dentro de `#materiais`.
- [ ] O bloco identifica explicitamente a venda como complemento da reciclagem, compra/avaliação e manutenção.
- [ ] A hierarquia visual não transforma a venda em novo hero ou foco principal da home.
- [ ] O conteúdo comunica características e benefícios sem promessas técnicas não comprovadas.
- [ ] Há CTA primário de WhatsApp com próximo passo explícito.
- [ ] Disponibilidade, aplicação e condições são encaminhadas para confirmação da equipe.
- [ ] As condições comerciais só aparecem no site após validação formal de regras e exceções.
- [ ] A solução reutiliza tokens e componentes existentes da Oficina Editorial.
- [ ] Não há e-commerce, carrinho, preços unitários ou catálogo inventado.
- [ ] `pnpm check` e `pnpm build` passam sem erros.
- [ ] QA confirma responsividade, acessibilidade básica e ausência de regressão nos CTAs existentes.

---

## 12. Próximos passos

1. Cliente responder às dez validações comerciais da seção 7.
2. Copywriter fechar a versão final da mensagem e das ressalvas.
3. Designer UI aprovar composição e prioridade visual dentro de `#materiais`.
4. Frontend Dev implementar o módulo e o CTA qualificado.
5. QA Review executar os gates e registrar evidências no plano relacionado.
6. Em uma tarefa posterior, avaliar SEO específico para “venda de catalisadores” depois de existir oferta, estoque/atendimento e regras comerciais publicáveis.

**Bloqueio atual:** o PRD pode orientar a implementação estrutural, mas a publicação das condições “parcelamento facilitado”, “10% OFF”, “entrega gratuita” e “garantia LLA” depende de confirmação formal dos termos pelo cliente.