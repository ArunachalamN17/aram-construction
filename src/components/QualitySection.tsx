import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const QualitySection: React.FC = () => {
  const focusAreas = [
    { title: "Quality Materials", desc: "Grade-approved cement, primary TMT steel & tested aggregates." },
    { title: "Skilled Workmanship", desc: "Trained masons, bar benders, and experienced civil engineers." },
    { title: "Proper Planning", desc: "Comprehensive structural drawings and stage-wise BoQ forecasting." },
    { title: "Transparent Communication", desc: "Regular client milestone updates with photo progress." },
    { title: "Site Safety Protocols", desc: "Mandatory protective gear and secure scaffold installations." },
    { title: "Timely Execution", desc: "Coordinated material supply and continuous site activity." },
    { title: "Customer Satisfaction", desc: "Commitment to long-lasting structural durability." }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Core Statement and Focus Pillars */}
          <div>
            <div className="section-eyebrow">Standards of Excellence</div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              Built With Quality.<br />
              <span style={{ color: 'var(--accent-primary)' }}>Delivered With Commitment.</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '2rem' }}>
              At <strong>Aram Construction &amp; Traders</strong>, we understand that construction is more than just building a structure. It is about creating something that lasts for generations with safety, aesthetic balance, and solid foundations.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {focusAreas.map((area, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>
                      {area.title}
                    </h4>
                    <p style={{ fontSize: '0.8125rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Photography Collage */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                height: '460px'
              }}
            >
              <img 
                src={siteConfig.images.qualityImage} 
                alt="Construction structural quality engineering"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>

            {/* Inset Badge */}
            <div 
              style={{
                position: 'absolute',
                top: '20px',
                left: '-20px',
                backgroundColor: 'var(--bg-dark-surface)',
                color: '#FFFFFF',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-sm)',
                boxShadow: 'var(--shadow-lg)',
                borderLeft: '4px solid var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <ShieldCheck size={28} color="var(--accent-primary)" />
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', display: 'block' }}>
                  Zero Compromise
                </span>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#F8FAFC' }}>
                  Structural Safety Standards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
