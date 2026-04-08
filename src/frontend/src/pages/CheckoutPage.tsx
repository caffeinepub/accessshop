import { AnimatedPage } from "@/components/AnimatedPage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cartStore";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  CreditCard,
  Lock,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const STEPS = ["Shipping", "Payment", "Review"] as const;

interface ShippingForm {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

interface PaymentForm {
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
}

const INIT_SHIPPING: ShippingForm = {
  fullName: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  country: "",
};

const INIT_PAYMENT: PaymentForm = {
  cardNumber: "",
  cardName: "",
  expiry: "",
  cvv: "",
};

function StepIndicator({
  current,
}: {
  current: number;
}) {
  return (
    <nav aria-label="Checkout progress" className="mb-10">
      <ol className="flex items-center justify-center gap-0">
        {STEPS.map((step, i) => {
          const isDone = i < current;
          const isActive = i === current;
          return (
            <li key={step} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-smooth ${
                    isDone
                      ? "gradient-primary text-white shadow-subtle"
                      : isActive
                        ? "border-2 border-primary text-primary bg-primary/10"
                        : "border-2 border-border text-muted-foreground bg-muted"
                  }`}
                  aria-current={isActive ? "step" : undefined}
                >
                  {isDone ? (
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                </div>
                <span
                  className={`mt-1.5 text-xs font-medium whitespace-nowrap ${
                    isActive
                      ? "text-primary"
                      : isDone
                        ? "text-foreground"
                        : "text-muted-foreground"
                  }`}
                >
                  {step}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`w-16 sm:w-20 h-0.5 mx-2 mb-5 transition-smooth ${
                    i < current ? "bg-primary" : "bg-border"
                  }`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function ShippingStep({
  form,
  onChange,
  onNext,
}: {
  form: ShippingForm;
  onChange: (field: keyof ShippingForm, value: string) => void;
  onNext: () => void;
}) {
  const [errors, setErrors] = useState<Partial<ShippingForm>>({});

  function validate() {
    const e: Partial<ShippingForm> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.includes("@")) e.email = "Valid email is required";
    if (!form.address.trim()) e.address = "Address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.postalCode.trim()) e.postalCode = "Postal code is required";
    if (!form.country.trim()) e.country = "Country is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) onNext();
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Shipping information">
      <div className="flex items-center gap-2 mb-6">
        <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="text-xl font-display font-bold text-foreground">
          Shipping Information
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="ship-fullName" className="text-base font-medium">
            Full Name{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="ship-fullName"
            value={form.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Jane Smith"
            className="h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.fullName}
            data-ocid="input-fullname"
          />
          {errors.fullName && (
            <p className="text-sm text-destructive" role="alert">
              {errors.fullName}
            </p>
          )}
        </div>
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="ship-email" className="text-base font-medium">
            Email{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="ship-email"
            type="email"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="jane@example.com"
            className="h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.email}
            data-ocid="input-email"
          />
          {errors.email && (
            <p className="text-sm text-destructive" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="ship-address" className="text-base font-medium">
            Street Address{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="ship-address"
            value={form.address}
            onChange={(e) => onChange("address", e.target.value)}
            placeholder="123 Accessibility Lane"
            className="h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.address}
            data-ocid="input-address"
          />
          {errors.address && (
            <p className="text-sm text-destructive" role="alert">
              {errors.address}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ship-city" className="text-base font-medium">
            City{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="ship-city"
            value={form.city}
            onChange={(e) => onChange("city", e.target.value)}
            placeholder="New York"
            className="h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.city}
            data-ocid="input-city"
          />
          {errors.city && (
            <p className="text-sm text-destructive" role="alert">
              {errors.city}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="ship-postal" className="text-base font-medium">
            Postal Code{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="ship-postal"
            value={form.postalCode}
            onChange={(e) => onChange("postalCode", e.target.value)}
            placeholder="10001"
            className="h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.postalCode}
            data-ocid="input-postal"
          />
          {errors.postalCode && (
            <p className="text-sm text-destructive" role="alert">
              {errors.postalCode}
            </p>
          )}
        </div>
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="ship-country" className="text-base font-medium">
            Country{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="ship-country"
            value={form.country}
            onChange={(e) => onChange("country", e.target.value)}
            placeholder="United States"
            className="h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.country}
            data-ocid="input-country"
          />
          {errors.country && (
            <p className="text-sm text-destructive" role="alert">
              {errors.country}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2 mt-5 p-3 rounded-xl bg-muted/60">
        <Truck
          className="h-4 w-4 text-primary flex-shrink-0"
          aria-hidden="true"
        />
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">
            Free standard shipping
          </span>{" "}
          · Estimated 3–5 business days
        </p>
      </div>
      <Button
        type="submit"
        className="w-full mt-6 btn-accessible gradient-primary text-white hover:opacity-90 text-base font-semibold h-14 gap-2 shadow-elevated"
        data-ocid="btn-next-payment"
      >
        Continue to Payment
        <CreditCard className="h-5 w-5" aria-hidden="true" />
      </Button>
    </form>
  );
}

function PaymentStep({
  form,
  onChange,
  onNext,
  onBack,
}: {
  form: PaymentForm;
  onChange: (field: keyof PaymentForm, value: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const [errors, setErrors] = useState<Partial<PaymentForm>>({});

  function formatCard(val: string) {
    return val
      .replace(/\D/g, "")
      .substring(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }

  function formatExpiry(val: string) {
    const digits = val.replace(/\D/g, "").substring(0, 4);
    if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return digits;
  }

  function validate() {
    const e: Partial<PaymentForm> = {};
    if (form.cardNumber.replace(/\s/g, "").length < 16)
      e.cardNumber = "Enter a valid 16-digit card number";
    if (!form.cardName.trim()) e.cardName = "Cardholder name is required";
    if (form.expiry.length < 5) e.expiry = "Enter expiry as MM/YY";
    if (form.cvv.length < 3) e.cvv = "Enter a valid CVV";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) onNext();
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Payment details">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="text-xl font-display font-bold text-foreground">
          Payment Details
        </h2>
        <Badge variant="secondary" className="ml-auto gap-1 text-xs">
          <Lock className="h-3 w-3" aria-hidden="true" />
          Secure
        </Badge>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="pay-cardNumber" className="text-base font-medium">
            Card Number{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="pay-cardNumber"
            value={form.cardNumber}
            onChange={(e) => onChange("cardNumber", formatCard(e.target.value))}
            placeholder="4242 4242 4242 4242"
            className="h-12 text-base font-mono tracking-widest"
            aria-required="true"
            aria-invalid={!!errors.cardNumber}
            inputMode="numeric"
            autoComplete="cc-number"
            data-ocid="input-card-number"
          />
          {errors.cardNumber && (
            <p className="text-sm text-destructive" role="alert">
              {errors.cardNumber}
            </p>
          )}
        </div>
        <div className="sm:col-span-2 space-y-1.5">
          <Label htmlFor="pay-cardName" className="text-base font-medium">
            Cardholder Name{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="pay-cardName"
            value={form.cardName}
            onChange={(e) => onChange("cardName", e.target.value)}
            placeholder="Jane Smith"
            className="h-12 text-base"
            aria-required="true"
            aria-invalid={!!errors.cardName}
            autoComplete="cc-name"
            data-ocid="input-card-name"
          />
          {errors.cardName && (
            <p className="text-sm text-destructive" role="alert">
              {errors.cardName}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="pay-expiry" className="text-base font-medium">
            Expiry{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="pay-expiry"
            value={form.expiry}
            onChange={(e) => onChange("expiry", formatExpiry(e.target.value))}
            placeholder="MM/YY"
            className="h-12 text-base font-mono"
            aria-required="true"
            aria-invalid={!!errors.expiry}
            inputMode="numeric"
            autoComplete="cc-exp"
            data-ocid="input-expiry"
          />
          {errors.expiry && (
            <p className="text-sm text-destructive" role="alert">
              {errors.expiry}
            </p>
          )}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="pay-cvv" className="text-base font-medium">
            CVV{" "}
            <span aria-hidden="true" className="text-destructive">
              *
            </span>
          </Label>
          <Input
            id="pay-cvv"
            type="password"
            value={form.cvv}
            onChange={(e) =>
              onChange("cvv", e.target.value.replace(/\D/g, "").substring(0, 4))
            }
            placeholder="•••"
            className="h-12 text-base font-mono"
            aria-required="true"
            aria-invalid={!!errors.cvv}
            inputMode="numeric"
            autoComplete="cc-csc"
            data-ocid="input-cvv"
          />
          {errors.cvv && (
            <p className="text-sm text-destructive" role="alert">
              {errors.cvv}
            </p>
          )}
        </div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground flex items-center gap-1.5">
        <Lock className="h-3 w-3" aria-hidden="true" />
        Your payment information is encrypted and secure.
      </p>
      <div className="flex gap-3 mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1 h-14 gap-2 text-base"
          data-ocid="btn-back-shipping"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </Button>
        <Button
          type="submit"
          className="flex-[2] btn-accessible gradient-primary text-white hover:opacity-90 text-base font-semibold h-14 gap-2 shadow-elevated"
          data-ocid="btn-next-review"
        >
          Review Order
          <Package className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}

function ReviewStep({
  shipping,
  total,
  itemCount,
  onBack,
  onPlace,
}: {
  shipping: ShippingForm;
  total: number;
  itemCount: number;
  onBack: () => void;
  onPlace: () => void;
}) {
  return (
    <div aria-label="Order review">
      <div className="flex items-center gap-2 mb-6">
        <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="text-xl font-display font-bold text-foreground">
          Review Your Order
        </h2>
      </div>
      <div className="space-y-4">
        <div className="bg-muted/50 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-foreground flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              Shipping to
            </p>
            <button
              type="button"
              onClick={onBack}
              className="text-primary text-sm hover:underline min-h-[44px] min-w-[44px] flex items-center justify-end"
              data-ocid="btn-edit-shipping"
            >
              Edit
            </button>
          </div>
          <p className="text-foreground font-medium">{shipping.fullName}</p>
          <p className="text-muted-foreground text-sm">{shipping.address}</p>
          <p className="text-muted-foreground text-sm">
            {shipping.city}, {shipping.postalCode}
          </p>
          <p className="text-muted-foreground text-sm">{shipping.country}</p>
        </div>
        <div className="bg-muted/50 rounded-xl p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </span>
            <span className="font-medium tabular-nums">
              ${total.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="font-semibold text-primary">Free</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold text-lg">
            <span className="text-foreground">Total</span>
            <span className="text-primary tabular-nums">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          By placing your order you agree to our Terms of Service.
        </p>
      </div>
      <div className="flex gap-3 mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="flex-1 h-14 gap-2 text-base"
          data-ocid="btn-back-payment"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </Button>
        <Button
          type="button"
          onClick={onPlace}
          className="flex-[2] btn-accessible gradient-primary text-white hover:opacity-90 text-base font-semibold h-14 gap-2 shadow-elevated"
          data-ocid="btn-place-order"
          aria-label={`Place order for $${total.toFixed(2)}`}
        >
          <ShoppingBag className="h-5 w-5" aria-hidden="true" />
          Place Order · ${total.toFixed(2)}
        </Button>
      </div>
    </div>
  );
}

function SuccessView({ onContinue }: { onContinue: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="text-center py-10"
      role="alert"
      aria-live="assertive"
      data-ocid="order-success"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-elevated"
      >
        <CheckCircle2 className="h-12 w-12 text-white" aria-hidden="true" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="text-3xl font-display font-bold text-foreground mb-3"
      >
        Order Placed! 🎉
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="text-muted-foreground text-lg max-w-sm mx-auto mb-8 leading-relaxed"
      >
        Thank you for your purchase! Your accessible products are on their way.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <Button
          onClick={onContinue}
          className="btn-primary gap-2 text-base h-12 px-8"
          data-ocid="btn-continue-shopping-success"
        >
          <Package className="h-5 w-5" aria-hidden="true" />
          Continue Shopping
        </Button>
        <Link to="/home">
          <Button
            variant="outline"
            className="h-12 px-8 text-base w-full"
            data-ocid="btn-go-home"
          >
            Go to Home
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const total = useCartStore((s) => s.total());
  const itemCount = useCartStore((s) => s.itemCount());
  const clearCart = useCartStore((s) => s.clearCart);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [success, setSuccess] = useState(false);
  const [shipping, setShipping] = useState<ShippingForm>(INIT_SHIPPING);
  const [payment, setPayment] = useState<PaymentForm>(INIT_PAYMENT);

  function handleShippingChange(field: keyof ShippingForm, value: string) {
    setShipping((p) => ({ ...p, [field]: value }));
  }

  function handlePaymentChange(field: keyof PaymentForm, value: string) {
    setPayment((p) => ({ ...p, [field]: value }));
  }

  function handlePlaceOrder() {
    clearCart();
    setSuccess(true);
  }

  if (items.length === 0 && !success) {
    return (
      <AnimatedPage className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-md" data-ocid="checkout-empty">
          <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 shadow-elevated">
            <ShoppingBag className="h-12 w-12 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-2xl font-display font-bold text-foreground mb-3">
            Nothing to checkout
          </h1>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Your cart is empty. Add some products first!
          </p>
          <Link to="/products">
            <Button
              className="btn-primary gap-2 text-base"
              data-ocid="btn-browse-from-checkout"
            >
              Browse Products
            </Button>
          </Link>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage className="flex-1 py-8 px-4 md:px-6">
      <div className="container max-w-2xl mx-auto">
        {!success && (
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth mb-8 group"
            data-ocid="link-back-to-cart"
            aria-label="Back to cart"
          >
            <ArrowLeft
              className="h-4 w-4 group-hover:-translate-x-1 transition-smooth"
              aria-hidden="true"
            />
            Back to Cart
          </Link>
        )}

        <div className="card-accessible">
          <AnimatePresence mode="wait">
            {success ? (
              <SuccessView
                key="success"
                onContinue={() => navigate({ to: "/products" })}
              />
            ) : (
              <motion.div
                key="checkout"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h1 className="text-3xl font-display font-bold text-foreground text-center mb-8">
                  Checkout
                </h1>
                <StepIndicator current={currentStep} />
                <AnimatePresence mode="wait">
                  {currentStep === 0 && (
                    <motion.div
                      key="shipping"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ShippingStep
                        form={shipping}
                        onChange={handleShippingChange}
                        onNext={() => setCurrentStep(1)}
                      />
                    </motion.div>
                  )}
                  {currentStep === 1 && (
                    <motion.div
                      key="payment"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <PaymentStep
                        form={payment}
                        onChange={handlePaymentChange}
                        onNext={() => setCurrentStep(2)}
                        onBack={() => setCurrentStep(0)}
                      />
                    </motion.div>
                  )}
                  {currentStep === 2 && (
                    <motion.div
                      key="review"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ReviewStep
                        shipping={shipping}
                        total={total}
                        itemCount={itemCount}
                        onBack={() => setCurrentStep(1)}
                        onPlace={handlePlaceOrder}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AnimatedPage>
  );
}
