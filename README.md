# 🌐 Cognifyz Technologies — Web Development Internship

> **Intern:** Veerendra Kumar
> **Duration:** 14 March 2026 – 14 April 2026
> **Mode:** Remote
> **Domain:** Web Development

This repository contains all tasks completed during my Web Development Internship at **Cognifyz Technologies**. The program is divided into three progressive levels, each focusing on a different layer of front-end web development — from foundational HTML/CSS right through to responsive design, front-end frameworks, and polished landing pages.

---

## 📁 Repository Structure

```
Cognifyz-Internship/
 ├── Level-1/
 │    ├── assets/
 │    │    └── hero.jpg
 │    ├── task1.html / task1.css / task1.js
 │    └── task2.html / task2.css / task2.js
 │
 ├── Level-2/
 │    ├── assets/
 │    │    ├── card1.jpg / card2.jpg / card3.jpg
 │    │    └── hero.jpg
 │    ├── task1.html / task1.css / task1.js
 │    └── task2.html / task2.css / task2.js
 │
 ├── Level-3/
 │    ├── assets/
 │    │    ├── img1.jpg – img6.jpg
 │    │    └── about.jpg
 │    ├── task1.html / task1.css / task1.js
 │    └── task2.html / task2.css / task2.js
 │
 └── README.md
```

Each level is self-contained. Open any `taskN.html` directly in a browser — no build tools or server required.

---

## 🟡 Level 1 — HTML, CSS & JavaScript Fundamentals

### Task 1 — HTML & CSS
**File:** `Level-1/task1.html`

Covers the three core HTML/CSS building blocks:
- A **webpage** with a heading, descriptive paragraph, and an image with a decorative offset border effect
- A **basic form** with a single text input and a submit button (with validation feedback via JS)
- A **navigation menu** with three links, hover underline animations, and smooth scroll behaviour

**Techniques used:** CSS custom properties, sticky nav, CSS grid, focus ring styles, scroll-behaviour.

---

### Task 2 — JavaScript Interactivity
**File:** `Level-1/task2.html`

Three standalone JavaScript exercises on one dark-themed page:

| # | Feature | Description |
|---|---------|-------------|
| 01 | **Color-Changing Button** | Cycles through 6 accent colors on each click |
| 02 | **Time-Based Greeting** | Reads `new Date().getHours()` and shows a contextual greeting (Morning / Afternoon / Evening / Night) |
| 03 | **Basic Calculator** | Adds two numbers and animates the result with a scale bounce |

**Techniques used:** DOM manipulation, event listeners, `Date` object, CSS transitions driven by JS.

---

## 🟠 Level 2 — Front-end Frameworks & Responsive Design

### Task 1 — Front-end Frameworks (Bootstrap 5)
**File:** `Level-2/task1.html`

- **Responsive card component** — a three-column Bootstrap grid of custom-styled cards, each with an image, category badge, title, description, author label, and a "Read More" button
- **Responsive grid layout** — a multi-row Bootstrap grid that reflows from 4 columns → 2 columns → 1 column across viewport breakpoints

**Techniques used:** Bootstrap 5 grid (`col-12 col-sm-6 col-lg-4`, `col-xl-3`), custom CSS layered on top of Bootstrap base, card hover lift animation.

---

### Task 2 — Responsive Design & Hamburger Menu
**File:** `Level-2/task2.html`

- **CSS media queries** at `900px` (tablet) and `600px` (mobile) transform a two-column hero into a single-column stacked layout, and collapse a 3-column features grid into 1 column
- **Hamburger menu** — a pure CSS+JS animated three-line icon that toggles a full-width mobile drawer; the icon morphs into an ✕ when open
- Closes automatically when a nav link is clicked or the user taps outside

**Techniques used:** CSS custom properties, `@media` queries, `position: sticky`, flexbox nav, JS `classList.toggle`, click-outside detection.

---

## 🔴 Level 3 — Image Manipulation & Landing Page

### Task 1 — Image Gallery & Auto Slideshow
**File:** `Level-3/task1.html`

Two image features on a single dark editorial page:

**Part 01 — Thumbnail Gallery with Lightbox**
- CSS Grid auto-fill gallery of thumbnails
- Hover effect: image zooms and darkens, a 🔍 overlay fades in
- Click opens a fullscreen lightbox with a zoom-in entrance animation
- Closes via the ✕ button, clicking the backdrop, or pressing `Escape`

**Part 02 — Auto-Transitioning Slideshow**
- Fades between 6 slides every 4 seconds using CSS `opacity` transitions
- Animated gold progress bar restarts on each transition
- Clickable dot indicators jump to any slide
- Both the gallery and slideshow are built dynamically from a single JS data array — no repeated HTML

**Techniques used:** CSS Grid, `IntersectionObserver`, `position: absolute` stacking, CSS `@keyframes`, JS `setInterval`, reflow trick to restart animations.

---

### Task 2 — Cognifyz Internship Landing Page
**File:** `Level-3/task2.html`

A complete, multi-section landing page for the Cognifyz Web Developer Internship program, covering all required elements:

| Required Element | Implementation |
|-----------------|---------------|
| Clear headline | "Web Developer Internship Opportunities at Cognifyz Technologies" |
| Brief introduction | Program overview with duration, location, hours, and certificate details |
| Highlights | 6-card benefits grid (Real-World Experience, Portfolio, Mentorship, Certificate, Flexible Hours, Skill Acceleration) |
| Qualifications | Tech tag pills + checklist of soft-skill requirements |
| CTA button | "Apply Now" (scrolls to CTA banner) + "Learn More" |
| Contact / Footer | Email, website, and social links in a structured footer |

**Bonus features:** sticky glassmorphism navbar, gradient hero with radial glow, animated stats strip, scroll-triggered benefit card entrance animations via `IntersectionObserver`, responsive layout collapsing at 820px and 560px.

**Techniques used:** CSS `backdrop-filter`, `background-clip: text` gradient headline, CSS Grid, `IntersectionObserver` for scroll animations, `radial-gradient` glow effects.

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, media queries, CSS Grid, Flexbox |
| JavaScript (ES6+) | DOM manipulation, events, timers, Intersection Observer |
| Bootstrap 5 | Responsive grid and component base (Level 2, Task 1) |
| Google Fonts | Playfair Display, DM Sans, Space Mono, Sora, Outfit, Fraunces, IBM Plex Sans, Bebas Neue, Cormorant Garamond, Karla, Raleway, Nunito |

---

## 🚀 How to Run

No installation or build step needed. Just clone the repo and open any HTML file in your browser:

```bash
git clone https://github.com/<your-username>/Cognifyz-Internship.git
cd Cognifyz-Internship

# Open any task directly, e.g.:
open Level-1/task1.html        # macOS
start Level-1/task1.html       # Windows
xdg-open Level-1/task1.html    # Linux
```

Or simply double-click any `.html` file in your file explorer.

> **Tip:** For the best experience with Level 2 Task 1 (Bootstrap CDN), make sure you have an internet connection when opening the file so Bootstrap loads from the CDN.

---

## 📸 Task Preview

| Level | Task | Preview |
|-------|------|---------|
| Level 1 | Task 1 — HTML/CSS Page | Warm editorial layout with sticky nav, hero image, and contact form |
| Level 1 | Task 2 — JavaScript | Dark terminal-style page with 3 interactive JS widgets |
| Level 2 | Task 1 — Bootstrap | Card grid + 7-item responsive feature grid |
| Level 2 | Task 2 — Responsive | Full responsive page with animated hamburger menu |
| Level 3 | Task 1 — Gallery | Lightbox gallery + auto-fading slideshow with progress bar |
| Level 3 | Task 2 — Landing Page | Full Cognifyz internship landing page with scroll animations |

---

## 📬 Contact

**Veerendra Kumar**
- 📧 veerendrakumarcscs@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/)
- 💼 Internship @ [Cognifyz Technologies](https://www.cognifyz.com)

---

## 🏢 About Cognifyz Technologies

Cognifyz Technologies is a leading technology company specialising in data science, artificial intelligence, machine learning, and data analytics. They offer internship programs to help students gain hands-on experience in their chosen domains.

- 🌐 [www.cognifyz.com](https://www.cognifyz.com)
- 📧 contact@cognifyz.com
- 🔗 [LinkedIn](https://www.linkedin.com/company/cognifyz-techonologies/)

---

*This repository was created as part of the Cognifyz Technologies Web Development Internship Program (March–April 2026). All code is original work submitted in accordance with the internship guidelines.*
