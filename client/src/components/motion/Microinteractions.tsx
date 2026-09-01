/**
 * Microinterações — componentes para botões, links e badges com feedback tátil.
 *
 * - `TactileButton`: scale down no tap (0.96), spring no release.
 * - `TactileLink`: translate-x no hover, transição suave de cor.
 * - `TactileBadge`: scale + brightness no hover.
 *
 * Todos respeitam `prefers-reduced-motion`.
 */
import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

// ---------------------------------------------------------------------------
// TactileButton
// ---------------------------------------------------------------------------
interface TactileButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export function TactileButton({ children, className, ...props }: TactileButtonProps) {
  const reduced = useReducedMotion();

  return (
    <motion.button
      className={className}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      whileTap={reduced ? undefined : { scale: 0.96 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      {...(props as object)}
    >
      {children}
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// TactileLink — âncora com feedback tátil
// ---------------------------------------------------------------------------
interface TactileLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

export function TactileLink({ children, className, ...props }: TactileLinkProps) {
  const reduced = useReducedMotion();

  return (
    <motion.a
      className={className}
      whileHover={reduced ? undefined : { scale: 0.98 }}
      whileTap={reduced ? undefined : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
      {...(props as object)}
    >
      {children}
    </motion.a>
  );
}

// ---------------------------------------------------------------------------
// TactileBadge — badge com scale + brightness
// ---------------------------------------------------------------------------
interface TactileBadgeProps {
  children: ReactNode;
  className?: string;
}

export function TactileBadge({ children, className }: TactileBadgeProps) {
  const reduced = useReducedMotion();

  return (
    <motion.span
      className={className}
      whileHover={
        reduced
          ? undefined
          : { scale: 1.06, transition: { type: "spring", stiffness: 380, damping: 28 } }
      }
      whileTap={reduced ? undefined : { scale: 0.96 }}
    >
      {children}
    </motion.span>
  );
}
