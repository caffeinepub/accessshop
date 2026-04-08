import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { AnimatedPage } from "@/components/AnimatedPage";
import { Badge } from "@/components/ui/badge";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

const FEATURES = [
  {
    icon: "🔠",
    title: "Adjustable Text Size",
    desc: "Scale text from 80% to 150% across the entire app for comfortable reading at any distance.",
  },
  {
    icon: "🌗",
    title: "High Contrast Mode",
    desc: "Dramatically increases color contrast, making content easier to distinguish for users with low vision.",
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    desc: "Reduces eye strain in low-light conditions with a carefully designed dark palette and reduced glare.",
  },
  {
    icon: "🔊",
    title: "Voice Narration",
    desc: "Automatically reads page content and product descriptions aloud using the Web Speech API.",
  },
  {
    icon: "🎯",
    title: "Focus Highlight",
    desc: "Adds enhanced visible focus rings to every interactive element for keyboard navigation.",
  },
  {
    icon: "⌨️",
    title: "Keyboard Navigation Guide",
    desc: "Shows interactive element identifiers to help users understand the keyboard navigation structure.",
  },
  {
    icon: "📖",
    title: "Read Aloud (Per Product)",
    desc: "Every product card has a dedicated read-aloud button to hear product details spoken immediately.",
  },
  {
    icon: "🏷️",
    title: "ARIA Labels & Roles",
    desc: "All images, buttons, and icons have descriptive ARIA labels and roles for screen reader compatibility.",
  },
];

const SHORTCUTS = [
  { key: "Tab", desc: "Move focus to the next interactive element" },
  {
    key: "Shift + Tab",
    desc: "Move focus to the previous interactive element",
  },
  { key: "Enter", desc: "Activate a focused button or link" },
  { key: "Space", desc: "Activate a focused button, checkbox, or toggle" },
  {
    key: "Arrow Keys",
    desc: "Navigate within components (menus, sliders, etc.)",
  },
  { key: "Escape", desc: "Close modals, panels, and dropdown menus" },
  { key: "Tab (page load)", desc: "Reveal the skip-to-main-content link" },
];

const SCREEN_READER_TIPS = [
  {
    icon: "💡",
    title: "Use Heading Navigation",
    desc: "Press H (NVDA/JAWS) or use the rotor (VoiceOver) to jump between headings and scan page structure quickly.",
  },
  {
    icon: "🔗",
    title: "Browse Links List",
    desc: "Use the Links List feature (Insert+F7 in JAWS, Caps Lock+F7 in NVDA) to get a full list of all links on the page.",
  },
  {
    icon: "🏷️",
    title: "Form Labels",
    desc: "Every form input has a visible and programmatic label. Tab through forms and your screen reader will announce field names.",
  },
  {
    icon: "📢",
    title: "Live Regions",
    desc: "Cart updates, form errors, and success messages are announced via ARIA live regions without requiring focus movement.",
  },
  {
    icon: "🖼️",
    title: "Image Descriptions",
    desc: "All product images include alt text describing the product. Decorative images are marked with empty alt attributes.",
  },
];

export default function AccessibilityPage() {
  return (
    <AnimatedPage className="flex-1">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-muted/30 border-b border-border px-4 py-3"
      >
        <div className="container max-w-5xl">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link
                to="/home"
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-foreground font-medium">Accessibility</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-primary py-16 px-4 text-white text-center">
        <div className="container max-w-2xl mx-auto">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-1.5 text-sm">
            WCAG 2.1 AA Compliant
          </Badge>
          <h1 className="text-hero mb-4">Accessibility Guide</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            AccessShop is built from the ground up for everyone. Explore the
            tools available to customise your experience and learn how to get
            the most out of the site.
          </p>
        </div>
      </section>

      {/* Live Panel + Feature list */}
      <section className="py-16 px-4 bg-background">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Live Panel */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                Customise Your Experience
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Changes apply instantly across the entire site. Your settings
                are saved to your browser so they persist between visits.
              </p>
              <AccessibilityPanel inline />
            </div>

            {/* Feature list */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                All Accessibility Features
              </h2>
              <ul
                className="space-y-4"
                data-ocid="accessibility-features"
                aria-label="List of accessibility features"
              >
                {FEATURES.map((f) => (
                  <li
                    key={f.title}
                    className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div
                      className="text-3xl flex-shrink-0"
                      role="img"
                      aria-label={f.title}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section
        className="py-16 px-4 bg-muted/30"
        aria-labelledby="shortcuts-heading"
      >
        <div className="container max-w-3xl mx-auto">
          <h2 id="shortcuts-heading" className="text-section text-center mb-10">
            Keyboard Shortcuts
          </h2>
          <div className="card-accessible" data-ocid="keyboard-shortcuts">
            <table className="w-full" aria-label="Keyboard shortcuts reference">
              <thead>
                <tr className="border-b border-border">
                  <th
                    scope="col"
                    className="text-left pb-4 font-semibold text-foreground"
                  >
                    Key
                  </th>
                  <th
                    scope="col"
                    className="text-left pb-4 font-semibold text-foreground"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {SHORTCUTS.map((tip) => (
                  <tr key={tip.key}>
                    <td className="py-4 pr-4">
                      <kbd className="px-3 py-1.5 bg-muted border border-border rounded-lg text-sm font-mono font-medium text-foreground whitespace-nowrap">
                        {tip.key}
                      </kbd>
                    </td>
                    <td className="py-4 text-muted-foreground">{tip.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Screen Reader Tips */}
      <section
        className="py-16 px-4 bg-background"
        aria-labelledby="sr-tips-heading"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="sr-tips-heading" className="text-section mb-3">
              Screen Reader Tips
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              AccessShop works well with NVDA, JAWS, VoiceOver, and TalkBack.
              Here are some tips to navigate the site effectively.
            </p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid="screen-reader-tips"
          >
            {SCREEN_READER_TIPS.map((tip) => (
              <div key={tip.title} className="card-accessible">
                <div
                  className="text-3xl mb-3"
                  role="img"
                  aria-label={tip.title}
                >
                  {tip.icon}
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WCAG Compliance Statement */}
      <section
        className="py-16 px-4 bg-muted/40"
        aria-labelledby="wcag-heading"
      >
        <div className="container max-w-3xl mx-auto">
          <div className="card-accessible border-l-4 border-primary">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-3 py-1">
              Compliance Statement
            </Badge>
            <h2
              id="wcag-heading"
              className="text-2xl font-display font-bold text-foreground mb-4"
            >
              WCAG 2.1 AA Conformance
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              AccessShop is committed to ensuring digital accessibility for
              people with disabilities. We continually improve the user
              experience for everyone and apply relevant accessibility standards
              where possible.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This website aims to conform to the{" "}
              <strong className="text-foreground">
                Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
              </strong>
              . These guidelines explain how to make web content more accessible
              to people with disabilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you experience any accessibility barriers on this site, please{" "}
              <Link
                to="/contact"
                className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                contact our accessibility team
              </Link>
              . We take all reports seriously and will respond within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
