import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

interface QuoteFormProps {
  defaultService?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ defaultService = 'Residential Construction', isModal = false, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    serviceRequired: defaultService,
    projectLocation: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile Number is required';
    } else {
      // Validate 10 digit Indian or international phone format
      const cleaned = formData.mobileNumber.replace(/[\s\-\(\)\+]/g, '');
      if (cleaned.length < 10) {
        errs.mobileNumber = 'Please enter a valid 10-digit mobile number';
      }
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // ISOLATED INTEGRATION POINT:
      // Replace with your backend endpoint / EmailJS / Webhook:
      // await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify(formData) });
      console.log('--- Aram Construction Enquiry Submission ---', formData);

      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrors({ form: 'An error occurred while sending your request. Please try calling us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      serviceRequired: 'Residential Construction',
      projectLocation: '',
      message: ''
    });
    setIsSubmitted(false);
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <div 
        className="form-success-card"
        style={{
          backgroundColor: '#FFFFFF',
          padding: '2.5rem 2rem',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          boxShadow: isModal ? 'none' : 'var(--shadow-xl)',
          border: '1px solid var(--border-light)'
        }}
      >
        <div 
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#DCFCE7',
            color: '#16A34A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto'
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#0F172A' }}>
          Thank You!
        </h3>
        <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
          Our team at <strong>Aram Construction & Traders</strong> will get in touch with you shortly.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a
            href={getWhatsAppUrl(`Hi Aram Construction, I just submitted an enquiry on your website for ${formData.serviceRequired}. Name: ${formData.fullName}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
          >
            Connect Immediately on WhatsApp
          </a>
          <button 
            type="button" 
            onClick={resetForm}
            className="btn btn-secondary btn-sm"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="enquiry-form-card"
      style={{
        backgroundColor: '#FFFFFF',
        padding: isModal ? '1.5rem 2rem' : '2.25rem 2rem',
        borderRadius: 'var(--radius-md)',
        boxShadow: isModal ? 'none' : 'var(--shadow-xl)',
        border: '1px solid rgba(226, 232, 240, 0.9)',
        position: 'relative',
        zIndex: 10
      }}
    >
      {errors.form && (
        <div style={{
          backgroundColor: '#FEE2E2',
          border: '1px solid #F87171',
          padding: '0.75rem',
          borderRadius: 'var(--radius-sm)',
          color: '#991B1B',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <AlertCircle size={16} />
          <span>{errors.form}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
        <div style={{ marginBottom: '1rem' }}>
          <label 
            htmlFor="hero-fullName" 
            style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}
          >
            Full Name <span style={{ color: '#DC2626' }}>*</span>
          </label>
          <input
            id="hero-fullName"
            type="text"
            placeholder="e.g. Rajesh Kumar"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem 0.875rem',
              borderRadius: 'var(--radius-sm)',
              border: errors.fullName ? '1px solid #DC2626' : '1px solid #CBD5E1',
              backgroundColor: '#F8FAFC',
              outline: 'none',
              transition: 'border-color 0.2s'
            }}
          />
          {errors.fullName && (
            <span style={{ fontSize: '0.75rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
              {errors.fullName}
            </span>
          )}
        </div>

        {/* Mobile Number & Email Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
          <div>
            <label 
              htmlFor="hero-mobile" 
              style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}
            >
              Mobile Number <span style={{ color: '#DC2626' }}>*</span>
            </label>
            <input
              id="hero-mobile"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.mobileNumber}
              onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.875rem',
                borderRadius: 'var(--radius-sm)',
                border: errors.mobileNumber ? '1px solid #DC2626' : '1px solid #CBD5E1',
                backgroundColor: '#F8FAFC',
                outline: 'none'
              }}
            />
            {errors.mobileNumber && (
              <span style={{ fontSize: '0.75rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
                {errors.mobileNumber}
              </span>
            )}
          </div>

          <div>
            <label 
              htmlFor="hero-email" 
              style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}
            >
              Email (Optional)
            </label>
            <input
              id="hero-email"
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.875rem',
                borderRadius: 'var(--radius-sm)',
                border: errors.email ? '1px solid #DC2626' : '1px solid #CBD5E1',
                backgroundColor: '#F8FAFC',
                outline: 'none'
              }}
            />
            {errors.email && (
              <span style={{ fontSize: '0.75rem', color: '#DC2626', marginTop: '0.25rem', display: 'block' }}>
                {errors.email}
              </span>
            )}
          </div>
        </div>

        {/* Service Required & Location */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
          <div>
            <label 
              htmlFor="hero-service" 
              style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}
            >
              Service Required
            </label>
            <select
              id="hero-service"
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.875rem',
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
              <option value="Individual Villa Construction">Individual Villa Construction</option>
            </select>
          </div>

          <div>
            <label 
              htmlFor="hero-location" 
              style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}
            >
              Project Location
            </label>
            <input
              id="hero-location"
              type="text"
              placeholder="e.g. Chennai / Coimbatore"
              value={formData.projectLocation}
              onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.875rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #CBD5E1',
                backgroundColor: '#F8FAFC',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Message */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label 
            htmlFor="hero-message" 
            style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#1E293B', marginBottom: '0.35rem' }}
          >
            Project Details / Requirement
          </label>
          <textarea
            id="hero-message"
            rows={2}
            placeholder="Describe your plot size, square footage, or material requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{
              width: '100%',
              padding: '0.75rem 0.875rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid #CBD5E1',
              backgroundColor: '#F8FAFC',
              outline: 'none',
              resize: 'vertical'
            }}
          />
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-full"
          id="submit-enquiry-btn"
          style={{ opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>SUBMITTING...</span>
            </>
          ) : (
            <>
              <span>GET A FREE QUOTE</span>
              <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
