/**
 * Building Materials & Trading Products Data
 * Clean, structured and data-driven for Aram Construction & Traders
 */

export interface ProductItem {
  id: string;
  name: string;
  category: "structural" | "aggregates" | "finishing" | "utilities";
  categoryLabel: string;
  shortDesc: string;
  specifications: string[];
  unit: string;
  image: string;
}

export const productCategories = [
  { id: "all", label: "All Materials" },
  { id: "structural", label: "Structural & Masonry" },
  { id: "aggregates", label: "Sand & Aggregates" },
  { id: "finishing", label: "Tiles & Finishing" },
  { id: "utilities", label: "Plumbing & Electrical" }
] as const;

export const productsData: ProductItem[] = [
  {
    id: "cement",
    name: "Grade-Approved Cement",
    category: "structural",
    categoryLabel: "Structural",
    shortDesc: "OPC 43/53 grade and PPC cement sourced directly for maximum compressive strength.",
    specifications: ["OPC 53 Grade", "PPC Slag/Flyash", "Rapid Hardening options", "High initial & final strength"],
    unit: "50 kg Bags & Bulk",
    image: "/Cement.jpg"
  },
  {
    id: "steel-tmt",
    name: "Steel / TMT Bars",
    category: "structural",
    categoryLabel: "Structural",
    shortDesc: "High-yield Fe 500D and Fe 550D TMT reinforcement bars with superior ductility and corrosion resistance.",
    specifications: ["Fe 500D / Fe 550D", "Diameters: 8mm to 32mm", "Earthquake resistant", "High bendability"],
    unit: "Tonnage & Metric Ton",
    image: "/Steel.jpg"
  },
  {
    id: "m-sand",
    name: "M-Sand (Manufactured Sand)",
    category: "aggregates",
    categoryLabel: "Aggregates",
    shortDesc: "Precisely graded manufactured sand, free from silt and clay, perfect for concrete works.",
    specifications: ["Zone II grading", "Zero silt content", "Uniform particle cubical shape", "Superior bonding"],
    unit: "Truckloads & Cubic Feet",
    image: "/Sand.jpg"
  },
  {
    id: "p-sand",
    name: "P-Sand (Plastering Sand)",
    category: "aggregates",
    categoryLabel: "Aggregates",
    shortDesc: "Ultra-fine washed plastering sand engineered for smooth, crack-free internal and external plaster.",
    specifications: ["Fine mesh gradation (<2.36mm)", "Smooth wall finish", "Reduced water absorption", "Minimal wastage"],
    unit: "Truckloads & Cubic Feet",
    image: "/P-sand.jpg"
  },
  {
    id: "blue-metal",
    name: "Blue Metal Aggregates",
    category: "aggregates",
    categoryLabel: "Aggregates",
    shortDesc: "High-density crushed granite blue metal stones available in 12mm, 20mm, and 40mm.",
    specifications: ["12mm, 20mm & 40mm sizes", "Hard crushed granite", "Low flakiness index", "High impact value"],
    unit: "Tons / Cft Loads",
    image: "/Blue Metal Aggregates.jpg"
  },
  {
    id: "bricks-blocks",
    name: "Bricks & Solid / Hollow Blocks",
    category: "structural",
    categoryLabel: "Masonry",
    shortDesc: "Red clay bricks, fly-ash bricks, and autoclaved aerated concrete (AAC) blocks for durable masonry.",
    specifications: ["Standard table-molded red bricks", "High-density solid concrete blocks", "Lightweight AAC blocks", "Uniform dimensional precision"],
    unit: "Per 1000 Units & Pallets",
    image: "/Bricks & Solid Hollow Blocks.jpg"
  },
  {
    id: "aggregates",
    name: "Construction Aggregates & GSB",
    category: "aggregates",
    categoryLabel: "Aggregates",
    shortDesc: "Sub-base aggregates, quarry dust, and wet mix macadam materials for roadwork and foundation beds.",
    specifications: ["Granular Sub-Base (GSB)", "Quarry Dust", "Wet Mix Aggregate", "Strict compaction standards"],
    unit: "Truckload Lots",
    image: "/Construction Aggregates & GSB.jpg"
  },
  {
    id: "plumbing-materials",
    name: "Plumbing Materials & Pipes",
    category: "utilities",
    categoryLabel: "Utilities",
    shortDesc: "CPVC, UPVC, and SWR pipes, brass fittings, valves, and water storage supply solutions.",
    specifications: ["Schedule 40 & 80 CPVC", "UV-stabilized UPVC", "Heavy-duty drain fittings", "Leak-tested fittings"],
    unit: "Pieces, Bundles & Kits",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "electrical-materials",
    name: "Electrical Materials & Conduits",
    category: "utilities",
    categoryLabel: "Utilities",
    shortDesc: "Flame-retardant copper wiring, PVC conduits, distribution boards, and industrial switchgear.",
    specifications: ["FR/FRLS Copper Wires", "Rigid PVC electrical conduits", "Modular switch boxes", "MCB distribution enclosures"],
    unit: "Coils, Lengths & Units",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "tiles",
    name: "Vitrified & Ceramic Tiles",
    category: "finishing",
    categoryLabel: "Finishing",
    shortDesc: "Double charged vitrified tiles, glazed porcelain tiles, outdoor pavers, and wall claddings.",
    specifications: ["600x600mm / 600x1200mm", "Anti-skid parking tiles", "High stain resistance", "Polished & matte finishes"],
    unit: "Per Box / Sq.Ft.",
    image: "/Vitrified & Ceramic Tiles.jpg"
  },
  {
    id: "sanitary-products",
    name: "Sanitary Products & Fixtures",
    category: "finishing",
    categoryLabel: "Finishing",
    shortDesc: "Vitreous china water closets, wash basins, cisterns, and chrome-plated bath fittings.",
    specifications: ["Wall-hung & floor-mount WCs", "Countertop wash basins", "Dual-flush mechanisms", "Corrosion-resistant CP fittings"],
    unit: "Per Unit / Project Sets",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "paint-finishing",
    name: "Paint & Finishing Materials",
    category: "finishing",
    categoryLabel: "Finishing",
    shortDesc: "Interior & exterior emulsions, wall primers, cement putties, and weather-proof exterior coatings.",
    specifications: ["Weather-shield exterior paints", "Washable interior luxury paints", "Waterproof polymer putty", "Anti-fungal primers"],
    unit: "Liters & Buckets (4L, 10L, 20L)",
    image: "/Paint & Finishing Materials.jpg"
  }
];
