import { AnimatedPage } from "@/components/AnimatedPage";
import { showCartToast } from "@/components/Toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { useSpeech } from "@/hooks/useSpeech";
import { useCartStore } from "@/stores/cartStore";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, ShoppingCart, Volume2 } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

// ─── Audio Button ─────────────────────────────────────────────────────────────
interface AudioButtonProps {
  text: string;
  label: string;
  "data-ocid"?: string;
  size?: "sm" | "md";
}

function AudioButton({
  text,
  label,
  "data-ocid": ocid,
  size = "md",
}: AudioButtonProps) {
  const { speak, stop, isSpeaking } = useSpeech();
  const [active, setActive] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (active && isSpeaking) {
        stop();
        setActive(false);
      } else {
        setActive(true);
        speak(text);
      }
    },
    [active, isSpeaking, speak, stop, text],
  );

  // Sync active state with isSpeaking
  useEffect(() => {
    if (!isSpeaking) setActive(false);
  }, [isSpeaking]);

  const isActive = active && isSpeaking;
  const sizeClasses =
    size === "sm" ? "w-9 h-9 rounded-lg" : "w-11 h-11 rounded-xl";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isActive ? `Stop: ${label}` : label}
      title={isActive ? "Stop" : label}
      className={`flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${sizeClasses} ${
        isActive
          ? "border-primary bg-primary/15 text-primary animate-pulse"
          : "border-border bg-card hover:bg-primary/10 hover:border-primary/50 text-muted-foreground hover:text-primary"
      }`}
      data-ocid={ocid}
    >
      <Volume2 className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
    </button>
  );
}

// ─── Section Row: label + audio button ───────────────────────────────────────
function SectionHeader({
  label,
  audioText,
  audioLabel,
  ocid,
}: {
  label: string;
  audioText: string;
  audioLabel: string;
  ocid: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-bold text-foreground text-base">{label}</span>
      <AudioButton
        text={audioText}
        label={audioLabel}
        data-ocid={ocid}
        size="sm"
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const product = getProductById(id);
  const addToCart = useCartStore((s) => s.addToCart);
  const { speak, stop, isSpeaking } = useSpeech();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [readAllActive, setReadAllActive] = useState(false);

  // Sync readAll active state
  useEffect(() => {
    if (!isSpeaking) setReadAllActive(false);
  }, [isSpeaking]);

  if (!product) {
    return (
      <AnimatedPage className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md" data-ocid="product-not-found">
          <div className="text-7xl mb-6 select-none">🔍</div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">
            Product Not Found
          </h1>
          <p className="text-readable text-muted-foreground mb-8">
            We couldn't find this product. It may have been removed or the link
            is incorrect.
          </p>
          <Link to="/products">
            <Button
              className="btn-primary gap-2 h-14 px-8 text-base"
              data-ocid="btn-browse-products"
            >
              <ArrowLeft className="h-5 w-5" />
              Browse All Products
            </Button>
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  const priceFormatted = `₹${product.price.toLocaleString("en-IN")}`;
  const features = product.accessibilityTags;
  const featuresText = features.map((f) => f.replace(/-/g, " ")).join(", ");

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    showCartToast(product.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleReadAll = () => {
    if (readAllActive && isSpeaking) {
      stop();
      setReadAllActive(false);
      return;
    }
    setReadAllActive(true);
    const allText = [
      `${product.name}.`,
      `Price: ${priceFormatted}.`,
      `Description: ${product.description}.`,
      `Features: ${featuresText}.`,
      `Quantity selected: ${qty}.`,
    ].join(" ");
    speak(allText);
  };

  return (
    <AnimatedPage className="flex-1 py-8 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
            <li>
              <Link
                to="/home"
                className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded px-1"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded px-1"
                data-ocid="btn-back"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li
              className="text-foreground font-medium truncate max-w-[200px]"
              aria-current="page"
            >
              {product.name}
            </li>
          </ol>
        </nav>

        {/* Main Detail — compact two-column layout */}
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          {/* ── Left: Compact Image ── */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <div
              className="overflow-hidden rounded-xl bg-muted border border-border w-full sm:w-[260px] h-[220px]"
              data-ocid="product-image"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Accessibility badge strip below image */}
            <div className="flex flex-wrap gap-1.5 pt-3 sm:max-w-[260px]">
              {features.slice(0, 4).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs px-2 py-0.5 border-primary/40 text-primary bg-primary/5 capitalize"
                >
                  ✓ {tag.replace(/-/g, " ")}
                </Badge>
              ))}
            </div>
          </div>

          {/* ── Right: Info ── */}
          <div className="flex-1 min-w-0 space-y-5" data-ocid="product-detail">
            {/* Category badge */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {product.category}
              </Badge>
              {product.featured && (
                <Badge className="gradient-primary text-white border-0 text-sm px-3 py-1">
                  ⭐ Featured
                </Badge>
              )}
            </div>

            {/* ── Title + Audio ── */}
            <div className="flex items-start gap-3">
              <h1 className="text-2xl font-display font-bold text-foreground leading-tight flex-1 min-w-0">
                {product.name}
              </h1>
              <AudioButton
                text={`This is ${product.name}`}
                label={`Read product name: ${product.name}`}
                data-ocid="btn-audio-title"
              />
            </div>

            {/* ── Price + Audio ── */}
            <div className="flex items-center gap-3">
              <div
                className="text-3xl font-bold text-primary"
                aria-label={`Price: ${priceFormatted}`}
              >
                {priceFormatted}
              </div>
              <AudioButton
                text={`Price: ${priceFormatted}`}
                label={`Read price: ${priceFormatted}`}
                data-ocid="btn-audio-price"
              />
            </div>

            {/* ── Description + Audio ── */}
            <div className="space-y-1.5">
              <SectionHeader
                label="Description"
                audioText={`${product.name}. ${product.description}`}
                audioLabel="Read product description"
                ocid="btn-audio-description"
              />
              <p className="text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* ── Features + Audio ── */}
            <div className="space-y-2">
              <SectionHeader
                label="Features"
                audioText={`Features of ${product.name}: ${featuresText}`}
                audioLabel="Read product features"
                ocid="btn-audio-features"
              />
              <ul className="space-y-1.5" aria-label="Product features">
                {features.map((tag) => (
                  <li
                    key={tag}
                    className="flex items-center gap-2 text-base text-foreground"
                  >
                    <span className="w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="capitalize">{tag.replace(/-/g, " ")}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Quantity + Audio ── */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span
                  className="font-bold text-foreground text-base"
                  id="qty-label"
                >
                  Quantity
                </span>
                <AudioButton
                  text={`Quantity: ${qty}. Use plus or minus buttons to change quantity.`}
                  label="Read quantity instructions"
                  data-ocid="btn-audio-quantity"
                  size="sm"
                />
              </div>
              <fieldset
                className="inline-flex items-center border-2 border-border rounded-xl overflow-hidden"
                aria-labelledby="qty-label"
              >
                <legend className="sr-only">Quantity</legend>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  disabled={qty <= 1}
                  className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors text-xl font-bold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:bg-muted"
                  aria-label="Decrease quantity"
                  data-ocid="btn-qty-decrease"
                >
                  −
                </button>
                <span
                  className="w-12 text-center font-bold text-lg border-x-2 border-border h-12 flex items-center justify-center"
                  aria-live="polite"
                  aria-label={`Quantity: ${qty}`}
                >
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  disabled={qty >= 10}
                  className="w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors text-xl font-bold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:bg-muted"
                  aria-label="Increase quantity"
                  data-ocid="btn-qty-increase"
                >
                  +
                </button>
              </fieldset>
            </div>

            {/* ── Add to Cart + Audio ── */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 h-12 text-base flex items-center justify-center gap-2 transition-all duration-200 font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    added
                      ? "bg-emerald-600 text-white scale-95 shadow-none"
                      : "bg-primary text-primary-foreground hover:opacity-90 shadow-elevated"
                  }`}
                  aria-label={
                    added
                      ? "Product added to cart"
                      : `Add ${qty} ${qty === 1 ? "item" : "items"} to cart`
                  }
                  data-ocid="btn-add-to-cart"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {added ? "✓ Added to Cart!" : "Add to Cart"}
                </button>
                <AudioButton
                  text={`Add ${product.name} to cart. Price: ${priceFormatted}. Quantity: ${qty}.`}
                  label="Read add to cart information"
                  data-ocid="btn-audio-add-to-cart"
                />
              </div>

              {/* ── Read All button ── */}
              <button
                type="button"
                onClick={handleReadAll}
                className={`w-full h-11 flex items-center justify-center gap-2 rounded-xl border-2 font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  readAllActive && isSpeaking
                    ? "border-primary bg-primary/10 text-primary animate-pulse"
                    : "border-border bg-card hover:bg-muted text-foreground"
                }`}
                aria-label={
                  readAllActive && isSpeaking
                    ? "Stop reading"
                    : "Read all product details aloud"
                }
                data-ocid="btn-read-all"
              >
                <Volume2 className="h-4 w-4" />
                {readAllActive && isSpeaking
                  ? "Stop Reading"
                  : "🔊 Read All Details"}
              </button>
            </div>

            {/* Back link */}
            <div className="pt-1">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded px-1"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
