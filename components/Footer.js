// Simone Russo

"use client"

import {useState} from "react"

export default function Footer() {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleNewsletterSubmit = (e) => {
        e.preventDefault()
        // Simulazione invio newsletter
        setIsSubscribed(true)
        setEmail("")
        setTimeout(() => setIsSubscribed(false), 3000)
    }

    return (
        <footer className="footer pt-5" role="contentinfo">
            <div className="container">
                <div className="row g-4">
                    {/* Company Info */}
                    <div className="col-lg-4">
                        <h3 className="h5 fw-bold mb-4 text-white">
                            Terzo Lato S.p.A.
                        </h3>
                        <p className="text-light mb-4">
                            Leader nel settore della mobilità, offriamo ogni tipo di veicolo aereo per l'aviazione e la
                            difesa dello spazio aereo
                        </p>

                        {/* Social Media */}
                        <div className="mb-4">
                            <h4 className="h6 fw-bold mb-3 text-white">Seguici sui Social</h4>
                            <div className="d-flex">
                                <a
                                    href="/"
                                    className="social-icon"
                                    aria-label="Seguici su LinkedIn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                </a>
                                <a
                                    href="/"
                                    className="social-icon"
                                    aria-label="Seguici su Twitter"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-twitter" aria-hidden="true"></i>
                                </a>
                                <a
                                    href="/"
                                    className="social-icon"
                                    aria-label="Seguici su Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a
                                    href="/"
                                    className="social-icon"
                                    aria-label="Seguici su YouTube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-youtube" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6">
                        <h4 className="h6 fw-bold mb-4 text-white">Settori</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="/" className="text-decoration-none">
                                    Aviazione
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/" className="text-decoration-none">
                                    Spazio
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/" className="text-decoration-none">
                                    Difesa
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="col-lg-2 col-md-6">
                        <h4 className="h6 fw-bold mb-4 text-white">Azienda</h4>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="/" className="text-decoration-none">
                                    Chi Siamo
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/" className="text-decoration-none">
                                    Carriere
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/" className="text-decoration-none">
                                    Blog
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/" className="text-decoration-none">
                                    Contatti
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="col-lg-4">
                        <h4 className="h6 fw-bold mb-4 text-white">Contatti</h4>
                        <div className="mb-4">
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-map-marker-alt me-3 text-primary" aria-hidden="true"></i>
                                <span>Via Roma 123, 20121 Milano, Italia</span>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-phone me-3 text-primary" aria-hidden="true"></i>
                                <a href="/" className="text-decoration-none">
                                    +39 02 1234 5678
                                </a>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-envelope me-3 text-primary" aria-hidden="true"></i>
                                <a href="/" className="text-decoration-none">
                                    info@terzolatospa.it
                                </a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h4 className="h6 fw-bold mb-3 text-white">Newsletter</h4>
                            <p className="small text-light mb-3">
                                Ricevi aggiornamenti sugli ultimi vicoli, nuove tecnologie e novità del settore.
                            </p>

                            <form onSubmit={handleNewsletterSubmit} className="mb-3">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="La tua email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        aria-label="Indirizzo email per newsletter"
                                    />
                                    <button className="btn btn-primary" type="submit"
                                            aria-label="Iscriviti alla newsletter">
                                        <i className="fas fa-paper-plane" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </form>

                            {isSubscribed && (
                                <div className="alert alert-success py-2 small" role="alert">
                                    <i className="fas fa-check me-2" aria-hidden="true"></i>
                                    Iscrizione completata con successo!
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <hr className="my-4 border-secondary"/>

                {/* Bottom Footer */}
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="small mb-0 text-light">© 2025 Terzo Lato S.p.A. - Tutti i diritti
                            riservati.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <a href="/" className="small text-decoration-none">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <span className="text-secondary">|</span>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" className="small text-decoration-none">
                                    Cookie Policy
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <span className="text-secondary">|</span>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" className="small text-decoration-none">
                                    Termini di Servizio
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
