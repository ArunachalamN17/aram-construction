import React from 'react';
import { siteConfig, getTelUrl } from '../config/siteConfig';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';

interface CTASectionProps {
  onOpenQuoteModal: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section 
      style={{
        position: 'relative',
        padding: '5.5rem 0',
        backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.88), rgba(11, 15, 25, 0.94)), url(${siteConfig.images.ctaBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(229, 138, 19, 0.2)',
              border: '1px solid rgba(229, 138, 19, 0.4)',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--accent-primary)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1.25rem'
            }}
          >
            <MessageSquare size={15} />
            <span>Ready To Start Your Project?</span>
          </div>

          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#FFFFFF',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '1.25rem'
            }}
          >
            Have a Project in Mind?
          </h2>

          <p 
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: '#CBD5E1',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Whether you are planning a new building, renovation, commercial project or need quality construction materials, Aram Construction &amp; Traders is ready to understand your requirements.
          </p>

          {/* Action Buttons */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={onOpenQuoteModal}
              id="final-quote-btn"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={getTelUrl(siteConfig.contact.primaryPhoneRaw)}
              className="btn btn-outline-white btn-lg"
              id="final-call-btn"
            >
              <Phone size={18} />
              <span>CALL US NOW</span>
            </a>
          </div>

          {/* Direct Phone Numbers Strip */}
          <div 
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              fontSize: '1rem',
              color: '#F8FAFC'
            }}
          >
            <div>
              <span style={{ color: '#94A3B8', fontSize: '0.8125rem', display: 'block' }}>Primary Line</span>
              <a href={getTelUrl(siteConfig.contact.primaryPhoneRaw)} style={{ fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                {siteConfig.contact.primaryPhone}
              </a>
            </div>

            <div style={{ width: '1px', height: '28px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

            <div>
              <span style={{ color: '#94A3B8', fontSize: '0.8125rem', display: 'block' }}>Secondary Line</span>
              <a href={getTelUrl(siteConfig.contact.secondaryPhoneRaw)} style={{ fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.02em' }}>
                {siteConfig.contact.secondaryPhone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
