import React, { useState } from 'react';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '../config/siteConfig';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    serviceRequired: 'Residential Construction',
    projectLocation: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else {
      const cleaned = formData.phoneNumber.replace(/[\s\-\(\)\+]/g, '');
      if (cleaned.length < 10) {
        errs.phoneNumber = 'Please enter a valid 10-digit phone number';
      }
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please choose a service';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your enquiry';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Backend / Email integration endpoint
      console.log('--- Aram Construction Contact Submission ---', formData);

      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setErrors({ form: 'Unable to submit enquiry right now. Please call us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Direct Contact</div>
          <h2 className="section-title">Let's Build Something Great Together</h2>
          <p className="section-subtitle">
            Have a construction project or looking for quality building materials? Our team is ready to understand your requirements and provide the right solution.
          </p>
        </div>

        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Official Contact Information */}
          <div>
            <div 
              style={{
                backgroundColor: 'var(--bg-dark-surface)',
                color: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem 2rem',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '0.5rem' }}>
                Official Business Office
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '1.5rem' }}>
                {siteConfig.companyName}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Phone Numbers */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(229, 138, 19, 0.2)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Call Us Directly
                    </span>
                    <a href={getTelUrl(siteConfig.contact.primaryPhoneRaw)} style={{ display: 'block', color: '#FFFFFF', fontWeight: 600, fontSize: '1.05rem', margin: '0.15rem 0' }}>
                      {siteConfig.contact.primaryPhone}
                    </a>
                    <a href={getTelUrl(siteConfig.contact.secondaryPhoneRaw)} style={{ display: 'block', color: '#CBD5E1', fontSize: '0.95rem' }}>
                      {siteConfig.contact.secondaryPhone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(229, 138, 19, 0.2)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Email Inquiries
                    </span>
                    <a href={`mailto:${siteConfig.contact.email}`} style={{ color: '#FFFFFF', fontWeight: 500, fontSize: '0.95rem' }}>
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(229, 138, 19, 0.2)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Operational Location
                    </span>
                    <p style={{ color: '#CBD5E1', fontSize: '0.9rem', margin: '0.15rem 0 0.4rem 0', lineHeight: 1.5 }}>
                      {siteConfig.contact.address}
                    </p>
                    {siteConfig.contact.googleMapsUrl && siteConfig.contact.googleMapsUrl !== '#' && (
                      <a 
                        href={siteConfig.contact.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '0.35rem', 
                          color: 'var(--accent-primary)', 
                          fontSize: '0.8rem', 
                          fontWeight: 600,
                          textDecoration: 'none'
                        }}
                      >
                        <span>Open in Google Maps</span>
                        <span>&rarr;</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(229, 138, 19, 0.2)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Working Hours
                    </span>
                    <p style={{ color: '#CBD5E1', fontSize: '0.9rem', margin: '0.15rem 0 0 0' }}>
                      {siteConfig.contact.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Button in Card */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <a
                  href={getWhatsAppUrl("Hello Aram Construction & Traders, I would like to chat about an upcoming project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-full"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF', fontWeight: 700 }}
                  id="contact-whatsapp-btn"
                >
                  <MessageSquare size={18} />
                  <span>CHAT ON WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Comprehensive Contact Form */}
          <div 
            className="card-clean"
            style={{
              padding: '2.5rem 2rem',
              backgroundColor: '#FFFFFF'
            }}
          >
            <h3 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.5rem' }}>
              Send Project Enquiry
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: '1.75rem' }}>
              Fill out this form and our team will get in touch with you to discuss the details.
            </p>

            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '1.35rem', color: '#0F172A', marginBottom: '0.5rem' }}>
                  Thank You!
                </h4>
                <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  Our team will get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phoneNumber: '',
                      email: '',
                      serviceRequired: 'Residential Construction',
                      projectLocation: '',
                      message: ''
                    });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {errors.form && (
                  <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #F87171', color: '#991B1B', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={16} />
                    <span>{errors.form}</span>
                  </div>
                )}

                {/* Name */}
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                    Name <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.name ? '1px solid #DC2626' : '1px solid #CBD5E1',
                      backgroundColor: '#F8FAFC',
                      outline: 'none'
                    }}
                  />
                  {errors.name && <span style={{ fontSize: '0.75rem', color: '#DC2626', marginTop: '0.2rem', display: 'block' }}>{errors.name}</span>}
                </div>

                {/* Phone & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <label htmlFor="contact-phone" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                      Phone Number <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.phoneNumber ? '1px solid #DC2626' : '1px solid #CBD5E1',
                        backgroundColor: '#F8FAFC',
                        outline: 'none'
                      }}
                    />
                    {errors.phoneNumber && <span style={{ fontSize: '0.75rem', color: '#DC2626', marginTop: '0.2rem', display: 'block' }}>{errors.phoneNumber}</span>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                      Email (Optional)
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: errors.email ? '1px solid #DC2626' : '1px solid #CBD5E1',
                        backgroundColor: '#F8FAFC',
                        outline: 'none'
                      }}
                    />
                    {errors.email && <span style={{ fontSize: '0.75rem', color: '#DC2626', marginTop: '0.2rem', display: 'block' }}>{errors.email}</span>}
                  </div>
                </div>

                {/* Service & Location */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div>
                    <label htmlFor="contact-service" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                      Service Required <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <select
                      id="contact-service"
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#F8FAFC',
                        outline: 'none'
                      }}
                    >
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Industrial Construction">Industrial Construction</option>
                      <option value="Civil Construction & RCC">Civil Construction & RCC</option>
                      <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                      <option value="Building Materials Supply">Building Materials Supply</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-location" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                      Project Location
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      placeholder="e.g. City / Neighborhood"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #CBD5E1',
                        backgroundColor: '#F8FAFC',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="contact-msg" style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}>
                    Message / Project Details <span style={{ color: '#DC2626' }}>*</span>
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    placeholder="Tell us about your plot, approximate budget, or material volume needed..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      border: errors.message ? '1px solid #DC2626' : '1px solid #CBD5E1',
                      backgroundColor: '#F8FAFC',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  {errors.message && <span style={{ fontSize: '0.75rem', color: '#DC2626', marginTop: '0.2rem', display: 'block' }}>{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-full"
                  id="contact-submit-btn"
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>SUBMITTING ENQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT ENQUIRY</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
