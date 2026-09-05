import React from 'react';
import { ServiceItem } from '../data/services';
import { Home, Building2, Factory, HardHat, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onEnquire: (serviceName: string) => void;
}

const iconMap: Record<string, React.FC<{ size?: number; color?: string }>> = {
  Home,
  Building2,
  Factory,
  HardHat,
  Hammer
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onEnquire }) => {
  const Icon = iconMap[service.iconName] || HardHat;

  return (
    <div className="card-clean" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Service Image */}
      <div style={{ position: 'relative', height: '230px', overflow: 'hidden' }}>
        <img 
          src={service.image} 
          alt={service.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          loading="lazy"
          className="service-card-img"
        />
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, transparent 60%)'
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            color: '#FFFFFF'
          }}
        >
          <div 
            style={{
              width: '36px',
              height: '36px',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF'
            }}
          >
            <Icon size={20} />
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Aram Construction 
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#0F172A' }}>
          {service.title}
        </h3>

        <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          {service.longDesc}
        </p>

        {/* Services Checklist */}
        <div style={{ marginBottom: '1.5rem', marginTop: 'auto' }}>
          <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#94A3B8', marginBottom: '0.75rem' }}>
            Scope Includes:
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            {service.servicesList.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8125rem', color: '#334155' }}>
                <CheckCircle2 size={13} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className="btn btn-secondary btn-full"
          onClick={() => onEnquire(service.title)}
          style={{ justifyContent: 'space-between', border: '1px solid var(--border-medium)' }}
        >
          <span>ENQUIRE NOW</span>
          <ArrowRight size={16} color="var(--accent-primary)" />
        </button>
      </div>

      <style>{`
        .card-clean:hover .service-card-img {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
};
