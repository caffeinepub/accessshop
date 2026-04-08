import { AccessibilityPanel } from "@/components/AccessibilityPanel";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { useAccessibility } from "@/hooks/useAccessibility";
import { useRouter } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";

interface LayoutProps {
  children: ReactNode;
  hideNav?: boolean;
  hideFooter?: boolean;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

export function Layout({
  children,
  hideNav = false,
  hideFooter = false,
  isLoggedIn = false,
  onLogout = () => {},
}: LayoutProps) {
  const [accessibilityPanelOpen, setAccessibilityPanelOpen] = useState(false);

  // Apply accessibility settings globally
  useAccessibility();

  // Scroll to top on route change
  const router = useRouter();
  const { pathname } = router.state.location;
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentionally reacts to pathname change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Close panel on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && accessibilityPanelOpen) {
        setAccessibilityPanelOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [accessibilityPanelOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!hideNav && (
        <Navigation
          onAccessibilityToggle={() => setAccessibilityPanelOpen((v) => !v)}
          onLogout={onLogout}
          isLoggedIn={isLoggedIn}
        />
      )}

      {/* Accessibility Panel Overlay */}
      {accessibilityPanelOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 animate-fade-in"
            onClick={() => setAccessibilityPanelOpen(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ")
                setAccessibilityPanelOpen(false);
            }}
            role="button"
            tabIndex={0}
            aria-label="Close accessibility panel"
          />
          <dialog
            open
            className="fixed top-20 right-4 z-50 animate-slide-up max-h-[calc(100vh-6rem)] overflow-y-auto border-0 p-0 bg-transparent"
            aria-label="Accessibility Settings Panel"
            data-ocid="accessibility-panel"
          >
            <AccessibilityPanel
              onClose={() => setAccessibilityPanelOpen(false)}
            />
          </dialog>
        </>
      )}

      <main id="main-content" className="flex-1 flex flex-col" tabIndex={-1}>
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}
