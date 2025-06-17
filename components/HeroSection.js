"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero-section" role="banner" aria-label="Sezione principale della homepage">
      {/* Video di background placeholder */}
      <video className="hero-bg-video" autoPlay muted loop playsInline aria-hidden="true">
        <source src="/placeholder-video.mp4" type="video/mp4" />
        {/* Fallback per browser che non supportano video */}
      </video>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-8">
            <div className={`hero-content ${isVisible ? "fade-in-up" : ""}`}>
              <h1 className="hero-title">
                Trasformiamo il Futuro
                <br />
                <span className="text-warning">Digitale</span> della Tua Azienda
              </h1>

              <p className="hero-subtitle lead">
                Siamo leader nella trasformazione digitale e consulenza tecnologica. Aiutiamo le aziende a innovare,
                crescere e competere nell'era digitale con soluzioni all'avanguardia e un approccio strategico
                personalizzato.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                <a
                  href="#contatti"
                  className="btn btn-primary btn-lg"
                  role="button"
                  aria-label="Richiedi una consulenza gratuita"
                >
                  <i className="fas fa-rocket me-2" aria-hidden="true"></i>
                  Richiedi Consulenza
                </a>

                <a
                  href="#servizi"
                  className="btn btn-outline-light btn-lg"
                  role="button"
                  aria-label="Scopri tutti i nostri servizi"
                >
                  <i className="fas fa-arrow-right me-2" aria-hidden="true"></i>
                  Scopri i Servizi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
        <a
          href="#servizi"
          className="text-white text-decoration-none"
          aria-label="Scorri verso il basso per vedere i servizi"
        >
          <i className="fas fa-chevron-down fa-2x animate-bounce" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  )
}
