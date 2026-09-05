import React from 'react';
import { MessageSquare, MapPin, Calculator, Construction, CheckCheck, KeyRound } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Understand Your Requirement",
      desc: "We discuss your project requirements, space layout, budget parameters, and expectations."
    },
    {
      number: "02",
      icon: MapPin,
      title: "Site Visit & Assessment",
      desc: "Our team evaluates the physical site, soil conditions, access roads, and municipal alignments."
    },
    {
      number: "03",
      icon: Calculator,
      title: "Planning & Estimation",
      desc: "We prepare structural drawings, detailed Bill of Quantities (BoQ), and a milestone timeline."
    },
    {
      number: "04",
      icon: Construction,
      title: "Construction / Supply",
      desc: "Our civil team executes structural work or supplies bulk building materials on schedule."
    },
    {
      number: "05",
      icon: CheckCheck,
      title: "Quality Inspection",
      desc: "Reinforcement, concrete slump, curing, and masonry are checked at every milestone."
    },
    {
      number: "06",
      icon: KeyRound,
      title: "Completion & Handover",
      desc: "The completed project undergoes deep cleaning, snag clearance, and formal customer handover."
    }
  ];

  return (
    <section id="process" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Structured Delivery</div>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A transparent, six-phase work methodology designed to eliminate construction uncertainties, manage site timelines, and safeguard your investment.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Responsive */}
        <div className="timeline-grid">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="timeline-card">
                <div className="timeline-icon-box">
                  <Icon size={22} />
                  <div className="timeline-number-tag">{step.number}</div>
                </div>

                <div className="timeline-content">
                  <div className="timeline-step-label">PHASE {step.number}</div>
                  <h3 className="timeline-title">{step.title}</h3>
                  <p className="timeline-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1.25rem;
          position: relative;
        }

        .timeline-card {
          background-color: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 1.75rem 1.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all var(--transition-base);
          box-shadow: var(--shadow-xs);
        }

        .timeline-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .timeline-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-dark-surface);
          color: var(--accent-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 1.25rem;
        }

        .timeline-number-tag {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--accent-primary);
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.15rem 0.4rem;
          border-radius: var(--radius-sm);
        }

        .timeline-step-label {
          font-size: 0.6875rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-primary);
          margin-bottom: 0.35rem;
        }

        .timeline-title {
          font-size: 1rem;
          color: #0F172A;
          margin-bottom: 0.5rem;
          line-height: 1.35;
        }

        .timeline-desc {
          font-size: 0.8125rem;
          color: #64748B;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 1120px) {
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 680px) {
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }
          .timeline-card {
            flex-direction: row;
            align-items: flex-start;
            gap: 1.25rem;
            padding: 1.5rem;
          }
          .timeline-icon-box {
            margin-bottom: 0;
            flex-shrink: 0;
          }
        }
      `}</style>
    </section>
  );
};
