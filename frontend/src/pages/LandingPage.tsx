import Navbar from '../components/Landing/Navbar'
import Hero from '../components/Landing/Hero'
import ProductPreview from '../components/Landing/ProductPreview'
import { WhySection, FeaturesSection } from '../components/Landing'
import HowItWorks from '../components/Landing/HowItWorks/HowItWorks'
import Testimonial from '../components/Landing/Testimonial/Testimonial'
import CTASection from '../components/layout/Footer/CTASection'

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductPreview />
            <WhySection />
            <FeaturesSection />
            <HowItWorks />
            <Testimonial />
            <CTASection />
        </>
    )
}