import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AccessibilityStore {
  textSize: number; // 80 to 150
  highContrast: boolean;
  darkMode: boolean;
  voiceNarration: boolean;
  focusHighlight: boolean;
  keyboardNavGuide: boolean;
  setTextSize: (size: number) => void;
  increaseTextSize: () => void;
  decreaseTextSize: () => void;
  toggleHighContrast: () => void;
  toggleDarkMode: () => void;
  toggleVoiceNarration: () => void;
  toggleFocusHighlight: () => void;
  toggleKeyboardNavGuide: () => void;
  resetAll: () => void;
}

const DEFAULT_STATE = {
  textSize: 100,
  highContrast: false,
  darkMode: false,
  voiceNarration: false,
  focusHighlight: false,
  keyboardNavGuide: false,
};

export const useAccessibilityStore = create<AccessibilityStore>()(
  persist(
    (set) => ({
      ...DEFAULT_STATE,

      setTextSize: (size) =>
        set({ textSize: Math.min(150, Math.max(80, size)) }),

      increaseTextSize: () =>
        set((state) => ({
          textSize: Math.min(150, state.textSize + 10),
        })),

      decreaseTextSize: () =>
        set((state) => ({
          textSize: Math.max(80, state.textSize - 10),
        })),

      toggleHighContrast: () =>
        set((state) => ({ highContrast: !state.highContrast })),

      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),

      toggleVoiceNarration: () =>
        set((state) => ({ voiceNarration: !state.voiceNarration })),

      toggleFocusHighlight: () =>
        set((state) => ({ focusHighlight: !state.focusHighlight })),

      toggleKeyboardNavGuide: () =>
        set((state) => ({ keyboardNavGuide: !state.keyboardNavGuide })),

      resetAll: () => set(DEFAULT_STATE),
    }),
    {
      name: "accessibility-storage",
    },
  ),
);
