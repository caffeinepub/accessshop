import { m as useParams, e as useCartStore, n as useSpeech, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, S as ShoppingCart, V as Volume2, s as showCartToast } from "./index-cVX3WGFm.js";
import { A as AnimatedPage } from "./AnimatedPage-CvO60yzg.js";
import { B as Badge } from "./badge-CHKeS2d-.js";
import { g as getProductById } from "./products-j-rL_Mwi.js";
import { A as ArrowLeft } from "./arrow-left-COsWM083.js";
import { C as ChevronRight } from "./chevron-right-Do8tjoSV.js";
function AudioButton({
  text,
  label,
  "data-ocid": ocid,
  size = "md"
}) {
  const { speak, stop, isSpeaking } = useSpeech();
  const [active, setActive] = reactExports.useState(false);
  const handleClick = reactExports.useCallback(
    (e) => {
      e.stopPropagation();
      if (active && isSpeaking) {
        stop();
        setActive(false);
      } else {
        setActive(true);
        speak(text);
      }
    },
    [active, isSpeaking, speak, stop, text]
  );
  reactExports.useEffect(() => {
    if (!isSpeaking) setActive(false);
  }, [isSpeaking]);
  const isActive = active && isSpeaking;
  const sizeClasses = size === "sm" ? "w-9 h-9 rounded-lg" : "w-11 h-11 rounded-xl";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: handleClick,
      "aria-label": isActive ? `Stop: ${label}` : label,
      title: isActive ? "Stop" : label,
      className: `flex-shrink-0 flex items-center justify-center border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${sizeClasses} ${isActive ? "border-primary bg-primary/15 text-primary animate-pulse" : "border-border bg-card hover:bg-primary/10 hover:border-primary/50 text-muted-foreground hover:text-primary"}`,
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: size === "sm" ? "h-4 w-4" : "h-5 w-5" })
    }
  );
}
function SectionHeader({
  label,
  audioText,
  audioLabel,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground text-base", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AudioButton,
      {
        text: audioText,
        label: audioLabel,
        "data-ocid": ocid,
        size: "sm"
      }
    )
  ] });
}
function ProductDetailPage() {
  const { id } = useParams({ strict: false });
  const product = getProductById(id);
  const addToCart = useCartStore((s) => s.addToCart);
  const { speak, stop, isSpeaking } = useSpeech();
  const [qty, setQty] = reactExports.useState(1);
  const [added, setAdded] = reactExports.useState(false);
  const [readAllActive, setReadAllActive] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!isSpeaking) setReadAllActive(false);
  }, [isSpeaking]);
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
  const priceFormatted = `₹${product.price.toLocaleString("en-IN")}`;
  const features = product.accessibilityTags;
  const featuresText = features.map((f) => f.replace(/-/g, " ")).join(", ");
  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    showCartToast(product.name);
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
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
      `Quantity selected: ${qty}.`
    ].join(" ");
    speak(allText);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { className: "flex-1 py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-shrink-0 w-full sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "overflow-hidden rounded-xl bg-muted border border-border w-full sm:w-[260px] h-[220px]",
            "data-ocid": "product-image",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: product.imageUrl,
                alt: product.name,
                className: "w-full h-full object-contain"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 pt-3 sm:max-w-[260px]", children: features.slice(0, 4).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "outline",
            className: "text-xs px-2 py-0.5 border-primary/40 text-primary bg-primary/5 capitalize",
            children: [
              "✓ ",
              tag.replace(/-/g, " ")
            ]
          },
          tag
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-5", "data-ocid": "product-detail", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-sm px-3 py-1", children: product.category }),
          product.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "gradient-primary text-white border-0 text-sm px-3 py-1", children: "⭐ Featured" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground leading-tight flex-1 min-w-0", children: product.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AudioButton,
            {
              text: `This is ${product.name}`,
              label: `Read product name: ${product.name}`,
              "data-ocid": "btn-audio-title"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "text-3xl font-bold text-primary",
              "aria-label": `Price: ${priceFormatted}`,
              children: priceFormatted
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AudioButton,
            {
              text: `Price: ${priceFormatted}`,
              label: `Read price: ${priceFormatted}`,
              "data-ocid": "btn-audio-price"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              label: "Description",
              audioText: `${product.name}. ${product.description}`,
              audioLabel: "Read product description",
              ocid: "btn-audio-description"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: product.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SectionHeader,
            {
              label: "Features",
              audioText: `Features of ${product.name}: ${featuresText}`,
              audioLabel: "Read product features",
              ocid: "btn-audio-features"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", "aria-label": "Product features", children: features.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "li",
            {
              className: "flex items-center gap-2 text-base text-foreground",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0", children: "✓" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize", children: tag.replace(/-/g, " ") })
              ]
            },
            tag
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "font-bold text-foreground text-base",
                id: "qty-label",
                children: "Quantity"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AudioButton,
              {
                text: `Quantity: ${qty}. Use plus or minus buttons to change quantity.`,
                label: "Read quantity instructions",
                "data-ocid": "btn-audio-quantity",
                size: "sm"
              }
            )
          ] }),
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
                    className: "w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors text-xl font-bold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:bg-muted",
                    "aria-label": "Decrease quantity",
                    "data-ocid": "btn-qty-decrease",
                    children: "−"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-12 text-center font-bold text-lg border-x-2 border-border h-12 flex items-center justify-center",
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
                    className: "w-12 h-12 flex items-center justify-center hover:bg-muted transition-colors text-xl font-bold disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:bg-muted",
                    "aria-label": "Increase quantity",
                    "data-ocid": "btn-qty-increase",
                    children: "+"
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleAddToCart,
                className: `flex-1 h-12 text-base flex items-center justify-center gap-2 transition-all duration-200 font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${added ? "bg-emerald-600 text-white scale-95 shadow-none" : "bg-primary text-primary-foreground hover:opacity-90 shadow-elevated"}`,
                "aria-label": added ? "Product added to cart" : `Add ${qty} ${qty === 1 ? "item" : "items"} to cart`,
                "data-ocid": "btn-add-to-cart",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-5 w-5" }),
                  added ? "✓ Added to Cart!" : "Add to Cart"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              AudioButton,
              {
                text: `Add ${product.name} to cart. Price: ${priceFormatted}. Quantity: ${qty}.`,
                label: "Read add to cart information",
                "data-ocid": "btn-audio-add-to-cart"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: handleReadAll,
              className: `w-full h-11 flex items-center justify-center gap-2 rounded-xl border-2 font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${readAllActive && isSpeaking ? "border-primary bg-primary/10 text-primary animate-pulse" : "border-border bg-card hover:bg-muted text-foreground"}`,
              "aria-label": readAllActive && isSpeaking ? "Stop reading" : "Read all product details aloud",
              "data-ocid": "btn-read-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4" }),
                readAllActive && isSpeaking ? "Stop Reading" : "🔊 Read All Details"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/products",
            className: "inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded px-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
              "Back to all products"
            ]
          }
        ) })
      ] })
    ] })
  ] }) });
}
export {
  ProductDetailPage as default
};
