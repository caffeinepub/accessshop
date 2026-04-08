import { AnimatedPage } from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "@tanstack/react-router";
import { CheckCircle, Eye, EyeOff, UserPlus } from "lucide-react";
import { type FormEvent, useId, useState } from "react";

export default function SignupPage() {
  const navigate = useNavigate();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmId = useId();
  const nameErrId = useId();
  const emailErrId = useId();
  const passErrId = useId();
  const confirmErrId = useId();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shaking, setShaking] = useState(false);

  const update = (key: keyof typeof form, value: string) => {
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
    const errs: Record<string, string> = {};
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
      setSuccess(true);
      setTimeout(() => navigate({ to: "/" }), 2500);
    }, 900);
  };

  return (
    <AnimatedPage className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Full-screen gradient background */}
      <div className="absolute inset-0 gradient-primary" aria-hidden="true" />
      {/* Decorative blobs */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        className={cn(
          "w-full max-w-md relative z-10 my-8",
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
            Create account
          </h1>
          <p className="text-card/80 text-lg">
            Join <span className="font-semibold">AccessShop</span> today — free
            forever
          </p>
        </div>

        {/* Card */}
        <div className="bg-card rounded-3xl shadow-elevated p-8 border border-border">
          {success ? (
            /* Success state */
            <div
              className="text-center py-8 animate-scale-in"
              aria-live="polite"
              data-ocid="signup-success"
            >
              <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-5 animate-bounce-in">
                <CheckCircle className="h-10 w-10 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                You're all set! 🎉
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-2">
                Welcome to AccessShop,{" "}
                <strong className="text-foreground">{form.name}</strong>!
              </p>
              <p className="text-muted-foreground text-base">
                Redirecting you to sign in…
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-8 h-1.5 bg-primary/30 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-progress" />
                </div>
              </div>
            </div>
          ) : (
            /* Signup form */
            <form onSubmit={handleSubmit} noValidate aria-label="Sign up form">
              <div className="space-y-5">
                {/* Full name */}
                <div className="space-y-2">
                  <Label htmlFor={nameId} className="text-base font-semibold">
                    Full name
                  </Label>
                  <Input
                    id={nameId}
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Jane Doe"
                    className={cn(
                      "h-12 text-base",
                      errors.name &&
                        "border-destructive focus-visible:ring-destructive",
                    )}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? nameErrId : undefined}
                    data-ocid="input-name"
                  />
                  {errors.name && (
                    <p
                      id={nameErrId}
                      role="alert"
                      className="text-destructive text-sm animate-fade-in flex items-center gap-1.5"
                    >
                      <span aria-hidden="true">⚠</span>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor={emailId} className="text-base font-semibold">
                    Email address
                  </Label>
                  <Input
                    id={emailId}
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
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
                      type={showPass ? "text" : "password"}
                      autoComplete="new-password"
                      value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                      placeholder="At least 8 characters"
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
                      onClick={() => setShowPass((v) => !v)}
                      aria-label={showPass ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                      data-ocid="btn-toggle-password"
                    >
                      {showPass ? (
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
                  {/* Password strength hint */}
                  {form.password && !errors.password && (
                    <div
                      className="flex gap-1.5 mt-1"
                      aria-label="Password strength indicator"
                    >
                      {([2, 4, 6, 8] as const).map((threshold) => (
                        <div
                          key={threshold}
                          className={cn(
                            "h-1 flex-1 rounded-full transition-smooth",
                            form.password.length >= threshold
                              ? threshold <= 4
                                ? "bg-destructive/70"
                                : threshold === 6
                                  ? "bg-warning"
                                  : "bg-success"
                              : "bg-muted",
                          )}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Confirm password */}
                <div className="space-y-2">
                  <Label
                    htmlFor={confirmId}
                    className="text-base font-semibold"
                  >
                    Confirm password
                  </Label>
                  <div className="relative">
                    <Input
                      id={confirmId}
                      type={showConfirm ? "text" : "password"}
                      autoComplete="new-password"
                      value={form.confirm}
                      onChange={(e) => update("confirm", e.target.value)}
                      placeholder="Repeat your password"
                      className={cn(
                        "h-12 text-base pr-12",
                        errors.confirm &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                      aria-required="true"
                      aria-invalid={!!errors.confirm}
                      aria-describedby={
                        errors.confirm ? confirmErrId : undefined
                      }
                      data-ocid="input-confirm-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      aria-label={
                        showConfirm
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                      data-ocid="btn-toggle-confirm-password"
                    >
                      {showConfirm ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirm && (
                    <p
                      id={confirmErrId}
                      role="alert"
                      className="text-destructive text-sm animate-fade-in flex items-center gap-1.5"
                    >
                      <span aria-hidden="true">⚠</span>
                      {errors.confirm}
                    </p>
                  )}
                  {/* Match indicator */}
                  {form.confirm &&
                    form.password &&
                    form.password === form.confirm &&
                    !errors.confirm && (
                      <p className="text-sm text-success animate-fade-in flex items-center gap-1.5">
                        <CheckCircle className="h-4 w-4" />
                        Passwords match
                      </p>
                    )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full min-h-[52px] text-base font-semibold rounded-xl gradient-primary text-primary-foreground hover:opacity-90 border-0 shadow-subtle transition-smooth gap-2"
                  data-ocid="btn-signup"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Creating account…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <UserPlus className="h-5 w-5" />
                      Create Account
                    </span>
                  )}
                </Button>

                <p className="text-center text-muted-foreground text-sm">
                  By creating an account, you agree to our{" "}
                  <a
                    href="#terms"
                    className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#privacy"
                    className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          )}

          {!success && (
            <p className="mt-6 text-center text-muted-foreground text-base">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 rounded"
                data-ocid="link-login"
              >
                Sign in
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
