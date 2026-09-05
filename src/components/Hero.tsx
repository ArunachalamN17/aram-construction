import React from 'react';
import { getAssetUrl } from '../config/siteConfig';
import { ArrowRight, ShieldCheck, CheckCircle, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'calc(var(--header-height) + 2.5rem)',
        paddingBottom: '4.5rem',
        backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.74), rgba(11, 15, 25, 0.86)), url("${getAssetUrl('Home Page.jpg')}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#FFFFFF'
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '840px' }}>
          {/* Core Value Proposition */}
          <div>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(229, 138, 19, 0.15)',
                border: '1px solid rgba(229, 138, 19, 0.4)',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--accent-primary)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(4px)'
              }}
            >
              <ShieldCheck size={16} />
              <span>ARAM CONSTRUCTION & TRADERS</span>
            </div>

            <h1 
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}
            >
              Building Trust.<br />
              <span style={{ color: 'var(--accent-primary)' }}>Delivering Quality.</span>
            </h1>

            <p 
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: '#E2E8F0',
                lineHeight: 1.65,
                marginBottom: '2.5rem',
                maxWidth: '700px'
              }}
            >
              Reliable construction and trading solutions for residential, commercial and industrial requirements. Built on engineering precision, material honesty, and turnkey transparency.
            </p>

            {/* CTAs */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.75rem'
              }}
            >
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={onOpenQuoteModal}
                id="hero-get-quote-cta"
              >
                <span>GET A FREE QUOTE</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#services"
                className="btn btn-outline-white btn-lg"
              >
                <span>EXPLORE OUR SERVICES</span>
              </a>
            </div>

            {/* Trust Strip */}
            <div 
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.18)',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1.25rem',
                fontSize: '0.9rem',
                color: '#E2E8F0',
                fontWeight: 500
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle size={16} color="var(--accent-primary)" />
                <span>Residential</span>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle size={16} color="var(--accent-primary)" />
                <span>Commercial</span>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle size={16} color="var(--accent-primary)" />
                <span>Industrial</span>
              </div>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>|</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle size={16} color="var(--accent-primary)" />
                <span>Building Materials</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        aria-label="Scroll down to About section"
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          gap: '0.25rem',
          zIndex: 2
        }}
      >
        <span>Discover</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};
