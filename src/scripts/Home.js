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
    const target = parseInt(el.getAttribute("data-target"), 10)
    if (isNaN(target)) return
    if (reduceMotion) {
      el.textContent = String(target)
      return
    }
    const duration = 1400
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      el.textContent = String(Math.round(eased * target))
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

/* ---------- 3. Season cycle (slider <-> scroll) ---------- */
function initSeasonCycle() {
  const track = document.getElementById("season-track")
  const range = document.getElementById("season-range")
  if (!track || !range) return

  const stages = track.querySelectorAll(".season-stage")
  if (!stages.length) return

  let syncing = false

  // range -> scroll
  range.addEventListener("input", () => {
    syncing = true
    const idx = parseInt(range.value, 10)
    track.scrollTo({ left: stages[idx].offsetLeft - track.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" })
    window.setTimeout(() => (syncing = false), 400)
  })

  // scroll -> range
  let ticking = false
  track.addEventListener(
    "scroll",
    () => {
      if (syncing || ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const idx = Math.round(track.scrollLeft / track.clientWidth)
        if (String(idx) !== range.value) range.value = String(idx)
        ticking = false
      })
    },
    { passive: true }
  )
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
  initSeasonCycle()
  initParallax()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHome)
} else {
  initHome()
}