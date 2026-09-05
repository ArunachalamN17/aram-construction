import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id || null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Direct Answers</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Clear information regarding our construction contracting capabilities, building material supply chains, and consultation process.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div 
                key={item.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: isOpen ? '1px solid var(--accent-primary)' : '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  transition: 'all var(--transition-fast)',
                  boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    textAlign: 'left',
                    color: isOpen ? 'var(--accent-primary)' : '#0F172A',
                    fontWeight: 600,
                    fontSize: '1rem'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <HelpCircle size={18} color={isOpen ? "var(--accent-primary)" : "#64748B"} style={{ flexShrink: 0 }} />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown 
                    size={20} 
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                      color: isOpen ? 'var(--accent-primary)' : '#94A3B8'
                    }} 
                  />
                </button>

                {isOpen && (
                  <div 
                    style={{
                      padding: '0 1.5rem 1.25rem 3rem',
                      color: '#475569',
                      fontSize: '0.925rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid #F1F5F9'
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Small help banner */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
            Have a question not listed here?
          </p>
          <a
            href={`tel:+${siteConfig.contact.primaryPhoneRaw}`}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#FFFFFF' }}
          >
            <PhoneCall size={14} color="var(--accent-primary)" />
            <span>Call Our Team Directly: {siteConfig.contact.primaryPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
