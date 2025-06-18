// Simone Russo

"use client"

import {useEffect, useState} from "react"

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section id="home" className="hero-section" role="banner" aria-label="Sezione principale della homepage">
            <div className="container">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-8">
                        <div className={`hero-content ${isVisible ? "fade-in-up" : ""}`}>
                            <h1 className="hero-title">
                                Trasformiamo il
                                <br/>
                                <span className="text-warning">Futuro</span> della Tua Mobilità
                            </h1>

                            <p className="hero-subtitle lead">
                                Siamo leader nella mobilità e nella difesa dello spazio aereo. Aiutiamo le aziende
                                a scegliere i migliori mezzi con soluzioni all'avanguardia e un approccio strategico
                                personalizzato.
                            </p>

                            <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                                <a
                                    href="#la-nostra-storia"
                                    className="btn btn-primary btn-lg"
                                    role="button"
                                    aria-label="Scopri la nostra Storia"
                                >
                                    <i className="fas fa-rocket me-2" aria-hidden="true"></i>
                                    Scopri la nostra Storia
                                </a>

                                <a
                                    href="#settori"
                                    className="btn btn-outline-light btn-lg"
                                    role="button"
                                    aria-label="Scopri tutti i nostri settori"
                                >
                                    <i className="fas fa-arrow-right me-2" aria-hidden="true"></i>
                                    Scopri i Settori
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
                <a
                    className="text-white text-decoration-none"
                    aria-label="Scorri verso il basso per vedere i settori"
                >
                    <i className="fas fa-chevron-down fa-2x animate-bounce" aria-hidden="true"></i>
                </a>
            </div>
        </section>
    )
}
