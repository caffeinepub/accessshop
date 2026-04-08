import { AnimatedPage } from "@/components/AnimatedPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
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
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

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
      className={`text-primary font-bold text-2xl transition-all duration-300 ${flash ? "opacity-40 scale-95" : "opacity-100 scale-100"} inline-block`}
      aria-live="polite"
      aria-atomic="true"
    >
      ${display.toFixed(2)}
    </span>
  );
}

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

  function handleInputChange(id: string, name: string, raw: string) {
    const parsed = Number.parseInt(raw, 10);
    if (!Number.isNaN(parsed) && parsed >= 1) {
      updateQuantity(id, parsed);
      setAnnouncement(`${name} quantity updated to ${parsed}.`);
    }
  }

  return (
    <AnimatedPage className="flex-1 py-8 px-4 md:px-6">
      {/* Aria live for cart updates */}
      <output aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </output>

      <div className="container max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-subtle">
              <ShoppingCart className="h-5 w-5 text-white" aria-hidden="true" />
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

        {/* Empty State */}
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
                  className="btn-primary gap-2 text-base"
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

        {/* Cart content */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items list */}
            <div className="lg:col-span-2" data-ocid="cart-items">
              <ul className="space-y-4" aria-label="Cart items">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.li
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        marginBottom: 0,
                        overflow: "hidden",
                      }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      data-ocid={`cart-item-${item.product.id}`}
                    >
                      <div className="card-accessible flex flex-col sm:flex-row gap-4 hover:shadow-elevated">
                        {/* Product image */}
                        <Link
                          to="/products/$id"
                          params={{ id: item.product.id }}
                          className="flex-shrink-0 self-start"
                          aria-label={`View details for ${item.product.name}`}
                        >
                          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-muted group">
                            <img
                              src={item.product.imageUrl}
                              alt={item.product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                            />
                          </div>
                        </Link>

                        {/* Product info */}
                        <div className="flex-1 min-w-0 space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              <Link
                                to="/products/$id"
                                params={{ id: item.product.id }}
                                className="font-display font-bold text-foreground hover:text-primary transition-colors leading-snug line-clamp-2 text-lg"
                              >
                                {item.product.name}
                              </Link>
                              <p className="text-sm text-muted-foreground mt-0.5">
                                ${item.product.price.toFixed(2)} each
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                handleRemove(item.product.id, item.product.name)
                              }
                              className="flex-shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-smooth min-h-[44px] min-w-[44px] flex items-center justify-center"
                              aria-label={`Remove ${item.product.name} from cart`}
                              data-ocid={`btn-remove-${item.product.id}`}
                            >
                              <Trash2 className="h-4 w-4" aria-hidden="true" />
                            </button>
                          </div>

                          {/* Quantity + subtotal row */}
                          <div className="flex items-center justify-between flex-wrap gap-3">
                            {/* Quantity controls */}
                            <fieldset
                              className="flex items-center gap-1 border-0 p-0 m-0"
                              aria-label={`Quantity for ${item.product.name}`}
                            >
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
                                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-smooth min-h-[44px] min-w-[44px] disabled:opacity-40 disabled:cursor-not-allowed"
                                aria-label={`Decrease quantity of ${item.product.name}`}
                                data-ocid={`btn-decrease-${item.product.id}`}
                              >
                                <Minus className="h-4 w-4" aria-hidden="true" />
                              </button>
                              <Input
                                type="number"
                                min={1}
                                value={item.quantity}
                                onChange={(e) =>
                                  handleInputChange(
                                    item.product.id,
                                    item.product.name,
                                    e.target.value,
                                  )
                                }
                                className="w-16 h-10 text-center font-bold text-base border-border focus:border-primary [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                aria-label={`Quantity for ${item.product.name}`}
                                data-ocid={`input-qty-${item.product.id}`}
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.product.id,
                                    item.product.name,
                                    item.quantity + 1,
                                  )
                                }
                                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-smooth min-h-[44px] min-w-[44px]"
                                aria-label={`Increase quantity of ${item.product.name}`}
                                data-ocid={`btn-increase-${item.product.id}`}
                              >
                                <Plus className="h-4 w-4" aria-hidden="true" />
                              </button>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>

              {/* Continue shopping */}
              <div className="mt-6">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-smooth group"
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

                {/* Item breakdown */}
                <ul className="space-y-2.5 mb-5" aria-label="Item breakdown">
                  {items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex justify-between text-sm gap-2"
                    >
                      <span className="text-muted-foreground line-clamp-1 flex-1">
                        {item.product.name}
                        <span className="ml-1 font-medium text-foreground">
                          ×{item.quantity}
                        </span>
                      </span>
                      <span className="font-semibold flex-shrink-0 tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Separator className="my-4" />

                {/* Subtotal */}
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium tabular-nums">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Shipping */}
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Free
                  </span>
                </div>

                <Separator className="my-4" />

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-display font-bold text-lg text-foreground">
                    Total
                  </span>
                  <AnimatedTotal value={total} />
                </div>

                {/* Checkout CTA */}
                <Button
                  className="w-full btn-accessible gradient-primary text-white hover:opacity-90 text-base font-semibold gap-2 shadow-elevated h-14"
                  onClick={() => navigate({ to: "/checkout" })}
                  data-ocid="btn-checkout"
                  aria-label={`Proceed to checkout. Total: $${total.toFixed(2)}`}
                >
                  <ShoppingBag className="h-5 w-5" aria-hidden="true" />
                  Proceed to Checkout
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>

                {/* Trust badge */}
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
