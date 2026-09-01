/* Direção Llá Catalisadores: Oficina Editorial — composição assimétrica, sinais técnicos, grafite/off-white e Vermelho Catalisador. */
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Phone,
  Scale,
  ShieldCheck,
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

            <Reveal delay={0.08} as="h1" className="display max-w-[800px] text-[4.2rem] sm:text-[6rem] md:text-[8rem]">
              Seu catalisador tem <span className="text-[#e83a2d]">valor.</span>
            </Reveal>

            <Reveal delay={0.16} as="p" className="mt-8 max-w-[500px] text-base leading-relaxed text-white/72 md:text-lg">
              Avaliação direta, atendimento transparente e uma equipe pronta
              para orientar o próximo passo.
            </Reveal>

            <Reveal delay={0.22} className="mt-9 flex flex-col gap-3 sm:flex-row">
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
            { icon: <Scale size={23} />, eyebrow: "Critério", title: "Avaliação clara" },
            { icon: <ShieldCheck size={23} />, eyebrow: "Relação", title: "Atendimento direto" },
            { icon: <Clock3 size={23} />, eyebrow: "Local", title: "São Leopoldo" },
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
                <strong className="font-display text-2xl uppercase">{title}</strong>
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
                  <span className="font-mono text-sm text-[#e83a2d]">{number}</span>
                  <h3 className="font-display text-3xl font-bold uppercase tracking-tight">
                    {title}
                  </h3>
                  <p className="max-w-[320px] text-sm leading-6 text-[#666a6d]">{text}</p>
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
                    <span className="eyebrow text-white/70">{material.label}</span>
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
              <div className="eyebrow red-mark mb-6">04 / fale com a LLA</div>
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
