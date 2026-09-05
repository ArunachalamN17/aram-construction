import React from 'react';
import { ProductItem } from '../data/products';
import { Package, ArrowRight, Check } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  onEnquire: (productName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onEnquire }) => {
  return (
    <div 
      className="product-card"
      style={{
        backgroundColor: '#1E293B',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'all var(--transition-base)',
        boxShadow: 'var(--shadow-md)'
      }}
    >
      {/* Product Image */}
      <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
        <img 
          src={product.image} 
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          loading="lazy"
          className="prod-img"
        />
        <div 
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem'
          }}
        >
          <span 
            className="badge badge-amber"
            style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
          >
            {product.categoryLabel}
          </span>
        </div>

        <div 
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            right: '0.75rem',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(4px)',
            color: '#F8FAFC',
            fontSize: '0.75rem',
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {product.unit}
        </div>
      </div>

      {/* Product Info */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '0.5rem', fontWeight: 600 }}>
          {product.name}
        </h3>

        <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.55, marginBottom: '1rem' }}>
          {product.shortDesc}
        </p>

        {/* Specifications */}
        <div style={{ marginTop: 'auto', marginBottom: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {product.specifications.slice(0, 3).map((spec, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.775rem', color: '#CBD5E1' }}>
                <Check size={12} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => onEnquire(product.name)}
          style={{
            backgroundColor: 'rgba(229, 138, 19, 0.15)',
            color: 'var(--accent-primary)',
            border: '1px solid rgba(229, 138, 19, 0.4)',
            width: '100%',
            justifyContent: 'space-between',
            borderRadius: 'var(--radius-sm)'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Package size={14} />
            <span>ENQUIRE FOR SUPPLY</span>
          </span>
          <ArrowRight size={14} />
        </button>
      </div>

      <style>{`
        .product-card:hover {
          transform: translateY(-4px);
          border-color: rgba(229, 138, 19, 0.5);
          box-shadow: 0 12px 30px rgba(0,0,0,0.5);
        }
        .product-card:hover .prod-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};
