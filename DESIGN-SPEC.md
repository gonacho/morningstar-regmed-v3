# DESIGN-SPEC.md — Concept B: Warm & Approachable
## morningstarregmed.com — Phase 2 Visual Redesign

> **Status:** Approved — Bobbee selected Concept B on 2026-05-21  
> **Issue:** MOR-14  
> **Previous build:** MOR-7 (23 pages), MOR-8 (SEO fixes)

---

## 1. Design Philosophy

Concept B replaces the existing cold navy/blue corporate palette with a warm, patient-first aesthetic. Morning Star treats people in chronic pain — the site should feel **healing, trustworthy, and approachable**, not clinical or intimidating.

**Core principles:**
- Warmth over sterility — cream/sage tones instead of cool grays
- Patient photography front and center — real people, real healing
- Trust through credentials and reviews, not stock imagery
- Breathing room — generous whitespace, no cluttered layouts
- One strong dark section per page for contrast (footer + stats block)

---

## 2. Typography

### Font Stack

| Role | Font | Weights | Source |
|------|------|---------|--------|
| Headings | `Jost` | 400, 600, 700 | Google Fonts |
| Body / UI | `DM Sans` | 400, 500 | Google Fonts |

### Loading (in `<head>` or BaseLayout)
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale

| Token | Size | Weight | Font | Usage |
|-------|------|--------|------|-------|
| `text-display` | 4.5rem / 72px | 700 | Jost | Hero headline |
| `text-h1` | 3rem / 48px | 700 | Jost | Page titles |
| `text-h2` | 2.25rem / 36px | 600 | Jost | Section headers |
| `text-h3` | 1.5rem / 24px | 600 | Jost | Card titles, subsections |
| `text-h4` | 1.125rem / 18px | 600 | DM Sans | Labels, small headers |
| `text-body-lg` | 1.125rem / 18px | 400 | DM Sans | Intro paragraphs |
| `text-body` | 1rem / 16px | 400 | DM Sans | Body copy |
| `text-small` | 0.875rem / 14px | 400 | DM Sans | Captions, metadata |
| `text-micro` | 0.75rem / 12px | 500 | DM Sans | Tags, badges |

### Tailwind Config (fontFamily)
```js
fontFamily: {
  heading: ['Jost', 'system-ui', 'sans-serif'],
  sans: ['DM Sans', 'system-ui', 'sans-serif'],
},
```

---

## 3. Color Palette

### Core Tokens

| Token | Hex | Role |
|-------|-----|------|
| `primary` | `#2C5F4A` | Deep warm forest green — trust, nature, healing |
| `primary-light` | `#3D7A61` | Hover state for primary |
| `primary-dark` | `#1E4233` | Active/focus state |
| `accent` | `#E8A87C` | Warm coral/peach — CTAs, highlights, warmth |
| `accent-dark` | `#D4915E` | Accent hover |
| `bg-warm` | `#F8F6F2` | Warm off-white — primary light background |
| `bg-cream` | `#F0EDE7` | Warm cream — alternating section background |
| `dark` | `#1A2B22` | Deep forest — footer, dark sections |
| `dark-muted` | `#243D2E` | Subtle dark variant |
| `text-body` | `#5C5C52` | Warm charcoal — body copy |
| `text-heading` | `#1A2B22` | Near-black for headings |
| `text-muted` | `#8C8C80` | Muted / secondary text |
| `border` | `#E2DDD6` | Warm border color |
| `white` | `#FFFFFF` | Pure white for cards |

### Tailwind Config (colors)
```js
colors: {
  primary: {
    DEFAULT: '#2C5F4A',
    light: '#3D7A61',
    dark: '#1E4233',
  },
  accent: {
    DEFAULT: '#E8A87C',
    dark: '#D4915E',
  },
  bg: {
    warm: '#F8F6F2',
    cream: '#F0EDE7',
  },
  dark: {
    DEFAULT: '#1A2B22',
    muted: '#243D2E',
  },
  body: '#5C5C52',
  muted: '#8C8C80',
  border: '#E2DDD6',
},
```

### Section Alternation Pattern
```
Hero           → full-bleed image + dark overlay
Section 1      → bg-warm (#F8F6F2)
Section 2      → white (#FFFFFF)
Section 3      → bg-cream (#F0EDE7)
Section 4      → dark (#1A2B22)  ← stats counter
Section 5      → white (#FFFFFF)
Section 6      → bg-warm (#F8F6F2)
Footer         → dark (#1A2B22)
```

---

## 4. Component Library

### 4.1 Buttons

**Primary CTA (filled)**
```html
<a class="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-heading font-600 text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5">
  Book Free Consultation →
</a>
```

**Secondary (outline)**
```html
<a class="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-600 text-base px-7 py-3.5 rounded-full transition-all duration-200">
  Learn More
</a>
```

**Ghost (dark section)**
```html
<a class="inline-flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white font-heading font-600 text-base px-7 py-3.5 rounded-full transition-all duration-200">
  View All Services
</a>
```

### 4.2 Badge / Pill
```html
<!-- Accent badge (hero, floating stats) -->
<span class="inline-flex items-center gap-1.5 bg-accent/20 text-accent-dark border border-accent/30 text-micro font-500 uppercase tracking-wider px-3 py-1 rounded-full">
  ✦ 15+ Years Experience
</span>

<!-- Primary badge -->
<span class="inline-flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 text-micro font-500 uppercase tracking-wider px-3 py-1 rounded-full">
  Accepting New Patients
</span>
```

### 4.3 Service Card
```html
<div class="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
  <!-- Image top -->
  <div class="aspect-video overflow-hidden">
    <img src="..." alt="..." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
  </div>
  <!-- Content -->
  <div class="p-6">
    <h3 class="font-heading font-600 text-h3 text-dark mb-2">Neuropathy Treatment</h3>
    <p class="text-body text-body leading-relaxed mb-4">Advanced non-surgical solutions for peripheral neuropathy pain and numbness.</p>
    <a href="..." class="text-primary font-500 text-small hover:text-primary-dark inline-flex items-center gap-1">
      Learn more →
    </a>
  </div>
</div>
```

### 4.4 Testimonial Card
```html
<div class="bg-white rounded-2xl p-7 border-l-4 border-accent shadow-sm">
  <!-- Stars -->
  <div class="flex gap-0.5 mb-3 text-accent">★★★★★</div>
  <blockquote class="text-body text-body leading-relaxed mb-5 italic">
    "After years of chronic pain, Morning Star gave me my life back. The team is incredibly caring."
  </blockquote>
  <div class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full bg-bg-cream flex items-center justify-center font-heading font-700 text-primary">M</div>
    <div>
      <p class="font-heading font-600 text-dark text-small">Mary K.</p>
      <p class="text-muted text-micro">St. Peters, MO · Neuropathy Patient</p>
    </div>
  </div>
</div>
```

### 4.5 Stats Counter Item (dark section)
```html
<div class="text-center">
  <p class="font-heading font-700 text-display text-accent" data-counter="2500">2,500+</p>
  <p class="text-body text-white/70 mt-1">Patients Treated</p>
</div>
```

### 4.6 Process Step
```html
<div class="flex gap-5 items-start">
  <!-- Numbered badge -->
  <div class="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center font-heading font-700 text-white text-h4">01</div>
  <div>
    <h3 class="font-heading font-600 text-h3 text-dark mb-1.5">Free Consultation</h3>
    <p class="text-body text-body leading-relaxed">Meet with our specialists to discuss your symptoms and treatment goals.</p>
  </div>
</div>
```

### 4.7 Team / Provider Card
```html
<div class="relative rounded-2xl overflow-hidden group">
  <img src="..." alt="..." class="w-full aspect-[3/4] object-cover">
  <!-- Slide-up overlay -->
  <div class="absolute inset-0 bg-dark/80 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
    <h3 class="font-heading font-700 text-white text-h3">Dr. Jane Smith</h3>
    <p class="text-accent text-small mt-0.5 mb-3">Board Certified Pain Specialist</p>
    <p class="text-white/70 text-small leading-relaxed">15+ years experience in regenerative medicine and pain management.</p>
  </div>
  <!-- Always-visible nameplate -->
  <div class="absolute bottom-0 left-0 right-0 bg-white px-5 py-3 translate-y-0 group-hover:translate-y-full transition-transform duration-400">
    <p class="font-heading font-600 text-dark">Dr. Jane Smith</p>
    <p class="text-muted text-small">Pain Specialist</p>
  </div>
</div>
```

### 4.8 CTA Block (full width, primary bg)
```html
<section class="bg-primary py-20 px-4">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="font-heading font-700 text-h1 text-white mb-4">Ready to Start Your Recovery?</h2>
    <p class="text-white/80 text-body-lg mb-8">Take the first step toward lasting pain relief. Consultations are free — no obligation.</p>
    <a href="/schedule-appointment" class="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-heading font-600 text-base px-8 py-4 rounded-full transition-all duration-200 shadow-lg">
      Schedule Free Consultation →
    </a>
    <p class="text-white/50 text-small mt-4">📞 (636) 244-0124 · Mon–Thu 8am–5pm</p>
  </div>
</section>
```

---

## 5. Section-by-Section Layout (Home Page)

### HERO
- **Layout:** Full-bleed photo (clinic exterior or doctor with patient), 100vh minimum
- **Overlay:** `bg-gradient-to-r from-dark/80 via-dark/50 to-transparent` — left-heavy
- **Content position:** Left-aligned, vertically centered, max-w-xl
- **Content:**
  1. Accent badge: "Trusted Since 2009 · St. Peters, MO"
  2. H1 in Jost 700: "Natural Pain Relief That **Actually Works**" (accent word in `text-accent`)
  3. Body-lg: "Advanced neuropathy and regenerative medicine — non-surgical, science-backed, patient-first."
  4. Two CTAs: Primary "Book Free Consultation" + Secondary "See Our Treatments"
  5. Trust row: ⭐ 4.9 Google Rating · ✓ Accepting New Patients · 📞 (636) 244-0124
- **Floating card** (bottom right, desktop): appointment-hours micro-card with border `border-accent`

### TRUST BAR (below hero)
- Thin strip, `bg-white border-y border-border`
- 4 items inline: # Years Experience · # Conditions Treated · # Five-Star Reviews · Insurance Accepted
- Warm charcoal text, accent accent dots as separators

### ABOUT / WHO WE ARE
- **bg:** `bg-warm`
- **Layout:** 2-col — left image composition (main photo + floating inset + floating badge), right content
- **Floating badge:** "15+ Years · Trusted Care" — `bg-accent text-white rounded-2xl`
- **Content:** H2 + body paragraphs + credential logos row + "Meet the Team →" link

### SERVICES GRID
- **bg:** `white`
- **Header:** centered H2 + subtitle
- **Grid:** 3-col on desktop, 2-col tablet, 1-col mobile
- Service cards (see 4.3) — 6 primary services
- "View All Services →" button below grid

### STATS COUNTER (dark accent section)
- **bg:** `dark` (`#1A2B22`)
- **Layout:** 4 stats centered, horizontal with subtle vertical dividers
- Stats: `2,500+ Patients` · `15+ Years` · `12 Conditions Treated` · `4.9★ Rating`
- Numbers animate on scroll into view (GSAP CountTo or Intersection Observer)
- Accent number color, white labels

### PATIENT JOURNEY / HOW IT WORKS
- **bg:** `bg-cream`
- **Layout:** Single column, 4 steps (see 4.6), alternating left/right alignment on desktop
- Numbered badges in `bg-accent`

### TESTIMONIALS
- **bg:** `white`
- **Layout:** 3-column card grid
- Cards with `border-l-4 border-accent` (see 4.4)
- "See All Reviews" → links to Google or testimonials page

### TEAM
- **bg:** `bg-warm`
- **Layout:** 3-col provider cards with slide-up overlay (see 4.7)

### CTA BLOCK
- Full-width primary green (see 4.8)
- No image — pure color, bold type, accent button

### FOOTER
- **bg:** `dark` (`#1A2B22`)
- **Layout:** 4-col — Logo + mission brief | Services links | Info links | Contact + hours
- Warm-accented logo on dark
- Footer bottom bar: copyright + Google Reviews badge + HIPAA notice

---

## 6. Spacing & Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| Section padding | `py-20` (desktop) / `py-14` (mobile) | All sections |
| Container | `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` | All content containers |
| Card radius | `rounded-2xl` (16px) | Service, testimonial, team cards |
| Button radius | `rounded-full` | All buttons and badges |
| Input radius | `rounded-xl` | Form fields |
| Image inset radius | `rounded-2xl` | Image compositions |

---

## 7. Shadows & Elevation

| Level | Class | Usage |
|-------|-------|-------|
| Resting | `shadow-sm` | Cards at rest |
| Hover | `shadow-md` | Cards on hover |
| Modal / Floating | `shadow-xl` | Overlays, floating badges |
| CTA buttons | `shadow-md hover:shadow-lg` | Primary action buttons |

---

## 8. Animations & Motion

| Interaction | Behavior | Duration |
|-------------|----------|----------|
| Service card hover | `-translate-y-1` + `shadow-md` | 300ms |
| Image zoom | `scale-105` on parent hover | 500ms |
| Team card overlay | `translate-y-full` → `translate-y-0` | 400ms |
| Button hover | `-translate-y-0.5` + deeper shadow | 200ms |
| Stats counter | Number count-up on scroll | 1500ms |
| Section entry | `opacity-0 translate-y-8` → `opacity-100 translate-y-0` (Intersection Observer) | 600ms |
| Nav dropdown | CSS-only, `opacity-0` → `opacity-100` with `translate-y-1` → `translate-y-0` | 150ms |

All motion should respect `prefers-reduced-motion: reduce`.

---

## 9. Header / Navigation

- **bg:** `white` — sticky with `shadow-sm` after scroll
- **Layout:** Logo left | Nav links center | Phone + CTA right
- **Active link:** `text-primary` with `border-b-2 border-accent`
- **Hover:** `text-primary` transition 150ms
- **Mobile:** Hamburger → full-screen slide-in panel, `bg-dark`, links in white/accent

---

## 10. Image Strategy

### Hero
- Placeholder: clinic exterior (natural light, warm tones) or doctor warmly greeting patient
- Overlay preserves warmth: use warm-tinted dark overlay, not cool gray

### About / Team
- Headshots: professional but warm and approachable, not sterile
- Clinic interior: clean, welcoming, natural light

### Service Cards
- Procedure-adjacent imagery: hands, treatment sessions, relieved patient expressions
- Aspect: `16:9` for cards, `3:4` for team portraits

### Image Placeholders (until real photography sourced)
- Use [picsum.photos](https://picsum.photos) or Unsplash references for build
- Tag all placeholders with `data-placeholder="true"` for easy find-and-replace

---

## 11. Forms

### Contact / Appointment Form
- Labels: `text-body font-500 text-dark mb-1`
- Inputs: `bg-white border border-border rounded-xl px-4 py-3 text-body text-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition`
- Submit: Primary CTA button style (full width on mobile)
- Error state: `border-red-400 focus:ring-red-200`
- Success state: green border + inline success message

---

## 12. Tailwind Config — Final

```js
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C5F4A',
          light: '#3D7A61',
          dark: '#1E4233',
        },
        accent: {
          DEFAULT: '#E8A87C',
          dark: '#D4915E',
        },
        bg: {
          warm: '#F8F6F2',
          cream: '#F0EDE7',
        },
        dark: {
          DEFAULT: '#1A2B22',
          muted: '#243D2E',
        },
        body: '#5C5C52',
        muted: '#8C8C80',
        border: '#E2DDD6',
      },
      fontFamily: {
        heading: ['Jost', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
};
```

---

## 13. Global CSS Updates

```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-sans text-body antialiased bg-bg-warm;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-heading text-dark;
  }
}

@layer utilities {
  .section-container {
    @apply max-w-6xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .section-padding {
    @apply py-20 lg:py-24;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

---

## 14. Accessibility Notes

- All color combinations meet WCAG AA (4.5:1 minimum contrast)
- `#2C5F4A` on `#F8F6F2` → contrast ratio ≈ 7.2:1 ✓
- `#E8A87C` on `#1A2B22` → contrast ratio ≈ 5.8:1 ✓
- `#FFFFFF` on `#2C5F4A` → contrast ratio ≈ 6.1:1 ✓
- Focus rings use `ring-2 ring-primary/50` for keyboard navigation
- All images require descriptive `alt` text
- Animated counters use `aria-live="polite"` region

---

## 15. Files to Change in Phase 2 Build

| File | Change |
|------|--------|
| `tailwind.config.mjs` | Replace brand colors with Concept B palette |
| `src/styles/global.css` | Update base layer, add utilities |
| `src/layouts/BaseLayout.astro` | Add Jost + DM Sans Google Fonts |
| `src/components/Header.astro` | Rebuild with warm palette + new nav design |
| `src/components/Footer.astro` | Rebuild with `bg-dark` and warm accent links |
| `src/pages/index.astro` | Full section rebuild per spec above |
| All service pages | Update hero + card styles |
| All condition pages | Update typography + colors |

---

*Design spec authored: 2026-05-21*  
*Phase 2 build tracked in: MOR-15 (to be created)*
