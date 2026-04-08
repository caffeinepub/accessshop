import { AnimatedPage } from "@/components/AnimatedPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSpeech } from "@/hooks/useSpeech";
import { useCartStore } from "@/stores/cartStore";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  Minus,
  Package,
  Plus,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Volume2,
  VolumeX,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Audio Button ────────────────────────────────────────────────────────────

interface AudioButtonProps {
  text: string;
  label: string;
  size?: "sm" | "md";
}

function AudioButton({ text, label, size = "sm" }: AudioButtonProps) {
  const { speak, stop, isSpeaking } = useSpeech();
  const [active, setActive] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation();
    if (active && isSpeaking) {
      stop();
      setActive(false);
    } else {
      speak(text);
      setActive(true);
      // Reset after speech ends (rough estimate, cleared by stop too)
      setTimeout(() => setActive(false), text.length * 60);
    }
  }

  const sizeClass =
    size === "md"
      ? "min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl text-sm"
      : "min-w-[36px] min-h-[36px] w-9 h-9 rounded-lg text-xs";

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className={`flex-shrink-0 flex items-center justify-center border border-border bg-muted hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${sizeClass} ${active && isSpeaking ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground"}`}
      data-ocid={`audio-btn-${label.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`}
    >
      {active && isSpeaking ? (
        <VolumeX className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Volume2 className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}

// ─── Animated Total ──────────────────────────────────────────────────────────

function AnimatedTotal({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (value !== display) {
      setFlash(true);
      const t = setTimeout(() => {
        setDisplay(value);
        setFlash(false);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [value, display]);

  return (
    <span
      className={`text-primary font-bold text-3xl transition-all duration-300 ${flash ? "opacity-40 scale-95" : "opacity-100 scale-100"} inline-block tabular-nums`}
      aria-live="polite"
      aria-atomic="true"
    >
      ₹{display.toLocaleString("en-IN")}
    </span>
  );
}

// ─── CartPage ────────────────────────────────────────────────────────────────

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const total = useCartStore((s) => s.total());
  const itemCount = useCartStore((s) => s.itemCount());
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = useState("");

  function handleRemove(id: string, name: string) {
    removeFromCart(id);
    setAnnouncement(`${name} removed from cart.`);
  }

  function handleQuantityChange(id: string, name: string, qty: number) {
    if (qty < 1) return;
    updateQuantity(id, qty);
    setAnnouncement(`${name} quantity updated to ${qty}.`);
  }

  return (
    <AnimatedPage className="flex-1 py-8 px-4 md:px-6">
      {/* Screen reader live region */}
      <output aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </output>

      <div className="container max-w-5xl mx-auto">
        {/* Page header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-subtle flex-shrink-0">
              <ShoppingCart className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                Your Cart
              </h1>
              {itemCount > 0 && (
                <p className="text-muted-foreground text-sm mt-0.5">
                  <Badge variant="secondary" className="text-xs font-semibold">
                    {itemCount} {itemCount === 1 ? "item" : "items"}
                  </Badge>
                </p>
              )}
            </div>
          </div>
          {items.length > 0 && (
            <Button
              variant="ghost"
              onClick={() => {
                clearCart();
                setAnnouncement("Cart cleared.");
              }}
              className="text-destructive hover:text-destructive hover:bg-destructive/10 gap-2 min-h-[44px]"
              data-ocid="btn-clear-cart"
              aria-label="Clear all items from cart"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              Clear All
            </Button>
          )}
        </div>

        {/* Empty state */}
        <AnimatePresence>
          {items.length === 0 && (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-24 text-center"
              data-ocid="empty-cart"
            >
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full gradient-primary flex items-center justify-center shadow-elevated">
                  <ShoppingBag
                    className="h-14 w-14 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-sm font-bold text-muted-foreground">
                    0
                  </span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground text-lg max-w-sm mb-8 leading-relaxed">
                Discover accessible products designed for everyone. Add
                something you love!
              </p>
              <Link to="/products">
                <Button
                  size="lg"
                  className="btn-primary gap-2 text-base min-h-[52px]"
                  data-ocid="btn-browse-products"
                >
                  <Package className="h-5 w-5" aria-hidden="true" />
                  Browse Products
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cart with items */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items list */}
            <div className="lg:col-span-2" data-ocid="cart-items">
              <ul className="space-y-5" aria-label="Cart items">
                <AnimatePresence initial={false}>
                  {items.map((item) => {
                    const lineTotal = item.product.price * item.quantity;
                    const audioNameText = `Product: ${item.product.name}`;
                    const audioPriceText = `Price: ${item.product.price.toLocaleString("en-IN")} rupees per item`;
                    const audioQtyText = `Quantity: ${item.quantity}`;

                    return (
                      <motion.li
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        data-ocid={`cart-item-${item.product.id}`}
                      >
                        <div className="card-accessible flex flex-col sm:flex-row gap-5 hover:shadow-elevated transition-shadow">
                          {/* Product image */}
                          <Link
                            to="/products/$id"
                            params={{ id: item.product.id }}
                            className="flex-shrink-0 self-start focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-xl"
                            aria-label={`View details for ${item.product.name}`}
                          >
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-muted group">
                              <img
                                src={item.product.imageUrl}
                                alt={item.product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                                onError={(e) => {
                                  (e.currentTarget as HTMLImageElement).src =
                                    "/assets/images/placeholder.svg";
                                }}
                              />
                            </div>
                          </Link>

                          {/* Product details */}
                          <div className="flex-1 min-w-0 space-y-4">
                            {/* Name row with audio */}
                            <div className="flex items-start gap-2">
                              <div className="flex-1 min-w-0">
                                <Link
                                  to="/products/$id"
                                  params={{ id: item.product.id }}
                                  className="font-display font-bold text-foreground hover:text-primary transition-colors leading-snug line-clamp-2 text-xl block"
                                >
                                  {item.product.name}
                                </Link>
                              </div>
                              <AudioButton
                                text={audioNameText}
                                label={`Read product name: ${item.product.name}`}
                              />
                              {/* Remove button */}
                              <button
                                type="button"
                                onClick={() =>
                                  handleRemove(
                                    item.product.id,
                                    item.product.name,
                                  )
                                }
                                className="flex-shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-smooth min-h-[44px] min-w-[44px] flex items-center justify-center border border-transparent hover:border-destructive/30"
                                aria-label={`Remove ${item.product.name} from cart`}
                                data-ocid={`btn-remove-${item.product.id}`}
                              >
                                <Trash2
                                  className="h-4 w-4"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>

                            {/* Price row with audio */}
                            <div className="flex items-center gap-2">
                              <div className="flex-1">
                                <span className="text-primary font-bold text-xl tabular-nums">
                                  ₹{item.product.price.toLocaleString("en-IN")}
                                </span>
                                <span className="text-muted-foreground text-sm ml-1.5">
                                  per item
                                </span>
                              </div>
                              <AudioButton
                                text={audioPriceText}
                                label={`Read price of ${item.product.name}`}
                              />
                            </div>

                            {/* Quantity + line total row */}
                            <div className="flex items-center justify-between flex-wrap gap-3">
                              {/* Quantity controls with audio */}
                              <div className="flex items-center gap-2">
                                <fieldset
                                  className="flex items-center gap-1 border-0 p-0 m-0"
                                  aria-label={`Quantity for ${item.product.name}`}
                                >
                                  <legend className="sr-only">Quantity</legend>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.product.id,
                                        item.product.name,
                                        item.quantity - 1,
                                      )
                                    }
                                    disabled={item.quantity <= 1}
                                    className="w-11 h-11 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-smooth min-h-[44px] min-w-[44px] disabled:opacity-40 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                    aria-label={`Decrease quantity of ${item.product.name}`}
                                    data-ocid={`btn-decrease-${item.product.id}`}
                                  >
                                    <Minus
                                      className="h-4 w-4"
                                      aria-hidden="true"
                                    />
                                  </button>

                                  <div
                                    className="w-14 h-11 flex items-center justify-center border border-border rounded-lg bg-background font-bold text-lg tabular-nums select-none"
                                    aria-label={`Current quantity: ${item.quantity}`}
                                  >
                                    {item.quantity}
                                  </div>

                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleQuantityChange(
                                        item.product.id,
                                        item.product.name,
                                        item.quantity + 1,
                                      )
                                    }
                                    className="w-11 h-11 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-smooth min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                                    aria-label={`Increase quantity of ${item.product.name}`}
                                    data-ocid={`btn-increase-${item.product.id}`}
                                  >
                                    <Plus
                                      className="h-4 w-4"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </fieldset>

                                <AudioButton
                                  text={audioQtyText}
                                  label={`Read quantity of ${item.product.name}`}
                                />
                              </div>

                              {/* Line total */}
                              <div className="text-right">
                                <div className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                                  Subtotal
                                </div>
                                <div className="font-display font-bold text-2xl text-foreground tabular-nums">
                                  ₹{lineTotal.toLocaleString("en-IN")}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.li>
                    );
                  })}
                </AnimatePresence>
              </ul>

              {/* Continue shopping */}
              <div className="mt-6">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-base transition-smooth group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded"
                  data-ocid="link-continue-shopping"
                >
                  <ArrowRight
                    className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-smooth"
                    aria-hidden="true"
                  />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div
                className="card-accessible lg:sticky lg:top-24"
                data-ocid="order-summary"
                aria-label="Order summary"
              >
                <h2 className="text-xl font-display font-bold mb-5 text-foreground">
                  Order Summary
                </h2>

                {/* Per-item breakdown */}
                <ul className="space-y-2.5 mb-5" aria-label="Item breakdown">
                  {items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex justify-between items-start text-sm gap-2"
                    >
                      <span className="text-muted-foreground line-clamp-1 flex-1">
                        {item.product.name}
                        <span className="ml-1 font-semibold text-foreground">
                          ×{item.quantity}
                        </span>
                      </span>
                      <span className="font-semibold flex-shrink-0 tabular-nums text-foreground">
                        ₹
                        {(item.product.price * item.quantity).toLocaleString(
                          "en-IN",
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-4" />

                {/* Subtotal */}
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-muted-foreground">
                    Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
                  </span>
                  <span className="font-semibold tabular-nums">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between items-center text-sm mb-4">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Free
                  </span>
                </div>

                <Separator className="my-4" />

                {/* Total row with audio */}
                <div className="flex justify-between items-center mb-6 gap-2">
                  <span className="font-display font-bold text-lg text-foreground">
                    Total
                  </span>
                  <div className="flex items-center gap-2">
                    <AnimatedTotal value={total} />
                    <AudioButton
                      text={`Cart total: ${total.toLocaleString("en-IN")} rupees. You have ${itemCount} ${itemCount === 1 ? "item" : "items"} in your cart.`}
                      label="Read cart total"
                      size="md"
                    />
                  </div>
                </div>

                {/* Checkout CTA */}
                <Button
                  className="w-full gradient-primary text-white hover:opacity-90 text-lg font-semibold gap-2 shadow-elevated h-14 rounded-xl"
                  onClick={() => navigate({ to: "/checkout" })}
                  data-ocid="btn-checkout"
                  aria-label={`Proceed to checkout. Total: ₹${total.toLocaleString("en-IN")}`}
                >
                  <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                {/* Trust note */}
                <p className="text-center text-xs text-muted-foreground mt-4 leading-relaxed">
                  🔒 Secure checkout · Free returns · Accessibility guaranteed
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}
