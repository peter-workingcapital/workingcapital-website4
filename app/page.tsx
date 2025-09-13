import Header from '../components/Header'
import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import SolutionSection from '../components/SolutionSection'
import ResultsDashboard from '../components/ResultsDashboard'
import ServiceTiers from '../components/ServiceTiers'
import SocialProof from '../components/SocialProof'
import TeamSection from '../components/TeamSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ResultsDashboard />
      <ServiceTiers />
      <SocialProof />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
