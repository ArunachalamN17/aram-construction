/**
 * FAQ Data Structure
 * Realistic questions and transparent, truthful answers based strictly on confirmed capabilities.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "services" | "materials" | "process";
}

export const faqData: FAQItem[] = [
  {
    id: "services-offered",
    question: "What construction services do you provide?",
    answer: "Aram Construction & Traders provides end-to-end civil and structural construction services covering Residential Construction (individual houses, villas, apartments), Commercial Buildings, Industrial Structures, Groundwork/Civil Engineering, and Renovation & Remodeling projects.",
    category: "services"
  },
  {
    id: "residential-handling",
    question: "Do you handle residential construction from start to finish?",
    answer: "Yes, we handle residential projects from initial architectural planning and foundation excavation to structural RCC framing, masonry, electrical/plumbing installations, and final interior and exterior finishing.",
    category: "services"
  },
  {
    id: "commercial-projects",
    question: "Do you undertake commercial and industrial projects?",
    answer: "Yes. We undertake commercial establishments, retail showrooms, office buildings, and industrial warehouse structures, adhering to structural engineering standards and safety requirements.",
    category: "services"
  },
  {
    id: "building-materials-supply",
    question: "Do you supply building materials directly?",
    answer: "Yes. As a registered trading business under Aram Construction & Traders, we supply essential construction materials including Grade-approved Cement, Fe 500D/550D TMT Steel, M-Sand, P-Sand, Blue Metal Aggregates, Bricks/Blocks, Plumbing, Electrical cables, Tiles, and Paint materials.",
    category: "materials"
  },
  {
    id: "material-quote-process",
    question: "Can I buy building materials even if Aram is not handling my construction?",
    answer: "Certainly. Our material trading division supplies quality-tested construction materials in bulk and truckload quantities directly to independent builders, contractors, and individual property owners.",
    category: "materials"
  },
  {
    id: "request-quotation",
    question: "Can I request a construction quotation or material estimate?",
    answer: "Yes, absolutely. You can submit your requirements through our online quote form, call us directly at +91 97904 05280, or message us on WhatsApp. We will review your scope, schedule a site assessment if required, and provide a clear, detailed estimate.",
    category: "process"
  },
  {
    id: "renovation-remodeling",
    question: "Do you provide renovation and structural remodeling services?",
    answer: "Yes. We undertake building renovations, column strengthening, floor extensions, tile replacements, waterproofing treatments, and modern facade refurbishments for existing properties.",
    category: "services"
  },
  {
    id: "discuss-requirements",
    question: "How can I discuss my project requirements with your team?",
    answer: "You can reach our team Monday through Saturday between 9:00 AM and 6:00 PM via phone (+91 97904 05280 / +91 98404 05280), WhatsApp, or by filling out the enquiry form on our website. We are happy to arrange a direct consultation or site visit.",
    category: "process"
  }
];
