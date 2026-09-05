import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Award, PackageCheck, Eye, Users2, ArrowRight } from 'lucide-react';

interface TrustIntroductionProps {
  onOpenQuoteModal: () => void;
}

export const TrustIntroduction: React.FC<TrustIntroductionProps> = ({ onOpenQuoteModal }) => {
  const highlights = [
    {
      icon: Award,
      title: "Quality Workmanship",
      desc: "Methodical execution following strict civil engineering codes and skilled trade practices."
    },
    {
      icon: PackageCheck,
      title: "Reliable Materials",
      desc: "Direct supply of tested cement, Fe 550D TMT bars, and laboratory-graded sand and aggregates."
    },
    {
      icon: Eye,
      title: "Transparent Service",
      desc: "Clear bill of quantities, milestone-driven schedules, and honest project communication."
    },
    {
      icon: Users2,
      title: "Customer Focus",
      desc: "Personalized construction management focused on durability, budget adherence, and trust."
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Image with architectural accent border */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <img 
                src={siteConfig.images.aboutImage} 
                alt="Aram Construction structural civil execution"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />
            </div>

            {/* Overlapping Floating Badge */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '20px',
                backgroundColor: 'var(--bg-dark-surface)',
                color: '#FFFFFF',
                padding: '1.25rem 1.75rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-lg)',
                borderLeft: '4px solid var(--accent-primary)',
                maxWidth: '280px'
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '0.25rem' }}>
                End-To-End Delivery
              </span>
              <p style={{ fontSize: '0.875rem', color: '#F1F5F9', margin: 0, fontWeight: 500 }}>
                From foundation excavation to structural completion & material supply.
              </p>
            </div>
          </div>

          {/* Right Column: Company Story & Highlights */}
          <div>
            <div className="section-eyebrow">About Aram Construction</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              Your Trusted Partner in Construction &amp; Trading
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              <strong>Aram Construction &amp; Traders</strong> is committed to delivering reliable construction services and quality construction materials with a strong focus on workmanship, transparency and customer satisfaction.
            </p>

            <p style={{ fontSize: '0.975rem', color: '#64748B', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              From construction and renovation to building material supply, we provide dependable solutions tailored to your project requirements. Whether you are building an independent villa, developing commercial real estate, or procuring bulk masonry aggregates, we stand by the integrity of our work.
            </p>

            {/* 4 Small Highlights Grid */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}
            >
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} style={{ display: 'flex', gap: '0.85rem' }}>
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--accent-light)',
                        color: 'var(--accent-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>
                        {item.title}
                      </h4>
                      <p style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.5 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={onOpenQuoteModal}
            >
              <span>DISCUSS YOUR PROJECT WITH US</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
