/**
 * Centralized Site Configuration for Aram Construction & Traders
 * Update all company contact details, social links, and key assets here.
 */

export interface SiteConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  subTagline: string;
  contact: {
    primaryPhone: string;
    primaryPhoneRaw: string;
    secondaryPhone: string;
    secondaryPhoneRaw: string;
    email: string;
    whatsappNumber: string;
    whatsappNumberRaw: string;
    whatsappDefaultMessage: string;
    address: string;
    workingHours: string;
    googleMapsUrl: string;
  };
  navigation: Array<{
    name: string;
    href: string;
  }>;
  images: {
    heroBackground: string;
    aboutImage: string;
    qualityImage: string;
    ctaBackground: string;
  };
}

export const siteConfig: SiteConfig = {
  companyName: "ARAM CONSTRUCTION & TRADERS",
  shortName: "Aram Construction",
  tagline: "Building Trust. Delivering Quality.",
  subTagline: "Reliable construction and trading solutions for residential, commercial and industrial requirements.",
  contact: {
    primaryPhone: "+91 97904 05280",
    primaryPhoneRaw: "919790405280",
    secondaryPhone: "+91 98404 05280",
    secondaryPhoneRaw: "919840405280",
    email: "aramconstructionskrlm@gmail.com",
    whatsappNumber: "+91 97904 05280",
    whatsappNumberRaw: "919790405280",
    whatsappDefaultMessage: "Hello Aram Construction & Traders, I would like to enquire about your construction services / building materials.",
    address: "#1049 - F, Krishnagiri - Dharmapuri National Highway, Opposite Nayara Petrol Station, Sappanipatti, Krishnagiri District - 635 111, Tamil Nadu",
    workingHours: "Monday – Saturday | 9:00 AM – 6:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=%231049-F,+Krishnagiri+-+Dharmapuri+National+Highway,+Opposite+Nayara+Petrol+Station,+Sappanipatti,+Krishnagiri+District+-+635111"
  },
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Building Materials", href: "#materials" },
    { name: "Why Us", href: "#why-us" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ],
  images: {
    // High-resolution architectural and construction imagery curated for professional impact
    heroBackground: "/Home%20Page.jpg",
    aboutImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    qualityImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    ctaBackground: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80"
  }
};

/**
 * Helper to generate a standardized WhatsApp direct chat link
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(customMessage || siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumberRaw}?text=${message}`;
}

/**
 * Helper to generate tel: link
 */
export function getTelUrl(phoneRaw?: string): string {
  return `tel:+${phoneRaw || siteConfig.contact.primaryPhoneRaw}`;
}
