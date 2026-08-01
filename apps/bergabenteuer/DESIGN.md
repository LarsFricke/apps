---
name: Unsere Bergabenteuer
description: Familien-Alpenführer — Ötztal & Dolomiten 2026
colors:
  warm-paper: "#f5f3ed"
  alpine-ink: "#17202b"
  muted-stone: "#617080"
  deep-navy: "#17344c"
  alpine-blue: "#2d6b84"
  blue-mist: "#dcecf0"
  forest-green: "#526f58"
  deep-pine: "#314b3a"
  pale-sage: "#e2e9df"
  ember-orange: "#c16d40"
  trail-orange: "#a44a24"
  trail-sand: "#e8dfd1"
  linen-line: "rgba(23, 32, 43, 0.14)"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(4rem, 10vw, 8.7rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.4rem, 5vw, 4.9rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "1.35rem"
    fontWeight: 500
    lineHeight: 1.15
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0"
  sm: "3px"
  full: "50%"
spacing:
  xs: "12px"
  sm: "18px"
  md: "28px"
  lg: "48px"
  xl: "70px"
  "2xl": "110px"
  container-pad: "min(48px, calc((100% - 1180px)/2))"
components:
  button-primary:
    backgroundColor: "{colors.ember-orange}"
    textColor: "#fff"
    typography: "{typography.label}"
    padding: "14px 20px"
  button-primary-small:
    backgroundColor: "{colors.ember-orange}"
    textColor: "#fff"
    typography: "{typography.label}"
    padding: "9px 14px"
  text-link:
    textColor: "inherit"
    typography: "{typography.label}"
    padding: "0 0 4px"
  nav-link:
    textColor: "{colors.alpine-ink}"
    typography: "{typography.label}"
  stats-block:
    backgroundColor: "transparent"
    textColor: "{colors.alpine-ink}"
    rounded: "{rounded.none}"
    padding: "18px 12px"
---

# Design System: Unsere Bergabenteuer

## Overview

**Creative North Star: "The Alpine Field Guide"**

A personal, tactile guidebook you'd highlight in the margins, fold the corners of, and carry into the mountains. Warm paper backgrounds, sturdy serif headings, and images that command space rather than decorate it. The design language treats the browser as a printed page — deliberate typographic hierarchy, generous whitespace, and a restrained palette that changes temperature between chapters. Every interactive element references the alpine subject: route numbers as elevation markers, navigation as trail signs, buttons as gear you pack.

The system is deeply authored, not templated. The CSS-only mountain mark logo, the `.route-line` timeline with numbered circles, the `.sequence` tour-step indicator — these are bespoke artifacts that could not serve a different product. The personality is personal, never corporate: honest safety warnings, child-specific guidance rendered as supportive callouts, and a Val San Nicolò rest day framed as "Der Tag, an dem niemand etwas beweisen muss."

**Key Characteristics:**
- Editorial magazine density with print-informed spacing and hierarchy
- Two-temperature palette: blue-navy for Ötztal, green-tone for Dolomiten, orange bridging both
- Georgia serif headings paired with Arial body text (intentional but open to self-hosted serif)
- Depth conveyed through colored-background sections, not shadows
- One intentional spatial moment: the fixed topbar's backdrop blur as a tracing-paper overlay
- Bespoke CSS-illustrated components (mountain mark, route timeline, sequence steps)

## Colors

The palette divides the alps into two chromatic territories. Blue and navy belong to the Ötztal — water, granite, high-altitude shadow. Green tones belong to the Dolomites — forest, meadow, and the Val di Fassa. A single burnt orange bridges both chapters as the shared signal color. Warm paper and sand act as reading surfaces; white is reserved for the practice/safety section.

### Primary
- **Ember Orange** (`#c16d40`): The sole CTA color. Used on the download button, the hero's "Reise entdecken" action, the emergency callout background, and the scroll-progress bar. White text on this background passes any contrast threshold.
- **Trail Orange** (`#a44a24`): Body-text orange for callout labels, active nav links, and transfer-step numbers on light backgrounds. Darker than Ember Orange to pass 4.5:1 contrast on warm-paper and trail-sand.

### Secondary
- **Alpine Blue** (`#2d6b84`): Eyebrow text, stats labels, route-region labels, sequence circles, and the mountain-mark left peak. Darkened from the original to ensure 4.5:1 contrast at small sizes.
- **Forest Green** (`#526f58`): The rest-card background in the split-band layout and the mountain-mark right peak.

### Neutral
- **Warm Paper** (`#f5f3ed`): The default page background and reading surface. A warm off-white that suggests print, not screen.
- **Alpine Ink** (`#17202b`): Body text and the primary dark color. Very dark navy that reads softer than pure black.
- **Muted Stone** (`#617080`): Lead paragraphs, route-line notes, stats labels, and any secondary body text.
- **Trail Sand** (`#e8dfd1`): Background for principle callouts, wide-callouts, and legal notes. Warmer and darker than paper.
- **Deep Navy** (`#17344c`): Full-section background for the Ötztal chapter and the split-band.
- **Deep Pine** (`#314b3a`): Full-section background for the Dolomites chapter.
- **Blue Mist** (`#dcecf0`): Background for family-tip callouts and the lake-card (Reschensee).
- **Pale Sage** (`#e2e9df`): Background for the practice checklist checkmark circles.
- **Linen Line** (`rgba(23, 32, 43, 0.14)`): All borders, dividers, and horizontal rules.

### Named Rules
**The Two-Chapter Rule.** The Ötztal chapter (`#oetztal`) carries the blue-navy palette; the Dolomites chapter (`#dolomiten`) carries the green palette. Elements inside each chapter inherit its atmosphere — eyebrow and lead text on dark backgrounds are tinted with `rgba(255,255,255,0.7)`, not gray. Orange is the only color that spans both chapters without modification.

**The One Accent Rule.** Ember Orange appears on ≤10% of any given screen's surface area. It backgrounds exactly one visible CTA at a time (the download button, the hero action, or the emergency block). Trail Orange carries the text-only accent burden so Ember Orange stays rare.

## Typography

**Display Font:** Georgia, "Times New Roman", serif
**Body Font:** Arial, Helvetica, sans-serif

**Character:** A sturdy, readable serif carries the headings with the weight of a printed guidebook — Georgia's generous x-height and open forms work at both the 8.7rem hero and the 1.35rem chapter title. The sans-serif body recedes to serve legibility at long-form reading. The pairing is deliberate for the current scope but leaves room for a self-hosted serif (like Merriweather or Source Serif) if platform reach expands. On Linux and Android (where Georgia is absent), the fallback is Times New Roman — acceptable but a known gap.

### Hierarchy
- **Display** (500, clamp(4rem, 10vw, 8.7rem), 0.82): The hero headline only. Negative tracking and tight line-height for dramatic, print-informed impact.
- **Headline** (500, clamp(2.4rem, 5vw, 4.9rem), 0.98): Section headings (`h2`). Close line-height maintains the editorial density at all sizes.
- **Title** (500, 1.35rem, 1.15): Chapter-list highlights and return-grid cards (`h3`). Smaller but still serif, still weighted.
- **Body** (400, 1rem, 1.55): All prose. Color is alpine-ink by default, muted-stone for lead paragraphs. Measure targets 65–75ch on the section container.
- **Label** (700, 0.78rem, 0.08em ls, uppercase): Navigation links, download buttons, text-links, and chapter kickers. This is the system's utility voice — small, bold, spaced, declarative.

### Named Rules
**The Eyebrow-to-Headline Rule.** Every section opens with an eyebrow (`p.eyebrow` → label weight, alpine-blue, wide tracking) followed by an `h2` headline. The eyebrow sets context ("Woche 1 · Ötztal"); the headline makes the statement ("Wasser, Fels und Hochgebirge"). This pattern is binding for all new chapter or section introductions.

## Layout

The page is a single vertical scroll with fixed-navigation topbar, organized as a sequence of named sections. The container is `min(1180px, calc(100% - 48px))` with 110px vertical padding per section.

- **Topbar:** Fixed, 72px tall, grid `1fr auto 1fr` (brand left, nav center, CTA right). Translucent paper background with `backdrop-filter: blur(14px)`. At ≤900px, collapses to `1fr auto auto` with hamburger menu replacing nav.
- **Hero:** Full-bleed image with gradient overlay (dark left, transparent right), `min-height: 92vh`. Content is left-aligned in the container. Actions (CTA + text link) are in a flex row.
- **Tour sections:** Two-column grid (0.95fr image / 1.05fr copy) with 80px gap. Image column uses `object-fit: cover` with `aspect-ratio: 4/3`. Copy column carries eyebrow → h2 → lead → stats → content → external link.
- **Chapter intros:** Two-column grid (1.05fr section-head / 0.95fr highlights list) on colored full-bleed backgrounds.
- **Mobile (≤900px):** All grids collapse to single column. Tour image min-height drops to 520px. Route-line becomes 2-column. Hamburger appears; topbar navlinks hide.
- **Small mobile (≤620px):** Container narrows to `min(100% - 30px, 1180px)`. Section padding reduces to 78px. Stats grid becomes 2×2. Sequence collapses to a 5-column row.
- **Print:** Topbar, hero actions, footer hidden. Hero reduced to 70vh. Colored sections preserve backgrounds via `print-color-adjust: exact`. Tours and transfers avoid page breaks.

Spacing uses the scale: 12px (tight, inside components), 18px (between related items), 28px (between distinct groups), 48px (section padding on mobile), 70px (large callout margins), 110px (section padding on desktop).

## Elevation & Depth

**Philosophy:** Hybrid with soft separation. The system is predominantly flat — colored sections (navy, green-dark, white, sand, paper) create depth through tonal value and saturation shifts rather than shadows. Darker backgrounds recede and anchor; lighter surfaces advance and invite reading. The one intentional spatial moment is the fixed topbar's `backdrop-filter: blur(14px)` — a tracing-paper overlay that acknowledges there is content scrolling beneath without building a glass-morphism aesthetic. The mobile drawer adds a genuine shadow (`-8px 0 32px rgba(10,29,43,0.16)`) to signal its spatial relationship as a panel on top of content.

No shadows are used elsewhere. The flat-by-default approach keeps the reading experience calm and print-like.

## Shapes

The system is deliberate about right angles and circles, with almost nothing in between. There is no global border-radius.

- **Right angles (0 radius):** All section containers, callout cards, stat blocks, buttons, comparison tables, the nav topbar, the mobile drawer. This reinforces the print/editorial character — content blocks, not UI panels.
- **Full circles (50% radius):** Route-number markers (40px, navy bg, white digit), sequence-step indicators (28px, outlined), checklist checkmark circles (28px, pale-sage bg).
- **Subtle rounding (3px):** The one exception — status badges in the comparison table (empfohlen/reserve/ruhetag). These are small, utilitarian labels where a hard corner would feel sharp at their tiny scale.
- **Borders:** Consistently `1px solid var(--line)` for dividers, stat separators, card edges, and nav item separators. No decorative borders — only structural dividers.
- **The mountain mark:** Composed of two CSS triangles via `border-*` properties — a blue left peak and a green right peak. This is the system's signature silhouette and the only custom geometry.

## Components

### Buttons

**Download (Primary CTA):** Ember Orange background, white text, uppercase label treatment (14px 20px padding). The only filled button in the system. Appears in the hero, the topbar (small variant: 9px 14px), and the footer.

**Text Links:** Inline links with a 1px `border-bottom` underline in `currentColor`. Used for external tour references and the hero's secondary "Broschüre laden" link. Uppercase, label typography. In dark sections (hero, split-band), links carry the `.light` variant (white).

**Hamburger:** Three 22×2px ink bars that animate to an X on open. 44×44px touch target. `:focus-visible` gets a 2px ember-orange outline offset 4px.

**Close (Drawer):** SVG X icon, 44×44px, same focus treatment. Positioned absolute top-right in the drawer.

**Skip Link:** Visually hidden until focused, then slides into view from top-left. Orange background, white text. Standard accessibility skip pattern.

### Navigation

**Topbar Nav:** Horizontal flex row of 5 uppercase label links (Route, Ötztal, Dolomiten, Rückreise, Praxis). Default color: alpine-ink. Active state (via IntersectionObserver): currently ember-orange. Design intent calls for chapter-sensitive active colors (alpine-blue in Ötztal, deep-pine in Dolomiten) — a planned refinement.

**Mobile Drawer:** Slides from right (`min(340px, 86vw)`). Paper background. Navigation links are stacked vertically, separated by linen-line borders, in serif title typography (1.15rem, 500 weight). Active state matches the topbar's. Includes a backdrop overlay (`rgba(10, 29, 43, 0.52)`) that closes the drawer on tap.

**Scroll Progress Bar:** A 2px ember-orange bar along the topbar's bottom edge, driven by `requestAnimationFrame` scroll tracking. `transform-origin: left center`; grows from left to right as the user scrolls down.

### Cards & Callouts

**Principle Callout:** Trail-sand background, 30px padding, two-column grid (180px label / 1fr body). The label is trail-orange uppercase. Used for the route planning principle.

**Wide Callout:** Same as Principle Callout but appears in transfer and legal sections. The label gives a structural recommendation or disclaimer.

**Family Tip:** Blue-mist background, 24px padding. Label in alpine-ink. Used for child-specific guidance in tour sections.

**Danger Callout:** Warm beige-orange background (`#f0dfd5`), 24px padding. Used for Abbruchkriterien (abort criteria). Serious without panic — warm, not red.

**Compact Cards:** 3-column grid of bordered cards (28px padding, `1px solid var(--line)`) used for the Stuibenfall strategy breakdown. Each card has an h3 title and prose. The third card can take the `.callout` class for visual differentiation.

### Stats

A 4-column definition list (`<dl>`) with 1px linen-line borders between columns and top/bottom edges. Each stat block has a muted-stone uppercase label (`<dt>`) and a serif value (`<dd>`, 1.05rem, 700 weight). At ≤620px collapses to 2×2 grid. Used in every tour section.

### Route Timeline

A 4-column horizontal row with a `::before` connecting line (1px, linen-line). Each stop has a numbered navy circle (40px, 50% radius) and region label / place name / note. At ≤900px becomes 2×2 with the connecting line hidden.

### Tour Sequence

A 5-step horizontal flex indicator using numbered circles (28px, outlined in alpine-blue) connected by a `::after` pseudo-element line. Each step has a number and label. Used in the Roda di Vael tour for the "Paolina → Vajolon-Pass → Ferrata → Roda di Vael → Abstieg" sequence. Semantically should be an ordered list (current `<div>` + `<span>` implementation is functional but not ideal).

### Comparison Table

A collapsible `<details>` table at the end of each chapter intro. Alpine Ink headings on white/light, uppercase thead labels, serif tour names. Four columns (Tour, Difficulty, Duration, Concern) plus a color-coded status badge (empfohlen/reserve/ruhetag/mit-Variante). Horizontally scrollable on narrow viewports.

## Do's and Don'ts

### Do:
- **Do** use Georgia serif for all headings and never for body text.
- **Do** pair every section with an eyebrow (`p.eyebrow`) preceding the `h2` headline.
- **Do** use ember-orange for exactly one visible CTA per screen. If a second orange element lands in the same viewport, demote one to secondary.
- **Do** carry chapter atmosphere into nested elements: on navy/green-dark backgrounds, tint secondary text with `rgba(255,255,255,0.7)`, never gray.
- **Do** use linen-line (`1px solid rgba(23,32,43,0.14)`) for all structural dividers — stats, nav separators, compact card borders, table gridlines.
- **Do** keep interactive touch targets at minimum 44×44px. The hamburger, close button, and drawer links all comply.

### Don't:
- **Don't** use shadows for depth. The system is flat; depth comes from tonal layering (colored section backgrounds). The mobile drawer shadow is the one deliberate exception.
- **Don't** apply border-radius >3px to any structural element. The system's right-angle character reinforces the editorial/print feel. Circles are reserved for numbered markers.
- **Don't** add a second accent color. The system has exactly one: ember-orange. Blue and green are atmosphere, not accents — they locate the reader in a chapter, never signal an action.
- **Don't** use gray text on colored backgrounds. On navy, dark-green, or orange surfaces, secondary text should be tinted white, never `#888` or a neutral gray.
