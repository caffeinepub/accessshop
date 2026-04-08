import { c as createLucideIcon, j as jsxRuntimeExports, a as cn, r as reactExports, L as Link, B as Button, n as ue } from "./index-BoX3_azF.js";
import { A as AnimatedPage } from "./AnimatedPage-BvLNsX_N.js";
import { B as Badge } from "./badge-DczFgQBo.js";
import { I as Input } from "./input-CrwE6BnC.js";
import { L as Label } from "./label-DkVbJPXN.js";
import { H as House } from "./house-Db-kb7np.js";
import { C as ChevronRight } from "./chevron-right-CUngB5aA.js";
import { C as CircleCheck } from "./circle-check-DmHRFpkY.js";
import { M as Mail } from "./mail-BghgJuxb.js";
import { M as MapPin } from "./map-pin-Dcgw73UR.js";
import "./index-Cp_UB5O8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@accessshop.example",
    desc: "We reply within 24 hours"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-ACCESS",
    desc: "Mon–Fri, 9am–6pm EST"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Inclusive Way, New York, NY 10001",
    desc: "Main office"
  },
  {
    icon: MessageSquare,
    label: "Live Chat",
    value: "Available on site",
    desc: "Weekdays 9am–5pm EST"
  }
];
const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "#", handle: "@accessshop" },
  { label: "Instagram", href: "#", handle: "@accessshop" },
  { label: "LinkedIn", href: "#", handle: "AccessShop Inc." },
  { label: "Facebook", href: "#", handle: "AccessShop" }
];
const EMPTY_FORM = {
  name: "",
  email: "",
  subject: "",
  message: ""
};
function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) errors.message = "Message is required.";
  else if (form.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters.";
  return errors;
}
function ContactPage() {
  const uid = reactExports.useId();
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [errors, setErrors] = reactExports.useState({});
  const [touched, setTouched] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (touched[key]) {
      const next = { ...form, [key]: value };
      setErrors(validate(next));
    }
  };
  const handleBlur = (key) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(form));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = {
      name: true,
      email: true,
      subject: true,
      message: true
    };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      ue.success("Message sent!", {
        description: "We'll get back to you within 24 hours."
      });
    }, 1200);
  };
  const handleReset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedPage, { className: "flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        "aria-label": "Breadcrumb",
        className: "bg-muted/30 border-b border-border px-4 py-3",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/home",
              className: "flex items-center gap-1 hover:text-foreground transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "h-3.5 w-3.5" }),
                "Home"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-foreground font-medium", children: "Contact" })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "gradient-primary py-16 px-4 text-white text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-white/20 text-white border-white/30 mb-6 px-4 py-1.5 text-sm", children: "We're Here to Help" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-hero mb-4", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/90", children: "Whether you have a question about our products or need accessibility support — we'd love to hear from you." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "card-accessible text-center py-12",
          role: "alert",
          "aria-live": "polite",
          "data-ocid": "contact-success",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-16 w-16 text-green-500 mx-auto mb-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-3", children: "Message Sent!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: "Thank you for reaching out. Our team will get back to you within 24 hours at the email address you provided." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                onClick: handleReset,
                className: "btn-primary",
                "data-ocid": "btn-send-another",
                children: "Send Another Message"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-8", children: "Send a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            onSubmit: handleSubmit,
            className: "space-y-5",
            "aria-label": "Contact form",
            noValidate: true,
            "data-ocid": "contact-form",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: `${uid}-name`,
                      className: "text-base font-semibold",
                      children: [
                        "Full Name",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", "aria-hidden": "true", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: `${uid}-name`,
                      value: form.name,
                      onChange: (e) => update("name", e.target.value),
                      onBlur: () => handleBlur("name"),
                      placeholder: "Jane Doe",
                      className: `h-12 text-base ${errors.name && touched.name ? "border-destructive" : ""}`,
                      "aria-required": "true",
                      "aria-describedby": errors.name && touched.name ? `${uid}-name-err` : void 0,
                      "aria-invalid": !!(errors.name && touched.name),
                      "data-ocid": "input-name",
                      autoComplete: "name"
                    }
                  ),
                  errors.name && touched.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      id: `${uid}-name-err`,
                      className: "text-destructive text-sm",
                      role: "alert",
                      children: errors.name
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Label,
                    {
                      htmlFor: `${uid}-email`,
                      className: "text-base font-semibold",
                      children: [
                        "Email",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", "aria-hidden": "true", children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: `${uid}-email`,
                      type: "email",
                      value: form.email,
                      onChange: (e) => update("email", e.target.value),
                      onBlur: () => handleBlur("email"),
                      placeholder: "you@example.com",
                      className: `h-12 text-base ${errors.email && touched.email ? "border-destructive" : ""}`,
                      "aria-required": "true",
                      "aria-describedby": errors.email && touched.email ? `${uid}-email-err` : void 0,
                      "aria-invalid": !!(errors.email && touched.email),
                      "data-ocid": "input-email",
                      autoComplete: "email"
                    }
                  ),
                  errors.email && touched.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      id: `${uid}-email-err`,
                      className: "text-destructive text-sm",
                      role: "alert",
                      children: errors.email
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: `${uid}-subject`,
                    className: "text-base font-semibold",
                    children: [
                      "Subject",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", "aria-hidden": "true", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: `${uid}-subject`,
                    value: form.subject,
                    onChange: (e) => update("subject", e.target.value),
                    onBlur: () => handleBlur("subject"),
                    placeholder: "How can we help?",
                    className: `h-12 text-base ${errors.subject && touched.subject ? "border-destructive" : ""}`,
                    "aria-required": "true",
                    "aria-describedby": errors.subject && touched.subject ? `${uid}-subject-err` : void 0,
                    "aria-invalid": !!(errors.subject && touched.subject),
                    "data-ocid": "input-subject"
                  }
                ),
                errors.subject && touched.subject && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    id: `${uid}-subject-err`,
                    className: "text-destructive text-sm",
                    role: "alert",
                    children: errors.subject
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Label,
                  {
                    htmlFor: `${uid}-message`,
                    className: "text-base font-semibold",
                    children: [
                      "Message",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", "aria-hidden": "true", children: "*" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: `${uid}-message`,
                    value: form.message,
                    onChange: (e) => update("message", e.target.value),
                    onBlur: () => handleBlur("message"),
                    placeholder: "Tell us more about your question or feedback…",
                    rows: 6,
                    className: `text-base resize-none ${errors.message && touched.message ? "border-destructive" : ""}`,
                    "aria-required": "true",
                    "aria-describedby": errors.message && touched.message ? `${uid}-message-err` : void 0,
                    "aria-invalid": !!(errors.message && touched.message),
                    "data-ocid": "input-message"
                  }
                ),
                errors.message && touched.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    id: `${uid}-message-err`,
                    className: "text-destructive text-sm",
                    role: "alert",
                    children: errors.message
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  type: "submit",
                  disabled: loading,
                  className: "w-full h-12 text-base btn-primary gap-2",
                  "data-ocid": "btn-send-message",
                  children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                    "Sending…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }),
                    " Send Message"
                  ] })
                }
              )
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground", children: "Contact Information" }),
        CONTACT_INFO.map((info) => {
          const Icon = info.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-foreground text-base", children: info.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground", children: info.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: info.desc })
            ] })
          ] }, info.label);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-4", children: "Follow Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: SOCIAL_LINKS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: s.href,
              className: "flex items-center justify-between group text-sm hover:text-primary transition-colors py-1",
              rel: "noopener noreferrer",
              "aria-label": `${s.label}: ${s.handle}`,
              "data-ocid": `social-${s.label.toLowerCase().replace(/\s+/g, "-")}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground group-hover:text-primary transition-colors", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground group-hover:text-primary transition-colors", children: [
                  s.handle,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
                ] })
              ]
            }
          ) }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl overflow-hidden shadow-subtle",
            role: "img",
            "aria-label": "Map showing AccessShop office location at 123 Inclusive Way, New York",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gradient-primary h-48 flex flex-col items-center justify-center text-white gap-2 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-20",
                    style: {
                      backgroundImage: "radial-gradient(circle at 30% 40%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-10 w-10 drop-shadow" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg", children: "AccessShop HQ" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/80 text-sm", children: "123 Inclusive Way, New York, NY 10001" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border-t border-border px-4 py-3 text-sm text-muted-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary flex-shrink-0" }),
                "Open Mon–Fri, 9am–6pm EST · Accessible entrance on north side"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-accessible bg-primary/5 border border-primary/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-2", children: "Accessibility Support" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Need help with our accessibility features or have a suggestion? Our dedicated accessibility support team is available during business hours and will respond within 4 hours." })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  ContactPage as default
};
