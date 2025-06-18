// Simone Russo

"use client"

import {useState, useEffect} from "react"

const settori = [
    {
        id: 1,
        icon: "fas fa-cloud",
        title: "Aviazione",
        description:
            "Una flotta completa formata dai migliori aerei e elicotteri di ultima generazione. Tecnologie avanzate e sistemi all'avanguardia.",
    },
    {
        id: 2,
        icon: "fas fa-digital-tachograph",
        title: "Spazio",
        description:
            "I migliori radar per il controllo perimetrale e interno del tuo territorio.",
    },
    {
        id: 3,
        icon: "fas fa-cogs",
        title: "Difesa",
        description:
            "I migliori sistemi di difesa per le tue esigenze. Dalla rilevazione di mezzi non identificati ai più sofisticati sistemi di allarme.",
    }
]

export default function SectorsSection() {
    const [visibleCards, setVisibleCards] = useState([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cardId = Number.parseInt(entry.target.dataset.cardId)
                        setVisibleCards((prev) => [...prev, cardId])
                    }
                })
            },
            {threshold: 0.1},
        )

        const cards = document.querySelectorAll(".service-card-container")
        cards.forEach((card) => observer.observe(card))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="settori" className="py-5" role="region" aria-labelledby="settori-title">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 id="settori-title" className="display-4 fw-bold mb-4">
                            I Nostri <span className="text-primary">Settori</span>
                        </h2>
                        <p className="lead text-muted">
                            Offriamo i migliori mezzi aerei con tecnologie all'avanguardia, ti aiutiamo nella scelta
                            in base alle tue esigenze e restiamo sempre disponibili anche dopo l'acquisto. 24 ore su 24,
                            7 giorni su 7.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {settori.map((s, index) => (
                        <div key={s.id} className="col-lg-4 col-md-6 service-card-container"
                             data-card-id={s.id}>
                            <article
                                className={`service-card h-100 ${visibleCards.includes(s.id) ? "fade-in-up" : ""}`}
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="service-icon">
                                    <i className={s.icon} aria-hidden="true"></i>
                                </div>

                                <h3 className="h4 fw-bold mb-3">{s.title}</h3>

                                <p className="text-muted mb-4">{s.description}</p>

                                <a
                                    href={`#servizio-${s.id}`}
                                    className="btn btn-outline-primary btn-sm mt-auto"
                                    role="button"
                                    aria-label={`Scopri di più su ${s.title}`}
                                >
                                    Scopri di più
                                    <i className="fas fa-arrow-right ms-2" aria-hidden="true"></i>
                                </a>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
