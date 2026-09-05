import React from 'react';
import { ProjectItem } from '../data/projects';
import { getAssetUrl } from '../config/siteConfig';
import { X, MapPin, Maximize2, Calendar, CheckCircle2, ArrowRight, Building, ShieldAlert } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onDiscussProject: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onDiscussProject
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px', padding: 0, overflow: 'hidden' }}
      >
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close project details"
          style={{ top: '1rem', right: '1rem', backgroundColor: 'rgba(15, 23, 42, 0.8)', color: '#FFFFFF' }}
        >
          <X size={20} />
        </button>

        {/* Large Hero Image */}
        <div style={{ position: 'relative', height: '340px', width: '100%' }}>
          <img 
            src={getAssetUrl(project.mainImage)} 
            alt={project.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11, 15, 25, 0.9) 0%, rgba(11, 15, 25, 0.2) 60%)'
            }}
          />

          {/* Badges on Hero */}
          <div style={{ position: 'absolute', top: '1.25rem', left: '1.5rem', display: 'flex', gap: '0.5rem' }}>
            <span className="badge badge-amber">{project.categoryLabel}</span>
            <span className={`badge ${project.status === 'Completed' ? 'badge-success' : 'badge-ongoing'}`}>
              {project.status}
            </span>
          </div>

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', color: '#FFFFFF', marginBottom: '0.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              {project.name}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', color: '#CBD5E1', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={15} color="var(--accent-primary)" />
                {project.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Maximize2 size={15} color="var(--accent-primary)" />
                {project.area}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={15} color="var(--accent-primary)" />
                Timeline: {project.timeline}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem 1.75rem', maxHeight: '55vh', overflowY: 'auto' }}>
          {project.isPlaceholder && (
            <div 
              style={{
                backgroundColor: '#F8FAFC',
                border: '1px dashed #CBD5E1',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: '#64748B',
                marginBottom: '1.5rem'
              }}
            >
              <ShieldAlert size={16} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              <span>
                Portfolio structure placeholder. Real project documentation, site progress photos, and drawings will replace these as project records update.
              </span>
            </div>
          )}

          {/* Description */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.5rem' }}>
              Project Overview
            </h4>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.7 }}>
              {project.fullDesc}
            </p>
          </div>

          {/* Scope of Work */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.75rem' }}>
              Scope of Work Executed
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.scopeOfWork.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#334155' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Preview */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: '#0F172A', marginBottom: '0.75rem' }}>
                Project Gallery
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.75rem' }}>
                {project.galleryImages.map((imgUrl, i) => (
                  <div key={i} style={{ height: '110px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
                    <img 
                      src={getAssetUrl(imgUrl)} 
                      alt={`${project.name} snapshot ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Bar in Modal */}
          <div 
            style={{
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Planning a similar project?
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0F172A' }}>
                Get an estimated BoQ and timeline consultation
              </span>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                onDiscussProject(`Project Discussion: ${project.name}`);
              }}
            >
              <span>DISCUSS YOUR PROJECT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
