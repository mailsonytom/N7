import LandingView from './components/LandingView'
import SolutionsView from './components/SolutionsView'
import BenefitsSection from './components/BenefitsSection'
import CtaCard from './components/CtaCard'
import FeaturesLightSection from './components/FeaturesLightSection'
import InsightsSection from './components/InsightsSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import ContactUsSection from './components/ContactUsSection'
import FooterSection from './components/FooterSection'

function HomePage() {
  return (
    <main className="mx-auto max-w-7xl p-6">
      <LandingView />

      <SolutionsView />

      <BenefitsSection />

      <CtaCard />

      <FeaturesLightSection />

      <InsightsSection />

      <CaseStudiesSection />

      <ContactUsSection />

      <FooterSection />

    </main >
  )
}

export default HomePage