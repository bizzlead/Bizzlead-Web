import Hero from '../components/Hero'
import Features from '../components/Features'
import FeaturedTabs from '../components/FeaturedTabs'
import FeaturesList from '../components/FeaturesList'
import Steps from '../components/Steps'
import FeatureCards from '../components/FeatureCards'
import Strategies from '../components/Strategies'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="App">
      <Hero />
      <Features />
      <FeaturedTabs />
      <FeaturesList />
      <Steps />
      <FeatureCards />
      <Strategies />
      <FAQ />
      <Footer />
    </div>
  )
}

export default HomePage

