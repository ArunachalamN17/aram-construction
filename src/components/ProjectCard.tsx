import React from 'react';
import { ProjectItem } from '../data/projects';
import { getAssetUrl } from '../config/siteConfig';
import { MapPin, Maximize2, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div 
      className="card-clean project-card-item"
      onClick={() => onOpenDetails(project)}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        position: 'relative'
      }}
    >
      {/* Project Image */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <img 
          src={getAssetUrl(project.mainImage)} 
          alt={project.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          loading="lazy"
          className="proj-img"
        />

        {/* Top Badges */}
        <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem', display: 'flex', gap: '0.4rem' }}>
          <span className="badge badge-dark">
            {project.categoryLabel}
          </span>
          <span className={`badge ${project.status === 'Completed' ? 'badge-success' : 'badge-ongoing'}`}>
            {project.status}
          </span>
        </div>

        {/* Open details icon overlay */}
        <div 
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            right: '0.85rem',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            color: '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-md)',
            transition: 'all var(--transition-fast)'
          }}
          className="proj-arrow-btn"
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '0.5rem', fontWeight: 700 }}>
          {project.name}
        </h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#64748B', fontSize: '0.8125rem', marginBottom: '0.85rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <MapPin size={14} color="var(--accent-primary)" />
            {project.location}
          </span>
          <span>•</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <Maximize2 size={14} color="var(--accent-primary)" />
            {project.area}
          </span>
        </div>

        <p style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.55, marginBottom: '1.25rem' }}>
          {project.shortDesc}
        </p>

        <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
            View Full Project Scope →
          </span>
          <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
            {project.timeline}
          </span>
        </div>
      </div>

      <style>{`
        .project-card-item:hover .proj-img {
          transform: scale(1.05);
        }
        .project-card-item:hover .proj-arrow-btn {
          background-color: var(--accent-primary);
          color: #FFFFFF;
        }
      `}</style>
    </div>
  );
};
