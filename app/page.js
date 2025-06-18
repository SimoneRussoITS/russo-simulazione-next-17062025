// Simone Russo

import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import SectorsSection from "../components/SectorsSection"
import HistorySection from "../components/HistorySection"
import TechnologiesSection from "../components/TechnologiesSection"
import StatsSection from "../components/StatsSection"
import Footer from "../components/Footer"

export default function HomePage() {
    return (
        <>
            <Header/>
            <main>
                <HeroSection/>
                <SectorsSection/>
                <HistorySection/>
                <TechnologiesSection/>
                <StatsSection/>
            </main>
            <Footer/>
        </>
    )
}
