import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HelpSection } from "@/components/help-section"
import { PracticeAreasSection } from "@/components/practice-areas-section"
import { ExperienceSection } from "@/components/experience-section"
import { InsightsSection } from "@/components/insights-section"
import { AvailabilitySection } from "@/components/availability-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <HelpSection />
        <PracticeAreasSection />
        <ExperienceSection />
        <InsightsSection />
        <AvailabilitySection />
      </main>
      <Footer />
    </div>
  )
}
