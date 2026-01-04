import ClientScript from './ClientScript';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import CoursesSection from './CoursesSection';
import CTASection from './CTASection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <ClientScript />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CoursesSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}