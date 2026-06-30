import Navbar from "./scripts/Navbar"
import Footer from "./scripts/Footer"
import ContactForm from "./scripts/ContactForm"
import "./scripts/home"
import React from "react"
import ReactDOM from "react-dom/client"

// Monta el Navbar en su contenedor (definido en header.php).
const navbarEl = document.querySelector("#render-navbar")
if (navbarEl) {
  ReactDOM.createRoot(navbarEl).render(<Navbar />)
}

// Monta el Footer en su contenedor (definido en footer.php).
const footerEl = document.querySelector("#render-footer")
if (footerEl) {
  ReactDOM.createRoot(footerEl).render(<Footer />)
}

// Monta el Contact Form donde exista el contenedor (ej. en la página de contacto).
const contactEl = document.querySelector("#render-contact-form")
if (contactEl) {
  ReactDOM.createRoot(contactEl).render(<ContactForm />)
}

// Las interacciones del Home (home.js) se auto-inicializan al importarse.