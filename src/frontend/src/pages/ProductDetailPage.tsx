import { AnimatedPage } from "@/components/AnimatedPage";
import { showCartToast } from "@/components/Toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  PRODUCTS,
  getProductById,
  getProductsByCategory,
} from "@/data/products";
import type { Product } from "@/data/products";
import { useSpeakWithNarration } from "@/hooks/useSpeech";
import { useCartStore } from "@/stores/cartStore";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ChevronRight,
  ShoppingCart,
  Star,
  Volume2,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// ─── Related Product Mini-Card ────────────────────────────────────────────────
function RelatedCard({ product }: { product: Product }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    showCartToast(product.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to="/products/$id"
      params={{ id: product.id }}
      className="group card-accessible flex flex-col gap-3 no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      data-ocid={`related-card-${product.id}`}
    >
      <div className="overflow-hidden rounded-xl bg-muted aspect-video">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-foreground text-base line-clamp-2 leading-snug mb-1">
          {product.name}
        </p>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className={`h-3.5 w-3.5 ${s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>
        <p className="font-bold text-primary text-lg">${product.price}</p>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        aria-label={`Add ${product.name} to cart`}
        className={`btn-accessible w-full flex items-center justify-center gap-2 text-sm transition-all duration-200 ${
          added
            ? "bg-emerald-600 text-white scale-95"
            : "bg-primary text-primary-foreground hover:opacity-90"
        }`}
        data-ocid={`btn-related-add-${product.id}`}
      >
        <ShoppingCart className="h-4 w-4" />
        {added ? "Added!" : "Add to Cart"}
      </button>
    </Link>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  src,
  alt,
  onClose,
}: { src: string; alt: string; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <dialog
      open
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in w-full h-full max-w-full max-h-full m-0 p-0 border-0"
      aria-label="Product image enlarged"
      data-ocid="lightbox-overlay"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
        className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        data-ocid="btn-lightbox-close"
      >
        <X className="h-6 w-6 text-white" />
      </button>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop click to close, keyboard handled via Escape in effect */}
      <div className="absolute inset-0" onClick={onClose} />
      <img
        src={src}
        alt={alt}
        className="relative z-10 max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
      />
    </dialog>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ProductDetailPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const product = getProductById(id);
  const addToCart = useCartStore((s) => s.addToCart);
  const { speak, isSpeaking } = useSpeakWithNarration();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Derived related products (same category, excluding current)
  const relatedProducts = product
    ? getProductsByCategory(product.category)
        .filter((p) => p.id !== product.id)
        .slice(0, 4)
    : [];

  // Fallback: if no related in same category, grab from PRODUCTS
  const finalRelated =
    relatedProducts.length >= 2
      ? relatedProducts
      : PRODUCTS.filter((p) => p.id !== product?.id).slice(0, 4);

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

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    showCartToast(product.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleReadAloud = () => {
    const text = `${product.name}. Price: $${product.price}. Category: ${product.category}. Rating: ${product.rating} stars from ${product.reviewCount.toLocaleString()} reviews. ${product.description}. Accessibility features include: ${product.accessibilityTags.join(", ")}.`;
    speak(text);
  };

  return (
    <>
      {lightboxOpen && (
        <Lightbox
          src={product.imageUrl}
          alt={product.name}
          onClose={() => setLightboxOpen(false)}
        />
      )}

      <AnimatedPage className="flex-1 py-8 px-4">
        <div className="container max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
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

          {/* Main Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 mb-16">
            {/* ── Left: Image ── */}
            <div className="space-y-4">
              <button
                type="button"
                className="relative overflow-hidden rounded-2xl bg-muted shadow-elevated cursor-zoom-in group w-full text-left border-0 p-0"
                onClick={() => setLightboxOpen(true)}
                aria-label="Click to zoom product image"
                data-ocid="btn-image-zoom"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full max-h-96 object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-black/50 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="h-5 w-5 text-white" />
                </div>
              </button>

              {/* Accessibility badge strip */}
              <div className="flex flex-wrap gap-2 pt-1">
                {product.accessibilityTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-sm px-3 py-1 border-primary/40 text-primary bg-primary/5 capitalize"
                  >
                    ✓ {tag.replace(/-/g, " ")}
                  </Badge>
                ))}
              </div>
            </div>

            {/* ── Right: Info ── */}
            <div className="space-y-6 flex flex-col" data-ocid="product-detail">
              {/* Category + Featured */}
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

              {/* Title */}
              <h1 className="text-4xl font-display font-bold text-foreground leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center gap-0.5"
                  aria-label={`Rating: ${product.rating} out of 5`}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${star <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="font-bold text-foreground text-lg">
                  {product.rating}
                </span>
                <span className="text-muted-foreground">
                  ({product.reviewCount.toLocaleString()} reviews)
                </span>
              </div>

              {/* Price */}
              <div
                className="text-5xl font-bold text-primary"
                aria-label={`Price: $${product.price}`}
              >
                ${product.price}
              </div>

              {/* Description */}
              <p className="text-readable text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div>
                <p
                  className="block font-semibold text-foreground mb-3 text-base"
                  id="qty-label"
                >
                  Quantity
                </p>
                <fieldset
                  className="inline-flex items-center border-2 border-border rounded-xl overflow-hidden"
                  aria-labelledby="qty-label"
                >
                  <legend className="sr-only">Quantity</legend>
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    disabled={qty <= 1}
                    className="w-14 h-14 flex items-center justify-center hover:bg-muted transition-colors text-2xl font-bold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:bg-muted"
                    aria-label="Decrease quantity"
                    data-ocid="btn-qty-decrease"
                  >
                    −
                  </button>
                  <span
                    className="w-12 text-center font-bold text-xl border-x-2 border-border h-14 flex items-center justify-center"
                    aria-live="polite"
                    aria-label={`Quantity: ${qty}`}
                  >
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.min(10, q + 1))}
                    disabled={qty >= 10}
                    className="w-14 h-14 flex items-center justify-center hover:bg-muted transition-colors text-2xl font-bold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:bg-muted"
                    aria-label="Increase quantity"
                    data-ocid="btn-qty-increase"
                  >
                    +
                  </button>
                </fieldset>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`btn-accessible flex-1 h-14 text-base flex items-center justify-center gap-2 transition-all duration-200 font-semibold rounded-xl ${
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
                  {added ? "✓ Added!" : "Add to Cart"}
                </button>

                <button
                  type="button"
                  onClick={handleReadAloud}
                  className={`btn-accessible h-14 w-14 flex-shrink-0 flex items-center justify-center rounded-xl border-2 transition-all duration-200 ${
                    isSpeaking
                      ? "border-primary bg-primary/10 text-primary animate-pulse"
                      : "border-border bg-card hover:bg-muted text-foreground"
                  }`}
                  aria-label={
                    isSpeaking
                      ? "Stop reading aloud"
                      : "Read product details aloud"
                  }
                  data-ocid="btn-read-aloud"
                >
                  <Volume2 className="h-6 w-6" />
                </button>
              </div>

              {/* Back link */}
              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded px-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to all products
                </Link>
              </div>
            </div>
          </div>

          {/* ── Related Products ── */}
          {finalRelated.length > 0 && (
            <section
              aria-labelledby="related-heading"
              className="border-t border-border pt-12"
            >
              <h2
                id="related-heading"
                className="text-section font-display font-bold text-foreground mb-8"
              >
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {finalRelated.map((rp) => (
                  <RelatedCard key={rp.id} product={rp} />
                ))}
              </div>
            </section>
          )}
        </div>
      </AnimatedPage>
    </>
  );
}
