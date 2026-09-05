import React, { useState } from 'react';
import { productsData, productCategories } from '../data/products';
import { ProductCard } from './ProductCard';
import { Truck, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProductsSectionProps {
  onOpenQuoteModal: (serviceOrProduct?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? productsData
    : productsData.filter((p) => p.category === selectedCategory);

  return (
    <section 
      id="materials" 
      className="section-padding dark-theme" 
      style={{
        backgroundColor: '#0B0F19',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-eyebrow" style={{ color: 'var(--accent-primary)' }}>
            Trading &amp; Supply Division
          </div>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            Quality Building Materials. Reliable Supply.
          </h2>
          <p className="section-subtitle" style={{ color: '#94A3B8' }}>
            We supply tested construction materials to support residential, commercial and industrial projects across the region. Direct bulk sourcing and prompt site delivery.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.625rem',
            marginBottom: '3rem'
          }}
        >
          {productCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.06)',
                  color: isActive ? '#FFFFFF' : '#CBD5E1',
                  border: isActive ? '1px solid var(--accent-primary)' : '1px solid rgba(255, 255, 255, 0.12)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem'
          }}
        >
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onEnquire={(name) => onOpenQuoteModal(`Building Material: ${name}`)} 
            />
          ))}
        </div>

        {/* Prominent Material Banner CTA */}
        <div 
          style={{
            backgroundColor: '#1E293B',
            border: '1px solid rgba(229, 138, 19, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '2.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            backgroundImage: 'radial-gradient(circle at right, rgba(229, 138, 19, 0.15), transparent 70%)'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>
              <Truck size={20} />
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Bulk &amp; Project Site Supply
              </span>
            </div>
            <h3 style={{ fontSize: '1.65rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
              Looking for Building Materials in Quantity?
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Need cement bags, TMT steel bundles, M-Sand or Blue Metal trucks delivered to your construction site? Get our direct wholesale supply rate card.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => onOpenQuoteModal('Bulk Building Materials Quote')}
              id="material-quote-btn"
            >
              <span>GET MATERIAL QUOTE</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Small Trust Note */}
        <div style={{ marginTop: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: '#64748B', fontSize: '0.8125rem' }}>
          <ShieldCheck size={16} color="var(--accent-primary)" />
          <span>All materials undergo standardized testing and quality verification prior to dispatch.</span>
        </div>
      </div>
    </section>
  );
};
