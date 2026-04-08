import { j as jsxRuntimeExports, L as Link, B as Button } from "./index-cVX3WGFm.js";
import { A as AnimatedPage } from "./AnimatedPage-CvO60yzg.js";
import { B as Badge } from "./badge-CHKeS2d-.js";
import { H as House } from "./house-BJdjhkmC.js";
import { C as ChevronRight } from "./chevron-right-Do8tjoSV.js";
const VALUES = [
  {
    icon: "♿",
    title: "Accessibility First",
    desc: "Every product and feature is designed with accessibility as the primary requirement, not an afterthought."
  },
  {
    icon: "🌍",
    title: "Universal Design",
    desc: "We believe great design works for everyone. Products that help people with disabilities often help everyone."
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We partner with leading assistive technology companies to bring the latest innovations to our customers."
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Built in close collaboration with the disability community. Your feedback shapes every product we carry."
  }
];
const TEAM = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Disability rights advocate with 15 years in assistive technology.",
    emoji: "👩‍💼"
  },
  {
    name: "Marcus Johnson",
    role: "Head of Accessibility",
    bio: "Former screen-reader developer and accessibility consultant.",
    emoji: "👨‍💻"
  },
  {
    name: "Priya Patel",
    role: "Product Lead",
    bio: "Designs product experiences for people of all abilities.",
    emoji: "👩‍🎨"
  },
  {
    name: "David Okafor",
    role: "Community Manager",
    bio: "Connects our community of users and advocates.",
    emoji: "👨‍🤝‍👨"
  }
];
const STATS = [
  { value: "24+", label: "Products available" },
  { value: "5", label: "Categories" },
  { value: "100%", label: "WCAG AA compliant" },
  { value: "50K+", label: "Happy customers" }
];
const COMMITMENT = [
  {
    icon: "✅",
    title: "WCAG 2.1 AA Compliance",
    desc: "Every page and component meets or exceeds WCAG 2.1 AA success criteria."
  },
  {
    icon: "🔍",
    title: "Regular Audits",
    desc: "We conduct quarterly accessibility audits with real users who rely on assistive technology."
  },
  {
    icon: "📋",
    title: "Accessibility Statement",
    desc: "We publish a full accessibility statement and respond to feedback within 48 hours."
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedPage, { className: "flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        "aria-label": "Breadcrumb",
        className: "bg-muted/30 border-b border-border px-4 py-3",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/home",
              className: "flex items-center gap-1 hover:text-foreground transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-3.5 w-3.5" }),
                "Home"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-medium", children: "About" })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-primary py-20 px-4 text-white text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-white/20 text-white border-white/30 mb-6 px-4 py-1.5 text-sm", children: "Our Story" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-hero mb-6", children: "Shopping Without Barriers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/90 leading-relaxed max-w-2xl mx-auto", children: "AccessShop was founded on a simple belief: everyone deserves access to technology and products that make life easier, regardless of ability." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-12 px-4 bg-background",
        "aria-label": "Our impact stats",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-display font-bold text-primary mb-1", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: s.label })
        ] }, s.label)) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-muted/30", "aria-label": "Our mission", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-section mb-6", children: "Our Mission" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-readable text-muted-foreground leading-relaxed", children: [
        "At ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "AccessShop" }),
        ", our mission is to make accessible technology available to everyone. We curate products that empower people with visual, auditory, motor, and cognitive differences — alongside everyday essentials that benefit all shoppers. We believe that when technology is truly inclusive, everyone wins."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-background", "aria-label": "Our values", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-section text-center mb-12", children: "What We Stand For" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: VALUES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-4xl flex-shrink-0",
            role: "img",
            "aria-label": v.title,
            children: v.icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-bold text-foreground mb-2", children: v.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: v.desc })
        ] })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 bg-muted/30",
        "aria-label": "Accessibility commitment",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5", children: "Our Commitment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-section", children: "Built for Everyone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-4 max-w-xl mx-auto", children: "Accessibility isn't a feature — it's the foundation of everything we build." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: COMMITMENT.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", role: "img", "aria-label": c.title, children: c.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-2", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: c.desc })
          ] }, c.title)) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-background", "aria-label": "Our team", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-section text-center mb-12", children: "Meet the Team" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: TEAM.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-6xl mb-4",
            role: "img",
            "aria-label": `${m.name} photo`,
            children: m.emoji
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary text-sm font-medium mb-2", children: m.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: m.bio })
      ] }, m.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-muted/40 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-section mb-4", children: "Start Shopping Today" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-readable mb-8", children: "Join thousands of customers who have discovered the right products for their needs." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            className: "btn-primary h-12 px-8",
            "data-ocid": "about-cta-products",
            children: "Browse Products"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "h-12 px-8", children: "Contact Us" }) })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as default
};
