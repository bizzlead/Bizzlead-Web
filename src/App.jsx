import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import ContactPage from './pages/ContactPage'
import AboutUsPage from './pages/AboutUsPage'
import PlansPricingPage from './pages/PlansPricingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/pricing" element={<PlansPricingPage />} />
      </Routes>
    </Router>
  )
}

export default App
