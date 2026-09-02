/**
 * Header — cabeçalho fixo com backdrop-blur dinâmico e transição de fundo.
 *
 * - Usa `useScrolled` para detectar quando aplicar efeito de "fechado".
 * - Animação de entrada do header via Framer Motion (slide-down from -100%).
 * - Menu mobile animado com `AnimatePresence` (slide-down + fade).
 * - Respeita `prefers-reduced-motion`.
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { useScrolled } from "@/hooks/useScrolled";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, ease } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { WHATSAPP_LINK } from "@/const";

const WHATSAPP = WHATSAPP_LINK;

interface HeaderProps {
  /** Links de navegação — padrão do projeto LLA */
  navLinks?: { href: string; label: string }[];
}

const DEFAULT_NAV = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#materiais", label: "Materiais" },
  { href: "#faq", label: "Dúvidas (FAQ)" },
  { href: "#contato", label: "Contato" },
];

export function Header({ navLinks = DEFAULT_NAV }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(40);
  const reduced = useReducedMotion();
  const closeMenu = () => setMenuOpen(false);

  // Variantes do header (entrada no mount)
  const headerVariants = {
    hidden: { y: reduced ? 0 : -16, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: duration.slow, ease: ease.out },
    },
  };

  // Variantes do menu mobile
  const menuVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.base } },
        exit: { opacity: 0, transition: { duration: duration.fast } },
      }
    : {
        hidden: { opacity: 0, y: -8, height: 0 },
        visible: {
          opacity: 1,
          y: 0,
          height: "auto",
          transition: { duration: duration.slow, ease: ease.out },
        },
        exit: {
          opacity: 0,
          y: -8,
          height: 0,
          transition: { duration: duration.base, ease: ease.inOut },
        },
      };

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b text-white transition-colors duration-300",
        scrolled
          ? "border-white/10 bg-[#111315]/96 backdrop-blur-xl"
          : "border-transparent bg-[#111315]/80 backdrop-blur-md"
      )}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container flex h-[76px] items-center justify-between">
        {/* Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          onClick={closeMenu}
          aria-label="LLA Catalisadores, início"
        >
          <img
            src="/assets/lla-logo-mark.webp"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            LLA<span className="text-[#e83a2d]">.</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow link-underline text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="eyebrow flex items-center gap-2 bg-[#e83a2d] px-4 py-3 font-semibold text-white hover:bg-white hover:text-[#111315]"
            whileHover={reduced ? undefined : { scale: 1.02 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          >
            Falar com a equipe <WhatsAppIcon size={15} />
          </motion.a>
        </nav>

        {/* Hamburger */}
        <motion.button
          className="text-white md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          whileTap={reduced ? undefined : { scale: 0.9 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: duration.fast }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: duration.fast }}
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-menu"
            className="overflow-hidden border-t border-white/10 bg-[#111315] px-5 pb-6 pt-4 md:hidden"
            aria-label="Navegação mobile"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="eyebrow text-white/75 hover:text-white"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12 }}
                  animate={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                  transition={{
                    duration: duration.base,
                    delay: i * 0.05,
                    ease: ease.out,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="eyebrow inline-flex items-center justify-center gap-2 bg-[#e83a2d] px-4 py-3 text-white"
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12 }}
                animate={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                whileTap={reduced ? undefined : { scale: 0.97 }}
                transition={{
                  duration: duration.base,
                  delay: navLinks.length * 0.05,
                  ease: ease.out,
                }}
              >
                Chamar no WhatsApp <WhatsAppIcon size={16} />
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
