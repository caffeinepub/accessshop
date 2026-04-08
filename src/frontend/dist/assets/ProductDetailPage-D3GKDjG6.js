import { m as useParams, e as useCartStore, b as useSpeakWithNarration, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, Z as ZoomIn, S as ShoppingCart, V as Volume2, s as showCartToast, X } from "./index-BoX3_azF.js";
import { A as AnimatedPage } from "./AnimatedPage-BvLNsX_N.js";
import { B as Badge } from "./badge-DczFgQBo.js";
import { g as getProductById, a as getProductsByCategory, P as PRODUCTS, S as Star } from "./products-CRBQERT2.js";
import { A as ArrowLeft } from "./arrow-left-DcvRFYV0.js";
import { C as ChevronRight } from "./chevron-right-CUngB5aA.js";
function RelatedCard({ product }) {
  const addToCart = useCartStore((s) => s.addToCart);
  const [added, setAdded] = reactExports.useState(false);
  const handleAdd = (e) => {
    e.preventDefault();
    addToCart(product);
    showCartToast(product.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/products/$id",
      params: { id: product.id },
      className: "group card-accessible flex flex-col gap-3 no-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
      "data-ocid": `related-card-${product.id}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl bg-muted aspect-video", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: product.imageUrl,
            alt: product.name,
            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-base line-clamp-2 leading-snug mb-1", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-2", children: [
            [1, 2, 3, 4, 5].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: `h-3.5 w-3.5 ${s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`
              },
              s
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
              "(",
              product.reviewCount.toLocaleString(),
              ")"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-primary text-lg", children: [
            "$",
            product.price
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleAdd,
            "aria-label": `Add ${product.name} to cart`,
            className: `btn-accessible w-full flex items-center justify-center gap-2 text-sm transition-all duration-200 ${added ? "bg-emerald-600 text-white scale-95" : "bg-primary text-primary-foreground hover:opacity-90"}`,
            "data-ocid": `btn-related-add-${product.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-4 w-4" }),
              added ? "Added!" : "Add to Cart"
            ]
          }
        )
      ]
    }
  );
}
function Lightbox({
  src,
  alt,
  onClose
}) {
  const closeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a;
    (_a = closeRef.current) == null ? void 0 : _a.focus();
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "dialog",
    {
      open: true,
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in w-full h-full max-w-full max-h-full m-0 p-0 border-0",
      "aria-label": "Product image enlarged",
      "data-ocid": "lightbox-overlay",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            ref: closeRef,
            type: "button",
            onClick: onClose,
            "aria-label": "Close image preview",
            className: "absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white",
            "data-ocid": "btn-lightbox-close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6 text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", onClick: onClose }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src,
            alt,
            className: "relative z-10 max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          }
        )
      ]
    }
  );
}
function ProductDetailPage() {
  const { id } = useParams({ strict: false });
  const product = getProductById(id);
  const addToCart = useCartStore((s) => s.addToCart);
  const { speak, isSpeaking } = useSpeakWithNarration();
  const [qty, setQty] = reactExports.useState(1);
  const [added, setAdded] = reactExports.useState(false);
  const [lightboxOpen, setLightboxOpen] = reactExports.useState(false);
  const relatedProducts = product ? getProductsByCategory(product.category).filter((p) => p.id !== product.id).slice(0, 4) : [];
  const finalRelated = relatedProducts.length >= 2 ? relatedProducts : PRODUCTS.filter((p) => p.id !== (product == null ? void 0 : product.id)).slice(0, 4);
  if (!product) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { className: "flex-1 flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md", "data-ocid": "product-not-found", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-7xl mb-6 select-none", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground mb-3", children: "Product Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-readable text-muted-foreground mb-8", children: "We couldn't find this product. It may have been removed or the link is incorrect." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "btn-primary gap-2 h-14 px-8 text-base",
          "data-ocid": "btn-browse-products",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" }),
            "Browse All Products"
          ]
        }
      ) })
    ] }) });
  }
  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    showCartToast(product.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
  };
  const handleReadAloud = () => {
    const text = `${product.name}. Price: $${product.price}. Category: ${product.category}. Rating: ${product.rating} stars from ${product.reviewCount.toLocaleString()} reviews. ${product.description}. Accessibility features include: ${product.accessibilityTags.join(", ")}.`;
    speak(text);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    lightboxOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Lightbox,
      {
        src: product.imageUrl,
        alt: product.name,
        onClose: () => setLightboxOpen(false)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { className: "flex-1 py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/home",
            className: "hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded px-1",
            children: "Home"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/products",
            className: "hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded px-1",
            "data-ocid": "btn-back",
            children: "Products"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: "text-foreground font-medium truncate max-w-[200px]",
            "aria-current": "page",
            children: product.name
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "relative overflow-hidden rounded-2xl bg-muted shadow-elevated cursor-zoom-in group w-full text-left border-0 p-0",
              onClick: () => setLightboxOpen(true),
              "aria-label": "Click to zoom product image",
              "data-ocid": "btn-image-zoom",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: product.imageUrl,
                    alt: product.name,
                    className: "w-full max-h-96 object-contain group-hover:scale-105 transition-transform duration-500"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 bg-black/50 rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "h-5 w-5 text-white" }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 pt-1", children: product.accessibilityTags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "text-sm px-3 py-1 border-primary/40 text-primary bg-primary/5 capitalize",
              children: [
                "✓ ",
                tag.replace(/-/g, " ")
              ]
            },
            tag
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 flex flex-col", "data-ocid": "product-detail", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-sm px-3 py-1", children: product.category }),
            product.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "gradient-primary text-white border-0 text-sm px-3 py-1", children: "⭐ Featured" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display font-bold text-foreground leading-tight", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex items-center gap-0.5",
                "aria-label": `Rating: ${product.rating} out of 5`,
                children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: `h-5 w-5 ${star <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`
                  },
                  star
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-lg", children: product.rating }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "(",
              product.reviewCount.toLocaleString(),
              " reviews)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-5xl font-bold text-primary",
              "aria-label": `Price: $${product.price}`,
              children: [
                "$",
                product.price
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-readable text-muted-foreground leading-relaxed", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "block font-semibold text-foreground mb-3 text-base",
                id: "qty-label",
                children: "Quantity"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "fieldset",
              {
                className: "inline-flex items-center border-2 border-border rounded-xl overflow-hidden",
                "aria-labelledby": "qty-label",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("legend", { className: "sr-only", children: "Quantity" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setQty((q) => Math.max(1, q - 1)),
                      disabled: qty <= 1,
                      className: "w-14 h-14 flex items-center justify-center hover:bg-muted transition-colors text-2xl font-bold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:bg-muted",
                      "aria-label": "Decrease quantity",
                      "data-ocid": "btn-qty-decrease",
                      children: "−"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "w-12 text-center font-bold text-xl border-x-2 border-border h-14 flex items-center justify-center",
                      "aria-live": "polite",
                      "aria-label": `Quantity: ${qty}`,
                      children: qty
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setQty((q) => Math.min(10, q + 1)),
                      disabled: qty >= 10,
                      className: "w-14 h-14 flex items-center justify-center hover:bg-muted transition-colors text-2xl font-bold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:bg-muted",
                      "aria-label": "Increase quantity",
                      "data-ocid": "btn-qty-increase",
                      children: "+"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleAddToCart,
                className: `btn-accessible flex-1 h-14 text-base flex items-center justify-center gap-2 transition-all duration-200 font-semibold rounded-xl ${added ? "bg-emerald-600 text-white scale-95 shadow-none" : "bg-primary text-primary-foreground hover:opacity-90 shadow-elevated"}`,
                "aria-label": added ? "Product added to cart" : `Add ${qty} ${qty === 1 ? "item" : "items"} to cart`,
                "data-ocid": "btn-add-to-cart",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-5 w-5" }),
                  added ? "✓ Added!" : "Add to Cart"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleReadAloud,
                className: `btn-accessible h-14 w-14 flex-shrink-0 flex items-center justify-center rounded-xl border-2 transition-all duration-200 ${isSpeaking ? "border-primary bg-primary/10 text-primary animate-pulse" : "border-border bg-card hover:bg-muted text-foreground"}`,
                "aria-label": isSpeaking ? "Stop reading aloud" : "Read product details aloud",
                "data-ocid": "btn-read-aloud",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-6 w-6" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/products",
              className: "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded px-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                "Back to all products"
              ]
            }
          ) })
        ] })
      ] }),
      finalRelated.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "aria-labelledby": "related-heading",
          className: "border-t border-border pt-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                id: "related-heading",
                className: "text-section font-display font-bold text-foreground mb-8",
                children: "Related Products"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: finalRelated.map((rp) => /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCard, { product: rp }, rp.id)) })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  ProductDetailPage as default
};
