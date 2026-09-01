# Direção de design — Llá Catalisadores

## Três caminhos considerados

### Abordagem 1 — Oficina Editorial
**Very Brief Intro:** Uma identidade industrial contemporânea que combina grafite, metal escovado e vermelho de sinalização com composição editorial assimétrica. O resultado comunica precisão, transparência e força sem parecer uma oficina genérica.

**Probability:** 0.07

### Abordagem 2 — Estrada Local
**Very Brief Intro:** Uma linguagem mais humana e documental, com luz natural, tipografia utilitária e foco na relação de confiança com motoristas e oficinas da região. O site teria um ritmo de caderno de campo, direto e acolhedor.

**Probability:** 0.03

### Abordagem 3 — Sucata Futura
**Very Brief Intro:** Uma direção tecnológica de alto contraste, com superfícies escuras, linhas de dados e acentos luminosos para apresentar a reciclagem como engenharia de materiais. É expressiva e mais experimental.

**Probability:** 0.08

## Abordagem escolhida: Oficina Editorial

### Design Movement
Neo-industrial editorial, inspirado em sinalização automotiva, catálogos técnicos, fotografia documental de oficina e design suíço assimétrico. A interface deve parecer uma empresa real, organizada e experiente — não uma landing page de tecnologia genérica.

### Core Principles
1. **Precisão visível:** cada bloco deve ter hierarquia clara, indicadores, números, linhas de inspeção ou microcopy objetiva.
2. **Força com contenção:** o vermelho é um sinal de ação e atenção, nunca um preenchimento dominante; grafite e off-white sustentam a leitura.
3. **Transparência operacional:** o conteúdo explica o processo de avaliação e os próximos passos, evitando promessas vagas.
4. **Proximidade regional:** o endereço de São Leopoldo e o contato direto aparecem como ativos de confiança, não como rodapé escondido.

### Color Philosophy
O grafite remete a aço, borracha e bancada de trabalho; o off-white traz a luminosidade de uma ficha técnica impressa; o vermelho sinaliza movimento, inspeção e decisão. A cor proprietária é o **Vermelho Catalisador #E83A2D**, usado em barras diagonais, estados ativos e chamadas para orçamento. O conjunto evita gradientes roxos e mantém contraste alto, com uma camada sutil de textura para não deixar o preto chapado.

### Layout Paradigm
A página segue um eixo vertical editorial com módulos que alternam largura, alinhamento e densidade: hero dividido entre mensagem e fotografia, uma faixa de sinais rápidos, processo em trilho vertical, materiais em cartões de recorte e contato em bloco de alto contraste. A composição evita o centro perfeito; títulos começam em uma coluna estreita e as imagens ocupam áreas de respiro deliberadamente desequilibradas.

### Signature Elements
- Duas barras diagonais vermelhas, derivadas do símbolo observado no perfil, como marcador de seção e linguagem de movimento.
- Linhas finas de inspeção, pequenos rótulos em caixa alta e contadores numéricos para dar sensação de ficha técnica.
- Recortes angulares discretos em imagens e cartões, equilibrados por bordas retas e sombras suaves.

### Interaction Philosophy
As interações devem parecer respostas mecânicas precisas: botões comprimem levemente ao toque, links ganham uma linha vermelha, cartões deslizam poucos pixels e o menu mobile abre como uma prancheta lateral. Cada CTA deve levar a uma ação real — WhatsApp, telefone, mapa ou Instagram — sem criar fluxos fictícios.

### Animation
Usar transições de 160–260ms com ease-out forte para hover, foco e menus. Revelar títulos e blocos com fade + deslocamento de 12px, em cascata curta de 40ms, apenas quando houver preferência por movimento. Imagens podem fazer zoom de 1.02 no hover, nunca mais. Respeitar `prefers-reduced-motion` e evitar animações que alterem layout.

### Typography System
- **Display:** `Barlow Condensed`, pesos 600–800, para títulos, números e chamadas de seção; caixa alta controlada e espaçamento levemente negativo.
- **Body:** `Manrope`, pesos 400–700, para parágrafos, navegação, botões e dados de contato.
- **Technical labels:** `IBM Plex Mono`, 11–12px, para tags, metadados, horários e marcadores de processo.

Hierarquia: h1 com clamp entre 3.8rem e 7.5rem; h2 entre 2.4rem e 4.8rem; corpo entre 1rem e 1.125rem; microcopy em mono com tracking de 0.14em.

### Brand Essence
**Posicionamento:** compra e avaliação de catalisadores em São Leopoldo para quem quer resolver com clareza, atendimento direto e operação organizada. **Personalidade:** precisa, acessível, responsável.

### Brand Voice
Headlines são curtas, concretas e afirmativas. CTAs usam verbos de ação e deixam explícito o próximo passo. Microcopy explica sem exagerar, com uma franqueza de oficina bem cuidada.

Exemplos:
- “Seu catalisador tem valor. A avaliação começa aqui.”
- “Envie uma mensagem. A equipe orienta o próximo passo.”

### Wordmark & Logo
O símbolo usa duas barras diagonais vermelhas em avanço, combinadas com um bloco angular que alude ao miolo cerâmico do catalisador. O wordmark “LLA” deve ser tipográfico, condensado e espaçado, com o nome completo em corpo menor; o símbolo aparece sozinho no favicon e ao lado do wordmark no cabeçalho.

### Signature Brand Color
**Vermelho Catalisador — #E83A2D.** Um vermelho quente, denso e facilmente reconhecível em meio a grafite e alumínio; representa inspeção, movimento e decisão.

## Decisões de conteúdo

A página inicial deve apresentar a empresa, explicar de forma prudente o serviço de compra e avaliação de catalisadores, orientar o contato e destacar os dados públicos confirmados: R. Jaime Biz, 175 — Scharlau, São Leopoldo/RS, telefone +55 51 98193-5442 e referência de atendimento até 18h. Como os horários completos e a lista definitiva de materiais não foram confirmados, o texto deve convidar à consulta direta em vez de inventar dados.
