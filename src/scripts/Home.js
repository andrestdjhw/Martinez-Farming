/* Home page interactions (vanilla, no React).
   Cada bloque se auto-protege: si el elemento no existe, no hace nada — así es
   seguro que se cargue en todas las páginas vía build/index.js. */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

/* ---------- 1. Reveal on enter ---------- */
function initReveals() {
  const els = document.querySelectorAll(".reveal")
  if (!els.length) return
  if (reduceMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  )
  els.forEach((el) => io.observe(el))
}

/* ---------- 2. Count-up ---------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-counter]")
  if (!counters.length) return

  const run = (el) => {
    const target = parseInt(el.getAttribute("data-target").replace(/,/g, ""), 10)
    if (isNaN(target)) return
    if (reduceMotion) {
      el.textContent = target.toLocaleString()
      return
    }
    const duration = 1400
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      el.textContent = Math.round(eased * target).toLocaleString()
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  if (!("IntersectionObserver" in window)) {
    counters.forEach(run)
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target)
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.6 }
  )
  counters.forEach((el) => io.observe(el))
}

/* ---------- 3. Season cycle (slider <-> scroll + auto-avance) ---------- */
/* ---------- 3. Season "blades" (acordeón + auto-rotación) ---------- */
function initSeasonBlades() {
  const wrap = document.getElementById("season-blades")
  if (!wrap) return
  const blades = Array.from(wrap.querySelectorAll("[data-blade]"))
  const dots = Array.from(document.querySelectorAll("[data-blade-dot]"))
  if (!blades.length) return

  let active = 0

  function setActive(idx) {
    active = idx
    blades.forEach((b, i) => {
      const on = i === idx
      b.classList.toggle("is-active", on)
      b.setAttribute("aria-expanded", on ? "true" : "false")
    })
    dots.forEach((d, i) => {
      d.classList.toggle("bg-olivar-vivo", i === idx)
      d.classList.toggle("bg-white/20", i !== idx)
    })
  }

  blades.forEach((b, i) => {
    b.addEventListener("pointerenter", () => setActive(i))
    b.addEventListener("focus", () => setActive(i))
    b.addEventListener("click", () => setActive(i))
  })

  // ---- Auto-rotación (las estaciones se apilan solas) ----
  if (reduceMotion) return

  const section = wrap.closest("[data-season]") || wrap
  const DELAY = 4000
  let timer = null
  let paused = false

  function tick() {
    if (!paused) setActive((active + 1) % blades.length)
  }
  function start() {
    if (!timer) timer = window.setInterval(tick, DELAY)
  }
  function stop() {
    if (timer) {
      window.clearInterval(timer)
      timer = null
    }
  }

  section.addEventListener("pointerenter", () => (paused = true))
  section.addEventListener("pointerleave", () => (paused = false))
  section.addEventListener("focusin", () => (paused = true))
  section.addEventListener("focusout", () => (paused = false))

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())),
      { threshold: 0.3 }
    )
    io.observe(section)
  } else {
    start()
  }
}

/* ---------- 4. Parallax ---------- */
function initParallax() {
  const layers = document.querySelectorAll("[data-parallax]")
  if (!layers.length || reduceMotion) return

  let ticking = false
  const update = () => {
    layers.forEach((layer) => {
      const section = layer.closest("section") || layer.parentElement
      const rect = section.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      // desplazamiento sutil relativo al centro de la ventana
      const offset = (rect.top - window.innerHeight / 2) * -0.08
      layer.style.transform = `scale(1.1) translateY(${offset.toFixed(1)}px)`
    })
    ticking = false
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    },
    { passive: true }
  )
  update()
}

function initHome() {
  initReveals()
  initCounters()
  initSeasonBlades()
  initParallax()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHome)
} else {
  initHome()
}