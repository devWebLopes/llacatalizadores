# PRD 002 — Recuperação e implementação dos assets visuais

| Campo | Valor |
|---|---|
| **ID** | `prd_002_assets_imagens` |
| **Data** | 2026-08-30 |
| **Status** | Aguardando arquivos originais para implementação |
| **Solicitante** | Cliente (dono do produto) |
| **Agente responsável** | Frontend Dev (`agents/frontend-dev.md`) |
| **Agentes de apoio** | Designer UI (direção e recorte das imagens) → QA Review (validação final) |
| **Skills aplicáveis** | `react-frontend`, `design-oficina-editorial`, `qualidade-check` |
| **Docs relacionados** | `docs/arquitetura.md`, `docs/guia-estilo.md`, `docs/conteudo-dados.md`, `docs/padroes-codigo.md` |
| **Referência visual** | `https://llacatalisad-gaabdeuz.manus.space/` + prints fornecidos pelo cliente |

---

## 1. Contexto e problema

O site local da LLA possui referências a assets hospedados em `/manus-storage/`, mas esses arquivos não estão presentes em `client/public/`. Como consequência, o navegador exibe ícones de imagem quebrada em pontos relevantes da página.

Os prints fornecidos pelo cliente mostram o mesmo problema visual na referência publicada:

1. Logo/símbolo da LLA quebrado no header.
2. Imagem ausente no card de **Catalisadores**.
3. Imagem ausente no card de **Metais e sucatas**.
4. Imagem/área visual ausente na região direita da seção de contato.
5. A fotografia do hero não aparece de forma reconhecível no estado observado.

Na inspeção técnica da URL de referência, o HTML público não expôs arquivos de fotografia recuperáveis; foi encontrada apenas uma imagem de screenshot em CDN. Portanto, não se deve assumir que as imagens originais possam ser copiadas da URL nem manter dependência externa do Manus.

### Estado atual confirmado no projeto

- `client/src/pages/Home.tsx` referencia:
  - `/manus-storage/lla-mark-symbol_8e2501e8.png` no header, em elemento decorativo do contato e no footer.
  - `/manus-storage/lla-hero-industrial_20e40383.jpg` no background do hero.
- `client/public/` contém apenas `.gitkeep` e a pasta técnica `__manus__/`; não contém os assets visuais da marca.
- A seção de materiais possui estrutura de cards preparada para fotografia, mas as referências visuais/arquivos precisam ser confirmadas antes de implementação definitiva.
- O componente `client/src/components/Map.tsx` existe, mas a seção atual de contato usa uma área visual decorativa; o PRD não autoriza trocar essa área por mapa interativo sem decisão explícita.

---

## 2. Objetivos

| Nº | Objetivo | Métrica de sucesso |
|---|---|---|
| O1 | Eliminar todos os ícones de imagem quebrada da página | Zero ocorrências visíveis de broken image em desktop e mobile |
| O2 | Disponibilizar localmente os assets aprovados | Todos os assets críticos carregam a partir do bundle do projeto ou de uma estratégia local aprovada |
| O3 | Reproduzir a intenção visual dos prints | Hero, cards, logo e área de contato mantêm enquadramento, contraste e hierarquia da direção “Oficina Editorial” |
| O4 | Evitar dependência do Manus | A página continua visualmente íntegra sem `/manus-storage/` e sem hotlink para a URL de referência |
| O5 | Preservar conversão e acessibilidade | CTAs, âncoras, alt texts e layout responsivo continuam funcionais |

### Fora de escopo

- Criar uma nova identidade visual ou redesenhar a página.
- Inventar fotografias de fachada, equipe, estoque ou operação.
- Publicar lista definitiva de materiais, preços, depoimentos ou novos dados comerciais.
- Trocar a seção de contato por um mapa interativo sem aprovação específica.
- Alterar `server/`, `shared/` ou a infraestrutura Manus.
- Usar imagens de banco/stock sem aprovação do cliente e sem licença compatível.

---

## 3. Dependências e bloqueios

### 3.1 Arquivos que precisam ser fornecidos ou aprovados

Os binários abaixo são dependência do cliente/Designer UI e não podem ser deduzidos apenas dos prints:

| ID | Asset | Onde aparece | Estado | Requisito de entrega |
|---|---|---|---|---|
| A01 | Símbolo/logo LLA | Header, footer e marca d’água decorativa no contato | Ausente/quebrado | PNG ou SVG oficial, preferencialmente com fundo transparente; confirmar versão clara/escura |
| A02 | Foto principal do hero | Seção `#inicio`, cobrindo o fundo da abertura | Não visível no estado observado | Foto autorizada de catalisadores/oficina; fornecer arquivo original em boa resolução e aprovar recorte |
| A03 | Foto do card “Catalisadores” | Card 01 de `#materiais` | Ausente/quebrado | Foto autorizada de catalisadores; proporção compatível com o card |
| A04 | Foto do card “Metais e sucatas” | Card 02 de `#materiais` | Ausente/quebrado | Foto autorizada de metais/sucatas; proporção compatível com o card |
| A05 | Visual da área de contato | Lado direito de `#contato` | Ausente/quebrado | Confirmar se é foto, textura, marca d’água ou mapa estático; não substituir por outro componente sem aprovação |

### 3.2 Critério de aprovação dos arquivos

Antes da implementação, cada arquivo deve ter:

- autorização de uso para o site da LLA;
- nome e finalidade definidos;
- versão original preservada fora do bundle, quando necessário;
- versão otimizada para web;
- indicação de crop/foco principal;
- texto alternativo definido para imagens informativas;
- decisão explícita de ser decorativo (`alt=""`) ou informativo.

Se o cliente não possuir A02–A05, o Designer UI deve aprovar uma alternativa original/licenciada. O desenvolvimento não deve finalizar com imagens inventadas ou placeholders.

---

## 4. Requisitos funcionais

### RF-01 — Armazenamento local e nomes estáveis

1. Criar a pasta `client/public/assets/` ou outra pasta pública equivalente, respeitando a organização existente e registrando a decisão no código.
2. Armazenar os assets aprovados localmente, com nomes descritivos e sem hash dependente da plataforma Manus, por exemplo:
   - `lla-logo-mark.svg` ou `lla-logo-mark.png`;
   - `lla-hero-industrial.webp`;
   - `lla-card-catalisadores.webp`;
   - `lla-card-metais-sucatas.webp`;
   - `lla-contato-visual.webp`.
3. Não depender de URLs `/manus-storage/...` em produção.
4. Não versionar arquivos não aprovados, dados sensíveis ou imagens sem licença confirmada.

### RF-02 — Logo sem estado quebrado

1. Substituir todas as referências atuais ao símbolo Manus pelo asset local aprovado.
2. Aplicar o logo nos três usos existentes:
   - símbolo no header;
   - marca d’água decorativa na seção de contato;
   - símbolo no footer.
3. O logo deve manter proporção, contraste e legibilidade sobre grafite.
4. O uso decorativo deve manter `alt=""` e não criar ruído para leitores de tela.
5. O logo deve carregar corretamente em hard refresh, preview de produção e rota `/` publicada.

### RF-03 — Fotografia do hero

1. Usar o asset aprovado como imagem de fundo/camada visual do hero, preservando a composição textual atual.
2. Manter a leitura do título branco/vermelho sobre a foto com overlay grafite suficiente.
3. Definir `object-position`/posicionamento para que o elemento principal da foto não fique atrás do título em desktop.
4. Em mobile, reduzir o impacto da fotografia sem remover o asset; o texto deve permanecer legível e o carregamento não deve causar salto de layout.
5. Se a imagem for somente atmosférica, usar `alt=""`; se comunicar conteúdo relevante, adicionar alt pt-BR descritivo e não redundante.

### RF-04 — Imagens dos cards de materiais

1. Inserir a imagem aprovada de A03 no card “Catalisadores”.
2. Inserir a imagem aprovada de A04 no card “Metais e sucatas”.
3. Preservar a hierarquia textual dos cards, sem deixar a foto competir com o título display.
4. Usar enquadramento consistente entre os dois cards, com `object-cover` somente quando o crop tiver sido aprovado.
5. As imagens devem possuir alt text informativo, salvo decisão documentada de que são puramente decorativas.
6. O hover pode aplicar zoom máximo de `1.02`, conforme `docs/guia-estilo.md`, sem alterar o layout.

### RF-05 — Área visual da seção de contato

1. Confirmar com o cliente se A05 representa:
   - fotografia da unidade/fachada;
   - textura ou marca d’água da LLA;
   - mapa estático;
   - outro recurso visual.
2. Implementar somente a alternativa aprovada.
3. Caso seja uma imagem decorativa, mantê-la fora da ordem de leitura (`alt=""`, `aria-hidden` quando aplicável).
4. Caso seja um mapa estático ou imagem informativa, manter link “Abrir no mapa” apontando para a URL canônica já confirmada em `docs/conteudo-dados.md`.
5. O visual não pode encobrir telefone, endereço, horário ou CTA.

### RF-06 — Fallback seguro para falha de carregamento

1. Nenhuma imagem pode exibir o ícone nativo de broken image.
2. Para imagens não críticas/decorativas, ocultar o elemento ou exibir uma superfície gráfica neutra coerente com a seção.
3. Para imagens informativas críticas, exibir uma área de fallback com texto/estrutura acessível, sem simular uma fotografia inexistente.
4. O fallback não deve esconder erro de implementação durante desenvolvimento; falhas devem ser identificáveis no console ou em validação automatizada.

### RF-07 — Controle de qualidade dos arquivos

1. Preferir WebP/AVIF para fotografias, mantendo SVG para logo quando aprovado e compatível.
2. Definir dimensões e peso-alvo por asset antes da publicação.
3. Evitar imagens maiores que o necessário para o maior breakpoint renderizado.
4. Se houver múltiplas resoluções, usar `srcset`/`sizes` somente quando isso simplificar o carregamento sem aumentar a complexidade indevida.
5. Não instalar nova biblioteca apenas para renderizar as imagens.

---

## 5. Requisitos não funcionais

### Visual e marca

- Respeitar `docs/guia-estilo.md`: grafite `#111315`/`#17191B`, off-white `#F0EEE9` e Vermelho Catalisador `#E83A2D`.
- As fotos devem apoiar a linguagem “Oficina Editorial”: oficina, material, organização e precisão; evitar stock genérico de tecnologia.
- Não aplicar filtros que alterem a identificação do material ou criem aparência artificial.
- Manter composição assimétrica, linhas de inspeção e recortes discretos.

### Performance

- O hero não deve bloquear a renderização do conteúdo textual.
- Fotografias abaixo da dobra devem usar carregamento adiado quando isso não prejudicar a composição observada.
- Confirmar no build que os assets realmente foram copiados para o diretório público final.

### Acessibilidade

- Todo asset informativo deve ter alt text em pt-BR.
- Assets decorativos devem usar `alt=""` e não duplicar conteúdo próximo.
- Nenhum fallback pode remover o acesso ao CTA, endereço, telefone ou horário.
- Contraste do texto sobre fotos deve atender à leitura normal da página.

### Compatibilidade

- Validar em viewport desktop equivalente aos prints, pelo menos 1440px de largura.
- Validar em viewport mobile de aproximadamente 390px.
- Validar hard refresh e build servido pelo Express.

---

## 6. Arquivos prováveis de implementação

| Arquivo | Tipo de mudança |
|---|---|
| `client/public/assets/*` | **Novos** — logo e fotografias aprovadas |
| `client/src/pages/Home.tsx` | Trocar referências `/manus-storage/`, configurar imagens, alt texts, loading e fallback |
| `client/src/index.css` | Somente se necessário para enquadramento/fallback; reutilizar tokens existentes |
| `docs/guia-estilo.md` | Atualizar apenas se forem definidos tokens ou regras novas de tratamento fotográfico |
| `docs/conteudo-dados.md` | Atualizar somente se uma legenda ou informação pública nova for confirmada |
| `plans/plan-003-assets-imagens.md` | Plano e validação da implementação |

Não tocar em `client/public/__manus__/`, `server/`, `shared/` ou plugins de plataforma, salvo necessidade comprovada e documentada.

---

## 7. Validação e gates do QA Review

1. Executar `pnpm check` sem erros.
2. Executar `pnpm build` sem erros.
3. Conferir no build que não existem referências residuais a `/manus-storage/` para assets visuais da página.
4. Abrir a página em hard refresh e verificar:
   - logo no header;
   - logo no footer;
   - marca d’água/visual do contato, se aprovado;
   - foto do hero;
   - foto do card de catalisadores;
   - foto do card de metais e sucatas.
5. Inspecionar a aba Network e confirmar que os assets retornam HTTP 200.
6. Verificar que não há elementos `img` com erro, ícone de imagem quebrada ou dimensões colapsadas.
7. Validar desktop e mobile, incluindo menu mobile e rolagem das âncoras.
8. Testar com conexão lenta/throttling para confirmar que o texto e os CTAs continuam utilizáveis antes das fotos terminarem de carregar.
9. Conferir alt texts com leitor de tela/inspeção de acessibilidade.
10. Confirmar que WhatsApp, telefone, mapa, Instagram e âncoras mantêm os destinos reais existentes.
11. Fazer review visual com Designer UI para crop, contraste, proporção e coerência com a direção “Oficina Editorial”.

---

## 8. Critérios de aceite

- [ ] Os arquivos originais ou alternativas licenciadas de A01–A05 foram fornecidos e aprovados.
- [ ] Os assets aprovados estão armazenados localmente e possuem nomes descritivos.
- [ ] Nenhum asset visual da página depende de `/manus-storage/` ou de hotlink para o site de referência.
- [ ] O logo aparece corretamente no header e footer, sem ícone quebrado.
- [ ] A foto do hero aparece, mantém a leitura do título e possui posicionamento aprovado em desktop e mobile.
- [ ] Os dois cards de materiais exibem suas respectivas imagens sem quebrar a hierarquia do conteúdo.
- [ ] A área visual da seção de contato foi implementada conforme a decisão do cliente, sem cobrir informações ou CTA.
- [ ] Não existe ícone nativo de broken image em nenhuma viewport testada.
- [ ] Alt texts e tratamento decorativo foram definidos para todos os assets.
- [ ] O fallback para falha de carregamento não simula conteúdo inexistente nem remove ações importantes.
- [ ] `pnpm check` e `pnpm build` passam sem erros.
- [ ] QA confirma carregamento HTTP 200 dos assets, responsividade, performance básica e ausência de regressão nos links.

---

## 9. Próximos passos

1. Cliente enviar os arquivos A01–A05 ou indicar um diretório/repositório autorizado onde estejam disponíveis.
2. Designer UI aprovar quais imagens são informativas/decorativas, crops, versões clara/escura e uso na área de contato.
3. Frontend Dev otimizar, nomear e instalar os arquivos em `client/public/assets/`.
4. Frontend Dev substituir referências externas e implementar fallback seguro.
5. QA Review executar os gates deste PRD e registrar evidências.

**Bloqueio atual:** a implementação não deve ser considerada concluída enquanto os arquivos originais/licenciados não forem fornecidos ou formalmente aprovados. Os prints são suficientes para definir o problema e o resultado esperado, mas não para reconstruir com segurança os binários das fotografias.