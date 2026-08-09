import HeroSection from "../features/HeroSection.jsx";
import QuickSearch from "../features/QuickSearch.jsx";
import EmergencyFeed from "../features/EmergencyFeed.jsx";
import HowItWorks from "../features/HowItWorks.jsx";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <QuickSearch />
      <EmergencyFeed />
      <HowItWorks />
    </>
  );
}
