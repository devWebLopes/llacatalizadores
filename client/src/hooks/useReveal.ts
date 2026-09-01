import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";
const REVEAL_THRESHOLD = 0.15;

/**
 * Reveal on scroll via IntersectionObserver.
 *
 * - Threshold ~0.15; dispara uma única vez e faz `unobserve` após revelar.
 * - Progressive enhancement: o conteúdo é visível por padrão; a classe que
 *   oculta (`reveal-scroll`) só é aplicada quando o observer está ativo E o
 *   usuário não optou por movimento reduzido. Se o JS falhar ou o observer
 *   não existir, o conteúdo permanece visível normalmente.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: REVEAL_THRESHOLD }
    );

    for (const element of elements) {
      element.classList.add("reveal-scroll");
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);
}
