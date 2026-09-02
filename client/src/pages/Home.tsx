/* Direção Llá Catalisadores: Oficina Editorial — composição assimétrica, sinais técnicos, grafite/off-white e Vermelho Catalisador. */
import {
  ArrowUpRight,
  Boxes,
  ChevronDown,
  Clock3,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Header,
  Reveal,
  Stagger,
  StaggerItem,
  AnimatedCard,
  MediaZoom,
  TactileLink,
  WhatsAppFAB,
  ScrollBounce,
} from "@/components/motion";
import { cn } from "@/lib/utils";

const WHATSAPP = "https://wa.me/5551981935442";
const WHATSAPP_OPCOES =
  "https://wa.me/5551981935442?text=" +
  encodeURIComponent(
    "Olá! Quero consultar a venda de um catalisador. Posso enviar o modelo do veículo e saber disponibilidade, aplicação e condições?"
  );
const PHONE = "tel:+5551981935442";
const MAP =
  "https://www.google.com/maps/search/?api=1&query=R.%20Jaime%20Biz%2C%20175%20-%20Scharlau%2C%20S%C3%A3o%20Leopoldo%20-%20RS";
const INSTAGRAM = "https://www.instagram.com/llacatalisadores/";

const steps = [
  [
    "01",
    "Você chama",
    "Envie uma mensagem ou ligue para combinar a avaliação do seu material.",
  ],
  [
    "02",
    "A equipe confere",
    "O material é analisado com atenção, transparência e critério.",
  ],
  [
    "03",
    "Você decide",
    "Receba a orientação e siga com segurança para o próximo passo.",
  ],
];

const materials = [
  {
    label: "Catalisadores",
    title: "Valor onde muitos veem descarte.",
    text: "Avaliação direta para quem precisa entender o que tem em mãos.",
    image: "/assets/lla-card-catalisadores.webp",
    imageAlt:
      "Catalisadores automotivos usados sobre bancada de oficina, identificados com etiquetas vermelhas",
  },
  {
    label: "Metais e sucatas",
    title: "Organização para decidir melhor.",
    text: "Consulte a equipe sobre os materiais recebidos e as condições da avaliação.",
    image: "/assets/lla-card-metais-sucatas.webp",
    imageAlt:
      "Oficina com prateleiras de catalisadores e mesa de pesagem para avaliação de metais",
  },
];

const acceptedMaterialsList = [
  {
    category: "Catalisadores Automotivos",
    items: [
      "Catalisadores cerâmicos (linha leve, nacional e importada)",
      "Catalisadores metálicos de alta vazão e competição",
      "Filtros de partículas DPF para motores a diesel (caminhonetes, vans e utilitários)",
      "Catalisadores de linha pesada (caminhões e ônibus sob consulta prévia)",
    ],
  },
  {
    category: "Metais & Sucatas Automotivas",
    items: [
      "Sucatas automotivas selecionadas com valor agregado",
      "Metais não-ferrosos e carcaças para reciclagem especializada",
      "Atendimento para oficinas, centros automotivos e desmanches credenciados",
      "Pesagem transparente com critério técnico direto na bancada",
    ],
  },
];

const vendaSignals = [
  {
    icon: Boxes,
    label: "Variedade",
    title: "Opções conforme aplicação",
  },
  {
    icon: ShieldCheck,
    label: "Qualidade",
    title: "Conferência e orientação LLA",
  },
  {
    icon: Leaf,
    label: "Emissões",
    title: "Solução adequada para o sistema do veículo",
  },
  {
    icon: Wrench,
    label: "Instalação",
    title: "Orientação para um processo rápido",
  },
];

const faqs = [
  {
    question: "A LLA aceita catalisador diesel?",
    answer:
      "Sim. Avaliamos catalisadores de veículos a diesel (incluindo caminhonetes, vans, utilitários e linha pesada), além de filtros de partículas DPF. A análise é feita presencialmente na bancada ou por foto via WhatsApp com critério técnico.",
  },
  {
    question: "Como funciona o pagamento? O valor é pago à vista?",
    answer:
      "O pagamento pela compra do seu catalisador ou sucata automotiva é realizado à vista, na hora da negociação, logo após a conferência, identificação do código e pesagem na nossa bancada.",
  },
  {
    question: "O processo e a avaliação têm garantia de transparência?",
    answer:
      "Sim. Nosso compromisso é com a conferência aberta e critérios técnicos objetivos. Você acompanha a identificação do modelo (cerâmico, metálico ou DPF) e a pesagem do material sem rodeios.",
  },
  {
    question: "Como solicitar uma avaliação inicial por foto?",
    answer:
      "Basta fotografar com nitidez o código estampado na carcaça e a peça inteira, e enviar para o nosso WhatsApp (51) 98193-5442. Nossa equipe orienta a estimativa e o procedimento para recebimento.",
  },
  {
    question: "Quais outros materiais automotivos são recebidos?",
    answer:
      "Além de catalisadores automotivos de todas as marcas e modelos, compramos metais e sucatas automotivas selecionadas. Consulte nossa equipe para checar as condições e materiais aceitos no momento.",
  },
  {
    question: "A LLA também vende catalisadores para veículos?",
    answer:
      "Sim. Além de avaliar e reciclar, a LLA orienta você na compra de catalisadores. Envie o modelo do veículo ou uma foto no WhatsApp (51) 98193-5442 para a equipe confirmar disponibilidade, aplicação e condições.",
  },
  {
    question: "Como consultar um catalisador para o meu veículo?",
    answer:
      "Chame a equipe no WhatsApp (51) 98193-5442 com o modelo do veículo ou uma foto da peça. A aplicação, a disponibilidade e as condições são confirmadas diretamente por quem entende do assunto, antes de qualquer negociação.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* ------------------------------------------------------------------ */}
      {/* Header animado com menu mobile (AnimatePresence)                    */}
      {/* ------------------------------------------------------------------ */}
      <Header />

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="inicio"
        className="relative min-h-[720px] bg-[#111315] pt-[76px] text-white"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,21,.98)_0%,rgba(17,19,21,.82)_36%,rgba(17,19,21,.18)_100%)]" />
        <img
          src="/assets/lla-hero-industrial.webp"
          alt="Catalisadores organizados em prateleiras de uma oficina industrial"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-[70%_50%] opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,21,.15),rgba(17,19,21,.8))]" />

        <div className="container relative flex min-h-[644px] flex-col items-start justify-end pb-20 pt-20 md:pb-28">
          <div className="max-w-[810px]">
            <Reveal className="eyebrow mb-7 flex items-center gap-3 text-[#e83a2d]">
              <span className="h-px w-10 bg-[#e83a2d]" /> São Leopoldo · RS
            </Reveal>

            <Reveal
              delay={0.08}
              as="h1"
              className="display max-w-[800px] text-[4.2rem] sm:text-[6rem] md:text-[8rem]"
            >
              Seu catalisador tem <span className="text-[#e83a2d]">valor.</span>
            </Reveal>

            <Reveal
              delay={0.16}
              as="p"
              className="mt-8 max-w-[500px] text-base leading-relaxed text-white/72 md:text-lg"
            >
              Avaliação direta, atendimento transparente e uma equipe pronta
              para orientar o próximo passo.
            </Reveal>

            <Reveal
              delay={0.22}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <TactileLink
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#e83a2d] px-6 py-4 text-sm font-bold text-white hover:bg-white hover:text-[#111315]"
              >
                Quero avaliar meu material <WhatsAppIcon size={17} />
              </TactileLink>
              <TactileLink
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-6 py-4 text-sm font-semibold text-white hover:border-white hover:bg-white/5"
              >
                Entenda o processo <ChevronDown size={17} />
              </TactileLink>
            </Reveal>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ScrollBounce color="rgba(255,255,255,0.4)" />
          </div>
        </div>

        <div className="absolute bottom-5 right-5 hidden font-mono text-[10px] tracking-[.16em] text-white/45 md:block">
          LLA / 01 — AVALIAÇÃO & RECICLAGEM
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Faixa de diferenciais (stagger cascade)                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-[#17191b]/15 bg-[#e83a2d] text-white">
        <Stagger className="container grid grid-cols-1 divide-y divide-white/25 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            {
              icon: <Scale size={23} />,
              eyebrow: "Critério",
              title: "Avaliação clara",
            },
            {
              icon: <ShieldCheck size={23} />,
              eyebrow: "Relação",
              title: "Atendimento direto",
            },
            {
              icon: <Clock3 size={23} />,
              eyebrow: "Local",
              title: "São Leopoldo",
            },
          ].map(({ icon, eyebrow, title }) => (
            <StaggerItem
              key={title}
              className="group flex items-center gap-4 py-6 md:px-7"
            >
              <span className="transition-transform duration-200 group-hover:scale-105">
                {icon}
              </span>
              <div>
                <div className="eyebrow text-white/65 transition-colors group-hover:text-white">
                  {eyebrow}
                </div>
                <strong className="font-display text-2xl uppercase">
                  {title}
                </strong>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Como funciona                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="como-funciona"
        className="grid-lines bg-[#f0eee9] py-24 md:py-32"
      >
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.5fr] md:gap-24">
            <Reveal>
              <div className="eyebrow red-mark mb-6">02 / sem complicação</div>
              <h2 className="display max-w-[350px] text-6xl md:text-8xl">
                Do material à decisão.
              </h2>
              <p className="mt-7 max-w-[330px] text-sm leading-7 text-[#666a6d]">
                Um processo objetivo para você entender o material, tirar
                dúvidas e escolher o melhor caminho.
              </p>
            </Reveal>

            <Stagger className="border-t border-[#17191b]/20">
              {steps.map(([number, title, text]) => (
                <StaggerItem
                  key={number}
                  className="grid gap-4 border-b border-[#17191b]/20 py-7 md:grid-cols-[90px_180px_1fr] md:items-start"
                >
                  <span className="font-mono text-sm text-[#e83a2d]">
                    {number}
                  </span>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight">
                    {title}
                  </h3>
                  <p className="max-w-[320px] text-sm leading-6 text-[#666a6d]">
                    {text}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Materiais — cards com lift + media zoom                             */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="materiais"
        className="bg-[#17191b] py-24 text-white md:py-32"
      >
        <div className="container">
          <Reveal className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="eyebrow red-mark mb-6 text-[#e83a2d]">
                03 / o que fazemos
              </div>
              <h2 className="display text-6xl md:text-8xl">
                Atenção ao <span className="text-[#e83a2d]">detalhe.</span>
              </h2>
            </div>
            <p className="max-w-[290px] text-sm leading-6 text-white/55">
              Consulte a equipe para confirmar materiais, critérios e condições
              da avaliação atual.
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-[1.2fr_.8fr]">
            {materials.map((material, index) => (
              <AnimatedCard
                key={material.label}
                as="article"
                className={cn(
                  "group relative min-h-[360px] overflow-hidden p-7 md:p-10",
                  index === 0 ? "bg-[#2b2d2e]" : "bg-[#e83a2d]"
                )}
              >
                {/* Imagem com zoom contido */}
                <div className="absolute inset-0 overflow-hidden">
                  <MediaZoom className="h-full w-full">
                    <img
                      src={material.image}
                      alt={material.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-25 mix-blend-luminosity"
                    />
                  </MediaZoom>
                </div>

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="eyebrow text-white/70">
                      {material.label}
                    </span>
                    <span className="font-mono text-xs text-white/55">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="display max-w-[380px] text-5xl md:text-6xl">
                      {material.title}
                    </h3>
                    <p className="mt-5 max-w-[360px] text-sm leading-6 text-white/70">
                      {material.text}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          {/* Lista semântica técnica para SEO & GEO */}
          <Reveal className="mt-12 border-t border-white/10 pt-10">
            <div className="grid gap-8 md:grid-cols-2">
              {acceptedMaterialsList.map(category => (
                <div key={category.category} className="space-y-4">
                  <h4 className="eyebrow flex items-center gap-2 text-white/85">
                    <span className="h-1.5 w-1.5 bg-[#e83a2d]" />
                    {category.category}
                  </h4>
                  <ul className="space-y-2.5">
                    {category.items.map(item => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-sans text-xs leading-5 text-white/65"
                      >
                        <span className="font-mono text-[#e83a2d]">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-white/45">
              <span>
                * Condições, cotações e critérios validados presencialmente na
                bancada.
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#e83a2d]">
                LLA / Triagem Técnica
              </span>
            </div>
          </Reveal>

          {/* Bloco complementar — venda de catalisadores (PRD 003) */}
          <Reveal className="mt-16 md:mt-20">
            <div
              id="venda-catalisadores"
              className="angled bg-[#f0eee9] p-7 text-[#17191b] md:p-12 lg:p-16"
            >
              <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
                {/* Área A — mensagem e ação */}
                <div>
                  <div className="eyebrow red-mark mb-6 text-[#e83a2d]">
                    04 / solução complementar
                  </div>
                  <h3 className="display max-w-[520px] text-5xl md:text-7xl">
                    Catalisador certo para o{" "}
                    <span className="text-[#e83a2d]">próximo passo.</span>
                  </h3>
                  <p className="mt-6 max-w-[480px] text-sm leading-7 text-[#666a6d] md:text-base">
                    A LLA também orienta você na compra de catalisadores.
                    Consulte as opções disponíveis para o seu veículo, confirme
                    a aplicação e fale com uma equipe que entende do assunto —
                    sem deixar de lado a reciclagem, a avaliação e a manutenção.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <TactileLink
                      href={WHATSAPP_OPCOES}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-[#e83a2d] px-6 py-4 text-sm font-bold text-white hover:bg-[#17191b]"
                    >
                      Consultar opções no WhatsApp <WhatsAppIcon size={17} />
                    </TactileLink>
                    <TactileLink
                      href="#contato"
                      className="inline-flex items-center justify-center gap-3 border border-[#17191b]/30 px-6 py-4 text-sm font-semibold text-[#17191b] hover:border-[#e83a2d] hover:text-[#e83a2d]"
                    >
                      Falar com a equipe
                    </TactileLink>
                  </div>
                  <p className="mt-5 font-mono text-[11px] leading-5 text-[#666a6d]">
                    Envie o modelo do veículo ou uma foto. A disponibilidade e
                    as condições são confirmadas diretamente pela equipe.
                  </p>
                </div>

                {/* Área B — sinais de produto (faixa técnica) */}
                <div className="border-t border-[#17191b]/20 pt-7 lg:border-l lg:border-t-0 lg:pl-12">
                  <div className="eyebrow mb-2 text-[#666a6d]">
                    O que considerar
                  </div>
                  <ul className="divide-y divide-[#17191b]/15 border-b border-[#17191b]/15">
                    {vendaSignals.map(({ icon: Icon, label, title }, index) => (
                      <li
                        key={label}
                        className="group flex items-start gap-4 py-5"
                      >
                        <span className="mt-0.5 text-[#e83a2d] transition-transform duration-200 group-hover:translate-x-1">
                          <Icon size={22} />
                        </span>
                        <div className="min-w-0">
                          <div className="eyebrow text-[#666a6d]">{label}</div>
                          <strong className="mt-1 block font-display text-xl uppercase leading-tight md:text-2xl">
                            {title}
                          </strong>
                        </div>
                        <span className="ml-auto mt-1 font-mono text-[10px] text-[#17191b]/30">
                          0{index + 1}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-[11px] leading-5 text-[#666a6d]">
                    LLA / ORIENTAÇÃO DE COMPRA — disponibilidade, aplicação e
                    condições confirmadas pela equipe.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FAQ — Dúvidas Frequentes                                           */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="faq"
        className="border-b border-[#17191b]/10 bg-[#f7f5f0] py-24 md:py-32"
      >
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.5fr] md:gap-24">
            <Reveal>
              <div className="eyebrow red-mark mb-6">
                05 / dúvidas frequentes
              </div>
              <h2 className="display max-w-[360px] text-6xl md:text-8xl">
                Perguntas <span className="text-[#e83a2d]">diretas.</span>
              </h2>
              <p className="mt-7 max-w-[330px] text-sm leading-7 text-[#666a6d]">
                Esclarecemos os critérios de compra, materiais aceitos e formas
                de pagamento para você negociar com transparência e segurança.
              </p>
              <div className="mt-8">
                <TactileLink
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-[#17191b]/30 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#17191b] hover:border-[#e83a2d] hover:bg-[#e83a2d] hover:text-white"
                >
                  Tirar outra dúvida no WhatsApp <WhatsAppIcon size={15} />
                </TactileLink>
              </div>
            </Reveal>

            <div className="divide-y divide-[#17191b]/15 border-t border-[#17191b]/15">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group py-6 open:pb-8"
                  {...(index === 0 ? { open: true } : {})}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-2xl uppercase tracking-tight text-[#17191b] transition-colors group-hover:text-[#e83a2d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e83a2d]">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#e83a2d]">
                        0{index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className="mt-1 flex-shrink-0 text-[#e83a2d] transition-transform duration-300 group-open:rotate-180"
                    />
                  </summary>
                  <p className="mt-4 max-w-[580px] pl-7 text-sm leading-relaxed text-[#55585b]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Contato                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="contato"
        className="relative overflow-hidden bg-[#f0eee9] py-24 md:py-32"
      >
        <div className="container">
          <div className="grid gap-12 md:grid-cols-[1.1fr_.9fr] md:items-end">
            <Reveal>
              <div className="eyebrow red-mark mb-6">06 / fale com a LLA</div>
              <h2 className="display max-w-[680px] text-6xl md:text-[7rem]">
                Vamos olhar isso <span className="text-[#e83a2d]">juntos?</span>
              </h2>
              <p className="mt-8 max-w-[470px] text-base leading-7 text-[#666a6d]">
                Mande uma mensagem com uma foto do material ou passe na unidade.
                A equipe orienta você sem rodeios.
              </p>
              <TactileLink
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 bg-[#17191b] px-6 py-4 text-sm font-bold text-white hover:bg-[#e83a2d]"
              >
                Chamar no WhatsApp <WhatsAppIcon size={17} />
              </TactileLink>
            </Reveal>

            <Reveal delay={0.12} className="border-t border-[#17191b]/20 pt-6">
              <div className="eyebrow mb-6 text-[#666a6d]">
                Dados de atendimento
              </div>
              <div className="space-y-5">
                <a
                  href={PHONE}
                  className="flex items-start gap-4 transition-all hover:translate-x-1 hover:text-[#e83a2d] focus-visible:translate-x-1 focus-visible:text-[#e83a2d]"
                >
                  <Phone size={18} className="mt-1 text-[#e83a2d]" />
                  <span>
                    <strong className="block font-display text-2xl uppercase">
                      (51) 98193-5442
                    </strong>
                    <small className="text-sm text-[#666a6d]">
                      Ligue ou envie uma mensagem
                    </small>
                  </span>
                </a>
                <a
                  href={MAP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 transition-all hover:translate-x-1 hover:text-[#e83a2d] focus-visible:translate-x-1 focus-visible:text-[#e83a2d]"
                >
                  <MapPin size={18} className="mt-1 text-[#e83a2d]" />
                  <span>
                    <strong className="block font-display text-2xl uppercase">
                      R. Jaime Biz, 175
                    </strong>
                    <small className="text-sm text-[#666a6d]">
                      Scharlau · São Leopoldo / RS
                    </small>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <Clock3 size={18} className="mt-1 text-[#e83a2d]" />
                  <span>
                    <strong className="block font-display text-2xl uppercase">
                      Segunda a sexta
                    </strong>
                    <small className="block text-sm text-[#666a6d]">
                      8:30 às 12:00 · 13:30 às 18:00
                    </small>
                    <small className="block text-sm text-[#666a6d]">
                      Fora desse horário, chame no WhatsApp
                    </small>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="pointer-events-none absolute -bottom-16 -right-12 hidden opacity-10 md:block">
          <img
            src="/assets/lla-logo-mark.webp"
            alt=""
            width={320}
            height={320}
            loading="lazy"
            decoding="async"
            className="h-80 w-80"
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Footer                                                              */}
      {/* ------------------------------------------------------------------ */}
      <footer className="bg-[#111315] py-10 text-white">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <a
              href="#inicio"
              aria-label="LLA Catalisadores, início"
              className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
            >
              <img
                src="/assets/lla-logo-mark.webp"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-display text-2xl font-bold text-white">
                LLA<span className="text-[#e83a2d]">.</span>
              </span>
            </a>
            <p className="mt-3 max-w-[290px] text-xs leading-5 text-white/45">
              Catalisadores e materiais automotivos. Atendimento direto em São
              Leopoldo.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-white/55 transition-all hover:-translate-y-0.5 hover:text-white focus-visible:-translate-y-0.5 focus-visible:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href={MAP}
              target="_blank"
              rel="noreferrer"
              className="eyebrow text-white/55 transition-all hover:-translate-y-0.5 hover:text-white focus-visible:-translate-y-0.5 focus-visible:text-white"
            >
              Abrir no mapa <ArrowUpRight className="ml-1 inline" size={14} />
            </a>
          </div>
        </div>
        <div className="container mt-10 border-t border-white/10 pt-5">
          <span className="font-mono text-[10px] tracking-[.14em] text-white/35">
            © {new Date().getFullYear()} LLA CATALISADORES / SÃO LEOPOLDO — RS
          </span>
        </div>
      </footer>

      {/* ------------------------------------------------------------------ */}
      {/* FAB do WhatsApp (global, fixo)                                      */}
      {/* ------------------------------------------------------------------ */}
      <WhatsAppFAB />
    </main>
  );
}
