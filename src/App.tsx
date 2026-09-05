import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustIntroduction } from './components/TrustIntroduction';
import { TurnkeySection } from './components/TurnkeySection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CompanyHighlights } from './components/CompanyHighlights';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { QualitySection } from './components/QualitySection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuoteModal } from './components/QuoteModal';

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Residential Construction');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  return (
    <div className="app-container">
      {/* Sticky Header with Navigation & CTAs */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      <main>
        {/* Hero Section with Quick Enquiry Form */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Trusted Partner Introduction */}
        <TrustIntroduction onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Turnkey / End-to-End Solutions */}
        <TurnkeySection />

        {/* Core Construction Services */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Building Materials / Trading Division */}
        <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Why Choose Aram */}
        <WhyChooseUs />

        {/* Trust / Company Highlights */}
        <CompanyHighlights />

        {/* Construction Projects Portfolio */}
        <ProjectsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Work Process Timeline */}
        <ProcessTimeline />

        {/* Quality & Commitment */}
        <QualitySection />

        {/* Gallery */}
        <GallerySection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Final CTA Strip */}
        <CTASection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Contact Information & Full Enquiry Form */}
        <ContactSection />
      </main>

      {/* Dark Footer */}
      <Footer />

      {/* Mobile Fixed Action Bar (Call | WhatsApp | Get Quote) */}
      <MobileActionBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />

      {/* Universal Quote Dialog */}
      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultService={selectedService}
      />
    </div>
  );
};

export default App;
