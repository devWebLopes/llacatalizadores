import { useEffect, useState } from "react";

/**
 * useScrolled — detecta se o scroll ultrapassou o threshold.
 *
 * Usado pelo Header para aplicar `backdrop-blur` e transição de fundo
 * conforme guia-estilo.md (comportamento sticky dinâmico).
 *
 * @param threshold — posição em pixels a partir da qual o header "fecha" (padrão: 40)
 */
export function useScrolled(threshold = 40): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);

    // Verificação imediata (caso a página já esteja com scroll no mount)
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
