import { c as createLucideIcon, e as useCartStore, u as useNavigate, r as reactExports, j as jsxRuntimeExports, S as ShoppingCart, B as Button, L as Link, n as useSpeech, o as VolumeX, V as Volume2 } from "./index-cVX3WGFm.js";
import { A as AnimatedPage } from "./AnimatedPage-CvO60yzg.js";
import { B as Badge } from "./badge-CHKeS2d-.js";
import { P as Package, S as Separator } from "./separator-oLiHYklN.js";
import { A as AnimatePresence, S as ShoppingBag } from "./index-Bipt70ga.js";
import { m as motion } from "./proxy-_Jdsu-al.js";
import { A as ArrowRight } from "./arrow-right-D5y1rijt.js";
import "./index-YNLoKdEA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M5 12h14", key: "1ays0h" }]];
const Minus = createLucideIcon("minus", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function AudioButton({ text, label, size = "sm" }) {
  const { speak, stop, isSpeaking } = useSpeech();
  const [active, setActive] = reactExports.useState(false);
  function handleClick(e) {
    e.stopPropagation();
    if (active && isSpeaking) {
      stop();
      setActive(false);
    } else {
      speak(text);
      setActive(true);
      setTimeout(() => setActive(false), text.length * 60);
    }
  }
  const sizeClass = size === "md" ? "min-w-[44px] min-h-[44px] w-11 h-11 rounded-xl text-sm" : "min-w-[36px] min-h-[36px] w-9 h-9 rounded-lg text-xs";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: handleClick,
      "aria-label": label,
      title: label,
      className: `flex-shrink-0 flex items-center justify-center border border-border bg-muted hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none ${sizeClass} ${active && isSpeaking ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground"}`,
      "data-ocid": `audio-btn-${label.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`,
      children: active && isSpeaking ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "h-4 w-4", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4", "aria-hidden": "true" })
    }
  );
}
function AnimatedTotal({ value }) {
  const [display, setDisplay] = reactExports.useState(value);
  const [flash, setFlash] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (value !== display) {
      setFlash(true);
      const t = setTimeout(() => {
        setDisplay(value);
        setFlash(false);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [value, display]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `text-primary font-bold text-3xl transition-all duration-300 ${flash ? "opacity-40 scale-95" : "opacity-100 scale-100"} inline-block tabular-nums`,
      "aria-live": "polite",
      "aria-atomic": "true",
      children: [
        "₹",
        display.toLocaleString("en-IN")
      ]
    }
  );
}
function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const total = useCartStore((s) => s.total());
  const itemCount = useCartStore((s) => s.itemCount());
  const navigate = useNavigate();
  const [announcement, setAnnouncement] = reactExports.useState("");
  function handleRemove(id, name) {
    removeFromCart(id);
    setAnnouncement(`${name} removed from cart.`);
  }
  function handleQuantityChange(id, name, qty) {
    if (qty < 1) return;
    updateQuantity(id, qty);
    setAnnouncement(`${name} quantity updated to ${qty}.`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedPage, { className: "flex-1 py-8 px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("output", { "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: announcement }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8 flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-subtle flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-6 w-6 text-white", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-display font-bold text-foreground leading-tight", children: "Your Cart" }),
            itemCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-xs font-semibold", children: [
              itemCount,
              " ",
              itemCount === 1 ? "item" : "items"
            ] }) })
          ] })
        ] }),
        items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            onClick: () => {
              clearCart();
              setAnnouncement("Cart cleared.");
            },
            className: "text-destructive hover:text-destructive hover:bg-destructive/10 gap-2 min-h-[44px]",
            "data-ocid": "btn-clear-cart",
            "aria-label": "Clear all items from cart",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4", "aria-hidden": "true" }),
              "Clear All"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: items.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          className: "flex flex-col items-center justify-center py-24 text-center",
          "data-ocid": "empty-cart",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-full gradient-primary flex items-center justify-center shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ShoppingBag,
                {
                  className: "h-14 w-14 text-white",
                  "aria-hidden": "true"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-muted-foreground", children: "0" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-display font-bold text-foreground mb-3", children: "Your cart is empty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-sm mb-8 leading-relaxed", children: "Discover accessible products designed for everyone. Add something you love!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                size: "lg",
                className: "btn-primary gap-2 text-base min-h-[52px]",
                "data-ocid": "btn-browse-products",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-5 w-5", "aria-hidden": "true" }),
                  "Browse Products",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })
                ]
              }
            ) })
          ]
        },
        "empty"
      ) }),
      items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", "data-ocid": "cart-items", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-5", "aria-label": "Cart items", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: items.map((item) => {
            const lineTotal = item.product.price * item.quantity;
            const audioNameText = `Product: ${item.product.name}`;
            const audioPriceText = `Price: ${item.product.price.toLocaleString("en-IN")} rupees per item`;
            const audioQtyText = `Quantity: ${item.quantity}`;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.li,
              {
                layout: true,
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0, overflow: "hidden" },
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                "data-ocid": `cart-item-${item.product.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible flex flex-col sm:flex-row gap-5 hover:shadow-elevated transition-shadow", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/products/$id",
                      params: { id: item.product.id },
                      className: "flex-shrink-0 self-start focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-xl",
                      "aria-label": `View details for ${item.product.name}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-muted group", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: item.product.imageUrl,
                          alt: item.product.name,
                          className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
                          onError: (e) => {
                            e.currentTarget.src = "/assets/images/placeholder.svg";
                          }
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 min-w-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/products/$id",
                          params: { id: item.product.id },
                          className: "font-display font-bold text-foreground hover:text-primary transition-colors leading-snug line-clamp-2 text-xl block",
                          children: item.product.name
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        AudioButton,
                        {
                          text: audioNameText,
                          label: `Read product name: ${item.product.name}`
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => handleRemove(
                            item.product.id,
                            item.product.name
                          ),
                          className: "flex-shrink-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-smooth min-h-[44px] min-w-[44px] flex items-center justify-center border border-transparent hover:border-destructive/30",
                          "aria-label": `Remove ${item.product.name} from cart`,
                          "data-ocid": `btn-remove-${item.product.id}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Trash2,
                            {
                              className: "h-4 w-4",
                              "aria-hidden": "true"
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary font-bold text-xl tabular-nums", children: [
                          "₹",
                          item.product.price.toLocaleString("en-IN")
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm ml-1.5", children: "per item" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        AudioButton,
                        {
                          text: audioPriceText,
                          label: `Read price of ${item.product.name}`
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "fieldset",
                          {
                            className: "flex items-center gap-1 border-0 p-0 m-0",
                            "aria-label": `Quantity for ${item.product.name}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "sr-only", children: "Quantity" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => handleQuantityChange(
                                    item.product.id,
                                    item.product.name,
                                    item.quantity - 1
                                  ),
                                  disabled: item.quantity <= 1,
                                  className: "w-11 h-11 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-smooth min-h-[44px] min-w-[44px] disabled:opacity-40 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                                  "aria-label": `Decrease quantity of ${item.product.name}`,
                                  "data-ocid": `btn-decrease-${item.product.id}`,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Minus,
                                    {
                                      className: "h-4 w-4",
                                      "aria-hidden": "true"
                                    }
                                  )
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "w-14 h-11 flex items-center justify-center border border-border rounded-lg bg-background font-bold text-lg tabular-nums select-none",
                                  "aria-label": `Current quantity: ${item.quantity}`,
                                  children: item.quantity
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "button",
                                {
                                  type: "button",
                                  onClick: () => handleQuantityChange(
                                    item.product.id,
                                    item.product.name,
                                    item.quantity + 1
                                  ),
                                  className: "w-11 h-11 rounded-lg border border-border flex items-center justify-center hover:bg-muted hover:border-primary transition-smooth min-h-[44px] min-w-[44px] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                                  "aria-label": `Increase quantity of ${item.product.name}`,
                                  "data-ocid": `btn-increase-${item.product.id}`,
                                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    Plus,
                                    {
                                      className: "h-4 w-4",
                                      "aria-hidden": "true"
                                    }
                                  )
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          AudioButton,
                          {
                            text: audioQtyText,
                            label: `Read quantity of ${item.product.name}`
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-0.5", children: "Subtotal" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-bold text-2xl text-foreground tabular-nums", children: [
                          "₹",
                          lineTotal.toLocaleString("en-IN")
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              },
              item.product.id
            );
          }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/products",
              className: "inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-base transition-smooth group focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded",
              "data-ocid": "link-continue-shopping",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ArrowRight,
                  {
                    className: "h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-smooth",
                    "aria-hidden": "true"
                  }
                ),
                "Continue Shopping"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "card-accessible lg:sticky lg:top-24",
            "data-ocid": "order-summary",
            "aria-label": "Order summary",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold mb-5 text-foreground", children: "Order Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 mb-5", "aria-label": "Item breakdown", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex justify-between items-start text-sm gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground line-clamp-1 flex-1", children: [
                      item.product.name,
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 font-semibold text-foreground", children: [
                        "×",
                        item.quantity
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold flex-shrink-0 tabular-nums text-foreground", children: [
                      "₹",
                      (item.product.price * item.quantity).toLocaleString(
                        "en-IN"
                      )
                    ] })
                  ]
                },
                item.product.id
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                  "Subtotal (",
                  itemCount,
                  " ",
                  itemCount === 1 ? "item" : "items",
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold tabular-nums", children: [
                  "₹",
                  total.toLocaleString("en-IN")
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-sm mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-green-600 dark:text-green-400", children: "Free" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-foreground", children: "Total" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedTotal, { value: total }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    AudioButton,
                    {
                      text: `Cart total: ${total.toLocaleString("en-IN")} rupees. You have ${itemCount} ${itemCount === 1 ? "item" : "items"} in your cart.`,
                      label: "Read cart total",
                      size: "md"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  className: "w-full gradient-primary text-white hover:opacity-90 text-lg font-semibold gap-2 shadow-elevated h-14 rounded-xl",
                  onClick: () => navigate({ to: "/checkout" }),
                  "data-ocid": "btn-checkout",
                  "aria-label": `Proceed to checkout. Total: ₹${total.toLocaleString("en-IN")}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5", "aria-hidden": "true" }),
                    "Proceed to Checkout",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": "true" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground mt-4 leading-relaxed", children: "🔒 Secure checkout · Free returns · Accessibility guaranteed" })
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
export {
  CartPage as default
};
