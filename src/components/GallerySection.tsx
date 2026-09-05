import React, { useState } from 'react';
import { galleryData, galleryCategories, GalleryItem } from '../data/gallery';
import { LightboxModal } from './LightboxModal';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Visual Excellence</div>
          <h2 className="section-title">Our Work in Pictures</h2>
          <p className="section-subtitle">
            A visual documentation of active construction, foundational civil engineering, material handling, and completed works.
          </p>
        </div>

        {/* Category Filters */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem'
          }}
        >
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.15rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--text-primary)' : '#FFFFFF',
                  color: isActive ? '#FFFFFF' : '#475569',
                  border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-medium)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredItems.map((item, idx) => (
            <div 
              key={item.id}
              className="gallery-item"
              onClick={() => handleOpenLightbox(idx)}
              style={{
                position: 'relative',
                height: item.aspectRatio === 'tall' ? '360px' : '260px',
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--border-light)'
              }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                loading="lazy"
                className="gallery-img"
              />

              {/* Hover Overlay */}
              <div 
                className="gallery-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(11, 15, 25, 0.75)',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '1.25rem',
                  color: '#FFFFFF'
                }}
              >
                <div style={{ alignSelf: 'flex-end' }}>
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div>
                  <span className="badge badge-amber" style={{ marginBottom: '0.4rem' }}>
                    {item.categoryLabel}
                  </span>
                  <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', marginBottom: '0.25rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.75rem', color: '#CBD5E1', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-item:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.06);
        }
      `}</style>

      {/* Lightbox Modal */}
      <LightboxModal 
        item={lightboxIndex !== null ? filteredItems[lightboxIndex] : null}
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
