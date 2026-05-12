import LandingNavbar from "../components/landing/LandingNavbar";
import HeroSection from "../components/landing/HeroSection";
import DashboardPreview from "../components/landing/DashboardPreview";
import FeaturesSection from "../components/landing/FeaturesSection";
import DeveloperSection from "../components/landing/DeveloperSection";
import CTASection from "../components/landing/CTASection";
import LandingFooter from "../components/landing/LandingFooter";

function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <LandingNavbar />
            <HeroSection />
            <DashboardPreview />
            <FeaturesSection />
            <DeveloperSection />
            <CTASection />
            <LandingFooter />
        </div>
    );   
}

export default LandingPage;