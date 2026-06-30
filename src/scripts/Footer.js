/* Hallmark · component: footer · genre: editorial · theme: custom (Martinez Farming brand)
 * pre-emit critique: P5 H4 E4 S4 R5 V4
 * states applied: default · hover · focus-visible · active (links, social, back-to-top)
 * states N/A: loading · error · success (footer has no async surface)
 * contrast: pass — white/tierra-suave text on noche-vinedo; noche-honda bottom band
 */

import React from "react"

/* ------------------------------------------------------------------
   DATOS — edita aquí, no en el markup.
   ------------------------------------------------------------------ */

// Estampado de apoyo (media library). TODO(Daniel): si al migrar a producción
// re-subes el archivo, la carpeta AAAA/MM puede cambiar — actualiza esta ruta.
// Alternativa más robusta: pásalo desde functions.php con wp_localize_script.
const STAMP_URL = "/wp-content/uploads/2026/06/Estampados-MF_4-scaled.png"

// Imagotipo secundario (versión CLARA — el footer es de fondo oscuro/azul).
const LOGO_URL = "/wp-content/uploads/2026/06/MF_Imagotipo_secundario-scaled.png"

const CONTACT = {
  phone: "805-423-9303",
  phoneHref: "tel:+18054239303",
  email: "martinezfarming@yahoo.com", // TODO: pendiente migrar a correo de dominio
  emailHref: "mailto:martinezfarming@yahoo.com",
  location: "Paso Robles, CA",
  mapsHref: "#", // TODO(Daniel): enlace externo de Google Maps
}

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/martinez_farming", icon: "instagram" },
  { name: "Facebook", href: "https://facebook.com/MartinezFarming", icon: "facebook" },
  { name: "YouTube", href: "https://youtube.com/@MartinezFarmingLLC", icon: "youtube" },
  { name: "TikTok", href: "#", icon: "tiktok" }, // TODO(Daniel): URL de TikTok
]

const EXPLORE = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
]

const SERVICES = [
  { name: "General Labor", href: "/services/general-labor" },
  { name: "Vineyard Installations", href: "/services/vineyard-installations" },
  { name: "Vineyard Management", href: "/services/vineyard-management" },
  { name: "Consulting", href: "/services/consulting" },
]

// Área de servicio (cuestionario): Central Coast.
const SERVICE_AREA = "San Luis Obispo · Monterey · Santa Barbara counties"

/* ------------------------------------------------------------------
   ICONOS — SVG inline (mismo set que el Navbar; mantiene el componente
   autocontenido). Más adelante puedes extraer un módulo Icons compartido.
   ------------------------------------------------------------------ */

const Icon = ({ name, className = "h-4 w-4" }) => {
  const common = { className, viewBox: "0 0 24 24", "aria-hidden": "true" }
  const stroke = { fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }
  switch (name) {
    case "phone":
      return <svg {...common} {...stroke}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
    case "mail":
      return <svg {...common} {...stroke}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
    case "pin":
      return <svg {...common} {...stroke}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    case "arrow-up":
      return <svg {...common} {...stroke}><path d="M12 19V5M5 12l7-7 7 7" /></svg>
    case "award":
      return <svg {...common} {...stroke}><circle cx="12" cy="8" r="6" /><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12" /></svg>
    case "instagram":
      return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
    case "facebook":
      return <svg {...common} fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" /></svg>
    case "youtube":
      return <svg {...common} fill="currentColor"><path d="M23 12s0-3.2-.41-4.74a2.5 2.5 0 0 0-1.76-1.77C19.3 5.08 12 5.08 12 5.08s-7.3 0-8.83.41a2.5 2.5 0 0 0-1.76 1.77C1 8.8 1 12 1 12s0 3.2.41 4.74a2.5 2.5 0 0 0 1.76 1.77c1.53.41 8.83.41 8.83.41s7.3 0 8.83-.41a2.5 2.5 0 0 0 1.76-1.77C23 15.2 23 12 23 12Zm-13 3.02V8.98L15.5 12 10 15.02Z" /></svg>
    case "tiktok":
      return <svg {...common} fill="currentColor"><path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.5c-1.2.1-2.4-.2-3.5-.8v6.1a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.6a3 3 0 1 0 2.1 2.9V3h2.6Z" /></svg>
    default:
      return null
  }
}

/* Reutilizable: enlace de columna con micro-interacción de acento olivo. */
const ColLink = ({ href, children }) => (
  <a
    href={href}
    className="group inline-flex items-center gap-2 py-1.5 text-sm text-tierra-suave/85 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none rounded-sm"
  >
    <span className="h-px w-0 bg-olivar-vivo transition-all duration-200 group-hover:w-4" />
    <span>{children}</span>
  </a>
)

const ColHeading = ({ children }) => (
  <h3 className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-white">{children}</h3>
)

/* ------------------------------------------------------------------
   FOOTER
   ------------------------------------------------------------------ */

function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-noche-vinedo font-sans text-white">
      {/* Estampado de apoyo — marca de agua decorativa.
          Ajusta opacity / posición / tamaño aquí. Para patrón continuo:
          cambia bg-contain bg-right por bg-repeat y define un background-size. */}
      {/* Estampado de apoyo — mosaico a lo ancho del footer, escala fija para que
          no se agrande. TODO(Daniel): ajusta opacity / background-size. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-repeat"
        style={{ backgroundImage: `url("${STAMP_URL}")`, backgroundSize: "auto 200px", opacity: 0.12 }}
      />
      {/* filo de acento superior */}
      <div className="h-1 w-full bg-olivar-vivo/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* ---- Bloque superior ---- */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Marca */}
          <div className="lg:col-span-5">
            <a href="/" className="group inline-flex rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo" aria-label="Martinez Farming — inicio">
              {/* Imagotipo secundario (versión clara para fondo oscuro). */}
              <img src={LOGO_URL} alt="Martinez Farming" className="h-12 w-auto transition-opacity group-hover:opacity-90" />
            </a>

            {/* Línea de marca (firma) en inglés, roman (sin itálica). */}
            <p className="mt-6 max-w-sm font-display text-lg leading-snug text-tierra-suave">
              We don't just grow grapes. We grow trust.
            </p>

            {/* Premio — prueba social */}
            <div className="mt-6 inline-flex items-start gap-2.5 rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5">
              <Icon name="award" className="mt-0.5 h-4 w-4 shrink-0 text-olivar-vivo" />
              <span className="text-xs leading-snug text-tierra-suave">
                <span className="font-bold text-white">2026 SLO County Wine Award</span><br />
                Winegrape Grower of the Year
              </span>
            </div>

            {/* Redes */}
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-tierra-suave transition-colors hover:bg-olivar-vivo hover:text-noche-vinedo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-noche-vinedo active:scale-95"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav className="lg:col-span-2" aria-label="Footer — explore">
            <ColHeading>Explore</ColHeading>
            <ul className="flex flex-col">
              {EXPLORE.map((l) => (
                <li key={l.label}><ColLink href={l.href}>{l.label}</ColLink></li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav className="lg:col-span-3" aria-label="Footer — services">
            <ColHeading>Services</ColHeading>
            <ul className="flex flex-col">
              {SERVICES.map((s) => (
                <li key={s.name}><ColLink href={s.href}>{s.name}</ColLink></li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="lg:col-span-2">
            <ColHeading>Reach us</ColHeading>
            <ul className="flex flex-col gap-3 text-sm text-tierra-suave/85">
              <li>
                <a href={CONTACT.phoneHref} className="group inline-flex items-center gap-2.5 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none">
                  <Icon name="phone" className="h-4 w-4 text-olivar-vivo" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="group inline-flex items-center gap-2.5 break-all transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none">
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-olivar-vivo" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-2.5 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none">
                  <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-olivar-vivo" /> {CONTACT.location}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-tierra-suave/60">
              Serving the Central Coast<br />{SERVICE_AREA}
            </p>
          </div>
        </div>

        {/* ---- Barra inferior ---- */}
        <div className="relative -mx-4 border-t border-white/10 bg-noche-honda/60 px-4 sm:-mx-6 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-tierra-suave/70 sm:flex-row">
            <p>© {year} Martinez Farming LLC. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {/* TODO(Daniel): enlazar al sitio de la agencia si se desea. */}
              <span>Crafted by 828 Marketing Solutions</span>
              <button
                type="button"
                onClick={scrollTop}
                aria-label="Volver arriba"
                className="inline-flex items-center gap-1.5 rounded-sm border border-white/15 px-2.5 py-1.5 text-tierra-suave transition-colors hover:border-olivar-vivo hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 focus-visible:ring-offset-noche-honda active:scale-95"
              >
                <Icon name="arrow-up" className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer