import { useAccessibilityStore } from "@/stores/accessibilityStore";
import { useEffect } from "react";

export function useAccessibility() {
  const { textSize, highContrast, darkMode, focusHighlight, keyboardNavGuide } =
    useAccessibilityStore();

  useEffect(() => {
    const root = document.documentElement;

    // Apply text scale CSS variable
    root.style.setProperty("--text-scale", `${textSize / 100}`);
    root.style.fontSize = `${textSize}%`;

    // Dark mode
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // High contrast
    if (highContrast) {
      root.classList.add("high-contrast");
    } else {
      root.classList.remove("high-contrast");
    }

    // Focus highlight
    if (focusHighlight) {
      root.classList.add("focus-visible-enhanced");
    } else {
      root.classList.remove("focus-visible-enhanced");
    }

    // Keyboard nav guide
    if (keyboardNavGuide) {
      root.classList.add("keyboard-nav-guide");
    } else {
      root.classList.remove("keyboard-nav-guide");
    }
  }, [textSize, highContrast, darkMode, focusHighlight, keyboardNavGuide]);

  return useAccessibilityStore();
}
