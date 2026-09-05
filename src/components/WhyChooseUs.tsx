import React from 'react';
import { Hammer, ShieldCheck, MessageSquare, Clock, HardHat, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      icon: Hammer,
      title: "Quality Workmanship",
      desc: "We focus on reliable workmanship using appropriate construction practices and proven engineering standards."
    },
    {
      icon: ShieldCheck,
      title: "Trusted Materials",
      desc: "We aim to provide dependable, tested materials suitable for project requirements directly from verified sources."
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      desc: "Clear communication helps customers understand requirements, project scope, milestones, and realistic costs."
    },
    {
      icon: Clock,
      title: "Timely Coordination",
      desc: "We plan and coordinate material supply, equipment, and workforce to support efficient project execution."
    },
    {
      icon: HardHat,
      title: "Professional Approach",
      desc: "We focus on technical requirements, site conditions, soil stability, and client architectural expectations."
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      desc: "We believe lasting relationships are built through consistent service, honest consultation, and uncompromising trust."
    }
  ];

  return (
    <section id="why-us" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">The Aram Advantage</div>
          <h2 className="section-title">Why Choose Aram Construction &amp; Traders?</h2>
          <p className="section-subtitle">
            We operate on straightforward principles: skilled trade standards, genuine building supplies, and accountable management for every project we undertake.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="card-clean"
                style={{
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  gap: '1.25rem'
                }}
              >
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'rgba(229, 138, 19, 0.12)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Icon size={24} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.2rem', color: '#0F172A', marginBottom: '0.625rem', fontWeight: 700 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
