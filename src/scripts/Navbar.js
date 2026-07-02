/* Hallmark · component: navbar · genre: editorial · theme: custom (Martinez Farming brand)
 * pre-emit critique: P5 H4 E5 S4 R5 V4
 * states applied: default · hover · focus-visible · active · open/expanded · mobile-open · disabled-ready
 * states N/A for navigation: loading · error · success (no async surface)
 * contrast: pass — text-white on raiz-profunda, raiz-profunda on tierra-suave, raiz-profunda on white
 */

import React, { useState, useEffect, useRef, useCallback } from "react"

/* ------------------------------------------------------------------
   DATOS — edita aquí, no en el markup.
   ------------------------------------------------------------------ */

// Imagotipo secundario (media library). Debe ser la versión CLARA del logo,
// porque la nav es de fondo oscuro (morado). TODO(Daniel): si re-subes el
// archivo en producción, la carpeta AAAA/MM puede cambiar — actualiza la ruta.
const LOGO_URL = "/wp-content/uploads/2026/06/MF_Imagotipo_secundario-scaled.png"

// TODO(Daniel): el correo está pendiente de migrar de Yahoo a uno de dominio.
const CONTACT = {
  phone: "805-423-9303",
  phoneHref: "tel:+18054239303",
  email: "martinezfarming@yahoo.com",
  emailHref: "mailto:martinezfarming@yahoo.com",
  // Enlace externo a Google Maps (dirección de la oficina).
  mapsHref: "https://www.google.com/maps/search/?api=1&query=1660+Circle+B+Rd+Paso+Robles+CA+93446",
  mapsLabel: "Paso Robles, CA",
}

// Handles confirmados (cuestionario). Sin TikTok.
const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/martinez_farming", icon: "instagram" },
  { name: "Facebook", href: "https://www.facebook.com/MartinezFarming/", icon: "facebook" },
  { name: "YouTube", href: "https://www.youtube.com/@MartinezFarmingLLC", icon: "youtube" },
]

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // Services se renderiza aparte (tiene dropdown).
  { label: "Contact Us", href: "/contact", cta: true },
]

// Los 4 servicios del cuestionario (copy del cliente, en inglés).
// TODO(Daniel): confirma los slugs de las páginas de servicio.
const SERVICES = [
  { name: "General Labor", desc: "Skilled field crews", href: "/services/general-labor" },
  { name: "Vineyard Installations", desc: "New & established vineyards", href: "/services/vineyard-installations" },
  { name: "Vineyard Management", desc: "Season-round stewardship", href: "/services/vineyard-management" },
  { name: "Consulting", desc: "Expert guidance", href: "/services/consulting" },
]

/* ------------------------------------------------------------------
   ICONOS — SVG inline para no añadir dependencias al theme.
   ------------------------------------------------------------------ */

const Icon = ({ name, className = "h-4 w-4" }) => {
  const common = { className, viewBox: "0 0 24 24", "aria-hidden": "true" }
  switch (name) {
    case "phone":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      )
    case "mail":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      )
    case "pin":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case "chevron":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      )
    case "menu":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      )
    case "close":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      )
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
        </svg>
      )
    case "youtube":
      return (
        <svg {...common} fill="currentColor">
          <path d="M23 12s0-3.2-.41-4.74a2.5 2.5 0 0 0-1.76-1.77C19.3 5.08 12 5.08 12 5.08s-7.3 0-8.83.41a2.5 2.5 0 0 0-1.76 1.77C1 8.8 1 12 1 12s0 3.2.41 4.74a2.5 2.5 0 0 0 1.76 1.77c1.53.41 8.83.41 8.83.41s7.3 0 8.83-.41a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12Zm-13 3.02V8.98L15.5 12 10 15.02Z" />
        </svg>
      )
    case "tiktok":
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.5c-1.2.1-2.4-.2-3.5-.8v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3h2.6Z" />
        </svg>
      )
    default:
      return null
  }
}

/* ------------------------------------------------------------------
   NAVBAR
   ------------------------------------------------------------------ */

function Navbar() {
  const [topbarVisible, setTopbarVisible] = useState(true) // se oculta al bajar, vuelve al subir
  const [servicesOpen, setServicesOpen] = useState(false) // dropdown desktop
  const [mobileOpen, setMobileOpen] = useState(false) // menú móvil
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false) // acordeón móvil
  const servicesRef = useRef(null)

  /* --- Topbar: ocultar en scroll down, mostrar en scroll up --- */
  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        if (y < 80) setTopbarVisible(true)
        else if (y > lastY + 4) setTopbarVisible(false)
        else if (y < lastY - 4) setTopbarVisible(true)
        lastY = y
        ticking = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* --- Cerrar dropdown al click fuera --- */
  useEffect(() => {
    const onClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  /* --- Escape cierra todo; bloquear scroll con menú móvil abierto --- */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const closeMobile = useCallback(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }, [])

  // utilidades de foco reutilizables (sobre fondo oscuro / claro)
  const ringDark =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-raiz-profunda rounded-sm"
  const ringLight =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-raiz-profunda focus-visible:ring-offset-2 focus-visible:ring-offset-tierra-suave rounded-sm"

  return (
    <header className="fixed inset-x-0 top-0 z-50 font-sans">
      {/* ===================== TOPBAR ===================== */}
      <div
        className={`overflow-hidden bg-tierra-suave text-raiz-profunda transition-[max-height,opacity] duration-300 ease-out ${
          topbarVisible ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[13px] sm:px-6">
          {/* Izquierda — teléfono + correo */}
          <div className="flex items-center gap-5">
            <a
              href={CONTACT.phoneHref}
              className={`group inline-flex items-center gap-2 transition-colors hover:text-noche-vinedo ${ringLight}`}
            >
              <Icon name="phone" className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100" />
              <span className="hidden font-medium sm:inline">{CONTACT.phone}</span>
            </a>
            <a
              href={CONTACT.emailHref}
              className={`group inline-flex items-center gap-2 transition-colors hover:text-noche-vinedo ${ringLight}`}
            >
              <Icon name="mail" className="h-3.5 w-3.5 opacity-70 transition-opacity group-hover:opacity-100" />
              <span className="hidden font-medium md:inline">{CONTACT.email}</span>
            </a>
          </div>

          {/* Centro — geotag clickeable (Google Maps) */}
          <a
            href={CONTACT.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-1.5 font-medium tracking-wide transition-colors hover:text-noche-vinedo ${ringLight}`}
          >
            <Icon name="pin" className="h-4 w-4 opacity-70 transition-opacity group-hover:opacity-100" />
            <span className="underline-offset-4 group-hover:underline">{CONTACT.mapsLabel}</span>
          </a>

          {/* Derecha — redes sociales */}
          <div className="flex items-center gap-1">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`grid h-7 w-7 place-items-center rounded-full text-raiz-profunda/80 transition-all hover:bg-raiz-profunda hover:text-tierra-suave active:scale-95 ${ringLight}`}
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===================== NAV PRINCIPAL (siempre sólida) ===================== */}
      <nav
        className={`border-b border-white/10 bg-gradient-to-r text-white shadow-[0_1px_24px_rgba(0,0,0,0.18)] transition-[background-color,backdrop-filter] duration-300 ${
          topbarVisible
            ? "from-raiz-profunda to-noche-vinedo"
            : "from-raiz-profunda/80 to-noche-vinedo/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo / imagotipo secundario (versión clara para fondo oscuro). */}
          <a href="/" className={`group flex items-center ${ringDark}`} aria-label="Martinez Farming — inicio">
            <img
              src={LOGO_URL}
              alt="Martinez Farming"
              className="h-9 w-auto transition-opacity group-hover:opacity-90 sm:h-10"
            />
          </a>

          {/* --- Links desktop --- */}
          <ul className="hidden items-center gap-1 lg:flex">
            <li>
              <NavItem href="/" ring={ringDark}>Home</NavItem>
            </li>
            <li>
              <NavItem href="/about" ring={ringDark}>About</NavItem>
            </li>

            {/* Services con dropdown */}
            <li
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
                className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white ${ringDark}`}
              >
                Services
                <Icon name="chevron" className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Panel */}
              <div
                className={`absolute left-0 top-full w-[22rem] origin-top pt-2 transition-all duration-200 ${
                  servicesOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                }`}
              >
                <ul className="overflow-hidden rounded-md border border-black/5 bg-white py-2 text-raiz-profunda shadow-xl">
                  {SERVICES.map((svc) => (
                    <li key={svc.name}>
                      <a
                        href={svc.href}
                        className="group flex flex-col gap-0.5 border-l-2 border-transparent px-5 py-2.5 transition-colors hover:border-olivar-vivo hover:bg-tierra-suave/25 focus-visible:bg-tierra-suave/25 focus-visible:outline-none"
                      >
                        <span className="font-display text-[15px] leading-tight text-raiz-profunda transition-colors group-hover:text-noche-vinedo">
                          {svc.name}
                        </span>
                        <span className="text-xs text-raiz-profunda/55">{svc.desc}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Locations */}
            <li>
              <NavItem href="/locations" ring={ringDark}>Locations</NavItem>
            </li>

            {/* Contact Us como botón (Work Sans Bold, por manual) */}
            <li className="ml-2">
              <a
                href="/contact"
                className={`inline-flex items-center rounded-sm border border-white/35 px-4 py-2 text-sm font-bold tracking-wide text-white transition-colors hover:bg-white hover:text-raiz-profunda active:scale-[0.98] ${ringDark}`}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* --- Toggle móvil --- */}
          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`grid h-10 w-10 place-items-center rounded-sm text-white lg:hidden ${ringDark}`}
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* ===================== MENÚ MÓVIL ===================== */}
      {/* Overlay */}
      <div
        onClick={closeMobile}
        className={`fixed inset-0 z-40 bg-raiz-honda/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      {/* Panel deslizante */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(20rem,85vw)] flex-col bg-raiz-profunda text-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <img src={LOGO_URL} alt="Martinez Farming" className="h-8 w-auto" />
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMobile}
            className={`grid h-10 w-10 place-items-center rounded-sm ${ringDark}`}
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <a href="/" onClick={closeMobile} className={`block rounded-sm px-3 py-3 text-base font-medium hover:bg-white/5 ${ringDark}`}>
            Home
          </a>
          <a href="/about" onClick={closeMobile} className={`block rounded-sm px-3 py-3 text-base font-medium hover:bg-white/5 ${ringDark}`}>
            About
          </a>

          {/* Services — acordeón */}
          <button
            type="button"
            aria-expanded={mobileServicesOpen}
            onClick={() => setMobileServicesOpen((v) => !v)}
            className={`flex w-full items-center justify-between rounded-sm px-3 py-3 text-base font-medium hover:bg-white/5 ${ringDark}`}
          >
            Services
            <Icon name="chevron" className={`h-5 w-5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
              mobileServicesOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul className="ml-3 border-l border-white/15 pl-3">
              {SERVICES.map((svc) => (
                <li key={svc.name}>
                  <a
                    href={svc.href}
                    onClick={closeMobile}
                    className={`block rounded-sm px-3 py-2.5 hover:bg-white/5 ${ringDark}`}
                  >
                    <span className="block font-display text-[15px]">{svc.name}</span>
                    <span className="block text-xs text-tierra-suave/70">{svc.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="/locations" onClick={closeMobile} className={`block rounded-sm px-3 py-3 text-base font-medium hover:bg-white/5 ${ringDark}`}>
            Locations
          </a>

          <a
            href="/contact"
            onClick={closeMobile}
            className={`mt-4 block rounded-sm border border-olivar-vivo bg-olivar-vivo px-3 py-3 text-center text-base font-bold text-raiz-profunda transition-colors hover:bg-transparent hover:text-olivar-vivo ${ringDark}`}
          >
            Contact Us
          </a>
        </nav>

        {/* Contacto + redes en el pie del drawer */}
        <div className="border-t border-white/10 px-5 py-4 text-sm text-tierra-suave">
          <a href={CONTACT.phoneHref} className="flex items-center gap-2 py-1 hover:text-white">
            <Icon name="phone" className="h-4 w-4" /> {CONTACT.phone}
          </a>
          <a href={CONTACT.emailHref} className="flex items-center gap-2 py-1 hover:text-white">
            <Icon name="mail" className="h-4 w-4" /> {CONTACT.email}
          </a>
          <div className="mt-3 flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className={`grid h-9 w-9 place-items-center rounded-full bg-white/5 transition-colors hover:bg-olivar-vivo hover:text-raiz-profunda ${ringDark}`}
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

/* Link de nav desktop con subrayado animado (acento olivar). */
function NavItem({ href, children, ring }) {
  return (
    <a
      href={href}
      className={`group relative px-3.5 py-2 text-sm font-medium text-white/85 transition-colors hover:text-white ${ring}`}
    >
      {children}
      <span className="absolute inset-x-3.5 -bottom-px h-0.5 origin-left scale-x-0 bg-olivar-vivo transition-transform duration-200 group-hover:scale-x-100" />
    </a>
  )
}

export default Navbar