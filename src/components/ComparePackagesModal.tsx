import React from 'react';
import { packageComparisonFeatures } from '../data/packages';
import { X, Check, ArrowRight } from 'lucide-react';

interface ComparePackagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (packageName: string) => void;
}

export const ComparePackagesModal: React.FC<ComparePackagesModalProps> = ({
  isOpen,
  onClose,
  onSelectPackage
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '960px', padding: '2.5rem 2rem' }}
      >
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close comparison modal"
        >
          <X size={20} />
        </button>

        <div style={{ marginBottom: '1.75rem' }}>
          <div className="section-eyebrow">Detailed Evaluation</div>
          <h3 style={{ fontSize: '1.75rem', color: '#0F172A', marginBottom: '0.5rem' }}>
            Compare Construction Packages
          </h3>
          <p style={{ color: '#64748B', fontSize: '0.9rem' }}>
            Transparent specifications for each construction tier. Material specifications can also be customized based on your architectural drawings.
          </p>
        </div>

        {/* Comparison Table */}
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid var(--border-medium)' }}>
                <th style={{ textAlign: 'left', padding: '0.85rem 1rem', color: '#1E293B', fontWeight: 700, minWidth: '180px' }}>
                  Feature / Scope
                </th>
                <th style={{ textAlign: 'center', padding: '0.85rem', color: '#1E293B', fontWeight: 700, minWidth: '130px' }}>
                  Basic
                </th>
                <th style={{ textAlign: 'center', padding: '0.85rem', color: '#B45309', backgroundColor: 'var(--accent-light)', fontWeight: 700, minWidth: '140px' }}>
                  Standard ★
                </th>
                <th style={{ textAlign: 'center', padding: '0.85rem', color: '#1E293B', fontWeight: 700, minWidth: '140px' }}>
                  Premium
                </th>
                <th style={{ textAlign: 'center', padding: '0.85rem', color: '#1E293B', fontWeight: 700, minWidth: '140px' }}>
                  Luxury
                </th>
              </tr>
            </thead>
            <tbody>
              {packageComparisonFeatures.map((row, idx) => (
                <tr 
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--border-light)',
                    backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'
                  }}
                >
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#334155' }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: '0.75rem', textAlign: 'center', color: '#64748B' }}>
                    {typeof row.basic === 'boolean' ? (row.basic ? <Check size={16} color="#16A34A" /> : '—') : row.basic}
                  </td>
                  <td style={{ padding: '0.75rem', textAlign: 'center', fontWeight: 600, color: '#1E293B', backgroundColor: 'rgba(254, 243, 199, 0.3)' }}>
                    {typeof row.standard === 'boolean' ? (row.standard ? <Check size={16} color="#16A34A" /> : '—') : row.standard}
                  </td>
                  <td style={{ padding: '0.75rem', textAlign: 'center', color: '#334155' }}>
                    {typeof row.premium === 'boolean' ? (row.premium ? <Check size={16} color="#16A34A" /> : '—') : row.premium}
                  </td>
                  <td style={{ padding: '0.75rem', textAlign: 'center', fontWeight: 600, color: '#0F172A' }}>
                    {typeof row.luxury === 'boolean' ? (row.luxury ? <Check size={16} color="#16A34A" /> : '—') : row.luxury}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Footer in Modal */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '0.85rem', color: '#64748B' }}>
            Prices vary depending on foundation depth, soil conditions, and elevation requirements.
          </span>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              onClose();
              onSelectPackage('Construction Package Consultation');
            }}
          >
            <span>DISCUSS PACKAGE PRICING</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};
