import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CertificationsSection from "@/components/CertificationsSection";
import AboutSection from "@/components/AboutSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import CredentialBar from "@/components/CredentialBar";

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CertificationsSection />
      <AboutSection />
      <PlansSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
      <CredentialBar />
    </main>
  );
}
