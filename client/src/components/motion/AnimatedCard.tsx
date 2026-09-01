/**
 * AnimatedCard — card com efeito de "lift" (elevação) no hover.
 *
 * - Eleva -4px no eixo Y e aumenta a sombra ao passar o mouse.
 * - Zoom sutil na imagem interna via classe `.card-media` (uso opcional).
 * - Respeita `prefers-reduced-motion`: desabilita translação/scale; mantém
 *   apenas transição de opacidade de sombra.
 */
import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { ease } from "@/lib/motion";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
}

export function AnimatedCard({
  children,
  className,
  as: Tag = "div",
}: AnimatedCardProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  if (reduced) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 380, damping: 30 },
      }}
      whileTap={{ y: -2, scale: 0.995 }}
      style={{ willChange: "transform" }}
    >
      {children}
    </MotionTag>
  );
}

// ---------------------------------------------------------------------------
// MediaZoom — wrapper para imagens com zoom contido no hover
// ---------------------------------------------------------------------------
interface MediaZoomProps {
  children: ReactNode;
  className?: string;
}

/**
 * Envolve imagens ou vídeos para dar zoom sutil (1.04×) no hover do pai.
 * O contêiner pai deve ter `overflow-hidden`.
 *
 * ```tsx
 * <div className="overflow-hidden">
 *   <MediaZoom>
 *     <img src="..." />
 *   </MediaZoom>
 * </div>
 * ```
 */
export function MediaZoom({ children, className }: MediaZoomProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
      }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
