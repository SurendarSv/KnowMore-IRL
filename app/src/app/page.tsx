import ClientScript from './ClientScript';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import BlogSection from './BlogSection';
import NewsletterSection from './NewsletterSection';
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
      <BlogSection />
      <NewsletterSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}