// Simone Russo

"use client"

export default function HistorySection() {
    return (
        <section id="la-nostra-storia">
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center mb-5">
                        <h1 className="display-4 fw-bold text-primary">Chi Siamo</h1>
                        <p className="lead">La storia dietro Terzo Lato S.p.A.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 order-lg-2">
                        <h2 className="h3 fw-bold mb-4">Dagli anni 70' ad oggi</h2>
                        <p className="mb-4">
                            Terzo Lato S.p.A. nasce nel 1975, da due fratelli aviatori con molta esperienza nel volo.
                            Fino
                            agli anni 90' l'azienda si è concentrata solo sulla vendita dei veicoli e intanto il team si
                            è
                            allargato. Dal 2001 forniamo anche soluzioni per la difesa e nel 2010 abbiamo ottenuto il
                            primo
                            dei tantissimi riconoscimenti.
                        </p>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <img src="/placeholder.svg" alt="Come funziona"
                             className="img-fluid rounded shadow w-75"/>
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-lg-6">
                        <h2 className="h3 fw-bold mb-4">La Nostra Missione</h2>
                        <p className="mb-4">
                            Terzo Lato S.p.A. nasce dalla passione per aerei ed elicotteri e la sicurezza del
                            territorio. Il
                            nostro
                            obiettivo è garantire i migliori veicoli presenti sul mercato e assicurare una sicurezza
                            avanzata grazie ai nostri radar di ultima generazione.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="/placeholder.svg"
                            alt="Team Terzo Lato"
                            className="img-fluid rounded shadow w-75"
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <h2 className="h3 fw-bold mb-4">Cura dei dettagli</h2>
                        <p className="mb-4">
                            Ogni veicolo aereo che possediamo è stato scelto con cura e selezionato per garantire la
                            massima
                            sicurezza in volo grazie a sistemi tecnologici di ultima generazione. Crediamo che ogni
                            pilota debba avere l'opportunità di volare nel massimo del comfort.
                        </p>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <img src="/placeholder.svg" alt="Come funziona"
                             className="img-fluid rounded shadow w-75"/>
                    </div>
                </div>
            </div>
        </section>
    )
}