import { AnimatedPage } from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { CheckCircle, Eye, EyeOff, LogIn, Mail, X } from "lucide-react";
import { type FormEvent, useId, useState } from "react";

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const emailId = useId();
  const passwordId = useId();
  const emailErrId = useId();
  const passErrId = useId();
  const forgotEmailId = useId();
  const forgotErrId = useId();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [loading, setLoading] = useState(false);
  const [shaking, setShaking] = useState(false);

  // Forgot password state
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotError, setForgotError] = useState("");
  const [forgotSuccess, setForgotSuccess] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);

  const triggerShake = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 550);
  };

  const validate = () => {
    const errs: typeof errors = {};
    if (!email.trim()) errs.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      errs.email = "Enter a valid email address.";
    if (!password) errs.password = "Password is required.";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
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

  const handleForgotSubmit = (e: FormEvent) => {
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

  return (
    <AnimatedPage className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Full-screen gradient background */}
      <div className="absolute inset-0 gradient-primary" aria-hidden="true" />
      {/* Decorative blobs */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        className={cn(
          "w-full max-w-md relative z-10",
          shaking && "animate-shake",
        )}
      >
        {/* Brand header */}
        <div className="text-center mb-8">
          <div className="inline-flex w-20 h-20 rounded-3xl bg-card/20 backdrop-blur-sm border border-card/30 items-center justify-center mb-5 shadow-elevated">
            <span
              className="text-4xl"
              role="img"
              aria-label="Accessibility symbol"
            >
              ♿
            </span>
          </div>
          <h1 className="text-4xl font-display font-bold text-card mb-2 tracking-tight drop-shadow-sm">
            Welcome back
          </h1>
          <p className="text-card/80 text-lg">
            Sign in to <span className="font-semibold">AccessShop</span>
          </p>
        </div>

        {/* Card */}
        <div className="bg-card rounded-3xl shadow-elevated p-8 border border-border">
          {/* Forgot Password Panel */}
          {showForgot ? (
            <div className="animate-slide-down">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-display font-bold text-foreground">
                  Reset password
                </h2>
                <button
                  type="button"
                  onClick={closeForgot}
                  aria-label="Close reset form"
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {forgotSuccess ? (
                <div
                  className="text-center py-6 animate-scale-in"
                  aria-live="polite"
                  data-ocid="forgot-success"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Check your inbox
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    We've sent a reset link to{" "}
                    <strong className="text-foreground">{forgotEmail}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={closeForgot}
                    className="mt-5 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded text-base min-h-[44px] flex items-center justify-center mx-auto"
                  >
                    Back to sign in
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleForgotSubmit}
                  noValidate
                  aria-label="Reset password form"
                >
                  <p className="text-muted-foreground text-base mb-5 leading-relaxed">
                    Enter your email and we'll send you a reset link.
                  </p>
                  <div className="space-y-2 mb-5">
                    <Label
                      htmlFor={forgotEmailId}
                      className="text-base font-semibold"
                    >
                      Email address
                    </Label>
                    <Input
                      id={forgotEmailId}
                      type="email"
                      autoComplete="email"
                      value={forgotEmail}
                      onChange={(e) => {
                        setForgotEmail(e.target.value);
                        setForgotError("");
                      }}
                      placeholder="you@example.com"
                      className={cn(
                        "h-12 text-base",
                        forgotError && "border-destructive",
                      )}
                      aria-required="true"
                      aria-invalid={!!forgotError}
                      aria-describedby={forgotError ? forgotErrId : undefined}
                      data-ocid="input-forgot-email"
                    />
                    {forgotError && (
                      <p
                        id={forgotErrId}
                        role="alert"
                        className="text-destructive text-sm animate-fade-in flex items-center gap-1.5"
                      >
                        <span aria-hidden="true">⚠</span>
                        {forgotError}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={forgotLoading}
                    className="w-full h-12 text-base gradient-primary text-primary-foreground hover:opacity-90 font-semibold rounded-xl border-0"
                    data-ocid="btn-forgot-submit"
                  >
                    {forgotLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Mail className="h-5 w-5" />
                        Send reset link
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          ) : (
            /* Login Form */
            <form onSubmit={handleSubmit} noValidate aria-label="Login form">
              <div className="space-y-5">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor={emailId} className="text-base font-semibold">
                    Email address
                  </Label>
                  <Input
                    id={emailId}
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    className={cn(
                      "h-12 text-base",
                      errors.email &&
                        "border-destructive focus-visible:ring-destructive",
                    )}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? emailErrId : undefined}
                    data-ocid="input-email"
                  />
                  {errors.email && (
                    <p
                      id={emailErrId}
                      role="alert"
                      className="text-destructive text-sm animate-fade-in flex items-center gap-1.5"
                    >
                      <span aria-hidden="true">⚠</span>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label
                    htmlFor={passwordId}
                    className="text-base font-semibold"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id={passwordId}
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setErrors((p) => ({ ...p, password: undefined }));
                      }}
                      placeholder="Your password"
                      className={cn(
                        "h-12 text-base pr-12",
                        errors.password &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                      aria-required="true"
                      aria-invalid={!!errors.password}
                      aria-describedby={errors.password ? passErrId : undefined}
                      data-ocid="input-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                      data-ocid="btn-toggle-password"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p
                      id={passErrId}
                      role="alert"
                      className="text-destructive text-sm animate-fade-in flex items-center gap-1.5"
                    >
                      <span aria-hidden="true">⚠</span>
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Forgot password */}
                <div className="flex justify-end -mt-1">
                  <button
                    type="button"
                    onClick={() => setShowForgot(true)}
                    className="text-sm text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded min-h-[44px] flex items-center transition-smooth"
                    data-ocid="btn-forgot-password"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full min-h-[52px] text-base font-semibold rounded-xl gradient-primary text-primary-foreground hover:opacity-90 border-0 shadow-subtle transition-smooth gap-2"
                  data-ocid="btn-login"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Signing in…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <LogIn className="h-5 w-5" />
                      Sign In
                    </span>
                  )}
                </Button>
              </div>
            </form>
          )}

          {!showForgot && (
            <p className="mt-6 text-center text-muted-foreground text-base">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
                data-ocid="link-signup"
              >
                Sign up free
              </Link>
            </p>
          )}
        </div>

        <p className="text-center text-card/60 text-sm mt-6">
          Designed for everyone — including visually impaired users
        </p>
      </div>
    </AnimatedPage>
  );
}
