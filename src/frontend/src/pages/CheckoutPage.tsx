import { AnimatedPage } from "@/components/AnimatedPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useSpeech } from "@/hooks/useSpeech";
import { useCartStore } from "@/stores/cartStore";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  BanknoteIcon,
  CheckCircle2,
  CreditCard,
  Loader2,
  MapPin,
  Package,
  ShoppingBag,
  Smartphone,
  Truck,
  Volume2,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DeliveryForm {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

type PaymentMethod = "cod" | "online";
type OnlineMethod = "upi" | "card" | "netbanking";

interface CardForm {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

const INIT_DELIVERY: DeliveryForm = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  country: "India",
};

const INIT_CARD: CardForm = { number: "", name: "", expiry: "", cvv: "" };

const BANKS = ["SBI", "HDFC", "ICICI", "Axis", "Kotak", "PNB", "Yes Bank"];

// ─── Audio Button ─────────────────────────────────────────────────────────────

function AudioBtn({
  text,
  label,
}: {
  text: string;
  label?: string;
}) {
  const { speak, isSpeaking } = useSpeech();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      aria-label={label ?? `Hear instructions: ${text}`}
      title="Hear instructions"
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        isSpeaking
          ? "bg-primary border-primary text-white scale-110 shadow-lg"
          : "bg-primary/10 border-primary/40 text-primary hover:bg-primary/20 hover:border-primary"
      }`}
      data-ocid={`audio-btn-${label?.toLowerCase().replace(/\s+/g, "-") ?? "generic"}`}
    >
      <Volume2 className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

// ─── Field component ──────────────────────────────────────────────────────────

function FormField({
  id,
  label,
  audioText,
  error,
  children,
}: {
  id: string;
  label: string;
  audioText: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor={id} className="text-lg font-semibold text-foreground">
          {label}{" "}
          <span className="text-destructive" aria-hidden="true">
            *
          </span>
        </Label>
        <AudioBtn text={audioText} label={label} />
      </div>
      {children}
      {error && (
        <p className="text-sm text-destructive font-medium" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Delivery Form ────────────────────────────────────────────────────────────

function DeliverySection({
  form,
  onChange,
  onContinue,
}: {
  form: DeliveryForm;
  onChange: (field: keyof DeliveryForm, val: string) => void;
  onContinue: () => void;
}) {
  const [errors, setErrors] = useState<Partial<DeliveryForm>>({});

  function validate() {
    const e: Partial<DeliveryForm> = {};
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

  return (
    <section aria-labelledby="delivery-heading">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
          <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
        <h2
          id="delivery-heading"
          className="text-2xl font-display font-bold text-foreground"
        >
          Delivery Information
        </h2>
      </div>

      <div className="space-y-5">
        <FormField
          id="full-name"
          label="Full Name"
          audioText="Enter your full name. For example: Rahul Sharma"
          error={errors.fullName}
        >
          <Input
            id="full-name"
            value={form.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Rahul Sharma"
            className="h-14 text-base px-4 border-2 focus:border-primary"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            autoComplete="name"
            data-ocid="input-fullname"
          />
        </FormField>

        <FormField
          id="email"
          label="Email Address"
          audioText="Enter your email address. For example: rahul@gmail.com"
          error={errors.email}
        >
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="rahul@gmail.com"
            className="h-14 text-base px-4 border-2 focus:border-primary"
            aria-required="true"
            aria-invalid={!!errors.email}
            autoComplete="email"
            data-ocid="input-email"
          />
        </FormField>

        <FormField
          id="address"
          label="Street Address"
          audioText="Enter your street address. For example: 12 MG Road, Apartment 3"
          error={errors.address}
        >
          <Input
            id="address"
            value={form.address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="12 MG Road, Apartment 3"
            className="h-14 text-base px-4 border-2 focus:border-primary"
            aria-required="true"
            aria-invalid={!!errors.address}
            autoComplete="street-address"
            data-ocid="input-address"
          />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            id="city"
            label="City"
            audioText="Enter your city name. For example: Mumbai"
            error={errors.city}
          >
            <Input
              id="city"
              value={form.city}
              onChange={(e) => onChange("city", e.target.value)}
              placeholder="Mumbai"
              className="h-14 text-base px-4 border-2 focus:border-primary"
              aria-required="true"
              aria-invalid={!!errors.city}
              autoComplete="address-level2"
              data-ocid="input-city"
            />
          </FormField>

          <FormField
            id="postal-code"
            label="Postal Code"
            audioText="Enter your 6-digit postal code. For example: 400001"
            error={errors.postalCode}
          >
            <Input
              id="postal-code"
              value={form.postalCode}
              onChange={(e) =>
                onChange(
                  "postalCode",
                  e.target.value.replace(/\D/g, "").slice(0, 6),
                )
              }
              placeholder="400001"
              className="h-14 text-base px-4 border-2 focus:border-primary"
              aria-required="true"
              aria-invalid={!!errors.postalCode}
              inputMode="numeric"
              autoComplete="postal-code"
              data-ocid="input-postal"
            />
          </FormField>
        </div>

        <FormField
          id="country"
          label="Country"
          audioText="Enter your country name. For example: India"
          error={errors.country}
        >
          <Input
            id="country"
            value={form.country}
            onChange={(e) => onChange("country", e.target.value)}
            placeholder="India"
            className="h-14 text-base px-4 border-2 focus:border-primary"
            aria-required="true"
            aria-invalid={!!errors.country}
            autoComplete="country-name"
            data-ocid="input-country"
          />
        </FormField>
      </div>

      <div className="flex items-center gap-3 mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
        <Truck
          className="h-5 w-5 text-primary flex-shrink-0"
          aria-hidden="true"
        />
        <p className="text-base text-foreground">
          <span className="font-semibold">Free delivery</span> · Estimated 3–5
          business days
        </p>
      </div>

      <Button
        type="button"
        onClick={() => validate() && onContinue()}
        className="w-full mt-6 h-14 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg"
        data-ocid="btn-continue-to-payment"
      >
        Continue to Payment
        <CreditCard className="h-5 w-5" aria-hidden="true" />
      </Button>
    </section>
  );
}

// ─── Payment Section ──────────────────────────────────────────────────────────

function PaymentSection({
  onPlaceOrder,
  onBack,
  total,
}: {
  onPlaceOrder: (method: string) => void;
  onBack: () => void;
  total: number;
}) {
  const { speak } = useSpeech();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null,
  );
  const [onlineMethod, setOnlineMethod] = useState<OnlineMethod | null>(null);
  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState<CardForm>(INIT_CARD);
  const [bank, setBank] = useState("");
  const [processing, setProcessing] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function selectPayment(method: PaymentMethod) {
    setPaymentMethod(method);
    if (method === "cod") {
      speak(
        "You selected Cash on Delivery. Your order will be delivered and you pay in cash.",
      );
    } else {
      speak("You selected online payment.");
    }
  }

  function selectOnlineMethod(method: OnlineMethod) {
    setOnlineMethod(method);
    const labels: Record<OnlineMethod, string> = {
      upi: "You selected UPI payment.",
      card: "You selected Credit or Debit Card payment.",
      netbanking: "You selected Net Banking.",
    };
    speak(labels[method]);
  }

  function formatCard(val: string) {
    return val
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }

  function formatExpiry(val: string) {
    const d = val.replace(/\D/g, "").slice(0, 4);
    return d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  }

  function validateOnline() {
    const e: Record<string, string> = {};
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
      "Order confirmed! You selected Cash on Delivery. Your order will be delivered soon.",
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
        "Payment successful. Your order has been placed. Thank you for shopping with AccessShop.",
      );
      onPlaceOrder("online");
    }, 1800);
  }

  return (
    <section aria-labelledby="payment-heading">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
          <CreditCard className="h-5 w-5 text-white" aria-hidden="true" />
        </div>
        <h2
          id="payment-heading"
          className="text-2xl font-display font-bold text-foreground"
        >
          Select Payment
        </h2>
      </div>

      <div className="space-y-4">
        {/* COD Option */}
        <button
          type="button"
          onClick={() => selectPayment("cod")}
          className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            paymentMethod === "cod"
              ? "border-primary bg-primary/8 shadow-md"
              : "border-border bg-card hover:border-primary/50 hover:bg-muted/40"
          }`}
          aria-pressed={paymentMethod === "cod"}
          data-ocid="btn-select-cod"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${paymentMethod === "cod" ? "border-primary bg-primary" : "border-muted-foreground"}`}
            >
              {paymentMethod === "cod" && (
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              )}
            </div>
            <div className="flex items-center gap-3 flex-1">
              <BanknoteIcon
                className="h-8 w-8 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="text-xl font-bold text-foreground">
                  Cash on Delivery
                </p>
                <p className="text-base text-muted-foreground">
                  Pay when your order arrives
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Online Payment Option */}
        <button
          type="button"
          onClick={() => selectPayment("online")}
          className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            paymentMethod === "online"
              ? "border-primary bg-primary/8 shadow-md"
              : "border-border bg-card hover:border-primary/50 hover:bg-muted/40"
          }`}
          aria-pressed={paymentMethod === "online"}
          data-ocid="btn-select-online"
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${paymentMethod === "online" ? "border-primary bg-primary" : "border-muted-foreground"}`}
            >
              {paymentMethod === "online" && (
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              )}
            </div>
            <div className="flex items-center gap-3 flex-1">
              <Smartphone className="h-8 w-8 text-primary" aria-hidden="true" />
              <div>
                <p className="text-xl font-bold text-foreground">
                  Online Payment
                </p>
                <p className="text-base text-muted-foreground">
                  UPI · Card · Net Banking
                </p>
              </div>
            </div>
          </div>
        </button>

        {/* Online sub-options */}
        <AnimatePresence>
          {paymentMethod === "online" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="bg-muted/30 rounded-2xl border border-border p-5 space-y-5">
                {/* Sub-method selector */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {(["upi", "card", "netbanking"] as OnlineMethod[]).map(
                    (m) => {
                      const labels: Record<OnlineMethod, string> = {
                        upi: "UPI",
                        card: "Credit/Debit Card",
                        netbanking: "Net Banking",
                      };
                      return (
                        <button
                          key={m}
                          type="button"
                          onClick={() => selectOnlineMethod(m)}
                          className={`flex-1 py-3 px-4 rounded-xl border-2 text-base font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                            onlineMethod === m
                              ? "border-primary bg-primary text-white shadow-sm"
                              : "border-border bg-card text-foreground hover:border-primary/60"
                          }`}
                          aria-pressed={onlineMethod === m}
                          data-ocid={`btn-online-${m}`}
                        >
                          {labels[m]}
                        </button>
                      );
                    },
                  )}
                </div>

                {/* UPI */}
                <AnimatePresence mode="wait">
                  {onlineMethod === "upi" && (
                    <motion.div
                      key="upi"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <Label
                          htmlFor="upi-id"
                          className="text-lg font-semibold"
                        >
                          UPI ID
                        </Label>
                        <AudioBtn
                          text="Enter your UPI ID. For example: rahul@ybl or rahul@paytm"
                          label="UPI ID"
                        />
                      </div>
                      <Input
                        id="upi-id"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="rahul@ybl"
                        className="h-14 text-base px-4 border-2 focus:border-primary"
                        data-ocid="input-upi"
                      />
                      {errors.upi && (
                        <p className="text-sm text-destructive" role="alert">
                          {errors.upi}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {/* Card */}
                  {onlineMethod === "card" && (
                    <motion.div
                      key="card"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label
                            htmlFor="card-number"
                            className="text-lg font-semibold"
                          >
                            Card Number
                          </Label>
                          <AudioBtn
                            text="Enter your 16 digit card number."
                            label="Card Number"
                          />
                        </div>
                        <Input
                          id="card-number"
                          value={card.number}
                          onChange={(e) =>
                            setCard((c) => ({
                              ...c,
                              number: formatCard(e.target.value),
                            }))
                          }
                          placeholder="4242 4242 4242 4242"
                          className="h-14 text-base px-4 border-2 focus:border-primary font-mono tracking-wider"
                          inputMode="numeric"
                          data-ocid="input-card-number"
                        />
                        {errors.cardNumber && (
                          <p className="text-sm text-destructive" role="alert">
                            {errors.cardNumber}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label
                            htmlFor="card-name"
                            className="text-lg font-semibold"
                          >
                            Cardholder Name
                          </Label>
                          <AudioBtn
                            text="Enter the name printed on your card."
                            label="Cardholder Name"
                          />
                        </div>
                        <Input
                          id="card-name"
                          value={card.name}
                          onChange={(e) =>
                            setCard((c) => ({ ...c, name: e.target.value }))
                          }
                          placeholder="Rahul Sharma"
                          className="h-14 text-base px-4 border-2 focus:border-primary"
                          data-ocid="input-card-name"
                        />
                        {errors.cardName && (
                          <p className="text-sm text-destructive" role="alert">
                            {errors.cardName}
                          </p>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Label
                              htmlFor="card-expiry"
                              className="text-lg font-semibold"
                            >
                              Expiry
                            </Label>
                            <AudioBtn
                              text="Enter card expiry date in month year format. For example: 0 8 slash 2 7"
                              label="Expiry"
                            />
                          </div>
                          <Input
                            id="card-expiry"
                            value={card.expiry}
                            onChange={(e) =>
                              setCard((c) => ({
                                ...c,
                                expiry: formatExpiry(e.target.value),
                              }))
                            }
                            placeholder="MM/YY"
                            className="h-14 text-base px-4 border-2 focus:border-primary font-mono"
                            inputMode="numeric"
                            data-ocid="input-expiry"
                          />
                          {errors.expiry && (
                            <p
                              className="text-sm text-destructive"
                              role="alert"
                            >
                              {errors.expiry}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Label
                              htmlFor="card-cvv"
                              className="text-lg font-semibold"
                            >
                              CVV
                            </Label>
                            <AudioBtn
                              text="Enter the 3 digit CVV on the back of your card."
                              label="CVV"
                            />
                          </div>
                          <Input
                            id="card-cvv"
                            type="password"
                            value={card.cvv}
                            onChange={(e) =>
                              setCard((c) => ({
                                ...c,
                                cvv: e.target.value
                                  .replace(/\D/g, "")
                                  .slice(0, 4),
                              }))
                            }
                            placeholder="•••"
                            className="h-14 text-base px-4 border-2 focus:border-primary font-mono"
                            inputMode="numeric"
                            data-ocid="input-cvv"
                          />
                          {errors.cvv && (
                            <p
                              className="text-sm text-destructive"
                              role="alert"
                            >
                              {errors.cvv}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Net Banking */}
                  {onlineMethod === "netbanking" && (
                    <motion.div
                      key="netbanking"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <Label
                          htmlFor="bank-select"
                          className="text-lg font-semibold"
                        >
                          Select Bank
                        </Label>
                        <AudioBtn
                          text="Select your bank for net banking payment. Options include S B I, H D F C, I C I C I, Axis, and Kotak."
                          label="Bank"
                        />
                      </div>
                      <select
                        id="bank-select"
                        value={bank}
                        onChange={(e) => setBank(e.target.value)}
                        className="w-full h-14 text-base px-4 rounded-lg border-2 border-input bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                        data-ocid="select-bank"
                      >
                        <option value="">-- Choose your bank --</option>
                        {BANKS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      {errors.bank && (
                        <p className="text-sm text-destructive" role="alert">
                          {errors.bank}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-8">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1 h-14 text-base gap-2"
          data-ocid="btn-back-delivery"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </Button>

        {paymentMethod === "cod" && (
          <Button
            type="button"
            onClick={handleCOD}
            className="flex-[2] h-14 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg"
            data-ocid="btn-place-order-cod"
            aria-label={`Place order for ₹${total.toLocaleString("en-IN")} with Cash on Delivery`}
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            Place Order · ₹{total.toLocaleString("en-IN")}
          </Button>
        )}

        {paymentMethod === "online" && (
          <Button
            type="button"
            onClick={handleOnlinePay}
            disabled={processing}
            className="flex-[2] h-14 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg disabled:opacity-70"
            data-ocid="btn-pay-now"
            aria-label={`Pay now ₹${total.toLocaleString("en-IN")} online`}
          >
            {processing ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                Processing…
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5" aria-hidden="true" />
                Pay Now · ₹{total.toLocaleString("en-IN")}
              </>
            )}
          </Button>
        )}

        {!paymentMethod && (
          <Button
            type="button"
            disabled
            className="flex-[2] h-14 text-lg font-bold opacity-50 cursor-not-allowed bg-muted text-muted-foreground"
            data-ocid="btn-pay-disabled"
          >
            Select a payment method
          </Button>
        )}
      </div>
    </section>
  );
}

// ─── Cart Summary ─────────────────────────────────────────────────────────────

function CartSummary({ compact = false }: { compact?: boolean }) {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());

  if (items.length === 0) return null;

  return (
    <div
      className={`bg-card border border-border rounded-2xl overflow-hidden ${compact ? "" : "shadow-sm"}`}
    >
      <div className="p-5 border-b border-border flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" aria-hidden="true" />
          Order Summary
        </h3>
        <span className="text-sm text-muted-foreground">
          {items.length} {items.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="p-5 space-y-3 max-h-72 overflow-y-auto">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex gap-3 items-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-14 h-14 rounded-xl object-cover flex-shrink-0 border border-border"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base text-foreground truncate">
                {product.name}
              </p>
              <p className="text-sm text-muted-foreground">Qty: {quantity}</p>
            </div>
            <p className="font-bold text-base text-foreground tabular-nums">
              ₹{(product.price * quantity).toLocaleString("en-IN")}
            </p>
          </div>
        ))}
      </div>

      <div className="p-5 bg-muted/30 border-t border-border space-y-2">
        <div className="flex justify-between text-base text-muted-foreground">
          <span>Subtotal</span>
          <span className="tabular-nums">₹{total.toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-between text-base text-muted-foreground">
          <span>Delivery</span>
          <span className="font-semibold text-primary">Free</span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-foreground">Total</span>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary tabular-nums">
              ₹{total.toLocaleString("en-IN")}
            </span>
            <AudioBtn
              text={`Your total is ₹${total.toLocaleString("en-IN")}. Free delivery included.`}
              label="Total amount"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────

function SuccessScreen({
  paymentMethod,
  total,
  itemCount,
  onContinue,
}: {
  paymentMethod: string;
  total: number;
  itemCount: number;
  onContinue: () => void;
}) {
  const { speak } = useSpeech();
  const hasSpokeRef = useRef(false);

  useEffect(() => {
    if (!hasSpokeRef.current) {
      hasSpokeRef.current = true;
      const msg =
        paymentMethod === "cod"
          ? "Order confirmed! You selected Cash on Delivery. Your order will be delivered soon. Thank you for shopping with AccessShop."
          : "Payment successful. Your order has been placed. Thank you for shopping with AccessShop.";
      setTimeout(() => speak(msg), 600);
    }
  }, [speak, paymentMethod]);

  const isCOD = paymentMethod === "cod";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="text-center py-10 px-4"
      role="alert"
      aria-live="assertive"
      data-ocid="order-success-screen"
    >
      <motion.div
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-xl"
        aria-hidden="true"
      >
        <CheckCircle2 className="h-14 w-14 text-white" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-4xl font-display font-bold text-foreground mb-3"
      >
        Order Placed Successfully! 🎉
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="space-y-2 mb-8"
      >
        <p className="text-xl text-muted-foreground">
          {isCOD
            ? "Pay when your order arrives at your door."
            : "Your payment was successful."}
        </p>
        <p className="text-lg text-foreground font-semibold">
          {itemCount} {itemCount === 1 ? "item" : "items"} · ₹
          {total.toLocaleString("en-IN")} total
        </p>
        <div className="inline-flex items-center gap-2 mt-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/30">
          <Truck className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-base font-medium text-primary">
            Estimated delivery: 3–5 business days
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="flex flex-col sm:flex-row gap-4 justify-center max-w-sm mx-auto"
      >
        <Button
          onClick={onContinue}
          className="h-14 px-8 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90 shadow-lg flex-1"
          data-ocid="btn-continue-shopping"
        >
          <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          Continue Shopping
        </Button>
        <Link to="/home">
          <Button
            variant="outline"
            className="h-14 px-8 text-lg font-bold w-full border-2"
            data-ocid="btn-go-home"
          >
            Go to Home
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

type CheckoutStep = "delivery" | "payment";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());
  const itemCount = useCartStore((s) => s.itemCount());
  const clearCart = useCartStore((s) => s.clearCart);
  const navigate = useNavigate();

  const [step, setStep] = useState<CheckoutStep>("delivery");
  const [success, setSuccess] = useState(false);
  const [usedPaymentMethod, setUsedPaymentMethod] = useState("cod");
  const [savedTotal, setSavedTotal] = useState(0);
  const [savedCount, setSavedCount] = useState(0);
  const [delivery, setDelivery] = useState<DeliveryForm>(INIT_DELIVERY);

  function handleDeliveryChange(field: keyof DeliveryForm, val: string) {
    setDelivery((p) => ({ ...p, [field]: val }));
  }

  function handlePlaceOrder(method: string) {
    setSavedTotal(total);
    setSavedCount(itemCount);
    setUsedPaymentMethod(method);
    clearCart();
    setSuccess(true);
  }

  // Empty cart guard
  if (items.length === 0 && !success) {
    return (
      <AnimatedPage className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md" data-ocid="checkout-empty">
          <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-xl">
            <ShoppingBag className="h-14 w-14 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-display font-bold text-foreground mb-3">
            Your cart is empty
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Add some products to your cart before checking out.
          </p>
          <Link to="/products">
            <Button
              className="h-14 px-8 text-lg font-bold gap-2 bg-primary text-white hover:bg-primary/90"
              data-ocid="btn-browse-from-checkout"
            >
              Browse Products
            </Button>
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  // Success screen
  if (success) {
    return (
      <AnimatedPage className="flex-1 py-8 px-4">
        <div className="container max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
            <SuccessScreen
              paymentMethod={usedPaymentMethod}
              total={savedTotal}
              itemCount={savedCount}
              onContinue={() => navigate({ to: "/products" })}
            />
          </div>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage className="flex-1 py-8 px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group text-base"
          data-ocid="link-back-to-cart"
          aria-label="Back to cart"
        >
          <ArrowLeft
            className="h-4 w-4 group-hover:-translate-x-1 transition-transform"
            aria-hidden="true"
          />
          Back to Cart
        </Link>

        {/* Page title */}
        <h1 className="text-4xl font-display font-bold text-foreground mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          {/* Left: form steps */}
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
            {/* Step tabs */}
            <div
              className="flex items-center gap-0 mb-8"
              role="tablist"
              aria-label="Checkout steps"
            >
              {(["delivery", "payment"] as CheckoutStep[]).map((s, i) => {
                const labels = {
                  delivery: "1. Delivery",
                  payment: "2. Payment",
                };
                const isDone = s === "payment" && step === "payment";
                const isActive = step === s;
                return (
                  <div key={s} className="flex items-center flex-1">
                    <div
                      className={`flex-1 py-3 px-4 text-center rounded-xl text-base font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-white shadow-sm"
                          : isDone
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                      }`}
                      aria-current={isActive ? "step" : undefined}
                    >
                      {labels[s]}
                    </div>
                    {i === 0 && (
                      <div
                        className={`w-6 h-0.5 mx-1 ${step === "payment" ? "bg-primary" : "bg-border"}`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {step === "delivery" ? (
                <motion.div
                  key="delivery"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                >
                  <DeliverySection
                    form={delivery}
                    onChange={handleDeliveryChange}
                    onContinue={() => setStep("payment")}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.22 }}
                >
                  <PaymentSection
                    total={total}
                    onPlaceOrder={handlePlaceOrder}
                    onBack={() => setStep("delivery")}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: cart summary */}
          <div className="lg:sticky lg:top-6">
            <CartSummary />
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
