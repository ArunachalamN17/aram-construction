import React, { useState } from 'react';
import { projectsData, projectCategories, ProjectItem } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Info, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenQuoteModal: (projectName?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">Execution Portfolio</div>
          <h2 className="section-title">Our Construction Projects</h2>
          <p className="section-subtitle">
            Explore our project portfolio across residential, commercial, industrial and remodeling domains. Engineered to high standards of workmanship and durability.
          </p>
        </div>

        {/* Filters */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.625rem',
            marginBottom: '3rem'
          }}
        >
          {projectCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.55rem 1.25rem',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all var(--transition-fast)',
                  backgroundColor: isActive ? 'var(--text-primary)' : '#F1F5F9',
                  color: isActive ? '#FFFFFF' : '#475569',
                  border: isActive ? '1px solid var(--text-primary)' : '1px solid var(--border-light)'
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenDetails={(p) => setSelectedProject(p)} 
            />
          ))}
        </div>

        {/* Bottom Portfolio Bar */}
        <div 
          style={{
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Info size={18} color="var(--accent-primary)" />
            <span style={{ fontSize: '0.875rem', color: '#64748B' }}>
              Want to see site progress photos or architectural drawings for an upcoming build?
            </span>
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onOpenQuoteModal('Project Portfolio Consultation')}
          >
            <span>SCHEDULE SITE PORTFOLIO REVIEW</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onDiscussProject={(name) => onOpenQuoteModal(name)} 
      />
    </section>
  );
};
