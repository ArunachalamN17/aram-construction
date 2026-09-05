import React, { useState, useEffect } from 'react';
import { siteConfig, getTelUrl, getAssetUrl } from '../config/siteConfig';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active link calculation
      const sections = ['hero', 'about', 'services', 'materials', 'why-us', 'projects', 'process', 'gallery', 'faq', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className="container">
          <div className="header-inner">
            {/* Brand Logo & Company Name (Far Left) */}
            <a href="#hero" className="brand-logo" aria-label="Aram Construction & Traders Home">
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
            </a>

            {/* Desktop Navigation (Center/Right Area) */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <ul className="nav-menu">
                {siteConfig.navigation.map((item) => {
                  const targetId = item.href.replace('#', '');
                  const isActive = activeSection === targetId;
                  return (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={`nav-link ${isActive ? 'active' : ''}`}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="header-right">
              <button
                type="button"
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Header Media Styles */}
      <style>{`
        .header-wrapper .container {
          max-width: 1420px;
          width: 100%;
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 1.5rem;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          text-decoration: none;
        }
        .brand-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .brand-icon img {
          height: 44px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          display: block;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .brand-title {
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          line-height: 1.1;
          color: #ffffff;
        }
        .brand-subtitle {
          font-size: 0.625rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent-primary);
          white-space: nowrap;
        }
        .desktop-nav {
          display: none;
          align-items: center;
          justify-content: flex-end;
          flex: 1 1 auto;
          min-width: 0;
          margin-left: auto;
        }
        .nav-menu {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: nowrap;
        }
        .nav-link {
          white-space: nowrap;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          transition: color var(--transition-fast);
        }
        .header-right {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .mobile-toggle-btn {
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.1);
          transition: background-color var(--transition-fast);
        }
        .mobile-toggle-btn:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        /* Large screens (>= 1280px) */
        @media (min-width: 1280px) {
          .desktop-nav { display: flex !important; }
          .nav-menu { gap: 1.35rem; }
          .nav-link { font-size: 0.875rem; }
          .header-right { display: none !important; }
          .mobile-toggle-btn { display: none !important; }
        }

        /* Medium desktop / laptop (1080px - 1279px) */
        @media (min-width: 1080px) and (max-width: 1279px) {
          .desktop-nav { display: flex !important; }
          .nav-menu { gap: 0.85rem; }
          .nav-link { font-size: 0.8125rem; }
          .header-right { display: none !important; }
          .mobile-toggle-btn { display: none !important; }
        }

        /* Tablet (768px - 1079px) */
        @media (min-width: 768px) and (max-width: 1079px) {
          .desktop-nav { display: none !important; }
          .header-right { display: flex !important; }
          .mobile-toggle-btn { display: flex !important; }
        }

        /* Mobile (< 768px) */
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .header-right { display: flex !important; }
          .mobile-toggle-btn { display: flex !important; }
          .brand-icon img { height: 36px; }
          .brand-title { font-size: 1rem; }
          .brand-subtitle { font-size: 0.575rem; }
        }
      `}</style>

      {/* Mobile Menu Drawer */}
      <div
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '85%',
          maxWidth: '360px',
          backgroundColor: '#0F172A',
          zIndex: 950,
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '-8px 0 30px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem',
          overflowY: 'auto'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          <div className="brand-logo">
            <div className="brand-icon">
              <img
                src={getAssetUrl('Logo.jpg')}
                alt="Aram Construction & Traders Logo"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="brand-text">
              <span className="brand-title" style={{ fontSize: '1rem' }}>ARAM</span>
              <span className="brand-subtitle" style={{ fontSize: '0.625rem' }}>CONSTRUCTION & TRADERS</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            style={{ color: '#FFFFFF', padding: '0.5rem' }}
          >
            <X size={24} />
          </button>
        </div>

        <nav style={{ marginBottom: 'auto' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {siteConfig.navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: activeSection === item.href.replace('#', '') ? 'var(--accent-primary)' : '#FFFFFF',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    display: 'block',
                    padding: '0.4rem 0'
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            type="button"
            className="btn btn-primary btn-full"
            style={{ marginBottom: '1rem' }}
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuoteModal();
            }}
          >
            GET A FREE QUOTE
          </button>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#94A3B8' }}>
            <div>Call: <a href={getTelUrl(siteConfig.contact.primaryPhoneRaw)} style={{ color: '#FFFFFF' }}>{siteConfig.contact.primaryPhone}</a></div>
            <div>WhatsApp: <a href={`https://wa.me/${siteConfig.contact.whatsappNumberRaw}`} style={{ color: '#25D366' }}>{siteConfig.contact.whatsappNumber}</a></div>
          </div>
        </div>
      </div>

      {/* Overlay backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(3px)',
            zIndex: 940
          }}
        />
      )}
    </>
  );
};
