/**
 * Reveal — componente de reveal on scroll com Framer Motion.
 *
 * Usa `whileInView` + `viewport.once` para animar ao entrar na viewport.
 * Respeita `prefers-reduced-motion`: se ativo, usa apenas fade (sem translação).
 */
import { type ElementType, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { duration, ease } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  amount?: number;
}

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  amount = 0.12,
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion(Tag as "div");

  const variants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.base, delay } },
      }
    : {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: duration.base, ease: ease.out, delay },
        },
      };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
