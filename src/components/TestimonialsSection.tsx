import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldAlert } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : 0));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Client Feedback</div>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Customer trust is the foundation of our business. Honest workmanship and reliable supply create lasting partnerships.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            position: 'relative'
          }}
        >
          <div 
            className="card-clean"
            style={{
              padding: '3rem 2.5rem',
              textAlign: 'center',
              backgroundColor: '#F8FAFC',
              border: '1px solid var(--border-medium)',
              position: 'relative'
            }}
          >
            {/* Quote Icon */}
            <div 
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                backgroundColor: 'rgba(229, 138, 19, 0.15)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}
            >
              <Quote size={28} />
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.25rem' }}>
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>

            {/* Review text */}
            <p 
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: '#1E293B',
                fontStyle: 'italic',
                marginBottom: '1.75rem',
                minHeight: '80px'
              }}
            >
              "{current.reviewText}"
            </p>

            {/* Customer Name */}
            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#0F172A', fontWeight: 700, marginBottom: '0.25rem' }}>
                — {current.clientName}
              </h4>
              <span style={{ fontSize: '0.8125rem', color: '#64748B', fontWeight: 500 }}>
                {current.projectContext}
              </span>
            </div>

            {/* Placeholder Note in compliance with prompt guidelines */}
            <div 
              style={{
                marginTop: '1.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-light)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                color: '#94A3B8'
              }}
            >
              <ShieldAlert size={14} color="var(--accent-primary)" />
              <span>Authentic client testimonials will be published here upon client authorization.</span>
            </div>
          </div>

          {/* Carousel Arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-xs)'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicator Dots */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonialsData.map((_, i) => (
                <div 
                  key={i} 
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    width: currentIndex === i ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: currentIndex === i ? 'var(--accent-primary)' : '#CBD5E1',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next testimonial"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--border-medium)',
                color: '#334155',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-xs)'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
