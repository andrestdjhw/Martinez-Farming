/* Hallmark · component: floating-cta · genre: editorial · theme: custom (Martinez Farming brand)
 * pre-emit critique: P5 H4 E4 S4 R4 V4
 * states applied: default · hover · focus-visible · active · hidden/visible (scroll-driven)
 * contrast: pass — raiz-profunda text on olivar-vivo pill
 *
 * Botón flotante que aparece al hacer scroll hacia abajo (más allá del umbral)
 * y se oculta cerca del top. Se monta en #render-floating-cta (ver footer.php + index.js).
 */

import React, { useState, useEffect } from "react"

/* ------------------------------------------------------------------
   CONFIG — edita aquí.
   ------------------------------------------------------------------ */
const CTA_LABEL = "Call us"
const PHONE_DISPLAY = "805-423-9303" // texto que se revela al hover
const CTA_HREF = "tel:+18054239303"
const SHOW_AFTER = 500 // px de scroll antes de que aparezca

function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        setVisible(window.scrollY > SHOW_AFTER)
        ticking = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll() // estado inicial por si la página carga ya scrolleada
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href={CTA_HREF}
      aria-label={`${CTA_LABEL} at ${PHONE_DISPLAY}`}
      className={`group fixed bottom-5 right-5 z-40 inline-flex items-center rounded-full bg-olivar-vivo px-4 py-3.5 font-sans font-bold text-raiz-profunda shadow-lg shadow-black/25 transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda active:scale-95 motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg
        className="h-5 w-5 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
      {/* Número: oculto por defecto, se despliega al hover/focus. */}
      <span
        aria-hidden="true"
        className="ml-0 max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:ml-2 group-hover:max-w-[12rem] group-hover:opacity-100 group-focus-visible:ml-2 group-focus-visible:max-w-[12rem] group-focus-visible:opacity-100 motion-reduce:transition-none"
      >
        {PHONE_DISPLAY}
      </span>
    </a>
  )
}

export default FloatingCTA