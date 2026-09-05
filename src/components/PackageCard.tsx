import React from 'react';
import { PackageTier } from '../data/packages';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface PackageCardProps {
  pkg: PackageTier;
  onSelect: (packageName: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelect }) => {
  return (
    <div 
      className="card-clean"
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: pkg.popular ? '2px solid var(--accent-primary)' : '1px solid var(--border-medium)',
        backgroundColor: '#FFFFFF',
        transform: pkg.popular ? 'scale(1.02)' : 'none',
        zIndex: pkg.popular ? 2 : 1
      }}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div 
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'var(--accent-primary)',
            color: '#FFFFFF',
            padding: '0.25rem 1rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            boxShadow: '0 4px 12px rgba(229, 138, 19, 0.4)'
          }}
        >
          Most Popular
        </div>
      )}

      <div style={{ padding: '2.25rem 1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ marginBottom: '1.25rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-primary)', display: 'block', marginBottom: '0.25rem' }}>
            {pkg.tag}
          </span>
          <h3 style={{ fontSize: '1.5rem', color: '#0F172A', marginBottom: '0.5rem' }}>
            {pkg.name}
          </h3>
          <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, minHeight: '42px' }}>
            {pkg.description}
          </p>
        </div>

        {/* Pricing Notice */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-sm)',
            padding: '1rem',
            marginBottom: '1.5rem',
            border: '1px dashed var(--border-medium)',
            textAlign: 'center'
          }}
        >
          <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
            Pricing Structure
          </span>
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-primary)' }}>
            {pkg.priceNote}
          </div>
          <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
            Customized BoQ based on built-up area
          </span>
        </div>

        {/* Key Highlights */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#334155', marginBottom: '0.75rem' }}>
            Package Highlights:
          </span>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {pkg.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: '#334155' }}>
                <Check size={14} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scope Specifications */}
        <div style={{ marginTop: 'auto', marginBottom: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', fontSize: '0.78rem', color: '#64748B', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div>
            <strong style={{ color: '#0F172A' }}>Structural:</strong> {pkg.structuralWorks}
          </div>
          <div>
            <strong style={{ color: '#0F172A' }}>Materials:</strong> {pkg.materialCategories}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          className={`btn btn-full ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => onSelect(pkg.name)}
        >
          <span>ENQUIRE FOR THIS PACKAGE</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};
