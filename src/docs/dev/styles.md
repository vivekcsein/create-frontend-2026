# STYLE.md

> Project-wide styling guidelines for AI coding agents and human contributors.

This document defines the visual language, naming conventions, design philosophy, and implementation rules for the project.

Agents should treat these rules as authoritative when generating UI.

---

# Design Philosophy

The project follows a modern enterprise design system inspired by:

- Shadcn UI
- Frontend Skills
- Taste Skills

The visual style should feel:

- Minimal
- Premium
- Professional
- Spacious
- Accessible
- Modern
- Performance-first

Avoid decorative or flashy UI unless explicitly requested.

---

# Design Language

Preferred design language:

```text
Minimal
Editorial
Technical
Enterprise
Premium SaaS
```

Avoid:

```text
Neumorphism
Glass overload
Heavy gradients
Overly playful UI
Material Design clones
Bootstrap appearance
```

---

# Color System

Use semantic HSL design tokens only.

Never hardcode colors inside components.

Preferred usage:

```css
hsl(var(--primary))
hsl(var(--background))
hsl(var(--foreground))
```

Never write:

```css
#8b5cf6
rgb(...)
purple
white
black
```

Every color should come from a design token.

---

# Theme Architecture

Use semantic tokens.

Required tokens include:

```text
background
foreground

card
card-foreground

primary
primary-foreground

secondary
secondary-foreground

accent
accent-foreground

muted
muted-foreground

border
input
ring

destructive
destructive-foreground
```

All themes must remain compatible with Shadcn UI.

---

# Color Format

Only use:

```css
HSL
```

Never introduce:

- RGB
- HEX
- Named colors

---

# Typography

Typography should be fluid.

Use CSS variables.

Examples:

```text
--fs-h1
--fs-h2
--fs-h3
--fs-body
--fs-small
```

Characteristics:

- Large headings
- Comfortable reading
- Tight heading spacing
- Relaxed paragraph spacing

Maximum readable width:

```css
65ch
```

---

# Spacing System

Spacing should use design tokens.

Example:

```text
--space-1
--space-2
--space-3
```

Avoid arbitrary spacing values whenever possible.

Whitespace is preferred over dense layouts.

---

# Radius

Use design tokens.

```text
--radius
```

Derived values:

```text
radius-sm
radius-md
radius-lg
radius-xl
```

Avoid inconsistent border radius values.

---

# Motion Philosophy

Motion should feel:

- Fast
- Smooth
- Purposeful

Never distract the user.

Preferred animations:

- Fade
- Scale
- Translate
- Opacity
- Reveal
- Hover elevation

Avoid:

- Bounce
- Elastic
- Long animations
- Continuous animations

Respect:

```css
prefers-reduced-motion
```

---

# Transition Rules

Default transition duration:

```text
150ms
250ms
300ms
```

Animation curves:

```text
ease
ease-in-out
```

Avoid:

```text
800ms
1200ms
```

unless explicitly requested.

---

# Shadows

Shadows should be subtle.

Use elevation only when needed.

Avoid large blurry shadows.

---

# Borders

Prefer:

```css
1px solid hsl(var(--border))
```

Never invent random border colors.

---

# Component Style

Components should appear:

- Clean
- Rounded
- Accessible
- Consistent

Avoid excessive decoration.

---

# Buttons

Buttons should:

- Use semantic colors
- Have clear hover states
- Support keyboard focus
- Have subtle elevation
- Animate smoothly

Do not use oversized gradients unless requested.

---

# Cards

Cards should:

- Use background tokens
- Use border tokens
- Have soft radius
- Minimal shadow

---

# Links

Links should:

- Use primary color
- Have animated underline
- Show visible focus state

---

# Accessibility

Always include:

- Keyboard navigation
- Focus-visible styles
- High contrast
- Semantic HTML
- Reduced motion support

Accessibility is mandatory.

---

# Responsive Design

Design mobile-first.

Layouts should scale naturally.

Avoid fixed widths.

Prefer:

- Flexbox
- CSS Grid
- Fluid typography
- Clamp()

---

# Icons

Use:

```tsx
<LucideIcon />
```

Never import Lucide icons directly unless instructed.

---

# Fonts

Preferred families:

Primary UI

- Inter

Premium

- Manrope

Editorial

- Instrument Serif

Technical

- Space Grotesk

Enterprise

- IBM Plex Sans

Do not introduce random fonts.

---

# Naming Conventions

Variables:

```text
--background
--foreground
--primary
--border
```

Component names:

```text
Button
Card
Input
Dialog
Navbar
Sidebar
Dashboard
```

Hooks:

```text
useTheme
useBreakpoint
useSidebar
```

Constants:

```text
NAVIGATION
THEME
COLORS
BREAKPOINTS
```

Avoid inconsistent naming.

---

# CSS Guidelines

Prefer:

- CSS Variables
- Design Tokens
- Native CSS
- Reusable utilities

Avoid:

- Magic numbers
- Hardcoded values
- Deep selector nesting

---

# Performance

Always optimize for:

- Minimal CSS
- Reusable styles
- Server Components
- Semantic HTML
- Low client-side JavaScript

---

# AI Agent Rules

When generating UI:

1. Use existing design tokens.
2. Never hardcode colors.
3. Never create duplicate styling systems.
4. Reuse existing components before creating new ones.
5. Maintain Shadcn compatibility.
6. Prefer semantic naming.
7. Follow enterprise architecture.
8. Keep animations subtle.
9. Prioritize accessibility.
10. Maintain visual consistency across the application.

This document is the single source of truth for styling decisions throughout the project.
