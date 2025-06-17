"use client"

import { useState } from "react"

const technologies = [
  { name: "Microsoft Azure", logo: "/placeholder.svg?height=80&width=120", category: "Cloud" },
  { name: "Amazon AWS", logo: "/placeholder.svg?height=80&width=120", category: "Cloud" },
  { name: "Google Cloud", logo: "/placeholder.svg?height=80&width=120", category: "Cloud" },
  { name: "Docker", logo: "/placeholder.svg?height=80&width=120", category: "DevOps" },
  { name: "Kubernetes", logo: "/placeholder.svg?height=80&width=120", category: "DevOps" },
  { name: "React", logo: "/placeholder.svg?height=80&width=120", category: "Frontend" },
  { name: "Node.js", logo: "/placeholder.svg?height=80&width=120", category: "Backend" },
  { name: "Python", logo: "/placeholder.svg?height=80&width=120", category: "Backend" },
]

const testimonials = [
  {
    id: 1,
    name: "Marco Rossi",
    role: "CTO",
    company: "InnovaTech S.r.l.",
    content:
      "TechFlow Solutions ha trasformato completamente la nostra infrastruttura IT. La migrazione al cloud è stata impeccabile e abbiamo ridotto i costi del 40% mantenendo performance eccellenti.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Laura Bianchi",
    role: "Digital Manager",
    company: "RetailPlus Group",
    content:
      "Professionalità e competenza straordinarie. Il team di TechFlow ha implementato una soluzione di analytics che ci ha permesso di aumentare le vendite online del 60% in soli 6 mesi.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Giuseppe Verdi",
    role: "CEO",
    company: "ManufacturingPro",
    content:
      "La loro expertise in cybersecurity ci ha salvato da potenziali attacchi. Ora dormiamo sonni tranquilli sapendo che i nostri dati sono protetti da soluzioni all'avanguardia.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TechnologiesSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section id="tecnologie" className="py-5 bg-light" role="region" aria-labelledby="tecnologie-title">
      <div className="container">
        {/* Tecnologie e Partnership */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h2 id="tecnologie-title" className="display-4 fw-bold mb-4">
              Tecnologie e <span className="text-primary">Partnership</span>
            </h2>
            <p className="lead text-muted mb-5">
              Collaboriamo con i leader tecnologici mondiali per offrirti le soluzioni più innovative e affidabili del
              mercato.
            </p>
          </div>
        </div>

        <div className="row justify-content-center mb-5">
          {technologies.map((tech, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-2 mb-4">
              <div className="text-center">
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={`Logo ${tech.name}`}
                  className="tech-logo img-fluid"
                  loading="lazy"
                />
                <small className="d-block mt-2 text-muted">{tech.category}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="h2 text-center mb-5">
              Cosa Dicono i Nostri <span className="text-primary">Clienti</span>
            </h3>

            <div className="row">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="col-lg-4 mb-4">
                  <article className="testimonial-card">
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning" aria-hidden="true"></i>
                      ))}
                      <span className="sr-only">{testimonial.rating} stelle su 5</span>
                    </div>

                    <blockquote className="mb-4">
                      <p className="fst-italic">"{testimonial.content}"</p>
                    </blockquote>

                    <footer className="d-flex align-items-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`Foto di ${testimonial.name}`}
                        className="rounded-circle me-3"
                        width="50"
                        height="50"
                        loading="lazy"
                      />
                      <div>
                        <cite className="fw-bold d-block">{testimonial.name}</cite>
                        <small className="text-muted">
                          {testimonial.role} - {testimonial.company}
                        </small>
                      </div>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
