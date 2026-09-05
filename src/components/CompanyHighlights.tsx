import React from 'react';
import { ShieldCheck, CheckSquare, Layers, Users } from 'lucide-react';

export const CompanyHighlights: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "QUALITY FOCUSED",
      subtitle: "Stringent Civil Standards",
      desc: "Every foundation, beam, and wall is executed with calibrated material ratios and structural safety checks."
    },
    {
      icon: CheckSquare,
      title: "PROJECT RESPONSIBILITY",
      subtitle: "Accountable Delivery",
      desc: "Direct supervisor accountability on the job site ensures stage-wise coordination and timeline adherence."
    },
    {
      icon: Layers,
      title: "MATERIAL SUPPORT",
      subtitle: "In-House Trading Strength",
      desc: "Zero project delays resulting from material shortages, backed by our dedicated bulk building supplies network."
    },
    {
      icon: Users,
      title: "CUSTOMER CENTRIC",
      subtitle: "Clear & Honest Consultation",
      desc: "No hidden costs, no unexplained surprises. We partner with you transparently throughout the construction cycle."
    }
  ];

  return (
    <section 
      style={{
        backgroundColor: '#1E293B',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '3.5rem 0'
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2rem'
          }}
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '2px solid var(--accent-primary)',
                  paddingLeft: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.5rem' }}>
                  <Icon size={20} color="var(--accent-primary)" />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--accent-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {item.title}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '0.35rem', fontWeight: 600 }}>
                  {item.subtitle}
                </h4>
                <p style={{ fontSize: '0.825rem', color: '#94A3B8', lineHeight: 1.5, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
