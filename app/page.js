import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import ServicesSection from "../components/ServicesSection"
import TechnologiesSection from "../components/TechnologiesSection"
import StatsSection from "../components/StatsSection"
import Footer from "../components/Footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologiesSection />
        <StatsSection />
      </main>
      <Footer />
    </>
  )
}
