import { j as jsxRuntimeExports, L as Link, d as AccessibilityPanel } from "./index-BoX3_azF.js";
import { A as AnimatedPage } from "./AnimatedPage-BvLNsX_N.js";
import { B as Badge } from "./badge-DczFgQBo.js";
import { H as House } from "./house-Db-kb7np.js";
import { C as ChevronRight } from "./chevron-right-CUngB5aA.js";
const FEATURES = [
  {
    icon: "🔠",
    title: "Adjustable Text Size",
    desc: "Scale text from 80% to 150% across the entire app for comfortable reading at any distance."
  },
  {
    icon: "🌗",
    title: "High Contrast Mode",
    desc: "Dramatically increases color contrast, making content easier to distinguish for users with low vision."
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    desc: "Reduces eye strain in low-light conditions with a carefully designed dark palette and reduced glare."
  },
  {
    icon: "🔊",
    title: "Voice Narration",
    desc: "Automatically reads page content and product descriptions aloud using the Web Speech API."
  },
  {
    icon: "🎯",
    title: "Focus Highlight",
    desc: "Adds enhanced visible focus rings to every interactive element for keyboard navigation."
  },
  {
    icon: "⌨️",
    title: "Keyboard Navigation Guide",
    desc: "Shows interactive element identifiers to help users understand the keyboard navigation structure."
  },
  {
    icon: "📖",
    title: "Read Aloud (Per Product)",
    desc: "Every product card has a dedicated read-aloud button to hear product details spoken immediately."
  },
  {
    icon: "🏷️",
    title: "ARIA Labels & Roles",
    desc: "All images, buttons, and icons have descriptive ARIA labels and roles for screen reader compatibility."
  }
];
const SHORTCUTS = [
  { key: "Tab", desc: "Move focus to the next interactive element" },
  {
    key: "Shift + Tab",
    desc: "Move focus to the previous interactive element"
  },
  { key: "Enter", desc: "Activate a focused button or link" },
  { key: "Space", desc: "Activate a focused button, checkbox, or toggle" },
  {
    key: "Arrow Keys",
    desc: "Navigate within components (menus, sliders, etc.)"
  },
  { key: "Escape", desc: "Close modals, panels, and dropdown menus" },
  { key: "Tab (page load)", desc: "Reveal the skip-to-main-content link" }
];
const SCREEN_READER_TIPS = [
  {
    icon: "💡",
    title: "Use Heading Navigation",
    desc: "Press H (NVDA/JAWS) or use the rotor (VoiceOver) to jump between headings and scan page structure quickly."
  },
  {
    icon: "🔗",
    title: "Browse Links List",
    desc: "Use the Links List feature (Insert+F7 in JAWS, Caps Lock+F7 in NVDA) to get a full list of all links on the page."
  },
  {
    icon: "🏷️",
    title: "Form Labels",
    desc: "Every form input has a visible and programmatic label. Tab through forms and your screen reader will announce field names."
  },
  {
    icon: "📢",
    title: "Live Regions",
    desc: "Cart updates, form errors, and success messages are announced via ARIA live regions without requiring focus movement."
  },
  {
    icon: "🖼️",
    title: "Image Descriptions",
    desc: "All product images include alt text describing the product. Decorative images are marked with empty alt attributes."
  }
];
function AccessibilityPage() {
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-medium", children: "Accessibility" })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-primary py-16 px-4 text-white text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-white/20 text-white border-white/30 mb-6 px-4 py-1.5 text-sm", children: "WCAG 2.1 AA Compliant" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-hero mb-4", children: "Accessibility Guide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/90 leading-relaxed", children: "AccessShop is built from the ground up for everyone. Explore the tools available to customise your experience and learn how to get the most out of the site." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-3", children: "Customise Your Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "Changes apply instantly across the entire site. Your settings are saved to your browser so they persist between visits." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccessibilityPanel, { inline: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-6", children: "All Accessibility Features" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "ul",
          {
            className: "space-y-4",
            "data-ocid": "accessibility-features",
            "aria-label": "List of accessibility features",
            children: FEATURES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "text-3xl flex-shrink-0",
                      role: "img",
                      "aria-label": f.title,
                      children: f.icon
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground mb-1", children: f.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
                  ] })
                ]
              },
              f.title
            ))
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 bg-muted/30",
        "aria-labelledby": "shortcuts-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "shortcuts-heading", className: "text-section text-center mb-10", children: "Keyboard Shortcuts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-accessible", "data-ocid": "keyboard-shortcuts", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", "aria-label": "Keyboard shortcuts reference", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  scope: "col",
                  className: "text-left pb-4 font-semibold text-foreground",
                  children: "Key"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "th",
                {
                  scope: "col",
                  className: "text-left pb-4 font-semibold text-foreground",
                  children: "Action"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: SHORTCUTS.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { className: "px-3 py-1.5 bg-muted border border-border rounded-lg text-sm font-mono font-medium text-foreground whitespace-nowrap", children: tip.key }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-4 text-muted-foreground", children: tip.desc })
            ] }, tip.key)) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 bg-background",
        "aria-labelledby": "sr-tips-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "sr-tips-heading", className: "text-section mb-3", children: "Screen Reader Tips" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-xl mx-auto", children: "AccessShop works well with NVDA, JAWS, VoiceOver, and TalkBack. Here are some tips to navigate the site effectively." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
              "data-ocid": "screen-reader-tips",
              children: SCREEN_READER_TIPS.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "text-3xl mb-3",
                    role: "img",
                    "aria-label": tip.title,
                    children: tip.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-2", children: tip.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: tip.desc })
              ] }, tip.title))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 bg-muted/40",
        "aria-labelledby": "wcag-heading",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible border-l-4 border-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1", children: "Compliance Statement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              id: "wcag-heading",
              className: "text-2xl font-display font-bold text-foreground mb-4",
              children: "WCAG 2.1 AA Conformance"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "AccessShop is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards where possible." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed mb-4", children: [
            "This website aims to conform to the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Web Content Accessibility Guidelines (WCAG) 2.1 Level AA" }),
            ". These guidelines explain how to make web content more accessible to people with disabilities."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
            "If you experience any accessibility barriers on this site, please",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "text-primary underline underline-offset-2 hover:text-primary/80 transition-colors",
                children: "contact our accessibility team"
              }
            ),
            ". We take all reports seriously and will respond within 48 hours."
          ] })
        ] }) })
      }
    )
  ] });
}
export {
  AccessibilityPage as default
};
