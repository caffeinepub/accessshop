import { c as createLucideIcon, r as reactExports, u as useNavigate, b as useSpeakWithNarration, j as jsxRuntimeExports, B as Button, L as Link, S as ShoppingCart, A as Accessibility, d as AccessibilityPanel, e as useCartStore, V as Volume2, s as showCartToast } from "./index-cVX3WGFm.js";
import { A as AnimatedPage } from "./AnimatedPage-CvO60yzg.js";
import { B as Badge } from "./badge-CHKeS2d-.js";
import { I as Input } from "./input-DxrTGHIz.js";
import { C as CATEGORIES, F as FEATURED_PRODUCTS } from "./products-j-rL_Mwi.js";
import { m as motion } from "./proxy-_Jdsu-al.js";
import { S as Search } from "./search-DKE7XcCR.js";
import { A as ArrowRight } from "./arrow-right-D5y1rijt.js";
import { C as CircleCheck } from "./circle-check-Bh3tiaJ6.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
];
const Mic = createLucideIcon("mic", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const PAGE_NARRATION = `Welcome to AccessShop — your accessible shopping destination. 
Discover products designed for everyone, from voice assistants and smart watches 
to adaptive clothing and accessible keyboards. 
Use our search bar to find specific products, browse by category, 
or explore our featured items below. 
The accessibility panel lets you customise text size, contrast, 
voice narration, and more.`;
const CATEGORY_CONFIG = {
  electronics: {
    icon: "🔌",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
    cardBg: "bg-accent/5 border-accent/15"
  },
  accessories: {
    icon: "🎧",
    iconBg: "bg-gradient-to-br from-purple-500 to-indigo-600",
    cardBg: "bg-primary/5 border-primary/15"
  }
};
const STATS = [
  { value: "500+", label: "Accessible Products" },
  { value: "50K+", label: "Happy Shoppers" },
  { value: "6", label: "Product Categories" },
  { value: "100%", label: "Accessibility First" }
];
const FEATURES = [
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-6 w-6" }),
    title: "Voice Narration",
    desc: "Every product can be read aloud with one click."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Accessibility, { className: "h-6 w-6" }),
    title: "Adaptive UI",
    desc: "Adjust text size, contrast, and themes to your needs."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6" }),
    title: "Keyboard Navigation",
    desc: "Full keyboard and screen reader support throughout."
  },
  {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }),
    title: "WCAG 2.1 AA",
    desc: "Meets international accessibility standards."
  }
];
function ProductCard({ product, index }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const { speak } = useSpeakWithNarration();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
    showCartToast(product.name);
  };
  const handleReadAloud = (e) => {
    e.stopPropagation();
    speak(`${product.name}. Price: ₹${product.price}. ${product.description}.`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.4, delay: index * 0.1 },
      className: "card-accessible group cursor-pointer hover:-translate-y-1 transition-all duration-300",
      "data-ocid": `product-card-${product.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$id", params: { id: product.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl mb-4 bg-muted aspect-[4/3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              loading: "lazy"
            }
          ),
          product.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "gradient-primary text-white border-0 text-xs shadow-elevated", children: "⭐ Featured" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "secondary",
              className: "text-xs bg-card/90 backdrop-blur-sm",
              children: product.category
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/$id", params: { id: product.id }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground leading-tight hover:text-primary transition-colors", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-primary flex-shrink-0", children: [
              "₹",
              product.price.toLocaleString("en-IN")
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-2 leading-relaxed", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "flex-1 btn-primary gap-2 min-h-[44px] text-sm",
                onClick: handleAddToCart,
                "data-ocid": `btn-add-cart-${product.id}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-4 w-4" }),
                  " Add to Cart"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                size: "icon",
                className: "min-h-[44px] min-w-[44px] hover:bg-accent/10 hover:border-accent transition-colors",
                onClick: handleReadAloud,
                "aria-label": `Read ${product.name} aloud`,
                "data-ocid": `btn-read-aloud-${product.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function HomePage() {
  const [query, setQuery] = reactExports.useState("");
  const [accessibilityOpen, setAccessibilityOpen] = reactExports.useState(false);
  const searchRef = reactExports.useRef(null);
  const navigate = useNavigate();
  const { speak, autoSpeak } = useSpeakWithNarration();
  reactExports.useEffect(() => {
    autoSpeak(PAGE_NARRATION);
  }, []);
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim())
      navigate({ to: "/products", search: { q: query } });
  };
  const handleVoiceAssist = () => {
    speak(PAGE_NARRATION);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedPage, { className: "flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden gradient-primary py-24 px-4 text-white",
        "aria-label": "Hero section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative container max-w-3xl mx-auto text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: -16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-white/20 text-white border-white/30 mb-6 text-sm px-4 py-1.5", children: "♿ Accessibility First Shopping" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.h1,
              {
                className: "text-hero mb-6",
                initial: { opacity: 0, y: 24 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.55, delay: 0.1 },
                children: [
                  "Shop Designed for",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline decoration-white/50 underline-offset-4", children: "Everyone" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                className: "text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto",
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.2 },
                children: "Discover products crafted for accessibility — voice assistants, adaptive tech, and everyday items for all abilities."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.form,
              {
                onSubmit: handleSearch,
                className: "flex gap-3 max-w-lg mx-auto mb-6",
                "aria-label": "Product search",
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.45, delay: 0.3 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Search,
                      {
                        className: "absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60",
                        "aria-hidden": "true"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        ref: searchRef,
                        type: "search",
                        value: query,
                        onChange: (e) => setQuery(e.target.value),
                        placeholder: "Search products…",
                        className: "h-14 pl-12 text-base bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 rounded-xl",
                        "aria-label": "Search products",
                        "data-ocid": "input-search"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      type: "submit",
                      className: "h-14 px-6 bg-white text-primary hover:bg-white/90 font-semibold rounded-xl min-w-[44px]",
                      "data-ocid": "btn-search",
                      children: "Search"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                className: "flex flex-wrap items-center justify-center gap-3",
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.45, delay: 0.4 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      className: "h-12 px-6 bg-white/15 border border-white/30 text-white hover:bg-white/25 font-semibold rounded-xl gap-2 min-h-[44px] backdrop-blur-sm",
                      "data-ocid": "hero-cta-products",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-4 w-4" }),
                        " Browse Products",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: handleVoiceAssist,
                      className: "h-12 px-6 flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent border border-white/20 backdrop-blur-sm min-h-[44px]",
                      "data-ocid": "btn-voice-assist",
                      "aria-label": "Listen to page description",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mic, { className: "h-5 w-5" }),
                        " Voice Assist"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setAccessibilityOpen(true),
                      className: "h-12 px-6 flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent border border-white/20 backdrop-blur-sm min-h-[44px]",
                      "data-ocid": "btn-accessibility-toggle",
                      "aria-label": "Open accessibility panel",
                      "aria-expanded": accessibilityOpen,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Accessibility, { className: "h-5 w-5" }),
                        " Accessibility"
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    accessibilityOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/40 z-40",
          onClick: () => setAccessibilityOpen(false),
          onKeyDown: (e) => {
            if (e.key === "Escape" || e.key === "Enter")
              setAccessibilityOpen(false);
          },
          role: "button",
          tabIndex: 0,
          "aria-label": "Close accessibility panel"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "dialog",
        {
          open: true,
          className: "fixed top-20 right-4 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto border-0 p-0 bg-transparent",
          "aria-label": "Accessibility Settings",
          "data-ocid": "hero-accessibility-panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccessibilityPanel, { onClose: () => setAccessibilityOpen(false) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b py-8 px-4", "aria-label": "Store stats", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        className: "text-center",
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.08 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-4xl font-display font-bold text-primary", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1 font-medium", children: stat.label })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 bg-muted/30",
        "aria-label": "Product categories",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-section mb-3", children: "Shop by Category" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-readable max-w-xl mx-auto", children: "Products organised by your needs — from daily assistive tech to adaptive fashion." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4", children: CATEGORIES.map((cat, i) => {
            const config = CATEGORY_CONFIG[cat] ?? {
              icon: "📦",
              iconBg: "bg-gradient-to-br from-muted to-secondary",
              cardBg: "bg-secondary border-border"
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { duration: 0.35, delay: i * 0.07 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/products",
                    search: { category: cat },
                    className: `flex flex-col items-center text-center p-5 rounded-2xl border shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${config.cardBg}`,
                    "data-ocid": `category-${cat.replace(/\s+/g, "-").toLowerCase()}`,
                    "aria-label": `Browse ${cat}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: `w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-subtle mb-3 ${config.iconBg}`,
                          children: config.icon
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground leading-tight", children: cat })
                    ]
                  }
                )
              },
              cat
            );
          }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 bg-background",
        "aria-label": "Featured products",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex items-end justify-between mb-12",
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-section mb-2", children: "Featured Products" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-readable", children: "Our most popular accessible picks" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/products",
                    className: "flex items-center gap-1.5 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded text-sm whitespace-nowrap",
                    "data-ocid": "link-view-all",
                    children: [
                      "View all ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: FEATURED_PRODUCTS.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i }, product.id)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 bg-muted/40",
        "aria-label": "Accessibility features",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "text-center mb-14",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accessibility, { className: "h-8 w-8 text-white" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-section mb-4", children: "Built for Every Shopper" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-readable text-muted-foreground max-w-2xl mx-auto", children: "Our accessibility panel lets you customise text size, contrast, voice narration, and more — making shopping comfortable for everyone." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: FEATURES.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "card-accessible text-center",
              initial: { opacity: 0, y: 24 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.4, delay: i * 0.1 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 text-white shadow-subtle", children: feature.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base mb-2", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feature.desc })
              ]
            },
            feature.title
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "flex flex-wrap gap-4 justify-center",
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.45 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/accessibility", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "btn-primary h-12 px-8 gap-2",
                    "data-ocid": "hero-cta-accessibility",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Accessibility, { className: "h-5 w-5" }),
                      " Explore Accessibility"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    className: "h-12 px-8 gap-2 min-h-[44px]",
                    "data-ocid": "hero-cta-shop",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-5 w-5" }),
                      " Shop All Products"
                    ]
                  }
                ) })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 gradient-primary text-white",
        "aria-label": "Trust banner",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-4xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.5 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-display font-bold mb-4", children: "Ready to start shopping?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/85 text-lg mb-8 max-w-xl mx-auto", children: "Join thousands of shoppers who trust AccessShop for accessible, high-quality products." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "h-14 px-10 bg-white text-primary hover:bg-white/90 font-bold text-lg rounded-xl gap-2 shadow-elevated min-h-[44px]",
                  "data-ocid": "trust-cta-shop",
                  children: [
                    "Shop Now ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" })
                  ]
                }
              ) })
            ]
          }
        ) })
      }
    )
  ] });
}
export {
  HomePage as default
};
