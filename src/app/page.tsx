import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WorkExperienceSection } from "@/components/work-experience-section";
import { PortfolioSection } from "@/components/portofolio-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { StructuredData } from "./structured-data";

export const metadata = {
  title: "Rangga Dwi Mahendra - Portfolio | Backend & ML Developer",
  description:
    "Portfolio Rangga Dwi Mahendra - Informatika graduate specializing in Backend Development & Machine Learning. Explore my projects and experience.",
  openGraph: {
    title: "Rangga Dwi Mahendra - Backend & ML Developer",
    description: "Informatika graduate specializing in Backend Development & Machine Learning.",
    url: "https://ranggadwimah.vercel.app/",
    type: "website",
  },
}

export default function Home() {
  return (
    <>
      <StructuredData />
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
    </>
  );
}
