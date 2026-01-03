import Header from '../components/Header'
import Footer from '../components/Footer'
import FeaturesHero from '../components/FeaturesPage/FeaturesHero'
import FeaturesServices from '../components/FeaturesPage/FeaturesServices'
import FeaturesSteps from '../components/FeaturesPage/FeaturesSteps'
import FeaturesStrategies from '../components/FeaturesPage/FeaturesStrategies'
import FeaturesCTA from '../components/FeaturesPage/FeaturesCTA'
import './FeaturesPage.css'

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <Header />
      <FeaturesHero />
      <FeaturesServices />
      <FeaturesSteps />
      <FeaturesStrategies />
      <FeaturesCTA />
      <Footer />
    </div>
  )
}

export default FeaturesPage

