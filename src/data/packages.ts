/**
 * Construction Packages Data
 * Clearly adheres to the client guideline:
 * Do NOT invent pricing. Display 'Contact us for current pricing'.
 */

export interface PackageFeatureItem {
  feature: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
  luxury: string | boolean;
}

export interface PackageTier {
  id: string;
  name: string;
  tag: string;
  priceNote: string;
  popular?: boolean;
  description: string;
  highlights: string[];
  structuralWorks: string;
  materialCategories: string;
  finishingCategories: string;
  includedServices: string[];
  exclusions: string[];
}

export const packagesData: PackageTier[] = [
  {
    id: "basic",
    name: "Basic Package",
    tag: "Essential & Economical",
    priceNote: "Contact us for current pricing",
    description: "Designed for budget-conscious homeowners seeking dependable structural integrity without superfluous luxuries.",
    highlights: [
      "Standard RCC frame structure",
      "Reliable brickwork & cement plastering",
      "Standard ceramic tiles flooring",
      "Essential plumbing & electrical wiring"
    ],
    structuralWorks: "RCC frame structure designed for G+1 with standard footings and grade concrete.",
    materialCategories: "Standard approved 53-grade cement, Fe 500 TMT bars, and standard clay bricks.",
    finishingCategories: "Ceramic tile flooring, tractor emulsion internal paint, and standard flush doors.",
    includedServices: [
      "Architectural working drawings",
      "Structural engineering design",
      "Site supervision during key stages",
      "Standard building material supply"
    ],
    exclusions: [
      "Compound wall & gate (available as add-on)",
      "Solar water heating & home automation",
      "Modular kitchen woodwork",
      "Landscaping & false ceilings"
    ]
  },
  {
    id: "standard",
    name: "Standard Package",
    tag: "Most Popular Choice",
    priceNote: "Contact us for current pricing",
    popular: true,
    description: "The ideal balance of durability, modern aesthetic finishes, and premium branded construction supplies.",
    highlights: [
      "Upgraded RCC structure with Fe 550D TMT",
      "Vitrified tile flooring (2x2 ft)",
      "Teak wood main door frame",
      "Concealed copper wiring & modular switches",
      "Branded sanitaryware & CP bath fittings"
    ],
    structuralWorks: "Earthquake-resistant RCC column-beam framework for G+2, reinforced plinth beams.",
    materialCategories: "Fe 550D primary steel brands, premium PPC cement, M-Sand concrete, and wire-cut bricks.",
    finishingCategories: "Vitrified tiles, premium emulsion paint with primer putty, and UPVC sliding windows.",
    includedServices: [
      "Complete 2D/3D floor plans and elevations",
      "Dedicated site engineer supervision",
      "Quality assurance milestone tests",
      "Standard electrical and plumbing fittings"
    ],
    exclusions: [
      "Interior modular furnishings",
      "External landscaping & paver blocks",
      "Lift mechanism installation"
    ]
  },
  {
    id: "premium",
    name: "Premium Package",
    tag: "High Specification",
    priceNote: "Contact us for current pricing",
    description: "Engineered for clients desiring high-grade architectural finishes, expansive living zones, and elevated specifications.",
    highlights: [
      "Large-format vitrified glazed porcelain tiles (4x2 ft)",
      "First-grade Teak wood main entrance door & paneling",
      "Branded concealed divertor plumbing fittings",
      "Full false ceiling with concealed LED provisions",
      "Weather-shield exterior silicone coating"
    ],
    structuralWorks: "Heavy-duty RCC framing with deep foundation piles/footings as per soil test report.",
    materialCategories: "Top-tier TMT bars, premium Portland cement, AAC blocks or first-class table molded bricks.",
    finishingCategories: "Glazed vitrified tiles, granite stairs, luxury acrylic washable interior paint, and sound-insulated UPVC windows.",
    includedServices: [
      "3D architectural visualization & structural consultancy",
      "Daily site engineer oversight and stage documentation",
      "Waterproofing treatment for terrace, basements & sunken slabs",
      "Assistance with utility approvals coordination"
    ],
    exclusions: [
      "Movable interior furniture",
      "Swimming pool / Jacuzzi construction"
    ]
  },
  {
    id: "luxury",
    name: "Luxury Package",
    tag: "Bespoke & Uncompromising",
    priceNote: "Contact us for current pricing",
    description: "Full turnkey luxury villa execution featuring custom designer appointments, Italian marble, and smart provisions.",
    highlights: [
      "Italian marble or custom designer tile flooring",
      "Complete solid teakwood doors and engineered frames",
      "Designer bathroom suites with thermostatic fixtures",
      "Automated lighting conduit preparations",
      "Custom architectural facade treatments & glass railings"
    ],
    structuralWorks: "Custom architectural framing with cantilever spans, double-height ceilings, and bespoke foundation.",
    materialCategories: "Ultimate specification materials, corrosion-protected steel, specialized waterproofing membranes.",
    finishingCategories: "Italian marble flooring, royal sheen interior paint, toughened glass railings, thermal break aluminum windows.",
    includedServices: [
      "Full bespoke architectural design & MEP coordination",
      "Senior project manager dedicated to the site",
      "Detailed quality inspection reports at every milestone",
      "Turnkey material management and scheduled delivery"
    ],
    exclusions: [
      "Government statutory liaison fees (payable as actuals)",
      "Solar panel grid hardware"
    ]
  }
];

export const packageComparisonFeatures: PackageFeatureItem[] = [
  { feature: "Pricing Model", basic: "Contact for Pricing", standard: "Contact for Pricing", premium: "Contact for Pricing", luxury: "Contact for Pricing" },
  { feature: "RCC Structural Design", basic: "Standard G+1", standard: "Reinforced G+2", premium: "Heavy-Duty G+2+", luxury: "Bespoke Multi-Tier" },
  { feature: "Steel Specification", basic: "Fe 500 TMT", standard: "Fe 550D TMT", premium: "Fe 550D Primary Brands", luxury: "Corrosion-Protected Fe 550D" },
  { feature: "Flooring", basic: "Ceramic Tiles", standard: "Vitrified Tiles (2x2)", premium: "Glazed Vitrified (4x2)", luxury: "Italian Marble / Designer" },
  { feature: "Windows", basic: "Aluminum Sliding", standard: "UPVC Sliding", premium: "Soundproof UPVC", luxury: "Thermal-Break Aluminum" },
  { feature: "Doors", basic: "Flush Doors", standard: "Teak Main + Flush", premium: "First-Class Teak Main", luxury: "Custom Solid Teak Throughout" },
  { feature: "Interior Paint", basic: "Tractor Emulsion", standard: "Premium Emulsion", premium: "Luxury Washable Emulsion", luxury: "Royal Sheen Designer Finish" },
  { feature: "Sanitaryware & CP", basic: "Standard ISI", standard: "Branded Range", premium: "Concealed Divertor Series", luxury: "Designer Luxury Fixtures" },
  { feature: "Waterproofing", basic: "Terrace Basic", standard: "Terrace & Sunken Slabs", premium: "Complete Multi-Layer", luxury: "Advanced Membrane System" },
  { feature: "Site Supervision", basic: "Stage Visits", standard: "Dedicated Site Engineer", premium: "Daily Oversight & Testing", luxury: "Senior Project Manager" }
];
