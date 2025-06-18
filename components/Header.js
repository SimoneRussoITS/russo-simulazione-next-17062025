// Simone Russo

"use client"

import {useState, useEffect} from "react"

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
                    <a className="navbar-brand" href="#home" aria-label="Terzo Lato S.p.A. - Torna alla homepage">
                        Terzo Lato S.p.A.
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
                                <a className="nav-link" href="#la-nostra-storia" aria-label="Vai alla sezione Azienda">
                                    Azienda
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#settori" aria-label="Vai alla sezione Settori">
                                    Settori
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#innovazione" aria-label="Vai alla sezione Innovazione">
                                    Innovazione
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
