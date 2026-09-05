import React, { useState } from 'react';
import { packagesData } from '../data/packages';
import { PackageCard } from './PackageCard';
import { ComparePackagesModal } from './ComparePackagesModal';
import { SlidersHorizontal, Info } from 'lucide-react';

interface PackagesSectionProps {
  onOpenQuoteModal: (packageName?: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onOpenQuoteModal }) => {
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <section id="packages" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Transparent Specifications</div>
          <h2 className="section-title">Construction Packages</h2>
          <p className="section-subtitle">
            Tailored specification tiers suited to varying architectural requirements and budgets. Review our transparent scope breakdown or request a tailored estimate for your site.
          </p>
          <div style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FEF3C7', color: '#B45309', padding: '0.4rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8125rem', fontWeight: 600 }}>
            <Info size={16} />
            <span>Pricing is determined by site conditions, built-up area and custom finishes.</span>
          </div>
        </div>

        {/* Packages Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
            marginBottom: '3rem'
          }}
        >
          {packagesData.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              pkg={pkg} 
              onSelect={(name) => onOpenQuoteModal(`Package Inquiry: ${name}`)} 
            />
          ))}
        </div>

        {/* Compare Packages Action Button */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            onClick={() => setIsCompareOpen(true)}
            id="compare-packages-btn"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#FFFFFF', borderColor: 'var(--border-medium)' }}
          >
            <SlidersHorizontal size={18} color="var(--accent-primary)" />
            <span>COMPARE ALL PACKAGES SIDE-BY-SIDE</span>
          </button>
        </div>
      </div>

      {/* Comparison Modal */}
      <ComparePackagesModal 
        isOpen={isCompareOpen} 
        onClose={() => setIsCompareOpen(false)} 
        onSelectPackage={(name) => onOpenQuoteModal(name)} 
      />
    </section>
  );
};
