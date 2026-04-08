import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, X, a as cn, B as Button, E as Eye, L as Link } from "./index-cVX3WGFm.js";
import { A as AnimatedPage } from "./AnimatedPage-CvO60yzg.js";
import { I as Input } from "./input-DxrTGHIz.js";
import { L as Label } from "./label-B3E3tXTK.js";
import { C as CircleCheckBig, E as EyeOff } from "./eye-off-Dqr6kAPb.js";
import { M as Mail } from "./mail-rBoPT6kc.js";
import "./index-YNLoKdEA.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m10 17 5-5-5-5", key: "1bsop3" }],
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }]
];
const LogIn = createLucideIcon("log-in", __iconNode);
function LoginPage({ onLogin }) {
  const emailId = reactExports.useId();
  const passwordId = reactExports.useId();
  const emailErrId = reactExports.useId();
  const passErrId = reactExports.useId();
  const forgotEmailId = reactExports.useId();
  const forgotErrId = reactExports.useId();
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState(
    {}
  );
  const [loading, setLoading] = reactExports.useState(false);
  const [shaking, setShaking] = reactExports.useState(false);
  const [showForgot, setShowForgot] = reactExports.useState(false);
  const [forgotEmail, setForgotEmail] = reactExports.useState("");
  const [forgotError, setForgotError] = reactExports.useState("");
  const [forgotSuccess, setForgotSuccess] = reactExports.useState(false);
  const [forgotLoading, setForgotLoading] = reactExports.useState(false);
  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 550);
  };
  const validate = () => {
    const errs = {};
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      errs.email = "Enter a valid email address.";
    if (!password) errs.password = "Password is required.";
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
      onLogin();
    }, 800);
  };
  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setForgotError("");
    if (!forgotEmail.trim() || !/\S+@\S+\.\S+/.test(forgotEmail)) {
      setForgotError("Enter a valid email address.");
      return;
    }
    setForgotLoading(true);
    setTimeout(() => {
      setForgotLoading(false);
      setForgotSuccess(true);
    }, 900);
  };
  const closeForgot = () => {
    setShowForgot(false);
    setForgotSuccess(false);
    setForgotEmail("");
    setForgotError("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatedPage, { className: "min-h-screen flex items-center justify-center p-4 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 gradient-primary", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/25 blur-3xl pointer-events-none",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl pointer-events-none",
        "aria-hidden": "true"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "w-full max-w-md relative z-10",
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-display font-bold text-card mb-2 tracking-tight drop-shadow-sm", children: "Welcome back" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-card/80 text-lg", children: [
              "Sign in to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "AccessShop" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-3xl shadow-elevated p-8 border border-border", children: [
            showForgot ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-slide-down", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-display font-bold text-foreground", children: "Reset password" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: closeForgot,
                    "aria-label": "Close reset form",
                    className: "p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 min-h-[44px] min-w-[44px] flex items-center justify-center",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                  }
                )
              ] }),
              forgotSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "text-center py-6 animate-scale-in",
                  "aria-live": "polite",
                  "data-ocid": "forgot-success",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4 animate-bounce-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-8 w-8 text-accent" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: "Check your inbox" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-base leading-relaxed", children: [
                      "We've sent a reset link to",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: forgotEmail })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: closeForgot,
                        className: "mt-5 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded text-base min-h-[44px] flex items-center justify-center mx-auto",
                        children: "Back to sign in"
                      }
                    )
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  onSubmit: handleForgotSubmit,
                  noValidate: true,
                  "aria-label": "Reset password form",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base mb-5 leading-relaxed", children: "Enter your email and we'll send you a reset link." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: forgotEmailId,
                          className: "text-base font-semibold",
                          children: "Email address"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Input,
                        {
                          id: forgotEmailId,
                          type: "email",
                          autoComplete: "email",
                          value: forgotEmail,
                          onChange: (e) => {
                            setForgotEmail(e.target.value);
                            setForgotError("");
                          },
                          placeholder: "you@example.com",
                          className: cn(
                            "h-12 text-base",
                            forgotError && "border-destructive"
                          ),
                          "aria-required": "true",
                          "aria-invalid": !!forgotError,
                          "aria-describedby": forgotError ? forgotErrId : void 0,
                          "data-ocid": "input-forgot-email"
                        }
                      ),
                      forgotError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          id: forgotErrId,
                          role: "alert",
                          className: "text-destructive text-sm animate-fade-in flex items-center gap-1.5",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": "true", children: "⚠" }),
                            forgotError
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        type: "submit",
                        disabled: forgotLoading,
                        className: "w-full h-12 text-base gradient-primary text-primary-foreground hover:opacity-90 font-semibold rounded-xl border-0",
                        "data-ocid": "btn-forgot-submit",
                        children: forgotLoading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                          "Sending…"
                        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }),
                          "Send reset link"
                        ] })
                      }
                    )
                  ]
                }
              )
            ] }) : (
              /* Login Form */
              /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: handleSubmit, noValidate: true, "aria-label": "Login form", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: emailId, className: "text-base font-semibold", children: "Email address" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: emailId,
                      type: "email",
                      autoComplete: "email",
                      value: email,
                      onChange: (e) => {
                        setEmail(e.target.value);
                        setErrors((p) => ({ ...p, email: void 0 }));
                      },
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
                        type: showPassword ? "text" : "password",
                        autoComplete: "current-password",
                        value: password,
                        onChange: (e) => {
                          setPassword(e.target.value);
                          setErrors((p) => ({ ...p, password: void 0 }));
                        },
                        placeholder: "Your password",
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
                        onClick: () => setShowPassword((v) => !v),
                        "aria-label": showPassword ? "Hide password" : "Show password",
                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                        "data-ocid": "btn-toggle-password",
                        children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-5 w-5" })
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
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end -mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowForgot(true),
                    className: "text-sm text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded min-h-[44px] flex items-center transition-smooth",
                    "data-ocid": "btn-forgot-password",
                    children: "Forgot password?"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    disabled: loading,
                    className: "w-full min-h-[52px] text-base font-semibold rounded-xl gradient-primary text-primary-foreground hover:opacity-90 border-0 shadow-subtle transition-smooth gap-2",
                    "data-ocid": "btn-login",
                    children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" }),
                      "Signing in…"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "h-5 w-5" }),
                      "Sign In"
                    ] })
                  }
                )
              ] }) })
            ),
            !showForgot && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-center text-muted-foreground text-base", children: [
              "Don't have an account?",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/signup",
                  className: "text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded",
                  "data-ocid": "link-signup",
                  children: "Sign up free"
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
  LoginPage as default
};
