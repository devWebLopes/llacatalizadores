import { useEffect, useState } from "react";

/**
 * useReducedMotion — detecta preferência do sistema operacional.
 *
 * Retorna `true` quando o usuário optou por movimento reduzido.
 * Todos os componentes de animação devem consultar este hook e:
 *   - Se `true`: substituir translações/scale por opacidade simples.
 *   - Se `false`: aplicar animações completas.
 *
 * Conformidade: WCAG 2.1 — Critério 2.3.3 (Nível AA).
 */
export function useReducedMotion(): boolean {
  const query = "(prefers-reduced-motion: reduce)";

  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);

    // Compatibilidade com browsers que não suportam `addEventListener` em MQL
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    } else {
      // Fallback para Safari < 14
      mql.addListener(onChange);
      return () => mql.removeListener(onChange);
    }
  }, []);

  return reduced;
}
