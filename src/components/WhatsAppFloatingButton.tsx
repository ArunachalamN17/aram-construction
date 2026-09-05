import React from 'react';
import { getWhatsAppUrl } from '../config/siteConfig';
import { MessageSquare } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <a
      href={getWhatsAppUrl("Hello Aram Construction & Traders, I would like to enquire about construction services / building materials.")}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Chat on WhatsApp with Aram Construction"
      title="Chat on WhatsApp"
      id="desktop-floating-whatsapp"
    >
      <MessageSquare size={26} />
    </a>
  );
};
