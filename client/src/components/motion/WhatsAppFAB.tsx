/**
 * WhatsAppFAB — Botão Flutuante de Ação oficial do WhatsApp.
 *
 * Visual: logo oficial do WhatsApp (círculo verde #25D366 + ícone branco),
 * idêntico ao widget padrão do WhatsApp Business.
 *
 * Animações:
 * 1. Entra com spring ao montar (após 0.6s de delay).
 * 2. Pulsa suavemente em idle (onda de atenção).
 * 3. Label "Fale conosco" desliza da direita ao hover.
 * 4. Scale tátil no clique.
 *
 * Acessibilidade: respeita `prefers-reduced-motion` (WCAG 2.1 AA 2.3.3).
 */
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  type Transition,
  type TargetAndTransition,
} from "framer-motion";
import { WhatsAppLogoFull } from "@/components/icons/WhatsAppIcon";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, ease } from "@/lib/motion";
import { WHATSAPP_LINK } from "@/const";

const WHATSAPP = WHATSAPP_LINK;

const labelVariants = {
  hidden: { opacity: 0, x: 10, width: 0 },
  visible: {
    opacity: 1,
    x: 0,
    width: "auto",
    transition: { duration: duration.base, ease: ease.out } as Transition,
  },
  exit: {
    opacity: 0,
    x: 10,
    width: 0,
    transition: { duration: duration.fast, ease: ease.inOut } as Transition,
  },
};

export function WhatsAppFAB() {
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();

  // ── Animação principal do botão ─────────────────────────────────────────
  let fabAnimate: TargetAndTransition;
  let fabTransition: Transition;

  if (reduced) {
    fabAnimate = { opacity: 1 };
    fabTransition = { duration: duration.base };
  } else if (hovered) {
    fabAnimate = {
      scale: 1.1,
      opacity: 1,
      filter: "drop-shadow(0 10px 28px rgba(37,211,102,0.55))",
    };
    fabTransition = { type: "spring", stiffness: 380, damping: 22 };
  } else {
    // pulso em onda no idle
    fabAnimate = {
      scale: [1, 1.08, 1],
      opacity: 1,
      filter: [
        "drop-shadow(0 4px 12px rgba(37,211,102,0.30))",
        "drop-shadow(0 4px 28px rgba(37,211,102,0.70))",
        "drop-shadow(0 4px 12px rgba(37,211,102,0.30))",
      ],
    };
    fabTransition = {
      scale: {
        duration: 2.4,
        repeat: Infinity,
        repeatDelay: 1.6,
        ease: "easeInOut" as const,
        times: [0, 0.5, 1],
      },
      filter: {
        duration: 2.4,
        repeat: Infinity,
        repeatDelay: 1.6,
        ease: "easeInOut" as const,
        times: [0, 0.5, 1],
      },
      opacity: { duration: duration.base },
    };
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center justify-end"
      role="complementary"
      aria-label="Contato via WhatsApp"
    >
      {/* Label deslizante */}
      <AnimatePresence>
        {(hovered || reduced) && (
          <motion.span
            key="fab-label"
            className="mr-3 overflow-hidden whitespace-nowrap rounded-full bg-[#111315] px-4 py-2 font-sans text-sm font-semibold text-white shadow-lg"
            initial={reduced ? { opacity: 1, x: 0 } : "hidden"}
            animate={reduced ? { opacity: 1 } : "visible"}
            exit={reduced ? undefined : "exit"}
            variants={reduced ? undefined : labelVariants}
          >
            Fale conosco
          </motion.span>
        )}
      </AnimatePresence>

      {/* Botão com logo oficial */}
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar no WhatsApp"
        className="block leading-none"
        initial={reduced ? { opacity: 0 } : { scale: 0, opacity: 0 }}
        animate={fabAnimate}
        transition={fabTransition}
        whileTap={reduced ? undefined : { scale: 0.9 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Logo completo: fundo verde + ícone branco — 56×56px */}
        <WhatsAppLogoFull size={56} />
      </motion.a>
    </div>
  );
}
