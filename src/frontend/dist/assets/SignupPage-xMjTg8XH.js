import { c as createLucideIcon, u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as cn, E as Eye, B as Button, L as Link } from "./index-BoX3_azF.js";
import { A as AnimatedPage } from "./AnimatedPage-BvLNsX_N.js";
import { I as Input } from "./input-CrwE6BnC.js";
import { L as Label } from "./label-DkVbJPXN.js";
import { C as CircleCheckBig, E as EyeOff } from "./eye-off-yFvc_4I4.js";
import "./index-Cp_UB5O8.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
];
const UserPlus = createLucideIcon("user-plus", __iconNode);
function SignupPage() {
  const navigate = useNavigate();
  const nameId = reactExports.useId();
  const emailId = reactExports.useId();
  const passwordId = reactExports.useId();
  const confirmId = reactExports.useId();
  const nameErrId = reactExports.useId();
  const emailErrId = reactExports.useId();
  const passErrId = reactExports.useId();
  const confirmErrId = reactExports.useId();
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });
  const [showPass, setShowPass] = reactExports.useState(false);
  const [showConfirm, setShowConfirm] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  const [success, setSuccess] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const [shaking, setShaking] = reactExports.useState(false);
  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => {
      const n = { ...e };
      delete n[key];
      return n;
    });
  };
  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 550);
  };
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Enter a valid email address.";
    if (!form.password) errs.password = "Password is required.";
    else if (form.password.length < 8)
      errs.password = "Password must be at least 8 characters.";
    if (!form.confirm) errs.confirm = "Please confirm your password.";
    else if (form.password !== form.confirm)
      errs.confirm = "Passwords do not match.";
    return errs;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      triggerShake();
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate({ to: "/" }), 2500);
    }, 900);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedPage, { className: "min-h-screen flex items-center justify-center p-4 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-primary", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/25 blur-3xl pointer-events-none",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl pointer-events-none",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "w-full max-w-md relative z-10 my-8",
          shaking && "animate-shake"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex w-20 h-20 rounded-3xl bg-card/20 backdrop-blur-sm border border-card/30 items-center justify-center mb-5 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-4xl",
                role: "img",
                "aria-label": "Accessibility symbol",
                children: "♿"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display font-bold text-card mb-2 tracking-tight drop-shadow-sm", children: "Create account" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-card/80 text-lg", children: [
              "Join ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "AccessShop" }),
              " today — free forever"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-3xl shadow-elevated p-8 border border-border", children: [
            success ? (
              /* Success state */
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-8 animate-scale-in",
                  "aria-live": "polite",
                  "data-ocid": "signup-success",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5 animate-bounce-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-10 w-10 text-accent" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-display font-bold text-foreground mb-3", children: "You're all set! 🎉" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-base leading-relaxed mb-2", children: [
                      "Welcome to AccessShop,",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: form.name }),
                      "!"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base", children: "Redirecting you to sign in…" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-1.5 bg-primary/30 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-primary rounded-full animate-progress" }) }) })
                  ]
                }
              )
            ) : (
              /* Signup form */
              /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, noValidate: true, "aria-label": "Sign up form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: nameId, className: "text-base font-semibold", children: "Full name" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: nameId,
                      type: "text",
                      autoComplete: "name",
                      value: form.name,
                      onChange: (e) => update("name", e.target.value),
                      placeholder: "Jane Doe",
                      className: cn(
                        "h-12 text-base",
                        errors.name && "border-destructive focus-visible:ring-destructive"
                      ),
                      "aria-required": "true",
                      "aria-invalid": !!errors.name,
                      "aria-describedby": errors.name ? nameErrId : void 0,
                      "data-ocid": "input-name"
                    }
                  ),
                  errors.name && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      id: nameErrId,
                      role: "alert",
                      className: "text-destructive text-sm animate-fade-in flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "⚠" }),
                        errors.name
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: emailId, className: "text-base font-semibold", children: "Email address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: emailId,
                      type: "email",
                      autoComplete: "email",
                      value: form.email,
                      onChange: (e) => update("email", e.target.value),
                      placeholder: "you@example.com",
                      className: cn(
                        "h-12 text-base",
                        errors.email && "border-destructive focus-visible:ring-destructive"
                      ),
                      "aria-required": "true",
                      "aria-invalid": !!errors.email,
                      "aria-describedby": errors.email ? emailErrId : void 0,
                      "data-ocid": "input-email"
                    }
                  ),
                  errors.email && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      id: emailErrId,
                      role: "alert",
                      className: "text-destructive text-sm animate-fade-in flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "⚠" }),
                        errors.email
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: passwordId,
                      className: "text-base font-semibold",
                      children: "Password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: passwordId,
                        type: showPass ? "text" : "password",
                        autoComplete: "new-password",
                        value: form.password,
                        onChange: (e) => update("password", e.target.value),
                        placeholder: "At least 8 characters",
                        className: cn(
                          "h-12 text-base pr-12",
                          errors.password && "border-destructive focus-visible:ring-destructive"
                        ),
                        "aria-required": "true",
                        "aria-invalid": !!errors.password,
                        "aria-describedby": errors.password ? passErrId : void 0,
                        "data-ocid": "input-password"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowPass((v) => !v),
                        "aria-label": showPass ? "Hide password" : "Show password",
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                        "data-ocid": "btn-toggle-password",
                        children: showPass ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-5 w-5" })
                      }
                    )
                  ] }),
                  errors.password && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      id: passErrId,
                      role: "alert",
                      className: "text-destructive text-sm animate-fade-in flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "⚠" }),
                        errors.password
                      ]
                    }
                  ),
                  form.password && !errors.password && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "flex gap-1.5 mt-1",
                      "aria-label": "Password strength indicator",
                      children: [2, 4, 6, 8].map((threshold) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: cn(
                            "h-1 flex-1 rounded-full transition-smooth",
                            form.password.length >= threshold ? threshold <= 4 ? "bg-destructive/70" : threshold === 6 ? "bg-warning" : "bg-success" : "bg-muted"
                          )
                        },
                        threshold
                      ))
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Label,
                    {
                      htmlFor: confirmId,
                      className: "text-base font-semibold",
                      children: "Confirm password"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Input,
                      {
                        id: confirmId,
                        type: showConfirm ? "text" : "password",
                        autoComplete: "new-password",
                        value: form.confirm,
                        onChange: (e) => update("confirm", e.target.value),
                        placeholder: "Repeat your password",
                        className: cn(
                          "h-12 text-base pr-12",
                          errors.confirm && "border-destructive focus-visible:ring-destructive"
                        ),
                        "aria-required": "true",
                        "aria-invalid": !!errors.confirm,
                        "aria-describedby": errors.confirm ? confirmErrId : void 0,
                        "data-ocid": "input-confirm-password"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => setShowConfirm((v) => !v),
                        "aria-label": showConfirm ? "Hide confirm password" : "Show confirm password",
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                        "data-ocid": "btn-toggle-confirm-password",
                        children: showConfirm ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-5 w-5" })
                      }
                    )
                  ] }),
                  errors.confirm && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      id: confirmErrId,
                      role: "alert",
                      className: "text-destructive text-sm animate-fade-in flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "⚠" }),
                        errors.confirm
                      ]
                    }
                  ),
                  form.confirm && form.password && form.password === form.confirm && !errors.confirm && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-success animate-fade-in flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4" }),
                    "Passwords match"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: loading,
                    className: "w-full min-h-[52px] text-base font-semibold rounded-xl gradient-primary text-primary-foreground hover:opacity-90 border-0 shadow-subtle transition-smooth gap-2",
                    "data-ocid": "btn-signup",
                    children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                      "Creating account…"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { className: "h-5 w-5" }),
                      "Create Account"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-muted-foreground text-sm", children: [
                  "By creating an account, you agree to our",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#terms",
                      className: "text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded",
                      children: "Terms"
                    }
                  ),
                  " ",
                  "and",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "#privacy",
                      className: "text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded",
                      children: "Privacy Policy"
                    }
                  )
                ] })
              ] }) })
            ),
            !success && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-muted-foreground text-base", children: [
              "Already have an account?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/",
                  className: "text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded",
                  "data-ocid": "link-login",
                  children: "Sign in"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-card/60 text-sm mt-6", children: "Designed for everyone — including visually impaired users" })
        ]
      }
    )
  ] });
}
export {
  SignupPage as default
};
