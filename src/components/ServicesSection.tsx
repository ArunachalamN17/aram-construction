import React from 'react';
import { servicesData } from '../data/services';
import { ServiceCard } from './ServiceCard';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Comprehensive Expertise</div>
          <h2 className="section-title">Our Core Construction Services</h2>
          <p className="section-subtitle">
            Professional construction solutions for residential, commercial and industrial requirements. Engineered with precision, structural integrity, and dedicated site supervision.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem'
          }}
        >
          {servicesData.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onEnquire={(name) => onOpenQuoteModal(name)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
