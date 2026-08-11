# Muhammad — Linktree-Style Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen?style=for-the-badge)
![Responsive](https://img.shields.io/badge/responsive-yes-success?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

A minimal, elegant, single-page "link-in-bio" site (Linktree-style) built with
plain HTML, CSS, and JavaScript — no frameworks, no build tools, no
dependencies to install.

The page presents a personal identity card (avatar, name, tagline) on one
side, connected by an animated hand-drawn "tree" line to a grid of social/
contact links on the other — all wrapped in a dark, warm, editorial color
palette with smooth entrance animations.

---

## Features

- **Elegant dark theme** — ink-black background, warm gold accents, ivory
  text, and a subtle dotted texture overlay.
- **Animated SVG "tree" line** — a hand-drawn path that draws itself in on
  load and visually connects the identity to the links.
- **Staggered entrance animations** — the avatar, name, tagline, divider,
  and each link "leaf" fade/slide in one after another for a polished,
  cinematic first impression.
- **Interactive link cards** — each link has a hover and active state
  (border glow, subtle lift, and press feedback).
- **Fully responsive** — collapses from a two-column desktop layout into a
  single centered column on mobile (≤ 760px), with the decorative SVG tree
  hidden on small screens.
- **Accessibility-aware** — respects `prefers-reduced-motion` and disables
  all animations/transitions for users who request reduced motion.
- **Zero dependencies** — only a Google Fonts import; everything else is
  hand-written HTML/CSS/JS.

---

## Technologies Used

| Technology       | Purpose                                              |
|------------------|-------------------------------------------------------|
| **HTML5**        | Page structure and semantic markup                   |
| **CSS3**         | Layout (CSS Grid/Flexbox), theming, keyframe animations, responsive design |
| **JavaScript**   | Reserved for future interactivity (no logic required for current functionality) |
| **SVG**          | The animated "tree" line and the avatar ring          |
| **Google Fonts** | `Fraunces` (serif, headings/avatar) and `Inter` (sans-serif, body) |

No frameworks, package managers, or build steps are required.

---

## Project Structure

```
linktree-project/
├── index.html      # HTML structure only
├── style.css        # All styles (theme, layout, animations, responsiveness)
├── script.js         # JavaScript (reserved for future interactivity)
└── README.md         # Project documentation
```

- **`index.html`** — Contains only the markup: the identity block (avatar,
  name, tagline), the animated SVG tree, the divider, the grid of link
  cards, and the footer. It links `style.css` in the `<head>` and
  `script.js` before the closing `</body>` tag.
- **`style.css`** — Contains every style rule from the original file:
  CSS custom properties (`:root` theme variables), base resets, the
  grid-based `.stage` layout, the SVG tree/avatar-ring styles, entrance
  keyframe animations, link "leaf" card styles and hover/active states,
  the responsive `@media (max-width: 760px)` mobile layout, and the
  `@media (prefers-reduced-motion: reduce)` accessibility override.
- **`script.js`** — Currently holds no active logic, because the original
  project had no embedded JavaScript (all motion/behavior is CSS-driven).
  It's included as a clean entry point so the project follows a standard
  HTML/CSS/JS structure and is ready for future features (see
  "Customization" below).

---

## How to Run the Project

No build tools or installation required.

1. Download or clone this folder.
2. Open `index.html` directly in any modern web browser (double-click it,
   or right-click → "Open with" your browser).

**Optional — run via a local server** (recommended if you plan to extend
the project with JavaScript that fetches data, since some browsers
restrict certain features on `file://` URLs):

```bash
# Using Python 3
cd linktree-project
python3 -m http.server 8000
# then visit http://localhost:8000 in your browser
```

or with Node.js:

```bash
npx serve linktree-project
```

---

## How to Customize the Project

**Change the name, tagline, or initial**
Edit the text inside `.avatar`, `.name`, and `.tagline` in `index.html`.

**Add, remove, or edit links**
Each link is an `<a class="leaf">` block inside `<nav class="links">` in
`index.html`. Copy an existing block to add a new one, and update the
`href`, `.label`, and `.sub` text. The grid automatically re-flows to fit
new items.

> Note: entrance-delay timing for each link is defined in `style.css`
> using `.links .leaf:nth-child(n)` selectors. If you add more than 6
> links, add a matching `:nth-child(7)`, `:nth-child(8)`, etc. rule
> (increasing the delay by ~0.1s each) to keep the staggered animation
> consistent.

**Change colors / theme**
All colors are defined as CSS custom properties at the top of
`style.css`:

```css
:root{
  --ink:#12151A;       /* background */
  --ink-soft:#1B2027;   /* card background */
  --ivory:#EDEAE2;      /* primary text */
  --ivory-dim:#9AA0AC;  /* secondary text */
  --gold:#C9A25C;       /* accent color */
  --gold-soft:#8A7247;  /* accent hover color */
  --line:#2B313B;       /* borders / dividers */
}
```

Update these values to re-theme the entire page.

**Change fonts**
Fonts are imported at the top of `style.css` via Google Fonts
(`Fraunces` and `Inter`). Swap the `@import` URL and the
`font-family` values in the corresponding selectors to use different
typefaces.

**Add JavaScript behavior**
`script.js` already sets up a `DOMContentLoaded` listener — add any new
functionality (e.g. click analytics, dynamically loaded link data, a
theme toggle) inside that listener.

---

## License

Released under the [MIT License](https://opensource.org/licenses/MIT) —
free to use, modify, and distribute. Swap the badge/section above if you'd
prefer a different license.

---

## Credits

- Design & original single-file implementation: project owner (Muhammad).
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) and
  [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts.
- Refactor into a clean, separated HTML/CSS/JS project structure.
