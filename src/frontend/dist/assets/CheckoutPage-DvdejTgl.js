import { c as createLucideIcon, e as useCartStore, u as useNavigate, r as reactExports, j as jsxRuntimeExports, L as Link, B as Button, n as useSpeech, V as Volume2 } from "./index-cVX3WGFm.js";
import { A as AnimatedPage } from "./AnimatedPage-CvO60yzg.js";
import { I as Input } from "./input-DxrTGHIz.js";
import { L as Label } from "./label-B3E3tXTK.js";
import { P as Package, S as Separator } from "./separator-oLiHYklN.js";
import { S as ShoppingBag, A as AnimatePresence } from "./index-Bipt70ga.js";
import { A as ArrowLeft } from "./arrow-left-COsWM083.js";
import { m as motion } from "./proxy-_Jdsu-al.js";
import { C as CircleCheck } from "./circle-check-Bh3tiaJ6.js";
import { M as MapPin } from "./map-pin-6gBWOJhh.js";
import "./index-YNLoKdEA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
];
const Banknote = createLucideIcon("banknote", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = createLucideIcon("loader-circle", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode$1);
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
const INIT_DELIVERY = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  country: "India"
};
const INIT_CARD = { number: "", name: "", expiry: "", cvv: "" };
const BANKS = ["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB", "Yes Bank"];
function AudioBtn({
  text,
  label
}) {
  const { speak, isSpeaking } = useSpeech();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: (e) => {
        e.stopPropagation();
        speak(text);
      },
      "aria-label": label ?? `Hear instructions: ${text}`,
      title: "Hear instructions",
      className: `inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${isSpeaking ? "bg-primary border-primary text-white scale-110 shadow-lg" : "bg-primary/10 border-primary/40 text-primary hover:bg-primary/20 hover:border-primary"}`,
      "data-ocid": `audio-btn-${(label == null ? void 0 : label.toLowerCase().replace(/\s+/g, "-")) ?? "generic"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "h-4 w-4", "aria-hidden": "true" })
    }
  );
}
function FormField({
  id,
  label,
  audioText,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: id, className: "text-lg font-semibold text-foreground", children: [
        label,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AudioBtn, { text: audioText, label })
    ] }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive font-medium", role: "alert", children: error })
  ] });
}
function DeliverySection({
  form,
  onChange,
  onContinue
}) {
  const [errors, setErrors] = reactExports.useState({});
  function validate() {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.includes("@")) e.email = "Valid email is required";
    if (!form.address.trim()) e.address = "Street address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!/^\d{6}$/.test(form.postalCode))
      e.postalCode = "Enter a valid 6-digit postal code";
    if (!form.country.trim()) e.country = "Country is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "delivery-heading", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-white", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          id: "delivery-heading",
          className: "text-2xl font-display font-bold text-foreground",
          children: "Delivery Information"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          id: "full-name",
          label: "Full Name",
          audioText: "Enter your full name. For example: Rahul Sharma",
          error: errors.fullName,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "full-name",
              value: form.fullName,
              onChange: (e) => onChange("fullName", e.target.value),
              placeholder: "Rahul Sharma",
              className: "h-14 text-base px-4 border-2 focus:border-primary",
              "aria-required": "true",
              "aria-invalid": !!errors.fullName,
              autoComplete: "name",
              "data-ocid": "input-fullname"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          id: "email",
          label: "Email Address",
          audioText: "Enter your email address. For example: rahul@gmail.com",
          error: errors.email,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "email",
              type: "email",
              value: form.email,
              onChange: (e) => onChange("email", e.target.value),
              placeholder: "rahul@gmail.com",
              className: "h-14 text-base px-4 border-2 focus:border-primary",
              "aria-required": "true",
              "aria-invalid": !!errors.email,
              autoComplete: "email",
              "data-ocid": "input-email"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          id: "address",
          label: "Street Address",
          audioText: "Enter your street address. For example: 12 MG Road, Apartment 3",
          error: errors.address,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "address",
              value: form.address,
              onChange: (e) => onChange("address", e.target.value),
              placeholder: "12 MG Road, Apartment 3",
              className: "h-14 text-base px-4 border-2 focus:border-primary",
              "aria-required": "true",
              "aria-invalid": !!errors.address,
              autoComplete: "street-address",
              "data-ocid": "input-address"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            id: "city",
            label: "City",
            audioText: "Enter your city name. For example: Mumbai",
            error: errors.city,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "city",
                value: form.city,
                onChange: (e) => onChange("city", e.target.value),
                placeholder: "Mumbai",
                className: "h-14 text-base px-4 border-2 focus:border-primary",
                "aria-required": "true",
                "aria-invalid": !!errors.city,
                autoComplete: "address-level2",
                "data-ocid": "input-city"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FormField,
          {
            id: "postal-code",
            label: "Postal Code",
            audioText: "Enter your 6-digit postal code. For example: 400001",
            error: errors.postalCode,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "postal-code",
                value: form.postalCode,
                onChange: (e) => onChange(
                  "postalCode",
                  e.target.value.replace(/\D/g, "").slice(0, 6)
                ),
                placeholder: "400001",
                className: "h-14 text-base px-4 border-2 focus:border-primary",
                "aria-required": "true",
                "aria-invalid": !!errors.postalCode,
                inputMode: "numeric",
                autoComplete: "postal-code",
                "data-ocid": "input-postal"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        FormField,
        {
          id: "country",
          label: "Country",
          audioText: "Enter your country name. For example: India",
          error: errors.country,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "country",
              value: form.country,
              onChange: (e) => onChange("country", e.target.value),
              placeholder: "India",
              className: "h-14 text-base px-4 border-2 focus:border-primary",
              "aria-required": "true",
              "aria-invalid": !!errors.country,
              autoComplete: "country-name",
              "data-ocid": "input-country"
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Truck,
        {
          className: "h-5 w-5 text-primary flex-shrink-0",
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Free delivery" }),
        " · Estimated 3–5 business days"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        type: "button",
        onClick: () => validate() && onContinue(),
        className: "w-full mt-6 h-14 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg",
        "data-ocid": "btn-continue-to-payment",
        children: [
          "Continue to Payment",
          /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5", "aria-hidden": "true" })
        ]
      }
    )
  ] });
}
function PaymentSection({
  onPlaceOrder,
  onBack,
  total
}) {
  const { speak } = useSpeech();
  const [paymentMethod, setPaymentMethod] = reactExports.useState(
    null
  );
  const [onlineMethod, setOnlineMethod] = reactExports.useState(null);
  const [upiId, setUpiId] = reactExports.useState("");
  const [card, setCard] = reactExports.useState(INIT_CARD);
  const [bank, setBank] = reactExports.useState("");
  const [processing, setProcessing] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  function selectPayment(method) {
    setPaymentMethod(method);
    if (method === "cod") {
      speak(
        "You selected Cash on Delivery. Your order will be delivered and you pay in cash."
      );
    } else {
      speak("You selected online payment.");
    }
  }
  function selectOnlineMethod(method) {
    setOnlineMethod(method);
    const labels = {
      upi: "You selected UPI payment.",
      card: "You selected Credit or Debit Card payment.",
      netbanking: "You selected Net Banking."
    };
    speak(labels[method]);
  }
  function formatCard(val) {
    return val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  }
  function formatExpiry(val) {
    const d = val.replace(/\D/g, "").slice(0, 4);
    return d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  }
  function validateOnline() {
    const e = {};
    if (onlineMethod === "upi" && !upiId.includes("@")) {
      e.upi = "Enter a valid UPI ID like name@upi";
    }
    if (onlineMethod === "card") {
      if (card.number.replace(/\s/g, "").length < 16)
        e.cardNumber = "Enter a valid 16-digit card number";
      if (!card.name.trim()) e.cardName = "Cardholder name is required";
      if (card.expiry.length < 5) e.expiry = "Enter expiry as MM/YY";
      if (card.cvv.length < 3) e.cvv = "Enter a valid CVV";
    }
    if (onlineMethod === "netbanking" && !bank) {
      e.bank = "Please select a bank";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }
  function handleCOD() {
    speak(
      "Order confirmed! You selected Cash on Delivery. Your order will be delivered soon."
    );
    onPlaceOrder("cod");
  }
  function handleOnlinePay() {
    if (!onlineMethod) {
      speak("Please select a payment method: UPI, Card, or Net Banking.");
      return;
    }
    if (!validateOnline()) return;
    setProcessing(true);
    setTimeout(() => {
      speak(
        "Payment successful. Your order has been placed. Thank you for shopping with AccessShop."
      );
      onPlaceOrder("online");
    }, 1800);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-labelledby": "payment-heading", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5 text-white", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          id: "payment-heading",
          className: "text-2xl font-display font-bold text-foreground",
          children: "Select Payment"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => selectPayment("cod"),
          className: `w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${paymentMethod === "cod" ? "border-primary bg-primary/8 shadow-md" : "border-border bg-card hover:border-primary/50 hover:bg-muted/40"}`,
          "aria-pressed": paymentMethod === "cod",
          "data-ocid": "btn-select-cod",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${paymentMethod === "cod" ? "border-primary bg-primary" : "border-muted-foreground"}`,
                children: paymentMethod === "cod" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Banknote,
                {
                  className: "h-8 w-8 text-primary",
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: "Cash on Delivery" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground", children: "Pay when your order arrives" })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => selectPayment("online"),
          className: `w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${paymentMethod === "online" ? "border-primary bg-primary/8 shadow-md" : "border-border bg-card hover:border-primary/50 hover:bg-muted/40"}`,
          "aria-pressed": paymentMethod === "online",
          "data-ocid": "btn-select-online",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${paymentMethod === "online" ? "border-primary bg-primary" : "border-muted-foreground"}`,
                children: paymentMethod === "online" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-white" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-8 w-8 text-primary", "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-bold text-foreground", children: "Online Payment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground", children: "UPI · Card · Net Banking" })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: paymentMethod === "online" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, height: 0 },
          animate: { opacity: 1, height: "auto" },
          exit: { opacity: 0, height: 0 },
          transition: { duration: 0.25 },
          className: "overflow-hidden",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/30 rounded-2xl border border-border p-5 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3", children: ["upi", "card", "netbanking"].map(
              (m) => {
                const labels = {
                  upi: "UPI",
                  card: "Credit/Debit Card",
                  netbanking: "Net Banking"
                };
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => selectOnlineMethod(m),
                    className: `flex-1 py-3 px-4 rounded-xl border-2 text-base font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${onlineMethod === m ? "border-primary bg-primary text-white shadow-sm" : "border-border bg-card text-foreground hover:border-primary/60"}`,
                    "aria-pressed": onlineMethod === m,
                    "data-ocid": `btn-online-${m}`,
                    children: labels[m]
                  },
                  m
                );
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
              onlineMethod === "upi" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "upi-id",
                          className: "text-lg font-semibold",
                          children: "UPI ID"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        AudioBtn,
                        {
                          text: "Enter your UPI ID. For example: rahul@ybl or rahul@paytm",
                          label: "UPI ID"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: "upi-id",
                        value: upiId,
                        onChange: (e) => setUpiId(e.target.value),
                        placeholder: "rahul@ybl",
                        className: "h-14 text-base px-4 border-2 focus:border-primary",
                        "data-ocid": "input-upi"
                      }
                    ),
                    errors.upi && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.upi })
                  ]
                },
                "upi"
              ),
              onlineMethod === "card" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  className: "space-y-4",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Label,
                          {
                            htmlFor: "card-number",
                            className: "text-lg font-semibold",
                            children: "Card Number"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          AudioBtn,
                          {
                            text: "Enter your 16 digit card number.",
                            label: "Card Number"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "card-number",
                          value: card.number,
                          onChange: (e) => setCard((c) => ({
                            ...c,
                            number: formatCard(e.target.value)
                          })),
                          placeholder: "4242 4242 4242 4242",
                          className: "h-14 text-base px-4 border-2 focus:border-primary font-mono tracking-wider",
                          inputMode: "numeric",
                          "data-ocid": "input-card-number"
                        }
                      ),
                      errors.cardNumber && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.cardNumber })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Label,
                          {
                            htmlFor: "card-name",
                            className: "text-lg font-semibold",
                            children: "Cardholder Name"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          AudioBtn,
                          {
                            text: "Enter the name printed on your card.",
                            label: "Cardholder Name"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: "card-name",
                          value: card.name,
                          onChange: (e) => setCard((c) => ({ ...c, name: e.target.value })),
                          placeholder: "Rahul Sharma",
                          className: "h-14 text-base px-4 border-2 focus:border-primary",
                          "data-ocid": "input-card-name"
                        }
                      ),
                      errors.cardName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.cardName })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Label,
                            {
                              htmlFor: "card-expiry",
                              className: "text-lg font-semibold",
                              children: "Expiry"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            AudioBtn,
                            {
                              text: "Enter card expiry date in month year format. For example: 0 8 slash 2 7",
                              label: "Expiry"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "card-expiry",
                            value: card.expiry,
                            onChange: (e) => setCard((c) => ({
                              ...c,
                              expiry: formatExpiry(e.target.value)
                            })),
                            placeholder: "MM/YY",
                            className: "h-14 text-base px-4 border-2 focus:border-primary font-mono",
                            inputMode: "numeric",
                            "data-ocid": "input-expiry"
                          }
                        ),
                        errors.expiry && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm text-destructive",
                            role: "alert",
                            children: errors.expiry
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Label,
                            {
                              htmlFor: "card-cvv",
                              className: "text-lg font-semibold",
                              children: "CVV"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            AudioBtn,
                            {
                              text: "Enter the 3 digit CVV on the back of your card.",
                              label: "CVV"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Input,
                          {
                            id: "card-cvv",
                            type: "password",
                            value: card.cvv,
                            onChange: (e) => setCard((c) => ({
                              ...c,
                              cvv: e.target.value.replace(/\D/g, "").slice(0, 4)
                            })),
                            placeholder: "•••",
                            className: "h-14 text-base px-4 border-2 focus:border-primary font-mono",
                            inputMode: "numeric",
                            "data-ocid": "input-cvv"
                          }
                        ),
                        errors.cvv && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm text-destructive",
                            role: "alert",
                            children: errors.cvv
                          }
                        )
                      ] })
                    ] })
                  ]
                },
                "card"
              ),
              onlineMethod === "netbanking" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  className: "space-y-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: "bank-select",
                          className: "text-lg font-semibold",
                          children: "Select Bank"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        AudioBtn,
                        {
                          text: "Select your bank for net banking payment. Options include S B I, H D F C, I C I C I, Axis, and Kotak.",
                          label: "Bank"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "bank-select",
                        value: bank,
                        onChange: (e) => setBank(e.target.value),
                        className: "w-full h-14 text-base px-4 rounded-lg border-2 border-input bg-background text-foreground focus:outline-none focus:border-primary transition-colors",
                        "data-ocid": "select-bank",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "-- Choose your bank --" }),
                          BANKS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b, children: b }, b))
                        ]
                      }
                    ),
                    errors.bank && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-destructive", role: "alert", children: errors.bank })
                  ]
                },
                "netbanking"
              )
            ] })
          ] })
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          onClick: onBack,
          className: "flex-1 h-14 text-base gap-2",
          "data-ocid": "btn-back-delivery",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4", "aria-hidden": "true" }),
            "Back"
          ]
        }
      ),
      paymentMethod === "cod" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          onClick: handleCOD,
          className: "flex-[2] h-14 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg",
          "data-ocid": "btn-place-order-cod",
          "aria-label": `Place order for ₹${total.toLocaleString("en-IN")} with Cash on Delivery`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5", "aria-hidden": "true" }),
            "Place Order · ₹",
            total.toLocaleString("en-IN")
          ]
        }
      ),
      paymentMethod === "online" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          onClick: handleOnlinePay,
          disabled: processing,
          className: "flex-[2] h-14 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg disabled:opacity-70",
          "data-ocid": "btn-pay-now",
          "aria-label": `Pay now ₹${total.toLocaleString("en-IN")} online`,
          children: processing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-5 w-5 animate-spin", "aria-hidden": "true" }),
            "Processing…"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "h-5 w-5", "aria-hidden": "true" }),
            "Pay Now · ₹",
            total.toLocaleString("en-IN")
          ] })
        }
      ),
      !paymentMethod && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          disabled: true,
          className: "flex-[2] h-14 text-lg font-bold opacity-50 cursor-not-allowed bg-muted text-muted-foreground",
          "data-ocid": "btn-pay-disabled",
          children: "Select a payment method"
        }
      )
    ] })
  ] });
}
function CartSummary({ compact = false }) {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `bg-card border border-border rounded-2xl overflow-hidden ${compact ? "" : "shadow-sm"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-b border-border flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-5 w-5 text-primary", "aria-hidden": "true" }),
            "Order Summary"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            items.length,
            " ",
            items.length === 1 ? "item" : "items"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-5 space-y-3 max-h-72 overflow-y-auto", children: items.map(({ product, quantity }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              className: "w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-border"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-base text-foreground truncate", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              "Qty: ",
              quantity
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-base text-foreground tabular-nums", children: [
            "₹",
            (product.price * quantity).toLocaleString("en-IN")
          ] })
        ] }, product.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 bg-muted/30 border-t border-border space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums", children: [
              "₹",
              total.toLocaleString("en-IN")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-base text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Free" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-bold text-foreground", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold text-primary tabular-nums", children: [
                "₹",
                total.toLocaleString("en-IN")
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                AudioBtn,
                {
                  text: `Your total is ₹${total.toLocaleString("en-IN")}. Free delivery included.`,
                  label: "Total amount"
                }
              )
            ] })
          ] })
        ] })
      ]
    }
  );
}
function SuccessScreen({
  paymentMethod,
  total,
  itemCount,
  onContinue
}) {
  const { speak } = useSpeech();
  const hasSpokeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (!hasSpokeRef.current) {
      hasSpokeRef.current = true;
      const msg = paymentMethod === "cod" ? "Order confirmed! You selected Cash on Delivery. Your order will be delivered soon. Thank you for shopping with AccessShop." : "Payment successful. Your order has been placed. Thank you for shopping with AccessShop.";
      setTimeout(() => speak(msg), 600);
    }
  }, [speak, paymentMethod]);
  const isCOD = paymentMethod === "cod";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.92 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      className: "text-center py-10 px-4",
      role: "alert",
      "aria-live": "assertive",
      "data-ocid": "order-success-screen",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { scale: 0, rotate: -15 },
            animate: { scale: 1, rotate: 0 },
            transition: { delay: 0.2, type: "spring", stiffness: 200 },
            className: "w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-xl",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-14 w-14 text-white" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.35 },
            className: "text-4xl font-display font-bold text-foreground mb-3",
            children: "Order Placed Successfully! 🎉"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.45 },
            className: "space-y-2 mb-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground", children: isCOD ? "Pay when your order arrives at your door." : "Your payment was successful." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-foreground font-semibold", children: [
                itemCount,
                " ",
                itemCount === 1 ? "item" : "items",
                " · ₹",
                total.toLocaleString("en-IN"),
                " total"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 mt-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "h-5 w-5 text-primary", "aria-hidden": "true" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-primary", children: "Estimated delivery: 3–5 business days" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.55 },
            className: "flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: onContinue,
                  className: "h-14 px-8 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg flex-1",
                  "data-ocid": "btn-continue-shopping",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5", "aria-hidden": "true" }),
                    "Continue Shopping"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  className: "h-14 px-8 text-lg font-bold w-full border-2",
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
  const [step, setStep] = reactExports.useState("delivery");
  const [success, setSuccess] = reactExports.useState(false);
  const [usedPaymentMethod, setUsedPaymentMethod] = reactExports.useState("cod");
  const [savedTotal, setSavedTotal] = reactExports.useState(0);
  const [savedCount, setSavedCount] = reactExports.useState(0);
  const [delivery, setDelivery] = reactExports.useState(INIT_DELIVERY);
  function handleDeliveryChange(field, val) {
    setDelivery((p) => ({ ...p, [field]: val }));
  }
  function handlePlaceOrder(method) {
    setSavedTotal(total);
    setSavedCount(itemCount);
    setUsedPaymentMethod(method);
    clearCart();
    setSuccess(true);
  }
  if (items.length === 0 && !success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { className: "flex-1 flex items-center justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md", "data-ocid": "checkout-empty", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-14 w-14 text-white", "aria-hidden": "true" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-display font-bold text-foreground mb-3", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-muted-foreground mb-8 leading-relaxed", children: "Add some products to your cart before checking out." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          className: "h-14 px-8 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90",
          "data-ocid": "btn-browse-from-checkout",
          children: "Browse Products"
        }
      ) })
    ] }) });
  }
  if (success) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { className: "flex-1 py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-3xl p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SuccessScreen,
      {
        paymentMethod: usedPaymentMethod,
        total: savedTotal,
        itemCount: savedCount,
        onContinue: () => navigate({ to: "/products" })
      }
    ) }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedPage, { className: "flex-1 py-8 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/cart",
        className: "inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group text-base",
        "data-ocid": "link-back-to-cart",
        "aria-label": "Back to cart",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ArrowLeft,
            {
              className: "h-4 w-4 group-hover:-translate-x-1 transition-transform",
              "aria-hidden": "true"
            }
          ),
          "Back to Cart"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display font-bold text-foreground mb-8", children: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex items-center gap-0 mb-8",
            role: "tablist",
            "aria-label": "Checkout steps",
            children: ["delivery", "payment"].map((s, i) => {
              const labels = {
                delivery: "1. Delivery",
                payment: "2. Payment"
              };
              const isDone = s === "payment" && step === "payment";
              const isActive = step === s;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex-1 py-3 px-4 text-center rounded-xl text-base font-bold transition-all duration-200 ${isActive ? "bg-primary text-white shadow-sm" : isDone ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`,
                    "aria-current": isActive ? "step" : void 0,
                    children: labels[s]
                  }
                ),
                i === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-6 h-0.5 mx-1 ${step === "payment" ? "bg-primary" : "bg-border"}`,
                    "aria-hidden": "true"
                  }
                )
              ] }, s);
            })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: step === "delivery" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            transition: { duration: 0.22 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              DeliverySection,
              {
                form: delivery,
                onChange: handleDeliveryChange,
                onContinue: () => setStep("payment")
              }
            )
          },
          "delivery"
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            transition: { duration: 0.22 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              PaymentSection,
              {
                total,
                onPlaceOrder: handlePlaceOrder,
                onBack: () => setStep("delivery")
              }
            )
          },
          "payment"
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CartSummary, {}) })
    ] })
  ] }) });
}
export {
  CheckoutPage as default
};
