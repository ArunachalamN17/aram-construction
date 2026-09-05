import React from 'react';
import { siteConfig, getTelUrl, getAssetUrl } from '../config/siteConfig';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#070A10',
        color: '#94A3B8',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4.5rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand & Intro */}
          <div style={{ maxWidth: '320px' }}>
            <div className="brand-logo" style={{ marginBottom: '1rem' }}>
              <div className="brand-icon">
                <img
                  src={getAssetUrl('Logo.jpg')}
                  alt="Aram Construction & Traders Logo"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="brand-text">
                <span className="brand-title">ARAM</span>
                <span className="brand-subtitle">CONSTRUCTION & TRADERS</span>
              </div>
            </div>

            <p style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              {siteConfig.tagline}
            </p>

            <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: '#94A3B8', marginBottom: '1.25rem' }}>
              Committed to delivering reliable civil construction and quality building materials with unmatched workmanship, transparency, and dependable project execution.
            </p>

            <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
              GST &amp; Business registrations compliant.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <li><a href="#hero" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Home</a></li>
              <li><a href="#about" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>About Us</a></li>
              <li><a href="#services" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Construction Services</a></li>
              <li><a href="#materials" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Building Materials</a></li>
              <li><a href="#packages" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Construction Packages</a></li>
              <li><a href="#projects" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Projects Portfolio</a></li>
              <li><a href="#gallery" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Work Gallery</a></li>
              <li><a href="#faq" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>FAQ</a></li>
              <li><a href="#contact" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}>Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem' }}>
              <li><a href="#services" style={{ color: '#CBD5E1' }}>Residential Construction</a></li>
              <li><a href="#services" style={{ color: '#CBD5E1' }}>Commercial Construction</a></li>
              <li><a href="#services" style={{ color: '#CBD5E1' }}>Industrial Construction</a></li>
              <li><a href="#services" style={{ color: '#CBD5E1' }}>Civil &amp; Foundation Works</a></li>
              <li><a href="#services" style={{ color: '#CBD5E1' }}>Renovation &amp; Remodeling</a></li>
              <li><a href="#materials" style={{ color: '#CBD5E1' }}>M-Sand &amp; P-Sand Supply</a></li>
              <li><a href="#materials" style={{ color: '#CBD5E1' }}>TMT Steel &amp; Cement Trading</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.02em' }}>
              Contact Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <Phone size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <a href={getTelUrl(siteConfig.contact.primaryPhoneRaw)} style={{ display: 'block', color: '#FFFFFF', fontWeight: 600 }}>
                    {siteConfig.contact.primaryPhone}
                  </a>
                  <a href={getTelUrl(siteConfig.contact.secondaryPhoneRaw)} style={{ display: 'block', color: '#94A3B8' }}>
                    {siteConfig.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${siteConfig.contact.email}`} style={{ color: '#CBD5E1' }}>
                  {siteConfig.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                {siteConfig.contact.googleMapsUrl && siteConfig.contact.googleMapsUrl !== '#' ? (
                  <a
                    href={siteConfig.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#CBD5E1', textDecoration: 'none', lineHeight: 1.5 }}
                  >
                    {siteConfig.contact.address}
                  </a>
                ) : (
                  <span style={{ color: '#CBD5E1', lineHeight: 1.5 }}>
                    {siteConfig.contact.address}
                  </span>
                )}
              </div>

              <div style={{ marginTop: '0.5rem', padding: '0.75rem', backgroundColor: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.8rem', color: '#CBD5E1' }}>
                <strong style={{ color: 'var(--accent-primary)', display: 'block' }}>Working Hours:</strong>
                {siteConfig.contact.workingHours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.8125rem'
          }}
        >
          <div>
            &copy; 2026 <strong>Aram Construction &amp; Traders</strong>. All Rights Reserved.
          </div>
          <div style={{ color: '#64748B' }}>
            Building Trust. Delivering Quality.
          </div>
        </div>
      </div>
    </footer>
  );
};
