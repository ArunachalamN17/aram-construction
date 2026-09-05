import React from 'react';
import { siteConfig, getTelUrl, getWhatsAppUrl } from '../config/siteConfig';
import { Phone, MessageSquare, ClipboardList } from 'lucide-react';

interface MobileActionBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="mobile-action-bar" aria-label="Quick Mobile Actions">
      {/* Click To Call */}
      <a 
        href={getTelUrl(siteConfig.contact.primaryPhoneRaw)} 
        className="mobile-bar-btn call"
        id="mobile-call-btn"
      >
        <Phone size={15} />
        <span>CALL</span>
      </a>

      {/* WhatsApp */}
      <a 
        href={getWhatsAppUrl("Hi Aram Construction & Traders, I would like to inquire about your services.")} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mobile-bar-btn whatsapp"
        id="mobile-whatsapp-btn"
      >
        <MessageSquare size={15} />
        <span>WHATSAPP</span>
      </a>

      {/* Get Quote */}
      <button 
        type="button" 
        onClick={onOpenQuoteModal} 
        className="mobile-bar-btn quote"
        id="mobile-quote-btn"
      >
        <ClipboardList size={15} />
        <span>GET QUOTE</span>
      </button>
    </div>
  );
};
