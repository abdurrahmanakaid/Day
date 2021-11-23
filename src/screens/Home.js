import React from 'react';
import AboutSection from '../layouts/AboutSection';
import ClientsSection from '../layouts/ClientsSection';
import CtaSection from '../layouts/CtaSection';
import HeroSection from '../layouts/HeroSection';
import PortfolioSection from '../layouts/PortfolioSection';
import PricingSection from '../layouts/PricingSection';
import ServicesSection from '../layouts/ServicesSection';
import WhyUsSection from '../layouts/WhyUsSection';
import TeamSection from '../layouts/TeamSection';
import ContactSection from '../layouts/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <main id="main">
        <AboutSection />
        <WhyUsSection />
        <ClientsSection />
        <ServicesSection />
        <CtaSection />
        <PortfolioSection />
        <PricingSection />
        <TeamSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;