"use client"

import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "navbar-scrolled" : ""}`}
        role="navigation"
        aria-label="Menu di navigazione principale"
      >
        <div className="container">
          <a className="navbar-brand" href="#home" aria-label="TechFlow Solutions - Torna alla homepage">
            <i className="fas fa-code me-2" aria-hidden="true"></i>
            TechFlow Solutions
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Apri menu di navigazione"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#chi-siamo" aria-label="Vai alla sezione Chi Siamo">
                  Chi Siamo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servizi" aria-label="Vai alla sezione Servizi">
                  Servizi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tecnologie" aria-label="Vai alla sezione Tecnologie">
                  Tecnologie
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#carriere" aria-label="Vai alla sezione Carriere">
                  Carriere
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contatti" aria-label="Vai alla sezione Contatti">
                  Contatti
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
