/* Hallmark · component: contact-form · genre: editorial · theme: custom (Martinez Farming brand)
 * pre-emit critique: P5 H4 E5 S4 R4 V4
 * states applied: default · hover · focus-visible · active · disabled · loading · error · success
 * contrast: pass — raiz-profunda text on white card; red-700 error text; white on raiz-profunda button
 *
 * DEPENDENCIAS (instalar):  npm install @emailjs/browser react-google-recaptcha
 */

import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"

/* ------------------------------------------------------------------
   CONFIGURACIÓN — rellena estas claves cuando estén listas.
   Mientras estén vacías, el envío se SIMULA (no se llama a EmailJS) para
   poder probar la UI. En cuanto pongas las 3 claves, se activa el envío real.
   ------------------------------------------------------------------ */
const EMAILJS_SERVICE_ID = ""   // TODO(Daniel)
const EMAILJS_TEMPLATE_ID = ""  // TODO(Daniel)
const EMAILJS_PUBLIC_KEY = ""   // TODO(Daniel)
const RECAPTCHA_SITE_KEY = ""   // TODO(Daniel) — déjalo vacío para ocultar el captcha en dev

// Los nombres de estos campos deben coincidir con las variables del template de EmailJS.
const TEMPLATE_PARAMS = { name: "from_name", email: "reply_to", phone: "phone", service: "service", message: "message" }

// Opciones del dropdown — los 4 servicios del cuestionario.
const SERVICE_OPTIONS = ["General Labor", "Vineyard Installations", "Vineyard Management", "Consulting"]

const isConfigured = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY)

const EMPTY = { name: "", email: "", phone: "", service: "", message: "" }

/* ------------------------------------------------------------------
   Validación
   ------------------------------------------------------------------ */
function validateForm(values) {
  const e = {}
  if (!values.name.trim()) e.name = "Please enter your name."
  if (!values.email.trim()) e.email = "Please enter your email."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email address."
  if (!values.phone.trim()) e.phone = "Please enter your phone number."
  else if (!/^[\d\s()+\-.]{7,}$/.test(values.phone)) e.phone = "Enter a valid phone number."
  if (!values.message.trim()) e.message = "Please enter a message."
  return e
}

/* ------------------------------------------------------------------
   Iconos
   ------------------------------------------------------------------ */
const Spinner = () => (
  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.37 0 0 5.37 0 12h4Z" />
  </svg>
)
const CheckIcon = ({ className = "h-6 w-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)
const AlertIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
  </svg>
)

/* ------------------------------------------------------------------
   Campo reutilizable
   ------------------------------------------------------------------ */
function Field({ id, label, type = "text", value, onChange, error, textarea, options, placeholder, ...rest }) {
  const base =
    "w-full rounded-md border bg-white px-4 py-2.5 text-raiz-profunda placeholder:text-stone-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo/60"
  const tone = error
    ? "border-red-400 focus:border-red-500"
    : "border-stone-300 hover:border-stone-400 focus:border-olivar-vivo"
  const shared = {
    id,
    name: id,
    value,
    onChange,
    "aria-invalid": error ? "true" : "false",
    "aria-describedby": error ? `${id}-error` : undefined,
  }
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-raiz-profunda">
        {label}
      </label>
      {options ? (
        <div className="relative">
          <select {...shared} className={`${base} ${tone} appearance-none pr-10 ${!value ? "text-stone-400" : ""}`} {...rest}>
            <option value="">{placeholder || "Select an option"}</option>
            {options.map((o) => (
              <option key={o} value={o} className="text-raiz-profunda">{o}</option>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      ) : textarea ? (
        <textarea {...shared} placeholder={placeholder} className={`${base} ${tone} min-h-[6rem] resize-y`} {...rest} />
      ) : (
        <input {...shared} type={type} placeholder={placeholder} className={`${base} ${tone}`} {...rest} />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
          <AlertIcon className="h-3.5 w-3.5 shrink-0" /> {error}
        </p>
      )}
    </div>
  )
}

/* ------------------------------------------------------------------
   CONTACT FORM
   ------------------------------------------------------------------ */
function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState("idle") // idle | loading | success | error
  const [captchaToken, setCaptchaToken] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const resetCaptcha = () => {
    if (recaptchaRef.current) recaptchaRef.current.reset()
    setCaptchaToken(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validateForm(values)
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    if (RECAPTCHA_SITE_KEY && !captchaToken) {
      setErrors({ captcha: "Please confirm you're not a robot." })
      return
    }
    setErrors({})
    setStatus("loading")

    try {
      if (isConfigured) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            [TEMPLATE_PARAMS.name]: values.name,
            [TEMPLATE_PARAMS.email]: values.email,
            [TEMPLATE_PARAMS.phone]: values.phone,
            [TEMPLATE_PARAMS.service]: values.service,
            [TEMPLATE_PARAMS.message]: values.message,
            "g-recaptcha-response": captchaToken || "",
          },
          { publicKey: EMAILJS_PUBLIC_KEY }
        )
      } else {
        // EmailJS sin configurar — envío simulado para probar la UI.
        console.warn("ContactForm: EmailJS sin configurar — envío simulado.")
        await new Promise((r) => setTimeout(r, 900))
      }
      setStatus("success")
      setValues(EMPTY)
      resetCaptcha()
    } catch (err) {
      console.error("ContactForm: error al enviar", err)
      setStatus("error")
      resetCaptcha()
    }
  }

  // ---- Estado de éxito ----
  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-olivar-vivo/15 text-olivar-vivo">
          <CheckIcon />
        </div>
        <h3 className="font-display text-2xl text-raiz-profunda">Thank you — message sent</h3>
        <p className="mt-2 text-stone-600">We'll be in touch shortly. Gracias por escribirnos.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center rounded-md border border-stone-300 px-5 py-2.5 text-sm font-bold text-raiz-profunda transition-colors hover:border-olivar-vivo hover:text-noche-vinedo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          Send another message
        </button>
      </div>
    )
  }

  const loading = status === "loading"

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-xl rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-olivar-vivo">Contact us</p>
        <h2 className="mt-1 font-display text-2xl text-raiz-profunda sm:text-3xl">Let's grow together</h2>
        <p className="mt-1.5 text-sm text-stone-600">Tell us about your vineyard and we'll get back to you.</p>
      </div>

      {/* Banner de error de envío */}
      {status === "error" && (
        <div role="alert" className="mb-4 flex items-start gap-2.5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          <AlertIcon className="mt-0.5 h-4 w-4 shrink-0" />
          <span>Something went wrong sending your message. Please try again, or call us at 805-423-9303.</span>
        </div>
      )}

      <div className="space-y-3">
        <Field id="name" label="Name" value={values.name} onChange={handleChange} error={errors.name} autoComplete="name" placeholder="Your name" disabled={loading} />
        <div className="grid gap-3 sm:grid-cols-2">
          <Field id="email" label="Email" type="email" value={values.email} onChange={handleChange} error={errors.email} autoComplete="email" placeholder="you@email.com" disabled={loading} />
          <Field id="phone" label="Phone" type="tel" value={values.phone} onChange={handleChange} error={errors.phone} autoComplete="tel" placeholder="(805) 000-0000" disabled={loading} />
        </div>
        <Field id="service" label="Service of interest" value={values.service} onChange={handleChange} options={SERVICE_OPTIONS} placeholder="Select a service (optional)" disabled={loading} />
        <Field id="message" label="Message" textarea value={values.message} onChange={handleChange} error={errors.message} placeholder="How can we help?" disabled={loading} />

        {/* reCAPTCHA — solo se muestra cuando hay site key configurada */}
        {RECAPTCHA_SITE_KEY && (
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              onChange={(token) => {
                setCaptchaToken(token)
                if (errors.captcha) setErrors((er) => ({ ...er, captcha: undefined }))
              }}
              onExpired={() => setCaptchaToken(null)}
            />
            {errors.captcha && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700">
                <AlertIcon className="h-3.5 w-3.5 shrink-0" /> {errors.captcha}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-raiz-profunda px-6 py-3 font-sans font-bold text-white transition-colors hover:bg-noche-vinedo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olivar-vivo focus-visible:ring-offset-2 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (<><Spinner /> Sending…</>) : "Send message"}
        </button>

        {!isConfigured && (
          <p className="text-center text-[11px] text-stone-400">
            Modo demo: el envío se simula hasta configurar EmailJS.
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm