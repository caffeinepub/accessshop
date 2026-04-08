const PRODUCTS = [
  {
    id: "smart-watch",
    name: "Smart Watch",
    price: 4999,
    description: "Feature-rich smartwatch with health monitoring, notifications, and voice controls for hands-free operation.",
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    accessibilityTags: ["voice-control", "large-display", "hearing-aid"],
    featured: true
  },
  {
    id: "smart-phone",
    name: "Smart Phone",
    price: 12999,
    description: "Accessible smartphone with large text support, voice assistant, and high contrast display.",
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
    accessibilityTags: ["voice-control", "large-display", "screen-reader"],
    featured: true
  },
  {
    id: "smart-home-speaker",
    name: "Smart Home Speaker with Voice Assistant",
    price: 3499,
    description: "Hands-free smart speaker with voice assistant for controlling your home and accessing information.",
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=400&h=300&fit=crop",
    accessibilityTags: ["voice-control", "hands-free", "smart-home"],
    featured: true
  },
  {
    id: "large-printed-keyboard",
    name: "Large Printed Keyboard with Contrast Keys",
    price: 1899,
    description: "Keyboard with large high-contrast printed letters for easy visibility and reduced eye strain.",
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
    accessibilityTags: ["large-print", "high-contrast", "low-vision"],
    featured: true
  },
  {
    id: "adjustable-magnifier-lamp",
    name: "Adjustable Magnifier Lamp",
    price: 2299,
    description: "Adjustable desk lamp with built-in magnifier lens, ideal for reading and close-up tasks.",
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    accessibilityTags: ["magnification", "low-vision", "reading-aid"],
    featured: false
  },
  {
    id: "digital-talking-clock",
    name: "Digital Talking Clock",
    price: 899,
    description: "Digital clock that announces the time aloud at the press of a button, with large display.",
    category: "electronics",
    imageUrl: "/assets/images/digital-talking-clock.png",
    accessibilityTags: ["audio-output", "large-display", "talking-device"],
    featured: false
  },
  {
    id: "wireless-mouse",
    name: "Wireless Mouse",
    price: 799,
    description: "Ergonomic wireless mouse with large, easy-to-click buttons and smooth tracking.",
    category: "accessories",
    imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    accessibilityTags: ["ergonomic", "easy-click", "wireless"],
    featured: false
  },
  {
    id: "voice-label-reader",
    name: "Voice Label Reader",
    price: 2799,
    description: "Handheld device that reads labels and barcodes aloud, helping identify products independently.",
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop",
    accessibilityTags: ["audio-output", "barcode-reader", "independence"],
    featured: false
  },
  {
    id: "large-button-phone",
    name: "Large Button Phone",
    price: 3299,
    description: "Mobile phone with oversized buttons, loud speaker, and simplified interface for easy use.",
    category: "electronics",
    imageUrl: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop",
    accessibilityTags: ["large-buttons", "loud-speaker", "simple-interface"],
    featured: false
  }
];
const CATEGORIES = ["electronics", "accessories"];
const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.featured === true);
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}
export {
  CATEGORIES as C,
  FEATURED_PRODUCTS as F,
  PRODUCTS as P,
  getProductById as g
};
