import React from 'react';
import { QuoteForm } from './QuoteForm';
import { X } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Residential Construction'
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '520px', padding: 0 }}
      >
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close quote dialog"
        >
          <X size={18} />
        </button>

        <QuoteForm 
          defaultService={defaultService} 
          isModal={true} 
          onSuccess={onClose}
        />
      </div>
    </div>
  );
};
