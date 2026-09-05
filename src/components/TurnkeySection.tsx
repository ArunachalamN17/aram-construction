import React from 'react';
import { Compass, Hammer, KeyRound, Check } from 'lucide-react';

export const TurnkeySection: React.FC = () => {
  const steps = [
    {
      stepNumber: "01",
      title: "PLAN",
      icon: Compass,
      subtitle: "Understand requirements & project scope",
      description: "We initiate every project by assessing your plot dimensions, structural expectations, architectural drawings, and realistic budget boundaries. Comprehensive planning prevents costly revisions.",
      points: [
        "Requirement discovery & site assessment",
        "Material estimation & BoQ breakdown",
        "Clear timeline & stage milestone roadmap"
      ]
    },
    {
      stepNumber: "02",
      title: "BUILD",
      icon: Hammer,
      subtitle: "Execute construction with quality practices",
      description: "Our construction engineers manage on-site civil works with calibrated materials—certified cement, Fe 550D TMT steel, and zone-graded sand—ensuring structural integrity at every pour.",
      points: [
        "Reinforced concrete framing & masonry",
        "High-grade plumbing & concealed electricals",
        "Systematic phase-wise quality inspections"
      ]
    },
    {
      stepNumber: "03",
      title: "DELIVER",
      icon: KeyRound,
      subtitle: "Complete work & final project handover",
      description: "Following thorough finishing, curing verification, and systematic multi-point checklist audits, we hand over the keys to your completed property on time and ready for occupation.",
      points: [
        "Final finish, fixtures & painting checks",
        "Service trial runs & snag rectifications",
        "Documentation & hassle-free key handover"
      ]
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Turnkey Execution</div>
          <h2 className="section-title">End-to-End Construction Solutions</h2>
          <p className="section-subtitle">
            From understanding your requirements to planning, construction, quality inspection and final handover, Aram Construction &amp; Traders aims to provide a dependable and coordinated construction experience.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.stepNumber}
                className="card-clean"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                {/* Step indicator watermark */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.5rem',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'rgba(15, 23, 42, 0.06)',
                    lineHeight: 1
                  }}
                >
                  {step.stepNumber}
                </div>

                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-dark-surface)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Icon size={26} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.08em' }}>
                    STEP {step.stepNumber}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.35rem', color: '#0F172A' }}>
                  {step.title}
                </h3>
                
                <h4 style={{ fontSize: '0.925rem', color: '#475569', fontWeight: 600, marginBottom: '1rem' }}>
                  {step.subtitle}
                </h4>

                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {step.description}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {step.points.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: '#334155' }}>
                        <Check size={15} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
