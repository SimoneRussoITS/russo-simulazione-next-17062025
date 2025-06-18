// Simone Russo

"use client"

import {useState} from "react"

const technologies = [
    {name: "1", logo: "/placeholder.svg?height=80&width=120"},
    {name: "2", logo: "/placeholder.svg?height=80&width=120"},
    {name: "3", logo: "/placeholder.svg?height=80&width=120"},
    {name: "4", logo: "/placeholder.svg?height=80&width=120"},
    {name: "5", logo: "/placeholder.svg?height=80&width=120"},
    {name: "6", logo: "/placeholder.svg?height=80&width=120"}
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
                            <span className="text-primary">Tecnologie</span>
                        </h2>
                        <p className="lead text-muted mb-5">
                            Collaboriamo con i leader mondiali del settore per offrirti le soluzioni più innovative e
                            affidabili del
                            mercato della mobilità aerea.
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
