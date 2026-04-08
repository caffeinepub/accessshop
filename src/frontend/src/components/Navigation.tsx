import { Button } from "@/components/ui/button";
import { useSpeech } from "@/hooks/useSpeech";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/cartStore";
import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  LogOut,
  Menu,
  ShoppingCart,
  User,
  Volume2,
  X,
} from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/home", speech: "Home page. Go to home." },
  {
    label: "Products",
    to: "/products",
    speech: "Products. Browse all products.",
  },
  {
    label: "About",
    to: "/about",
    speech: "About. Learn more about AccessShop.",
  },
  {
    label: "Contact",
    to: "/contact",
    speech: "Contact. Get in touch with us.",
  },
];

interface AudioButtonProps {
  speech: string;
  label: string;
  className?: string;
}

function AudioButton({ speech, label, className }: AudioButtonProps) {
  const { speak, isSpeaking } = useSpeech();
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        speak(speech);
      }}
      aria-label={`Read aloud: ${label}`}
      title={`Listen: ${label}`}
      className={cn(
        "inline-flex items-center justify-center rounded-md transition-colors duration-200",
        "min-h-[28px] min-w-[28px] p-1",
        "text-muted-foreground hover:text-primary hover:bg-primary/10",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
        isSpeaking && "text-primary animate-pulse",
        className,
      )}
      data-ocid={`audio-nav-${label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
    </button>
  );
}

interface NavigationProps {
  onAccessibilityToggle: () => void;
  onLogout: () => void;
  isLoggedIn: boolean;
}

export function Navigation({
  onAccessibilityToggle,
  onLogout,
  isLoggedIn,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const itemCount = useCartStore((s) => s.itemCount());
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  const isActive = (to: string) => currentPath === to;

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle">
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn-primary animate-fade-in"
        data-ocid="skip-to-main"
      >
        Skip to main content
      </a>

      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
          data-ocid="nav-logo"
        >
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
            <Accessibility className="h-4 w-4 text-white" />
          </div>
          <span className="font-display font-bold text-lg text-foreground hidden sm:block">
            AccessShop
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
          data-ocid="nav-main"
        >
          {NAV_LINKS.map((link) => (
            <div key={link.to} className="flex items-center gap-0.5">
              <Link
                to={link.to}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                  isActive(link.to)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
                data-ocid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
              <AudioButton speech={link.speech} label={link.label} />
            </div>
          ))}
          <div className="flex items-center gap-0.5">
            <Link
              to="/accessibility"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 min-h-[44px] flex items-center",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                isActive("/accessibility")
                  ? "bg-accent/10 text-accent font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted",
              )}
              data-ocid="nav-link-accessibility"
            >
              Accessibility
            </Link>
            <AudioButton
              speech="Accessibility. View accessibility settings and guides."
              label="Accessibility"
            />
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Accessibility Panel Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onAccessibilityToggle}
            className="min-h-[44px] min-w-[44px] hidden md:flex"
            aria-label="Toggle accessibility panel"
            data-ocid="btn-accessibility-toggle"
          >
            <Accessibility className="h-5 w-5" />
          </Button>

          {/* Cart with audio */}
          <div className="flex items-center gap-0.5">
            <Link
              to="/cart"
              className="relative min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
              aria-label={`Cart with ${itemCount} items`}
              data-ocid="nav-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-primary text-white text-xs flex items-center justify-center font-bold animate-scale-in"
                  aria-hidden="true"
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>
            <AudioButton
              speech={`Cart. View your shopping cart. You have ${itemCount} item${itemCount !== 1 ? "s" : ""}.`}
              label="Cart"
              className="hidden md:inline-flex"
            />
          </div>

          {/* Profile/Logout */}
          {isLoggedIn && (
            <>
              <Link
                to="/profile"
                className="min-h-[44px] min-w-[44px] hidden md:flex items-center justify-center rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                aria-label="Profile"
                data-ocid="nav-profile"
              >
                <User className="h-5 w-5" />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={onLogout}
                className="min-h-[44px] min-w-[44px] hidden md:flex"
                aria-label="Logout"
                data-ocid="btn-logout"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="min-h-[44px] min-w-[44px] md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            data-ocid="btn-mobile-menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-border bg-card animate-slide-up"
          aria-label="Mobile navigation"
          data-ocid="nav-mobile"
        >
          <div className="container py-4 flex flex-col gap-1">
            {[
              ...NAV_LINKS,
              {
                label: "Accessibility",
                to: "/accessibility",
                speech:
                  "Accessibility. View accessibility settings and guides.",
              },
              {
                label: "Profile",
                to: "/profile",
                speech: "Profile. View and edit your profile.",
              },
            ].map((link) => (
              <div key={link.to} className="flex items-center gap-2">
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex-1 px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[44px] flex items-center",
                    isActive(link.to)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                  data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
                <AudioButton
                  speech={link.speech}
                  label={link.label}
                  className="mr-2"
                />
              </div>
            ))}

            {/* Cart in mobile menu */}
            <div className="flex items-center gap-2">
              <Link
                to="/cart"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex-1 px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[44px] flex items-center gap-2",
                  isActive("/cart")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
                data-ocid="mobile-nav-cart"
              >
                Cart{" "}
                {itemCount > 0 && (
                  <span className="text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
                    {itemCount}
                  </span>
                )}
              </Link>
              <AudioButton
                speech={`Cart. View your shopping cart. You have ${itemCount} item${itemCount !== 1 ? "s" : ""}.`}
                label="Cart"
                className="mr-2"
              />
            </div>

            {/* Checkout in mobile menu */}
            <div className="flex items-center gap-2">
              <Link
                to="/checkout"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex-1 px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[44px] flex items-center",
                  isActive("/checkout")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
                data-ocid="mobile-nav-checkout"
              >
                Checkout
              </Link>
              <AudioButton
                speech="Checkout. Proceed to checkout and place your order."
                label="Checkout"
                className="mr-2"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                onAccessibilityToggle();
                setMobileOpen(false);
              }}
              className="px-4 py-3 rounded-xl text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors min-h-[44px] flex items-center gap-2 text-left"
              data-ocid="mobile-nav-accessibility-toggle"
            >
              <Accessibility className="h-5 w-5" />
              Accessibility Panel
            </button>
            {isLoggedIn && (
              <button
                type="button"
                onClick={() => {
                  onLogout();
                  setMobileOpen(false);
                }}
                className="px-4 py-3 rounded-xl text-base font-medium text-destructive hover:bg-destructive/10 transition-colors min-h-[44px] flex items-center gap-2 text-left"
                data-ocid="mobile-nav-logout"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
