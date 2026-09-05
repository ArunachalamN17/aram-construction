import React from 'react';
import { GalleryItem } from '../data/gallery';
import { getAssetUrl } from '../config/siteConfig';
import { X, ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext
}) => {
  if (!isOpen || !item) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{ backgroundColor: 'rgba(5, 8, 15, 0.94)' }}
    >
      <div 
        style={{
          position: 'relative',
          maxWidth: '1080px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div 
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1rem',
            color: '#FFFFFF'
          }}
        >
          <div>
            <span className="badge badge-amber" style={{ marginRight: '0.75rem' }}>
              {item.categoryLabel}
            </span>
            <span style={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.title}</span>
          </div>

          <button 
            type="button" 
            onClick={onClose}
            aria-label="Close Lightbox"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Image Display */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            maxHeight: '75vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#0F172A',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <img 
            src={getAssetUrl(item.imageUrl)} 
            alt={item.title}
            style={{
              maxHeight: '75vh',
              maxWidth: '100%',
              objectFit: 'contain'
            }}
          />

          {/* Prev / Next Navigation Arrows */}
          <button 
            type="button" 
            onClick={onPrev}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            type="button" 
            onClick={onNext}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Description caption below */}
        <div style={{ marginTop: '0.85rem', width: '100%', textAlign: 'center', color: '#94A3B8', fontSize: '0.875rem' }}>
          {item.description}
        </div>
      </div>
    </div>
  );
};
