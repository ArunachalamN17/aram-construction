/**
 * Construction Services Data Structure
 * Reusable and easy to customize for Aram Construction & Traders
 */

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  iconName: string;
  servicesList: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Construction",
    shortDesc: "Custom homes, villas, and apartments built with premium workmanship and functional structural design.",
    longDesc: "We undertake residential construction projects with a focus on quality workmanship, practical design and long-lasting structures. From initial foundation planning to complete turnkey home construction.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    iconName: "Home",
    servicesList: [
      "Individual Houses",
      "Villas",
      "Apartments",
      "Extensions",
      "Structural Works",
      "Residential Renovation"
    ]
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    shortDesc: "Strategic commercial spaces engineered for durability, modern aesthetics, and business utility.",
    longDesc: "Professional construction solutions for commercial spaces designed around functionality, durability and project requirements. Optimized for footfall, spatial efficiency, and safety standards.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    iconName: "Building2",
    servicesList: [
      "Commercial Buildings",
      "Shops & Showrooms",
      "Office Buildings",
      "Warehouses",
      "Business Spaces"
    ]
  },
  {
    id: "industrial",
    title: "Industrial Construction",
    shortDesc: "Heavy-duty industrial infrastructure, factory complexes, and robust storage facilities.",
    longDesc: "Reliable construction and civil work solutions for industrial and business requirements. Built to withstand high mechanical loads and conform to industrial safety regulations.",
    image: "/Industrial Construction.jpg",
    iconName: "Factory",
    servicesList: [
      "Industrial Buildings",
      "Factory Structures",
      "Warehouses",
      "Civil Works",
      "Structural Works"
    ]
  },
  {
    id: "civil",
    title: "Civil Construction",
    shortDesc: "Foundational earthworks, RCC structural framing, and comprehensive site development.",
    longDesc: "Professional civil construction services from groundwork to structural execution. Precise RCC works, structural stability, and reliable civil engineering execution.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    iconName: "HardHat",
    servicesList: [
      "Site Development",
      "Foundation Work",
      "RCC Work",
      "Brick Work",
      "Plastering",
      "Flooring",
      "External Development"
    ]
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    shortDesc: "Structural retrofits, spatial modernizations, and exterior/interior upgrades.",
    longDesc: "Transform existing spaces with practical renovation and remodeling solutions. Strengthening structures, modernizing finishes, and rejuvenating aging infrastructure.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    iconName: "Hammer",
    servicesList: [
      "Building Renovation",
      "Structural Repairs",
      "Extensions",
      "Flooring Upgrades",
      "Painting & Waterproofing",
      "Interior Improvements"
    ]
  }
];
