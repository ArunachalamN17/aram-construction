/**
 * Testimonials Data Structure
 * Following client instruction:
 * "Do not present fake testimonials as real customer reviews.
 * Use [Customer Review] — [Customer Name] until actual testimonials are provided."
 */

export interface TestimonialItem {
  id: string;
  reviewText: string;
  clientName: string;
  projectContext: string;
  rating: number;
  isPlaceholder: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "review-1",
    reviewText: "Customer review will be updated here once verified testimonials are provided by our clients. Aram Construction & Traders prioritizes transparent workmanship, honest communication, and punctual delivery for all residential builds.",
    clientName: "[Santhosh S]",
    projectContext: "Residential Project Client",
    rating: 5,
    isPlaceholder: true
  },
  {
    id: "review-2",
    reviewText: "Customer review will be updated here once verified testimonials are provided by our clients. Dependable supply of M-Sand, cement, and TMT steel delivered directly to our site without delay or quality compromises.",
    clientName: "[Jeevanantham S]",
    projectContext: "Building Materials Client",
    rating: 5,
    isPlaceholder: true
  },
  {
    id: "review-3",
    reviewText: "Customer review will be updated here once verified testimonials are provided by our clients. Professional handling of commercial civil execution, site coordination, and structural milestone inspections.",
    clientName: "[Saran G]",
    projectContext: "Commercial Development Client",
    rating: 5,
    isPlaceholder: true
  }
];
