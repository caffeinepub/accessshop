import { c as createLucideIcon, e as useCartStore, u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button } from "./index-BoX3_azF.js";
import { A as AnimatedPage } from "./AnimatedPage-BvLNsX_N.js";
import { B as Badge } from "./badge-DczFgQBo.js";
import { I as Input } from "./input-CrwE6BnC.js";
import { L as Label } from "./label-DkVbJPXN.js";
import { P as Package, S as Separator } from "./separator-pboJ_-vE.js";
import { S as ShoppingBag, A as AnimatePresence } from "./index-C3yiqIOk.js";
import { A as ArrowLeft } from "./arrow-left-DcvRFYV0.js";
import { m as motion } from "./proxy-D9ePEMhA.js";
import { C as CircleCheck } from "./circle-check-DmHRFpkY.js";
import { M as MapPin } from "./map-pin-Dcgw73UR.js";
import "./index-Cp_UB5O8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
const STEPS = ["Shipping", "Payment", "Review"];
const INIT_SHIPPING = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  country: ""
};
const INIT_PAYMENT = {
  cardNumber: "",
  cardName: "",
  expiry: "",
  cvv: ""
};
function StepIndicator({
  current
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Checkout progress", className: "mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex items-center justify-center gap-0", children: STEPS.map((step, i) => {
    const isDone = i < current;
    const isActive = i === current;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-smooth ${isDone ? "gradient-primary text-white shadow-subtle" : isActive ? "border-2 border-primary text-primary bg-primary/10" : "border-2 border-border text-muted-foreground bg-muted"}`,
            "aria-current": isActive ? "step" : void 0,
            children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5", "aria-hidden": "true" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: i + 1 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `mt-1.5 text-xs font-medium whitespace-nowrap ${isActive ? "text-primary" : isDone ? "text-foreground" : "text-muted-foreground"}`,
            children: step
          }
        )
      ] }),
      i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `w-16 sm:w-20 h-0.5 mx-2 mb-5 transition-smooth ${i < current ? "bg-primary" : "bg-border"}`,
          "aria-hidden": "true"
        }
      )
    ] }, step);
  }) }) });
}
function ShippingStep({
  form,
  onChange,
  onNext
}) {
  const [errors, setErrors] = reactExports.useState({});
  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.includes("@")) e.email = "Valid email is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.postalCode.trim()) e.postalCode = "Postal code is required";
    if (!form.country.trim()) e.country = "Country is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) onNext();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, "aria-label": "Shipping information", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Shipping Information" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ship-fullName", className: "text-base font-medium", children: [
          "Full Name",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ship-fullName",
            value: form.fullName,
            onChange: (e) => onChange("fullName", e.target.value),
            placeholder: "Jane Smith",
            className: "h-12 text-base",
            "aria-required": "true",
            "aria-invalid": !!errors.fullName,
            "data-ocid": "input-fullname"
          }
        ),
        errors.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.fullName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ship-email", className: "text-base font-medium", children: [
          "Email",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ship-email",
            type: "email",
            value: form.email,
            onChange: (e) => onChange("email", e.target.value),
            placeholder: "jane@example.com",
            className: "h-12 text-base",
            "aria-required": "true",
            "aria-invalid": !!errors.email,
            "data-ocid": "input-email"
          }
        ),
        errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ship-address", className: "text-base font-medium", children: [
          "Street Address",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ship-address",
            value: form.address,
            onChange: (e) => onChange("address", e.target.value),
            placeholder: "123 Accessibility Lane",
            className: "h-12 text-base",
            "aria-required": "true",
            "aria-invalid": !!errors.address,
            "data-ocid": "input-address"
          }
        ),
        errors.address && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.address })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ship-city", className: "text-base font-medium", children: [
          "City",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ship-city",
            value: form.city,
            onChange: (e) => onChange("city", e.target.value),
            placeholder: "New York",
            className: "h-12 text-base",
            "aria-required": "true",
            "aria-invalid": !!errors.city,
            "data-ocid": "input-city"
          }
        ),
        errors.city && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.city })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ship-postal", className: "text-base font-medium", children: [
          "Postal Code",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ship-postal",
            value: form.postalCode,
            onChange: (e) => onChange("postalCode", e.target.value),
            placeholder: "10001",
            className: "h-12 text-base",
            "aria-required": "true",
            "aria-invalid": !!errors.postalCode,
            "data-ocid": "input-postal"
          }
        ),
        errors.postalCode && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.postalCode })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "ship-country", className: "text-base font-medium", children: [
          "Country",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "ship-country",
            value: form.country,
            onChange: (e) => onChange("country", e.target.value),
            placeholder: "United States",
            className: "h-12 text-base",
            "aria-required": "true",
            "aria-invalid": !!errors.country,
            "data-ocid": "input-country"
          }
        ),
        errors.country && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.country })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-5 p-3 rounded-xl bg-muted/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Truck,
        {
          className: "h-4 w-4 text-primary flex-shrink-0",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Free standard shipping" }),
        " ",
        "· Estimated 3–5 business days"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "submit",
        className: "w-full mt-6 btn-accessible gradient-primary text-white hover:opacity-90 text-base font-semibold h-14 gap-2 shadow-elevated",
        "data-ocid": "btn-next-payment",
        children: [
          "Continue to Payment",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5", "aria-hidden": "true" })
        ]
      }
    )
  ] });
}
function PaymentStep({
  form,
  onChange,
  onNext,
  onBack
}) {
  const [errors, setErrors] = reactExports.useState({});
  function formatCard(val) {
    return val.replace(/\D/g, "").substring(0, 16).replace(/(.{4})/g, "$1 ").trim();
  }
  function formatExpiry(val) {
    const digits = val.replace(/\D/g, "").substring(0, 4);
    if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  }
  function validate() {
    const e = {};
    if (form.cardNumber.replace(/\s/g, "").length < 16)
      e.cardNumber = "Enter a valid 16-digit card number";
    if (!form.cardName.trim()) e.cardName = "Cardholder name is required";
    if (form.expiry.length < 5) e.expiry = "Enter expiry as MM/YY";
    if (form.cvv.length < 3) e.cvv = "Enter a valid CVV";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) onNext();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, noValidate: true, "aria-label": "Payment details", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5 text-primary", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Payment Details" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "ml-auto gap-1 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3", "aria-hidden": "true" }),
        "Secure"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "pay-cardNumber", className: "text-base font-medium", children: [
          "Card Number",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "pay-cardNumber",
            value: form.cardNumber,
            onChange: (e) => onChange("cardNumber", formatCard(e.target.value)),
            placeholder: "4242 4242 4242 4242",
            className: "h-12 text-base font-mono tracking-widest",
            "aria-required": "true",
            "aria-invalid": !!errors.cardNumber,
            inputMode: "numeric",
            autoComplete: "cc-number",
            "data-ocid": "input-card-number"
          }
        ),
        errors.cardNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.cardNumber })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "pay-cardName", className: "text-base font-medium", children: [
          "Cardholder Name",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "pay-cardName",
            value: form.cardName,
            onChange: (e) => onChange("cardName", e.target.value),
            placeholder: "Jane Smith",
            className: "h-12 text-base",
            "aria-required": "true",
            "aria-invalid": !!errors.cardName,
            autoComplete: "cc-name",
            "data-ocid": "input-card-name"
          }
        ),
        errors.cardName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.cardName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "pay-expiry", className: "text-base font-medium", children: [
          "Expiry",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "pay-expiry",
            value: form.expiry,
            onChange: (e) => onChange("expiry", formatExpiry(e.target.value)),
            placeholder: "MM/YY",
            className: "h-12 text-base font-mono",
            "aria-required": "true",
            "aria-invalid": !!errors.expiry,
            inputMode: "numeric",
            autoComplete: "cc-exp",
            "data-ocid": "input-expiry"
          }
        ),
        errors.expiry && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.expiry })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "pay-cvv", className: "text-base font-medium", children: [
          "CVV",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            id: "pay-cvv",
            type: "password",
            value: form.cvv,
            onChange: (e) => onChange("cvv", e.target.value.replace(/\D/g, "").substring(0, 4)),
            placeholder: "•••",
            className: "h-12 text-base font-mono",
            "aria-required": "true",
            "aria-invalid": !!errors.cvv,
            inputMode: "numeric",
            autoComplete: "cc-csc",
            "data-ocid": "input-cvv"
          }
        ),
        errors.cvv && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.cvv })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-xs text-muted-foreground flex items-center gap-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3", "aria-hidden": "true" }),
      "Your payment information is encrypted and secure."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: onBack,
          className: "flex-1 h-14 gap-2 text-base",
          "data-ocid": "btn-back-shipping",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "aria-hidden": "true" }),
            "Back"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "submit",
          className: "flex-[2] btn-accessible gradient-primary text-white hover:opacity-90 text-base font-semibold h-14 gap-2 shadow-elevated",
          "data-ocid": "btn-next-review",
          children: [
            "Review Order",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-5 w-5", "aria-hidden": "true" })
          ]
        }
      )
    ] })
  ] });
}
function ReviewStep({
  shipping,
  total,
  itemCount,
  onBack,
  onPlace
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-label": "Order review", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Review Your Order" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-semibold text-foreground flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary", "aria-hidden": "true" }),
            "Shipping to"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onBack,
              className: "text-primary text-sm hover:underline min-h-[44px] min-w-[44px] flex items-center justify-end",
              "data-ocid": "btn-edit-shipping",
              children: "Edit"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium", children: shipping.fullName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: shipping.address }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
          shipping.city,
          ", ",
          shipping.postalCode
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: shipping.country })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-xl p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            itemCount,
            " ",
            itemCount === 1 ? "item" : "items"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium tabular-nums", children: [
            "$",
            total.toFixed(2)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Free" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between font-bold text-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-primary tabular-nums", children: [
            "$",
            total.toFixed(2)
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground text-center leading-relaxed", children: "By placing your order you agree to our Terms of Service." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: onBack,
          className: "flex-1 h-14 gap-2 text-base",
          "data-ocid": "btn-back-payment",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "aria-hidden": "true" }),
            "Back"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          onClick: onPlace,
          className: "flex-[2] btn-accessible gradient-primary text-white hover:opacity-90 text-base font-semibold h-14 gap-2 shadow-elevated",
          "data-ocid": "btn-place-order",
          "aria-label": `Place order for $${total.toFixed(2)}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5", "aria-hidden": "true" }),
            "Place Order · $",
            total.toFixed(2)
          ]
        }
      )
    ] })
  ] });
}
function SuccessView({ onContinue }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      className: "text-center py-10",
      role: "alert",
      "aria-live": "assertive",
      "data-ocid": "order-success",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0 },
            animate: { scale: 1 },
            transition: { delay: 0.2, type: "spring", stiffness: 200 },
            className: "w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-elevated",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-12 w-12 text-white", "aria-hidden": "true" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.35 },
            className: "text-3xl font-display font-bold text-foreground mb-3",
            children: "Order Placed! 🎉"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.45 },
            className: "text-muted-foreground text-lg max-w-sm mx-auto mb-8 leading-relaxed",
            children: "Thank you for your purchase! Your accessible products are on their way."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.55 },
            className: "flex flex-col sm:flex-row gap-3 justify-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: onContinue,
                  className: "btn-primary gap-2 text-base h-12 px-8",
                  "data-ocid": "btn-continue-shopping-success",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-5 w-5", "aria-hidden": "true" }),
                    "Continue Shopping"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "h-12 px-8 text-base w-full",
                  "data-ocid": "btn-go-home",
                  children: "Go to Home"
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());
  const itemCount = useCartStore((s) => s.itemCount());
  const clearCart = useCartStore((s) => s.clearCart);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = reactExports.useState(0);
  const [success, setSuccess] = reactExports.useState(false);
  const [shipping, setShipping] = reactExports.useState(INIT_SHIPPING);
  const [payment, setPayment] = reactExports.useState(INIT_PAYMENT);
  function handleShippingChange(field, value) {
    setShipping((p) => ({ ...p, [field]: value }));
  }
  function handlePaymentChange(field, value) {
    setPayment((p) => ({ ...p, [field]: value }));
  }
  function handlePlaceOrder() {
    clearCart();
    setSuccess(true);
  }
  if (items.length === 0 && !success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { className: "flex-1 flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md", "data-ocid": "checkout-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-12 w-12 text-white", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground mb-3", children: "Nothing to checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8 leading-relaxed", children: "Your cart is empty. Add some products first!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: "btn-primary gap-2 text-base",
          "data-ocid": "btn-browse-from-checkout",
          children: "Browse Products"
        }
      ) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { className: "flex-1 py-8 px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-2xl mx-auto", children: [
    !success && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/cart",
        className: "inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8 group",
        "data-ocid": "link-back-to-cart",
        "aria-label": "Back to cart",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ArrowLeft,
            {
              className: "h-4 w-4 group-hover:-translate-x-1 transition-smooth",
              "aria-hidden": "true"
            }
          ),
          "Back to Cart"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-accessible", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: success ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      SuccessView,
      {
        onContinue: () => navigate({ to: "/products" })
      },
      "success"
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground text-center mb-8", children: "Checkout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepIndicator, { current: currentStep }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
            currentStep === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.25 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ShippingStep,
                  {
                    form: shipping,
                    onChange: handleShippingChange,
                    onNext: () => setCurrentStep(1)
                  }
                )
              },
              "shipping"
            ),
            currentStep === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.25 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PaymentStep,
                  {
                    form: payment,
                    onChange: handlePaymentChange,
                    onNext: () => setCurrentStep(2),
                    onBack: () => setCurrentStep(0)
                  }
                )
              },
              "payment"
            ),
            currentStep === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                transition: { duration: 0.25 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ReviewStep,
                  {
                    shipping,
                    total,
                    itemCount,
                    onBack: () => setCurrentStep(1),
                    onPlace: handlePlaceOrder
                  }
                )
              },
              "review"
            )
          ] })
        ]
      },
      "checkout"
    ) }) })
  ] }) });
}
export {
  CheckoutPage as default
};
