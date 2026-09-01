/**
 * Stagger — container que anima filhos em cascata (40ms de atraso entre cada).
 *
 * Combinar com `StaggerItem` nos filhos, ou usar children diretos (automático).
 * Respeita `prefers-reduced-motion`: sem translação, apenas fade.
 */
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, ease } from "@/lib/motion";

// ---------------------------------------------------------------------------
// Container
// ---------------------------------------------------------------------------
interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay antes de começar a cascata (padrão: 0.04s) */
  delayChildren?: number;
  /** Atraso entre cada filho (padrão: 0.04s = 40ms) */
  staggerChildren?: number;
  /** Fração visível para disparar (padrão: 0.1) */
  amount?: number;
}

export function Stagger({
  children,
  className,
  delayChildren = 0.04,
  staggerChildren = 0.04,
  amount = 0.1,
}: StaggerProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Item filho
// ---------------------------------------------------------------------------
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export function StaggerItem({
  children,
  className,
  as: Tag = "div",
}: StaggerItemProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  const variants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: duration.base, ease: ease.out },
        },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: duration.base, ease: ease.out },
        },
      };

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
