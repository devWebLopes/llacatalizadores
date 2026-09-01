/**
 * Animações contínuas / orgânicas (idle animations).
 *
 * - `FloatIcon` — flutuação suave para stickers e ícones.
 * - `RotateSeal`  — rotação contínua para selos e emblemas.
 * - `ScrollBounce` — indicador de scroll com bounce de atenção.
 *
 * Todos respeitam `prefers-reduced-motion`: param as animações contínuas e
 * exibem o elemento estático (sem mover).
 */
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ChevronDown } from "lucide-react";

// ---------------------------------------------------------------------------
// FloatIcon — flutuação suave em loop
// ---------------------------------------------------------------------------
interface FloatIconProps {
  children: ReactNode;
  className?: string;
  /** Amplitude do movimento em px (padrão: 7) */
  amplitude?: number;
  /** Duração de um ciclo em segundos (padrão: 2.6) */
  period?: number;
}

export function FloatIcon({
  children,
  className,
  amplitude = 7,
  period = 2.6,
}: FloatIconProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration: period,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// RotateSeal — rotação contínua
// ---------------------------------------------------------------------------
interface RotateSealProps {
  children: ReactNode;
  className?: string;
  /** Duração de uma volta completa em segundos (padrão: 18) */
  period?: number;
  /** Sentido: 'cw' (horário) | 'ccw' (anti-horário) */
  direction?: "cw" | "ccw";
}

export function RotateSeal({
  children,
  className,
  period = 18,
  direction = "cw",
}: RotateSealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ rotate: direction === "cw" ? 360 : -360 }}
      transition={{
        duration: period,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// ScrollBounce — indicador de scroll com bounce de atenção
// ---------------------------------------------------------------------------
interface ScrollBounceProps {
  className?: string;
  /** Cor do ícone (padrão: currentColor) */
  color?: string;
}

export function ScrollBounce({ className, color = "currentColor" }: ScrollBounceProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={
        reduced
          ? { opacity: [1, 0.4, 1] }
          : { y: [0, 10, 0], opacity: [0.6, 1, 0.6] }
      }
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    >
      <ChevronDown size={22} color={color} />
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// GridItemHover — transição de cor de fundo/borda em itens de grade
// ---------------------------------------------------------------------------
interface GridItemHoverProps {
  children: ReactNode;
  className?: string;
  hoverClass?: string;
}

/**
 * Wrapper para itens de grid com transição suave de cor de fundo e borda.
 * Use com classes do Tailwind para definir o estado base; o hover é controlado
 * via Framer Motion para garantir suavidade na transição.
 *
 * ```tsx
 * <GridItemHover className="bg-white border border-gray-200">
 *   Conteúdo
 * </GridItemHover>
 * ```
 */
export function GridItemHover({ children, className }: GridItemHoverProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={
        reduced
          ? undefined
          : {
              transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
            }
      }
      style={{ willChange: "background-color" }}
    >
      {children}
    </motion.div>
  );
}
