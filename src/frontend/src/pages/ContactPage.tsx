import { AnimatedPage } from "@/components/AnimatedPage";
import { toast } from "@/components/Toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Home,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { type FormEvent, useId, useState } from "react";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@accessshop.example",
    desc: "We reply within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-ACCESS",
    desc: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Inclusive Way, New York, NY 10001",
    desc: "Main office",
  },
  {
    icon: MessageSquare,
    label: "Live Chat",
    value: "Available on site",
    desc: "Weekdays 9am–5pm EST",
  },
];

const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "#", handle: "@accessshop" },
  { label: "Instagram", href: "#", handle: "@accessshop" },
  { label: "LinkedIn", href: "#", handle: "AccessShop Inc." },
  { label: "Facebook", href: "#", handle: "AccessShop" },
];

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
const EMPTY_FORM: FormFields = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

interface FieldError {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(form: FormFields): FieldError {
  const errors: FieldError = {};
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

export default function ContactPage() {
  const uid = useId();
  const [form, setForm] = useState<FormFields>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldError>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormFields, boolean>>
  >({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormFields, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (touched[key]) {
      const next = { ...form, [key]: value };
      setErrors(validate(next));
    }
  };

  const handleBlur = (key: keyof FormFields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const allTouched = {
      name: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Message sent!", {
        description: "We'll get back to you within 24 hours.",
      });
    }, 1200);
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  return (
    <AnimatedPage className="flex-1">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-muted/30 border-b border-border px-4 py-3"
      >
        <div className="container max-w-5xl">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link
                to="/home"
                className="flex items-center gap-1 hover:text-foreground transition-colors"
              >
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-foreground font-medium">Contact</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-primary py-16 px-4 text-white text-center">
        <div className="container max-w-2xl mx-auto">
          <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-1.5 text-sm">
            We're Here to Help
          </Badge>
          <h1 className="text-hero mb-4">Get in Touch</h1>
          <p className="text-lg text-white/90">
            Whether you have a question about our products or need accessibility
            support — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form or Success */}
            <div>
              {submitted ? (
                <div
                  className="card-accessible text-center py-12"
                  role="alert"
                  aria-live="polite"
                  data-ocid="contact-success"
                >
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                    Message Sent!
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours at the email address you provided.
                  </p>
                  <Button
                    onClick={handleReset}
                    className="btn-primary"
                    data-ocid="btn-send-another"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                    Send a Message
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    aria-label="Contact form"
                    noValidate
                    data-ocid="contact-form"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label
                          htmlFor={`${uid}-name`}
                          className="text-base font-semibold"
                        >
                          Full Name{" "}
                          <span className="text-destructive" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <Input
                          id={`${uid}-name`}
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          placeholder="Jane Doe"
                          className={`h-12 text-base ${errors.name && touched.name ? "border-destructive" : ""}`}
                          aria-required="true"
                          aria-describedby={
                            errors.name && touched.name
                              ? `${uid}-name-err`
                              : undefined
                          }
                          aria-invalid={!!(errors.name && touched.name)}
                          data-ocid="input-name"
                          autoComplete="name"
                        />
                        {errors.name && touched.name && (
                          <p
                            id={`${uid}-name-err`}
                            className="text-destructive text-sm"
                            role="alert"
                          >
                            {errors.name}
                          </p>
                        )}
                      </div>
                      {/* Email */}
                      <div className="space-y-2">
                        <Label
                          htmlFor={`${uid}-email`}
                          className="text-base font-semibold"
                        >
                          Email{" "}
                          <span className="text-destructive" aria-hidden="true">
                            *
                          </span>
                        </Label>
                        <Input
                          id={`${uid}-email`}
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          placeholder="you@example.com"
                          className={`h-12 text-base ${errors.email && touched.email ? "border-destructive" : ""}`}
                          aria-required="true"
                          aria-describedby={
                            errors.email && touched.email
                              ? `${uid}-email-err`
                              : undefined
                          }
                          aria-invalid={!!(errors.email && touched.email)}
                          data-ocid="input-email"
                          autoComplete="email"
                        />
                        {errors.email && touched.email && (
                          <p
                            id={`${uid}-email-err`}
                            className="text-destructive text-sm"
                            role="alert"
                          >
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <Label
                        htmlFor={`${uid}-subject`}
                        className="text-base font-semibold"
                      >
                        Subject{" "}
                        <span className="text-destructive" aria-hidden="true">
                          *
                        </span>
                      </Label>
                      <Input
                        id={`${uid}-subject`}
                        value={form.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        onBlur={() => handleBlur("subject")}
                        placeholder="How can we help?"
                        className={`h-12 text-base ${errors.subject && touched.subject ? "border-destructive" : ""}`}
                        aria-required="true"
                        aria-describedby={
                          errors.subject && touched.subject
                            ? `${uid}-subject-err`
                            : undefined
                        }
                        aria-invalid={!!(errors.subject && touched.subject)}
                        data-ocid="input-subject"
                      />
                      {errors.subject && touched.subject && (
                        <p
                          id={`${uid}-subject-err`}
                          className="text-destructive text-sm"
                          role="alert"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label
                        htmlFor={`${uid}-message`}
                        className="text-base font-semibold"
                      >
                        Message{" "}
                        <span className="text-destructive" aria-hidden="true">
                          *
                        </span>
                      </Label>
                      <Textarea
                        id={`${uid}-message`}
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        placeholder="Tell us more about your question or feedback…"
                        rows={6}
                        className={`text-base resize-none ${errors.message && touched.message ? "border-destructive" : ""}`}
                        aria-required="true"
                        aria-describedby={
                          errors.message && touched.message
                            ? `${uid}-message-err`
                            : undefined
                        }
                        aria-invalid={!!(errors.message && touched.message)}
                        data-ocid="input-message"
                      />
                      {errors.message && touched.message && (
                        <p
                          id={`${uid}-message-err`}
                          className="text-destructive text-sm"
                          role="alert"
                        >
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 text-base btn-primary gap-2"
                      data-ocid="btn-send-message"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <>
                          <MessageSquare className="h-5 w-5" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* Contact info + map */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-foreground">
                Contact Information
              </h2>

              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.label} className="card-accessible flex gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-base">
                        {info.label}
                      </div>
                      <div className="text-foreground">{info.value}</div>
                      <div className="text-sm text-muted-foreground">
                        {info.desc}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Social links */}
              <div className="card-accessible">
                <h3 className="font-display font-bold text-foreground mb-4">
                  Follow Us
                </h3>
                <ul className="space-y-2">
                  {SOCIAL_LINKS.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="flex items-center justify-between group text-sm hover:text-primary transition-colors py-1"
                        rel="noopener noreferrer"
                        aria-label={`${s.label}: ${s.handle}`}
                        data-ocid={`social-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {s.label}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground group-hover:text-primary transition-colors">
                          {s.handle}
                          <ExternalLink className="h-3 w-3" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map placeholder */}
              <div
                className="rounded-2xl overflow-hidden shadow-subtle"
                role="img"
                aria-label="Map showing AccessShop office location at 123 Inclusive Way, New York"
              >
                <div className="gradient-primary h-48 flex flex-col items-center justify-center text-white gap-2 relative">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 40%, white 1px, transparent 1px), radial-gradient(circle at 70% 70%, white 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  <MapPin className="h-10 w-10 drop-shadow" />
                  <div className="text-center z-10">
                    <div className="font-display font-bold text-lg">
                      AccessShop HQ
                    </div>
                    <div className="text-white/80 text-sm">
                      123 Inclusive Way, New York, NY 10001
                    </div>
                  </div>
                </div>
                <div className="bg-card border-t border-border px-4 py-3 text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  Open Mon–Fri, 9am–6pm EST · Accessible entrance on north side
                </div>
              </div>

              {/* Accessibility support note */}
              <div className="card-accessible bg-primary/5 border border-primary/20">
                <h3 className="font-display font-bold text-foreground mb-2">
                  Accessibility Support
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Need help with our accessibility features or have a
                  suggestion? Our dedicated accessibility support team is
                  available during business hours and will respond within 4
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
