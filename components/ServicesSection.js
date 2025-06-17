"use client"

import { useState, useEffect } from "react"

const services = [
  {
    id: 1,
    icon: "fas fa-cloud",
    title: "Cloud Migration",
    description:
      "Migrazione sicura e ottimizzata verso il cloud con architetture scalabili e performanti per ridurre i costi e aumentare l'efficienza operativa.",
    features: ["AWS, Azure, Google Cloud", "Architetture Serverless", "Ottimizzazione Costi"],
  },
  {
    id: 2,
    icon: "fas fa-digital-tachograph",
    title: "Digital Transformation",
    description:
      "Strategia completa di trasformazione digitale per modernizzare i processi aziendali e creare nuove opportunità di business.",
    features: ["Process Automation", "Digital Strategy", "Change Management"],
  },
  {
    id: 3,
    icon: "fas fa-cogs",
    title: "DevOps & Automation",
    description:
      "Implementazione di pipeline CI/CD, automazione dei processi e cultura DevOps per accelerare il time-to-market e migliorare la qualità.",
    features: ["CI/CD Pipeline", "Infrastructure as Code", "Monitoring & Alerting"],
  },
  {
    id: 4,
    icon: "fas fa-shield-alt",
    title: "Cybersecurity",
    description:
      "Soluzioni di sicurezza avanzate per proteggere i tuoi dati e sistemi dalle minacce informatiche con approccio proattivo e reattivo.",
    features: ["Security Assessment", "Threat Detection", "Compliance & Governance"],
  },
  {
    id: 5,
    icon: "fas fa-chart-line",
    title: "Data Analytics & AI",
    description:
      "Trasforma i tuoi dati in insights strategici con soluzioni di analytics avanzate e intelligenza artificiale per decisioni data-driven.",
    features: ["Business Intelligence", "Machine Learning", "Predictive Analytics"],
  },
  {
    id: 6,
    icon: "fas fa-mobile-alt",
    title: "App Development",
    description:
      "Sviluppo di applicazioni web e mobile innovative, scalabili e user-friendly per digitalizzare i tuoi processi e raggiungere nuovi clienti.",
    features: ["Web Applications", "Mobile Apps", "Progressive Web Apps"],
  },
]

export default function ServicesSection() {
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
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".service-card-container")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servizi" className="py-5" role="region" aria-labelledby="servizi-title">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="servizi-title" className="display-4 fw-bold mb-4">
              I Nostri <span className="text-primary">Servizi</span>
            </h2>
            <p className="lead text-muted">
              Offriamo soluzioni tecnologiche complete per accompagnare la tua azienda nel percorso di trasformazione
              digitale, dall'ideazione all'implementazione.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={service.id} className="col-lg-4 col-md-6 service-card-container" data-card-id={service.id}>
              <article
                className={`service-card h-100 ${visibleCards.includes(service.id) ? "fade-in-up" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <i className={service.icon} aria-hidden="true"></i>
                </div>

                <h3 className="h4 fw-bold mb-3">{service.title}</h3>

                <p className="text-muted mb-4">{service.description}</p>

                <ul className="list-unstyled mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <i className="fas fa-check text-success me-2" aria-hidden="true"></i>
                      <small className="text-muted">{feature}</small>
                    </li>
                  ))}
                </ul>

                <a
                  href={`#servizio-${service.id}`}
                  className="btn btn-outline-primary btn-sm mt-auto"
                  role="button"
                  aria-label={`Scopri di più su ${service.title}`}
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
