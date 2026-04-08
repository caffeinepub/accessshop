import { AnimatedPage } from "@/components/AnimatedPage";
import { toast } from "@/components/Toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAccessibilityStore } from "@/stores/accessibilityStore";
import { useCartStore } from "@/stores/cartStore";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  ChevronRight,
  Edit2,
  Eye,
  Home,
  KeyRound,
  LogOut,
  Package,
  Save,
  Settings,
  ShieldCheck,
  Type,
} from "lucide-react";
import { useState } from "react";

const ORDER_HISTORY = [
  {
    id: "ORD-2026-001",
    date: "Mar 15, 2026",
    items: ["EchoSphere Pro", "VisionWatch Ultra"],
    total: 479.98,
    status: "Delivered",
  },
  {
    id: "ORD-2026-002",
    date: "Feb 28, 2026",
    items: ["BigKey Pro Wireless"],
    total: 89.99,
    status: "Delivered",
  },
  {
    id: "ORD-2026-003",
    date: "Jan 10, 2026",
    items: ["ClearCall Senior Max", "TalkingPen Translator"],
    total: 249.98,
    status: "Delivered",
  },
];

function getStoredEmail() {
  return localStorage.getItem("accessshop_email") ?? "alex@example.com";
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "AccessShop User",
    email: getStoredEmail(),
    phone: "+1 (555) 987-6543",
    city: "New York, NY",
  });
  const [draft, setDraft] = useState(profile);
  const itemCount = useCartStore((s) => s.itemCount());

  const {
    textSize,
    highContrast,
    darkMode,
    voiceNarration,
    focusHighlight,
    keyboardNavGuide,
  } = useAccessibilityStore();

  const handleSave = () => {
    setProfile(draft);
    setEditing(false);
    toast.success("Profile updated successfully");
  };

  const handleCancel = () => {
    setDraft(profile);
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessshop_logged_in");
    toast.success("Logged out successfully");
    setTimeout(() => navigate({ to: "/" }), 500);
  };

  const accessibilitySettings = [
    { label: "Text Size", value: `${textSize}%`, icon: Type },
    {
      label: "High Contrast",
      value: highContrast ? "On" : "Off",
      icon: Eye,
      active: highContrast,
    },
    {
      label: "Dark Mode",
      value: darkMode ? "On" : "Off",
      icon: Eye,
      active: darkMode,
    },
    {
      label: "Voice Narration",
      value: voiceNarration ? "On" : "Off",
      icon: Settings,
      active: voiceNarration,
    },
    {
      label: "Focus Highlight",
      value: focusHighlight ? "On" : "Off",
      icon: Settings,
      active: focusHighlight,
    },
    {
      label: "Keyboard Guide",
      value: keyboardNavGuide ? "On" : "Off",
      icon: KeyRound,
      active: keyboardNavGuide,
    },
  ];

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
            <li className="text-foreground font-medium">Profile</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="gradient-primary py-12 px-4 text-white">
        <div className="container max-w-5xl">
          <div className="flex items-center gap-6">
            <div
              className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center flex-shrink-0 shadow-elevated"
              role="img"
              aria-label={`Avatar for ${profile.name}`}
            >
              <span className="text-2xl font-display font-bold text-white">
                {getInitials(profile.name)}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold text-white">
                {profile.name}
              </h1>
              <p className="text-white/80 mt-1">{profile.email}</p>
              <Badge className="mt-2 bg-white/20 text-white border-white/30 gap-1">
                <ShieldCheck className="h-3 w-3" />
                Verified Member
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="py-10 px-4 bg-background">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left sidebar */}
            <div className="space-y-6">
              {/* Account Stats */}
              <div className="card-accessible space-y-4">
                <h2 className="font-display font-bold text-foreground">
                  Account Stats
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Orders</span>
                    <span className="font-bold text-foreground">
                      {ORDER_HISTORY.length}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Cart Items</span>
                    <span className="font-bold text-foreground">
                      {itemCount}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="font-bold text-foreground">Jan 2026</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Lifetime Spend
                    </span>
                    <span className="font-bold text-primary">$819.95</span>
                  </div>
                </div>
              </div>

              {/* Accessibility Settings Quick-View */}
              <div
                className="card-accessible space-y-4"
                data-ocid="profile-accessibility-settings"
                aria-label="Your current accessibility settings"
              >
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-foreground">
                    Accessibility
                  </h2>
                  <Link to="/accessibility">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary text-xs h-8 px-2"
                      data-ocid="btn-edit-accessibility"
                    >
                      Edit
                    </Button>
                  </Link>
                </div>
                <div className="space-y-2">
                  {accessibilitySettings.map(
                    ({ label, value, icon: Icon, active }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                          <Icon className="h-3.5 w-3.5" />
                          {label}
                        </span>
                        <Badge
                          variant={active ? "default" : "secondary"}
                          className="text-xs h-5"
                        >
                          {value}
                        </Badge>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Logout */}
              <Button
                variant="outline"
                className="w-full h-12 text-base gap-2 border-destructive/30 text-destructive hover:bg-destructive/5"
                onClick={handleLogout}
                data-ocid="btn-logout"
                aria-label="Log out of AccessShop"
              >
                <LogOut className="h-5 w-5" />
                Log Out
              </Button>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <div className="card-accessible" data-ocid="profile-info">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-display font-bold text-foreground">
                    Personal Information
                  </h2>
                  {!editing ? (
                    <Button
                      variant="outline"
                      onClick={() => setEditing(true)}
                      className="gap-2 min-h-[44px]"
                      data-ocid="btn-edit-profile"
                    >
                      <Edit2 className="h-4 w-4" /> Edit
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        onClick={handleSave}
                        className="btn-primary gap-2 min-h-[44px]"
                        data-ocid="btn-save-profile"
                      >
                        <Save className="h-4 w-4" /> Save
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleCancel}
                        className="min-h-[44px]"
                        data-ocid="btn-cancel-edit"
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {(
                    [
                      {
                        key: "name" as const,
                        label: "Full Name",
                        autocomplete: "name",
                      },
                      {
                        key: "email" as const,
                        label: "Email Address",
                        autocomplete: "email",
                      },
                      {
                        key: "phone" as const,
                        label: "Phone Number",
                        autocomplete: "tel",
                      },
                      {
                        key: "city" as const,
                        label: "City",
                        autocomplete: "address-level2",
                      },
                    ] as const
                  ).map(({ key, label, autocomplete }) => (
                    <div key={key} className="space-y-2">
                      <Label
                        htmlFor={`profile-${key}`}
                        className="text-sm font-semibold text-muted-foreground uppercase tracking-wide"
                      >
                        {label}
                      </Label>
                      {editing ? (
                        <Input
                          id={`profile-${key}`}
                          value={draft[key]}
                          onChange={(e) =>
                            setDraft((d) => ({ ...d, [key]: e.target.value }))
                          }
                          className="h-12 text-base"
                          autoComplete={autocomplete}
                          data-ocid={`input-profile-${key}`}
                        />
                      ) : (
                        <div className="text-foreground font-medium text-base py-3">
                          {profile[key]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Account Settings */}
              <div className="card-accessible" data-ocid="account-settings">
                <h2 className="text-xl font-display font-bold text-foreground mb-6">
                  Account Settings
                </h2>
                <div className="space-y-3">
                  {[
                    {
                      label: "Change Password",
                      icon: KeyRound,
                      ocid: "btn-change-password",
                    },
                    {
                      label: "Email Preferences",
                      icon: Settings,
                      ocid: "btn-email-prefs",
                    },
                    {
                      label: "Privacy Settings",
                      icon: ShieldCheck,
                      ocid: "btn-privacy",
                    },
                  ].map(({ label, icon: Icon, ocid }) => (
                    <button
                      key={label}
                      type="button"
                      className="w-full flex items-center justify-between p-4 rounded-xl bg-muted/40 hover:bg-muted transition-colors min-h-[52px] group"
                      onClick={() =>
                        toast.success("Coming soon", {
                          description: `${label} will be available in a future update.`,
                        })
                      }
                      data-ocid={ocid}
                      aria-label={label}
                    >
                      <span className="flex items-center gap-3 font-medium text-foreground">
                        <Icon className="h-5 w-5 text-primary" />
                        {label}
                      </span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Order History */}
              <div className="card-accessible" data-ocid="order-history">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-display font-bold text-foreground">
                    Order History
                  </h2>
                </div>
                {ORDER_HISTORY.length === 0 ? (
                  <div
                    className="text-center py-12 text-muted-foreground"
                    data-ocid="orders-empty-state"
                  >
                    <Package className="h-12 w-12 mx-auto mb-4 opacity-30" />
                    <p className="font-medium text-foreground mb-1">
                      No orders yet
                    </p>
                    <p className="text-sm mb-4">
                      Your order history will appear here after your first
                      purchase.
                    </p>
                    <Link to="/products">
                      <Button
                        className="btn-primary"
                        data-ocid="btn-start-shopping"
                      >
                        Start Shopping
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <ul className="space-y-4" aria-label="Order history">
                    {ORDER_HISTORY.map((order) => (
                      <li key={order.id} data-ocid={`order-${order.id}`}>
                        <div className="flex flex-wrap items-start justify-between gap-3 py-4">
                          <div className="space-y-1 min-w-0">
                            <div className="flex items-center gap-3 flex-wrap">
                              <span className="font-mono font-medium text-foreground">
                                {order.id}
                              </span>
                              <Badge
                                variant="secondary"
                                className="text-xs text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                              >
                                {order.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {order.date}
                            </div>
                            <div className="text-sm text-muted-foreground truncate max-w-xs">
                              {order.items.join(", ")}
                            </div>
                          </div>
                          <span className="font-bold text-primary text-lg flex-shrink-0">
                            ${order.total.toFixed(2)}
                          </span>
                        </div>
                        <Separator />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
