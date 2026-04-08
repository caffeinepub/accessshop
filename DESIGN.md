# Design Brief

## Direction
Playful Pop Accessible eCommerce — vibrant, modern, consumer-facing platform designed accessibility-first with high contrast ratios and large touch-friendly interfaces.

## Tone
Friendly, confident, approachable. Rounded shapes (12-16px), bright magenta/teal accents, clean spacing, zero garish gradients — playful without sacrificing clarity.

## Differentiation
Accessibility controls baked into the design system (not hidden) — seamless dark mode, high contrast mode, and text scaling via CSS custom properties maintain WCAG AA+ throughout.

## Color Palette

| Token       | OKLCH              | Role                                    |
| ----------- | ------------------ | --------------------------------------- |
| background  | 0.98 0.005 280     | Light cream, cool undertones            |
| foreground  | 0.18 0.02 280      | Deep slate, high contrast               |
| card        | 1.0 0.0 0          | Pure white, clean surfaces              |
| primary     | 0.55 0.24 305      | Vivid magenta, dominant CTA             |
| accent      | 0.7 0.18 195       | Teal complement, secondary pop          |
| muted       | 0.94 0.02 280      | Soft grey, subtle backgrounds           |
| destructive | 0.55 0.22 25       | Red, high contrast warnings             |
| success     | 0.6 0.18 150       | Green, confirmation states              |
| warning     | 0.72 0.15 85       | Amber, caution states                   |

## Typography
- Display: Plus Jakarta Sans — hero, section headings, large CTAs. Rounded, modern, accessible.
- Body: DM Sans — paragraphs, labels, UI text. Clean, neutral, highly legible.
- Mono: Geist Mono — code blocks, technical content. Fixed-width clarity.
- Scale: Hero `text-5xl md:text-6xl font-bold`, Section `text-3xl md:text-4xl font-bold`, Body `text-lg leading-relaxed`, Label `text-sm font-semibold tracking-widest`

## Elevation & Depth
Soft shadow hierarchy — `shadow-subtle` (4px elevation) for standard cards, `shadow-elevated` (20px) for modals and featured sections. No dark shadows or glow effects — clean, professional surface separation.

## Structural Zones

| Zone    | Background               | Border        | Notes                                                           |
| ------- | ------------------------ | ------------- | --------------------------------------------------------------- |
| Header  | bg-white border-b-2      | border-border | Clean, elevated, navigation 44px+ touch targets                 |
| Hero    | gradient-primary         | —             | Vibrant magenta-to-teal gradient, 60% page width               |
| Content | bg-background            | —             | Alternating `bg-card` (white) and `bg-muted/10` for sections   |
| Footer  | bg-muted/20 border-t-2   | border-border | Mirrored header, spacious padding                              |
| Cards   | bg-card shadow-subtle    | rounded-2xl   | 16px border radius, 6px padding, hover:shadow-elevated         |

## Spacing & Rhythm
Spacious, breathing design — sections 4rem apart, cards gap-6, text 1.5rem leading. Micro-spacing (px, py-3) on form inputs and buttons. Ensures large tap targets (44px min) and readable line-height (1.5+).

## Component Patterns
- Buttons: 44px minimum height, rounded-lg, primary/secondary/accent variants, hover:opacity-90, focus:ring-2 primary
- Cards: 16px radius, bg-card, shadow-subtle, p-6, hover:shadow-elevated transition-smooth
- Badges: rounded-full, px-3 py-1, text-sm font-semibold, accent colors per status
- Forms: Large inputs 44px min height, labels 14px semibold, helper text 12px grey, error states red/destructive

## Motion
- Entrance: `animate-fade-in` (400ms), `animate-slide-up` (500ms) on card reveals
- Hover: opacity fade (300ms), shadow elevation (300ms), no bouncing
- Decorative: `animate-pulse` on loading states, subtle gradient shifts on hero (no autoplay animation)
- Transitions: Global `transition-smooth` (all 0.3s cubic-bezier)

## Constraints
- Minimum button height: 44px × 44px (touch accessibility)
- Minimum touch target: 48px (iOS guideline)
- Contrast ratio: ≥ 4.5:1 (WCAG AA) on all text, ≥ 7:1 on high-contrast mode
- Text size: 18px+ body, 24px+ headings (default, scalable)
- Focus indicators: 2px ring, primary color, 2px offset
- High contrast mode: Black backgrounds, white text, high chroma accents

## Signature Detail
Dual-theme gradient button treatment — same magenta-to-teal gradient on light and dark modes using context-aware OKLCH values, creating visual continuity while maintaining contrast ratios. Accessibility toggle built into header (not buried), making text sizing and contrast modes discoverable to all users.
