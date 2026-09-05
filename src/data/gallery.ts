/**
 * Gallery Data Structure
 * Categorized gallery items with high-resolution imagery and lightbox capabilities.
 * Configured so actual site photos can easily replace development placeholders.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: "construction" | "completed" | "progress" | "materials" | "machinery";
  categoryLabel: string;
  imageUrl: string;
  aspectRatio: "square" | "wide" | "tall";
  description: string;
}

export const galleryCategories = [
  { id: "all", label: "All Photos" },
  { id: "construction", label: "Construction" },
  { id: "completed", label: "Completed Projects" },
  { id: "progress", label: "Site Progress" },
  { id: "materials", label: "Building Materials" },
  { id: "machinery", label: "Machinery & Equipment" }
] as const;

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Structural Concrete Framework",
    category: "construction",
    categoryLabel: "Construction",
    imageUrl: "/Structural%20Concrete%20Framework.jpg",
    aspectRatio: "wide",
    description: "RCC beam and column casting with calibrated steel reinforcement."
  },
  {
    id: "gal-2",
    title: "Contemporary Villa Exterior",
    category: "completed",
    categoryLabel: "Completed Projects",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "tall",
    description: "Modern architectural residence completed with premium exterior textures and lighting."
  },
  {
    id: "gal-3",
    title: "Reinforced Footing Excavation",
    category: "progress",
    categoryLabel: "Site Progress",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "square",
    description: "Precision groundwork and foundation excavation for structural stability."
  },
  {
    id: "gal-4",
    title: "Quality Fe 550D TMT Steel Bundles",
    category: "materials",
    categoryLabel: "Building Materials",
    imageUrl: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "wide",
    description: "High-grade reinforcement bars staged for systematic site distribution."
  },
  {
    id: "gal-5",
    title: "Transit Mixer & Concrete Placement",
    category: "machinery",
    categoryLabel: "Machinery & Equipment",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "tall",
    description: "Mechanized concrete pouring and consolidation equipment on active project site."
  },
  {
    id: "gal-6",
    title: "Finished Commercial Facade",
    category: "completed",
    categoryLabel: "Completed Projects",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "square",
    description: "Four-storey commercial retail and office complex delivered with modern structural glazing."
  },
  {
    id: "gal-7",
    title: "Brick Masonry & Alignment Inspection",
    category: "progress",
    categoryLabel: "Site Progress",
    imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "wide",
    description: "Solid block wall construction adhering to plumb-line and joint mortar standards."
  },
  {
    id: "gal-8",
    title: "Washed M-Sand & Crushed Aggregates",
    category: "materials",
    categoryLabel: "Building Materials",
    imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "square",
    description: "Laboratory-tested manufactured sand ready for structural grade mix."
  }
];
