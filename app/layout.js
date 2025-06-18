// Simone Russo

import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css"

export const metadata = {
    title: "Terzo Lato S.p.A. - Mobilità all'avanguardia",
    description:
        "Leader nel settore della mobilità. Da anni offriamo le migliori soluzioni in ambito di aviazione, spazio e difesa.",
    keywords: "mobilità, aviazione, spazio, difesa",
    viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({children}) {
    return (
        <html lang="it">
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        </html>
    )
}
