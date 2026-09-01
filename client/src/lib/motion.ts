/**
 * Tokens de motion — LLA Catalisadores / Oficina Editorial
 *
 * Referência: docs/guia-estilo.md → Interações e animação
 * Regra: transições 160–260ms, ease-out forte; reveal fade+12px; cascata 40ms;
 *        NUNCA animações que movem layout de forma brusca.
 */

// ---------------------------------------------------------------------------
// Durações (ms)
// ---------------------------------------------------------------------------
export const duration = {
  /** Microinterações rápidas: hover de botão, badge, ícone (160ms) */
  fast: 0.16,
  /** Reveal, slide-up, transições de UI (220ms) */
  base: 0.22,
  /** Menu mobile, FAB, elementos maiores (380ms) */
  slow: 0.38,
  /** Animações contínuas / loop — não confundir com transições de UI */
  loop: 2.4,
} as const;

// ---------------------------------------------------------------------------
// Easings (cubic-bezier)
// ---------------------------------------------------------------------------
export const ease = {
  /** Ease-out forte — padrão do projeto (var(--ease-out)) */
  out: [0.23, 1, 0.32, 1] as const,
  /** Entrada suave (menu mobile, FAB) */
  inOut: [0.45, 0, 0.55, 1] as const,
  /** Spring — botões e cards */
  spring: { type: "spring", stiffness: 380, damping: 30 } as const,
  /** Spring suave — FAB e flutuação */
  softSpring: { type: "spring", stiffness: 200, damping: 20 } as const,
} as const;

// ---------------------------------------------------------------------------
// Variantes reutilizáveis
// ---------------------------------------------------------------------------

/** Fade simples — usado quando prefers-reduced-motion está ativo */
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.base, ease: ease.out } },
  exit: { opacity: 0, transition: { duration: duration.fast, ease: ease.out } },
} as const;

/** Slide up com fade — padrão de reveal do projeto (12px conforme guia) */
export const slideUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
  exit: {
    opacity: 0,
    y: 6,
    transition: { duration: duration.fast, ease: ease.out },
  },
} as const;

/** Slide da direita — usado pelo menu mobile ("prancheta lateral") */
export const slideRightVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: duration.base, ease: ease.inOut },
  },
} as const;

/** Slide de cima — usado pelo menu mobile top-sheet em mobile estreito */
export const slideDownVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: duration.base, ease: ease.inOut },
  },
} as const;

/** Container para stagger — cascata de 40ms conforme guia */
export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.04,
    },
  },
} as const;

/** Item filho de stagger — herda do container */
export const staggerItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.out },
  },
} as const;

/** Versão reduced-motion do item filho — só opacidade */
export const staggerItemReducedVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.base, ease: ease.out },
  },
} as const;
