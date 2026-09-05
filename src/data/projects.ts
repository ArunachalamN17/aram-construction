/**
 * Construction Projects Data Structure
 * Note: Initial entries are structured placeholders with realistic architectural scopes
 * designed to be effortlessly updated with actual company portfolio items.
 */

export interface ProjectItem {
  id: string;
  name: string;
  category: "residential" | "commercial" | "industrial" | "renovation";
  categoryLabel: string;
  location: string;
  area: string;
  status: "Completed" | "Ongoing";
  isPlaceholder: boolean;
  shortDesc: string;
  fullDesc: string;
  scopeOfWork: string[];
  mainImage: string;
  galleryImages: string[];
  timeline: string;
  clientType: string;
}

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "industrial", label: "Industrial" },
  { id: "renovation", label: "Renovation" }
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "villa-horizon",
    name: "Modern Residential Villa",
    category: "residential",
    categoryLabel: "Residential Construction",
    location: "Suburban Residential Enclave",
    area: "3,400 sq.ft.",
    status: "Completed",
    isPlaceholder: true,
    shortDesc: "Contemporary two-storey architectural villa featuring an open-plan layout, cantilevers, and natural ventilation.",
    fullDesc: "This turnkey residential construction exemplifies high-precision structural execution. Designed for contemporary living, the project features heavy RCC columns, double-height ceiling volumes, premium vitrified tile finishes, and seamless indoor-outdoor integration.",
    scopeOfWork: [
      "Soil investigation & reinforced isolated footings",
      "RCC framed structure with Fe 550D TMT bars",
      "M-Sand brick masonry and smooth P-Sand plastering",
      "Electrical conduits, high-grade plumbing lines & rainwater harvesting",
      "Interior tile flooring, granite stairs & weather-coat exterior painting"
    ],
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    timeline: "11 Months",
    clientType: "Private Residential"
  },
  {
    id: "commercial-tower",
    name: "Commercial Retail & Office Complex",
    category: "commercial",
    categoryLabel: "Commercial Construction",
    location: "Urban Commercial Corridor",
    area: "12,500 sq.ft.",
    status: "Completed",
    isPlaceholder: true,
    shortDesc: "Multi-level commercial structure built for high-footfall retail storefronts and flexible upper office floors.",
    fullDesc: "Engineered to maximize utility and commercial viability. This four-storey building features column-free spans for storefront visibility, acoustic glass facade installations, high-speed elevator structural shaft, and dedicated underground parking RCC retaining walls.",
    scopeOfWork: [
      "Bulk earth excavation & deep raft foundation",
      "Post-tensioned concrete slabs for maximum clear span",
      "Commercial fire fighting pipeline integration",
      "Structural glazing and exterior architectural louvers",
      "Heavy duty anti-skid commercial vitrified flooring"
    ],
    mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
    ],
    timeline: "14 Months",
    clientType: "Commercial Developer"
  },
  {
    id: "industrial-warehouse",
    name: "Industrial Logistics & Storage Hub",
    category: "industrial",
    categoryLabel: "Industrial Construction",
    location: "Industrial Corridor Park",
    area: "28,000 sq.ft.",
    status: "Ongoing",
    isPlaceholder: true,
    shortDesc: "Heavy pre-engineered industrial warehouse structure with laser-screed floor and heavy machinery bays.",
    fullDesc: "Tailored for warehousing and light industrial operations. The project encompasses heavy civil foundation plinths, heavy steel PEB structural columns, high-tolerance industrial laser-screed concrete flooring, and robust stormwater management systems.",
    scopeOfWork: [
      "Site levelling, sub-base GSB compaction & foundation pedestals",
      "Pre-engineered steel building (PEB) structural erection",
      "Vacuum dewatered flooring (VDF / Laser screed) with hardener",
      "Loading dock civil construction with ramp grading",
      "Perimeter security masonry and industrial stormwater drains"
    ],
    mainImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    ],
    timeline: "In Progress (Phase 2)",
    clientType: "Logistics Enterprise"
  },
  {
    id: "residence-modernization",
    name: "Structural Renovation & Floor Addition",
    category: "renovation",
    categoryLabel: "Renovation & Remodeling",
    location: "Established Urban Neighborhood",
    area: "2,200 sq.ft.",
    status: "Completed",
    isPlaceholder: true,
    shortDesc: "Complete structural retrofitting of an existing residence with a new upper floor addition and contemporary facade.",
    fullDesc: "Revitalized a 20-year-old structure through structural jacketing of foundational columns, adding an entire second floor with lightweight AAC blocks, replacing obsolete plumbing/wiring systems, and modernizing the exterior elevation.",
    scopeOfWork: [
      "Non-destructive structural assessment and load calculations",
      "Column retrofitting & beam strengthening with micro-concrete",
      "New floor construction using lightweight AAC blocks",
      "Complete renewal of plumbing, drainage and electrical grids",
      "Modernized exterior texture paint and UPVC window systems"
    ],
    mainImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ],
    timeline: "5 Months",
    clientType: "Homeowner"
  },
  {
    id: "residential-apartments",
    name: "Independent Residential G+3 Apartments",
    category: "residential",
    categoryLabel: "Residential Construction",
    location: "City Residential Extension",
    area: "8,800 sq.ft.",
    status: "Ongoing",
    isPlaceholder: true,
    shortDesc: "Multi-family residential complex with basement stilt parking, earthquake-resistant RCC frame, and modern amenities.",
    fullDesc: "Designed to provide spacious family apartments with ample natural light. Featuring RCC shear walls, dedicated stilt level parking, automated overhead tank supply integration, and high-efficiency electrical distribution.",
    scopeOfWork: [
      "Stilt level RCC column grid and grade beams",
      "Brick masonry with double coat external sand-faced plaster",
      "Concealed electrical lines and CPVC plumbing riser ducts",
      "Staircase and common area granite finishing",
      "Compound wall, automated gate provisions and borewell setup"
    ],
    mainImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
    ],
    timeline: "In Progress (Milestone 3)",
    clientType: "Joint Development"
  }
];
