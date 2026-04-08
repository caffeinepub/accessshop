import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { AnimatedPage } from "@/components/AnimatedPage";
import { showCartToast } from "@/components/Toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CATEGORIES, FEATURED_PRODUCTS, type Product } from "@/data/products";
import { useSpeakWithNarration } from "@/hooks/useSpeech";
import { useCartStore } from "@/stores/cartStore";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Accessibility,
  ArrowRight,
  CheckCircle2,
  Mic,
  Search,
  ShoppingCart,
  Star,
  Volume2,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const PAGE_NARRATION = `Welcome to AccessShop — your accessible shopping destination. 
Discover products designed for everyone, from voice assistants and smart watches 
to adaptive clothing and accessible keyboards. 
Use our search bar to find specific products, browse by category, 
or explore our featured items below. 
The accessibility panel lets you customise text size, contrast, 
voice narration, and more.`;

const CATEGORY_CONFIG: Record<
  string,
  { icon: string; iconBg: string; cardBg: string }
> = {
  "Voice Assistants": {
    icon: "🎙️",
    iconBg: "bg-gradient-to-br from-purple-600 to-purple-800",
    cardBg: "bg-primary/5 border-primary/15",
  },
  "Smart Watches": {
    icon: "⌚",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    cardBg: "bg-accent/5 border-accent/15",
  },
  "Large Button Phones": {
    icon: "📱",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    cardBg: "bg-secondary border-border",
  },
  "Accessible Keyboards": {
    icon: "⌨️",
    iconBg: "bg-gradient-to-br from-yellow-400 to-amber-500",
    cardBg: "bg-secondary border-border",
  },
  Gadgets: {
    icon: "🔧",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-600",
    cardBg: "bg-secondary border-border",
  },
  Fashion: {
    icon: "👕",
    iconBg: "bg-gradient-to-br from-pink-500 to-fuchsia-600",
    cardBg: "bg-primary/5 border-primary/15",
  },
};

const STATS = [
  { value: "500+", label: "Accessible Products" },
  { value: "50K+", label: "Happy Shoppers" },
  { value: "6", label: "Product Categories" },
  { value: "100%", label: "Accessibility First" },
];

const FEATURES = [
  {
    icon: <Volume2 className="h-6 w-6" />,
    title: "Voice Narration",
    desc: "Every product can be read aloud with one click.",
  },
  {
    icon: <Accessibility className="h-6 w-6" />,
    title: "Adaptive UI",
    desc: "Adjust text size, contrast, and themes to your needs.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Keyboard Navigation",
    desc: "Full keyboard and screen reader support throughout.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "WCAG 2.1 AA",
    desc: "Meets international accessibility standards.",
  },
];

// ─── Product Card ──────────────────────────────────────────────────────────────

function ProductCard({ product, index }: { product: Product; index: number }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const { speak } = useSpeakWithNarration();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    showCartToast(product.name);
  };

  const handleReadAloud = (e: React.MouseEvent) => {
    e.stopPropagation();
    speak(
      `${product.name}. Price: $${product.price}. ${product.description}. Rating: ${product.rating} out of 5.`,
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card-accessible group cursor-pointer hover:-translate-y-1 transition-all duration-300"
      data-ocid={`product-card-${product.id}`}
    >
      <Link to="/products/$id" params={{ id: product.id }}>
        <div className="relative overflow-hidden rounded-xl mb-4 bg-muted aspect-[4/3]">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="gradient-primary text-white border-0 text-xs shadow-elevated">
                ⭐ Featured
              </Badge>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge
              variant="secondary"
              className="text-xs bg-card/90 backdrop-blur-sm"
            >
              {product.category}
            </Badge>
          </div>
        </div>
      </Link>

      <div className="space-y-2">
        <Link to="/products/$id" params={{ id: product.id }}>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-bold text-lg text-foreground leading-tight hover:text-primary transition-colors">
              {product.name}
            </h3>
            <span className="text-lg font-bold text-primary flex-shrink-0">
              ${product.price}
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={`star-${product.id}-${i}`}
              className={`h-3.5 w-3.5 ${
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-muted text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm font-medium text-foreground ml-0.5">
            {product.rating}
          </span>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex gap-2 pt-2">
          <Button
            className="flex-1 btn-primary gap-2 min-h-[44px] text-sm"
            onClick={handleAddToCart}
            data-ocid={`btn-add-cart-${product.id}`}
          >
            <ShoppingCart className="h-4 w-4" /> Add to Cart
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="min-h-[44px] min-w-[44px] hover:bg-accent/10 hover:border-accent transition-colors"
            onClick={handleReadAloud}
            aria-label={`Read ${product.name} aloud`}
            data-ocid={`btn-read-aloud-${product.id}`}
          >
            <Volume2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Home Page ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { speak, autoSpeak } = useSpeakWithNarration();

  // biome-ignore lint/correctness/useExhaustiveDependencies: auto-narrate on mount
  useEffect(() => {
    autoSpeak(PAGE_NARRATION);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim())
      navigate({ to: "/products", search: { q: query } as never });
  };

  const handleVoiceAssist = () => {
    speak(PAGE_NARRATION);
  };

  return (
    <AnimatedPage className="flex-1">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden gradient-primary py-24 px-4 text-white"
        aria-label="Hero section"
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm px-4 py-1.5">
              ♿ Accessibility First Shopping
            </Badge>
          </motion.div>

          <motion.h1
            className="text-hero mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Shop Designed for{" "}
            <span className="underline decoration-white/50 underline-offset-4">
              Everyone
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover products crafted for accessibility — voice assistants,
            adaptive tech, and everyday items for all abilities.
          </motion.p>

          {/* Search bar */}
          <motion.form
            onSubmit={handleSearch}
            className="flex gap-3 max-w-lg mx-auto mb-6"
            aria-label="Product search"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.3 }}
          >
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60"
                aria-hidden="true"
              />
              <Input
                ref={searchRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products…"
                className="h-14 pl-12 text-base bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30 rounded-xl"
                aria-label="Search products"
                data-ocid="input-search"
              />
            </div>
            <Button
              type="submit"
              className="h-14 px-6 bg-white text-primary hover:bg-white/90 font-semibold rounded-xl min-w-[44px]"
              data-ocid="btn-search"
            >
              Search
            </Button>
          </motion.form>

          {/* Hero action buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
          >
            <Link to="/products">
              <Button
                className="h-12 px-6 bg-white/15 border border-white/30 text-white hover:bg-white/25 font-semibold rounded-xl gap-2 min-h-[44px] backdrop-blur-sm"
                data-ocid="hero-cta-products"
              >
                <ShoppingCart className="h-4 w-4" /> Browse Products{" "}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            <button
              type="button"
              onClick={handleVoiceAssist}
              className="h-12 px-6 flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent border border-white/20 backdrop-blur-sm min-h-[44px]"
              data-ocid="btn-voice-assist"
              aria-label="Listen to page description"
            >
              <Mic className="h-5 w-5" /> Voice Assist
            </button>

            <button
              type="button"
              onClick={() => setAccessibilityOpen(true)}
              className="h-12 px-6 flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent border border-white/20 backdrop-blur-sm min-h-[44px]"
              data-ocid="btn-accessibility-toggle"
              aria-label="Open accessibility panel"
              aria-expanded={accessibilityOpen}
            >
              <Accessibility className="h-5 w-5" /> Accessibility
            </button>
          </motion.div>
        </div>
      </section>

      {/* Inline Accessibility Panel */}
      {accessibilityOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setAccessibilityOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Escape" || e.key === "Enter")
                setAccessibilityOpen(false);
            }}
            role="button"
            tabIndex={0}
            aria-label="Close accessibility panel"
          />
          <dialog
            open
            className="fixed top-20 right-4 z-50 max-h-[calc(100vh-6rem)] overflow-y-auto border-0 p-0 bg-transparent"
            aria-label="Accessibility Settings"
            data-ocid="hero-accessibility-panel"
          >
            <AccessibilityPanel onClose={() => setAccessibilityOpen(false)} />
          </dialog>
        </>
      )}

      {/* ── Stats Bar ────────────────────────────────────────────────────── */}
      <section className="bg-card border-b py-8 px-4" aria-label="Store stats">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────────────────── */}
      <section
        className="py-20 px-4 bg-muted/30"
        aria-label="Product categories"
      >
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-section mb-3">Shop by Category</h2>
            <p className="text-muted-foreground text-readable max-w-xl mx-auto">
              Products organised by your needs — from daily assistive tech to
              adaptive fashion.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {CATEGORIES.map((cat, i) => {
              const config = CATEGORY_CONFIG[cat];
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  <Link
                    to="/products"
                    search={{ category: cat } as never}
                    className={`flex flex-col items-center text-center p-5 rounded-2xl border shadow-subtle hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${config.cardBg}`}
                    data-ocid={`category-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                    aria-label={`Browse ${cat}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-subtle mb-3 ${config.iconBg}`}
                    >
                      {config.icon}
                    </div>
                    <div className="text-sm font-semibold text-foreground leading-tight">
                      {cat}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────────────────────── */}
      <section
        className="py-20 px-4 bg-background"
        aria-label="Featured products"
      >
        <div className="container">
          <motion.div
            className="flex items-end justify-between mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2 className="text-section mb-2">Featured Products</h2>
              <p className="text-muted-foreground text-readable">
                Our most popular accessible picks
              </p>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-1.5 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded text-sm whitespace-nowrap"
              data-ocid="link-view-all"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Accessibility Features ───────────────────────────────────────── */}
      <section
        className="py-20 px-4 bg-muted/40"
        aria-label="Accessibility features"
      >
        <div className="container max-w-5xl">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 shadow-elevated">
              <Accessibility className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-section mb-4">Built for Every Shopper</h2>
            <p className="text-readable text-muted-foreground max-w-2xl mx-auto">
              Our accessibility panel lets you customise text size, contrast,
              voice narration, and more — making shopping comfortable for
              everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="card-accessible text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 text-white shadow-subtle">
                  {feature.icon}
                </div>
                <h3 className="font-display font-bold text-base mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <Link to="/accessibility">
              <Button
                className="btn-primary h-12 px-8 gap-2"
                data-ocid="hero-cta-accessibility"
              >
                <Accessibility className="h-5 w-5" /> Explore Accessibility
              </Button>
            </Link>
            <Link to="/products">
              <Button
                variant="outline"
                className="h-12 px-8 gap-2 min-h-[44px]"
                data-ocid="hero-cta-shop"
              >
                <ShoppingCart className="h-5 w-5" /> Shop All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Trust Banner ─────────────────────────────────────────────────── */}
      <section
        className="py-16 px-4 gradient-primary text-white"
        aria-label="Trust banner"
      >
        <div className="container max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to start shopping?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of shoppers who trust AccessShop for accessible,
              high-quality products.
            </p>
            <Link to="/products">
              <Button
                className="h-14 px-10 bg-white text-primary hover:bg-white/90 font-bold text-lg rounded-xl gap-2 shadow-elevated min-h-[44px]"
                data-ocid="trust-cta-shop"
              >
                Shop Now <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
}
