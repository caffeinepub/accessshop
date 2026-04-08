import { AnimatedPage } from "@/components/AnimatedPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

const VALUES = [
  {
    icon: "♿",
    title: "Accessibility First",
    desc: "Every product and feature is designed with accessibility as the primary requirement, not an afterthought.",
  },
  {
    icon: "🌍",
    title: "Universal Design",
    desc: "We believe great design works for everyone. Products that help people with disabilities often help everyone.",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We partner with leading assistive technology companies to bring the latest innovations to our customers.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "Built in close collaboration with the disability community. Your feedback shapes every product we carry.",
  },
];

const TEAM = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Disability rights advocate with 15 years in assistive technology.",
    emoji: "👩‍💼",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Accessibility",
    bio: "Former screen-reader developer and accessibility consultant.",
    emoji: "👨‍💻",
  },
  {
    name: "Priya Patel",
    role: "Product Lead",
    bio: "Designs product experiences for people of all abilities.",
    emoji: "👩‍🎨",
  },
  {
    name: "David Okafor",
    role: "Community Manager",
    bio: "Connects our community of users and advocates.",
    emoji: "👨‍🤝‍👨",
  },
];

const STATS = [
  { value: "24+", label: "Products available" },
  { value: "5", label: "Categories" },
  { value: "100%", label: "WCAG AA compliant" },
  { value: "50K+", label: "Happy customers" },
];

const COMMITMENT = [
  {
    icon: "✅",
    title: "WCAG 2.1 AA Compliance",
    desc: "Every page and component meets or exceeds WCAG 2.1 AA success criteria.",
  },
  {
    icon: "🔍",
    title: "Regular Audits",
    desc: "We conduct quarterly accessibility audits with real users who rely on assistive technology.",
  },
  {
    icon: "📋",
    title: "Accessibility Statement",
    desc: "We publish a full accessibility statement and respond to feedback within 48 hours.",
  },
];

export default function AboutPage() {
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
            <li className="text-foreground font-medium">About</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-primary py-20 px-4 text-white text-center">
        <div className="container max-w-3xl mx-auto">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-1.5 text-sm">
            Our Story
          </Badge>
          <h1 className="text-hero mb-6">Shopping Without Barriers</h1>
          <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            AccessShop was founded on a simple belief: everyone deserves access
            to technology and products that make life easier, regardless of
            ability.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-12 px-4 bg-background"
        aria-label="Our impact stats"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="card-accessible text-center">
                <div className="text-4xl font-display font-bold text-primary mb-1">
                  {s.value}
                </div>
                <div className="text-muted-foreground text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-muted/30" aria-label="Our mission">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-section mb-6">Our Mission</h2>
          <p className="text-readable text-muted-foreground leading-relaxed">
            At <strong className="text-foreground">AccessShop</strong>, our
            mission is to make accessible technology available to everyone. We
            curate products that empower people with visual, auditory, motor,
            and cognitive differences — alongside everyday essentials that
            benefit all shoppers. We believe that when technology is truly
            inclusive, everyone wins.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-background" aria-label="Our values">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-section text-center mb-12">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="card-accessible flex gap-4">
                <div
                  className="text-4xl flex-shrink-0"
                  role="img"
                  aria-label={v.title}
                >
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Commitment */}
      <section
        className="py-16 px-4 bg-muted/30"
        aria-label="Accessibility commitment"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 px-4 py-1.5">
              Our Commitment
            </Badge>
            <h2 className="text-section">Built for Everyone</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Accessibility isn't a feature — it's the foundation of everything
              we build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMITMENT.map((c) => (
              <div key={c.title} className="card-accessible text-center">
                <div className="text-4xl mb-4" role="img" aria-label={c.title}>
                  {c.icon}
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-background" aria-label="Our team">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-section text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.name} className="card-accessible text-center">
                <div
                  className="text-6xl mb-4"
                  role="img"
                  aria-label={`${m.name} photo`}
                >
                  {m.emoji}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {m.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-2">
                  {m.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-muted/40 text-center">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-section mb-4">Start Shopping Today</h2>
          <p className="text-muted-foreground text-readable mb-8">
            Join thousands of customers who have discovered the right products
            for their needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/products">
              <Button
                className="btn-primary h-12 px-8"
                data-ocid="about-cta-products"
              >
                Browse Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="h-12 px-8">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
