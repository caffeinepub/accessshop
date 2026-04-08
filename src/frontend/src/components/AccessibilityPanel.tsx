import { Button } from "@/components/ui/button";
import { useSpeech } from "@/hooks/useSpeech";
import { cn } from "@/lib/utils";
import { useAccessibilityStore } from "@/stores/accessibilityStore";
import {
  Eye,
  Focus,
  Keyboard,
  Moon,
  RotateCcw,
  Sun,
  Volume2,
  VolumeX,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

interface AccessibilityPanelProps {
  onClose?: () => void;
  inline?: boolean;
}

export function AccessibilityPanel({
  onClose,
  inline = false,
}: AccessibilityPanelProps) {
  const store = useAccessibilityStore();
  const { speak, isSupported } = useSpeech();

  const toggleItems = [
    {
      label: "High Contrast",
      description: "Increases color contrast for better readability",
      icon: Eye,
      active: store.highContrast,
      toggle: store.toggleHighContrast,
      id: "toggle-high-contrast",
    },
    {
      label: "Dark Mode",
      description: "Switch to dark color scheme",
      icon: store.darkMode ? Sun : Moon,
      active: store.darkMode,
      toggle: store.toggleDarkMode,
      id: "toggle-dark-mode",
    },
    {
      label: "Voice Narration",
      description: "Automatically reads page content aloud",
      icon: store.voiceNarration ? Volume2 : VolumeX,
      active: store.voiceNarration,
      toggle: store.toggleVoiceNarration,
      id: "toggle-voice-narration",
      disabled: !isSupported,
    },
    {
      label: "Focus Highlight",
      description: "Enhances visible focus indicators for keyboard navigation",
      icon: Focus,
      active: store.focusHighlight,
      toggle: store.toggleFocusHighlight,
      id: "toggle-focus-highlight",
    },
    {
      label: "Keyboard Guide",
      description: "Shows keyboard shortcut hints throughout the app",
      icon: Keyboard,
      active: store.keyboardNavGuide,
      toggle: store.toggleKeyboardNavGuide,
      id: "toggle-keyboard-guide",
    },
  ];

  return (
    <section
      className={cn(
        "bg-card border border-border rounded-2xl shadow-elevated",
        inline ? "p-6" : "p-6 w-full max-w-md",
      )}
      aria-label="Accessibility Controls"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-display font-bold text-foreground">
          Accessibility Settings
        </h2>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close accessibility panel"
            className="min-h-[44px] min-w-[44px]"
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Text Size */}
      <div className="mb-6" data-ocid="text-size-control">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Text Size ({store.textSize}%)
        </p>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              store.decreaseTextSize();
              speak("Text size decreased");
            }}
            aria-label="Decrease text size"
            disabled={store.textSize <= 80}
            className="min-h-[44px] min-w-[44px]"
            data-ocid="btn-decrease-text"
          >
            <ZoomOut className="h-5 w-5" />
          </Button>
          <div
            className="flex-1 h-2 rounded-full bg-secondary relative overflow-hidden"
            aria-label={`Text size ${store.textSize}%`}
          >
            <div
              className="h-full rounded-full gradient-primary transition-all duration-300"
              style={{ width: `${((store.textSize - 80) / 70) * 100}%` }}
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              store.increaseTextSize();
              speak("Text size increased");
            }}
            aria-label="Increase text size"
            disabled={store.textSize >= 150}
            className="min-h-[44px] min-w-[44px]"
            data-ocid="btn-increase-text"
          >
            <ZoomIn className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Toggle Options */}
      <div className="space-y-3 mb-6">
        {toggleItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              type="button"
              key={item.id}
              onClick={() => {
                item.toggle();
                speak(`${item.label} ${item.active ? "disabled" : "enabled"}`);
              }}
              disabled={item.disabled}
              data-ocid={item.id}
              aria-pressed={item.active}
              aria-label={`${item.label}: ${item.active ? "on" : "off"}`}
              className={cn(
                "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left min-h-[44px]",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                item.active
                  ? "border-primary bg-primary/10 text-foreground"
                  : "border-border bg-background hover:bg-muted text-foreground",
                item.disabled && "opacity-50 cursor-not-allowed",
              )}
            >
              <div
                className={cn(
                  "flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center",
                  item.active ? "gradient-primary text-white" : "bg-muted",
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">{item.label}</div>
                <div className="text-xs text-muted-foreground truncate">
                  {item.description}
                </div>
              </div>
              <div
                className={cn(
                  "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  item.active
                    ? "bg-primary border-primary"
                    : "border-muted-foreground",
                )}
              >
                {item.active && (
                  <div className="w-2 h-2 rounded-full bg-white" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        onClick={() => {
          store.resetAll();
          speak("All accessibility settings reset to defaults");
        }}
        className="w-full min-h-[44px] gap-2"
        data-ocid="btn-reset-accessibility"
      >
        <RotateCcw className="h-4 w-4" />
        Reset All Settings
      </Button>
    </section>
  );
}
