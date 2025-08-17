import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkExperienceSection } from "@/components/work-experience-section"
import { PortfolioSection } from "@/components/portofolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
