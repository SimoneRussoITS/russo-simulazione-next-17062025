// Simone Russo

"use client"

import {useState, useEffect} from "react"

const stats = [
    {
        id: 1,
        number: 150,
        suffix: "+",
        label: "Clienti Seguiti",
        icon: "fas fa-users",
    },
    {
        id: 2,
        number: 98,
        suffix: "%",
        label: "Soddisfazione Clienti",
        icon: "fas fa-smile",
    },
    {
        id: 3,
        number: 50,
        suffix: "+",
        label: "Certificati Ottenuti",
        icon: "fas fa-certificate",
    },
    {
        id: 4,
        number: 24,
        suffix: "/7",
        label: "Supporto Disponibile",
        icon: "fas fa-headset",
    },
]

const reasons = [
    {
        id: 1,
        icon: "fas fa-award",
        title: "Esperienza Comprovata",
        description:
            "Oltre 50 anni di esperienza nel settore della mobilità con un track record di successi documentati.",
    },
    {
        id: 2,
        icon: "fas fa-rocket",
        title: "Innovazione Continua",
        description:
            "Investiamo costantemente in ricerca e sviluppo per offrirti sempre le tecnologie più avanzate e innovative.",
    },
    {
        id: 3,
        icon: "fas fa-handshake",
        title: "Partnership Strategiche",
        description:
            "Collaborazioni esclusive con i principali vendor tecnologici per garantirti soluzioni certificate e supporto premium.",
    },
    {
        id: 4,
        icon: "fas fa-chart-line",
        title: "Sicurezza Garantita",
        description:
            "Sistemi di difesa testati per assicurarti la maggiore sicurezza sul tuo territorio.",
    },
]

export default function StatsSection() {
    const [animatedStats, setAnimatedStats] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true)
                        animateStats()
                    }
                })
            },
            {threshold: 0.3},
        )

        const section = document.getElementById("stats-section")
        if (section) observer.observe(section)

        return () => observer.disconnect()
    }, [isVisible])

    const animateStats = () => {
        stats.forEach((stat) => {
            let current = 0
            const increment = stat.number / 50
            const timer = setInterval(() => {
                current += increment
                if (current >= stat.number) {
                    current = stat.number
                    clearInterval(timer)
                }
                setAnimatedStats((prev) => ({
                    ...prev,
                    [stat.id]: Math.floor(current),
                }))
            }, 30)
        })
    }

    return (
        <>
            {/* Stats Section */}
            <section id="stats-section" className="stats-section py-5" role="region" aria-labelledby="stats-title">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center mb-5">
                            <h2 id="stats-title" className="display-4 fw-bold mb-4 text-white">
                                I Nostri <span className="text-warning">Numeri</span>
                            </h2>
                            <p className="lead opacity-75">
                                Risultati concreti che dimostrano la qualità e l'efficacia delle nostre soluzioni.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="col-6 col-lg-3">
                                <div className="stat-item">
                                    <i className={`${stat.icon} fa-3x mb-3 text-warning`} aria-hidden="true"></i>
                                    <div className="stat-number">
                                        {animatedStats[stat.id] || 0}
                                        {stat.suffix}
                                    </div>
                                    <p className="mb-0 opacity-75">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-5" role="region" aria-labelledby="why-choose-title">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto text-center">
                            <h2 id="why-choose-title" className="display-4 fw-bold mb-4">
                                Perché Scegliere <span className="text-primary">Terzo Lato</span>
                            </h2>
                            <p className="lead text-muted">
                                Siamo il partner ideale per la tua mobilità aerea grazie alla nostra
                                esperienza, innovazione e approccio centrato sui risultati.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {reasons.map((reason, index) => (
                            <div key={reason.id} className="col-lg-6">
                                <div className="d-flex align-items-start">
                                    <div className="service-icon me-4 flex-shrink-0">
                                        <i className={reason.icon} aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h3 className="h5 fw-bold mb-3">{reason.title}</h3>
                                        <p className="text-muted mb-0">{reason.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
