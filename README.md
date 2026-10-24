# Harsh Raj — Graphic Designer & Visual Creative Portfolio

A complete, visually stunning, recruiter-ready Graphic Designer Portfolio website built for **Harsh Raj**.

Art-directed with an editorial, contemporary design aesthetic inspired by world-class independent design studios. Featuring a substantial body of **12 distinct, original concept projects**, realistic mockups, coherent visual systems, and comprehensive case studies.

---

## ⚡ Quick Start (Run Locally)

This portfolio requires **no build tools, package installations, or complex dependencies**. It runs natively in any modern browser.

### Option 1: Direct File Open
Simply double-click `index.html` or open it directly in Chrome, Safari, Firefox, or Edge.

### Option 2: Local HTTP Server (Recommended)
Open your terminal inside this folder and run:

```bash
# Using Python 3 (Installed by default on macOS and Linux):
python3 -m http.server 8000
```

Then visit: **[http://localhost:8000](http://localhost:8000)** in your browser.

*(Alternatively, you can run `npx serve .` if you have Node.js installed).*

---

## 🎨 Portfolio Features & Structure

### 1. Striking Homepage Hero
- **Header**: HARSH RAJ, GRAPHIC DESIGNER & VISUAL CREATIVE
- **Headline**: *"Turning Ideas Into Visual Experiences."*
- **Supporting Copy**: *"I create thoughtful visual identities, digital campaigns, social media creatives, and brand experiences that help ideas stand out."*
- **Two Prominent Calls-to-Action**: `Explore My Work` and `Let's Work Together`.
- **Interactive Typographic Art Piece**: Kinetic rotating typography stamp, planetary orbits, and studio edition index.
- **Header Navigation**: Smooth jump links to Work, About, Skills, and Contact, plus live status pill `🟢 Available for work` and mobile drawer.

### 2. 12 Substantial Concept Projects Across 5 Categories
All 12 projects are clearly labeled as **Self-Initiated Concept Work** and feature original, bespoke SVG & CSS mockups with zero broken external images:

1. **Aura Botanica** *(Brand Identity)* — Sustainable luxury botanical apothecary identity, amber dropper bottles, and debossed linen packaging.
2. **Miso & Stone Izakaya** *(Restaurant Branding)* — Japanese-Nordic fermentation bar with bilingual Katakana wordmark, washi menus, and takeout packaging.
3. **Élan Atelier — SS26 Capsule** *(Social Media Campaign)* — Cohesive 6-post Instagram campaign grid balancing typographic quotes, lookbook silhouettes, and weave textures.
4. **Lumen Acoustics — Studio Zero** *(Product Advertising)* — Precision wireless studio headphones with glowing acoustic cyan waveforms and technical spec callouts.
5. **The Creative Engine** *(YouTube Thumbnail Design)* — Three high-CTR, retina-optimized thumbnail concepts with split-screen visual tension and mobile 120px legibility.
6. **Solaris Running Club** *(E-commerce Campaign)* — High-velocity summer drop banners, flash discount badges (FLASH40), and kinetic speed typography.
7. **Terra Bistro — Fire & Soil** *(Food Photography Art Direction)* — Chiaroscuro food art posters, farm-to-table prix-fixe menu, and grower story slides.
8. **Resonance 2026 Sound Festival** *(Event Poster Design)* — 3-poster editorial series featuring Swiss grid layouts, audio frequency modulation, and screen-printed halftone textures.
9. **Kura Artisan Teas — Kyoto Reserve** *(Packaging Design)* — Luxury matte celadon tea canister, gold-foiled crest, and wrap-around washi label with ritual brewing parameters.
10. **Utsav by Tara** *(Festival Campaign)* — Contemporary Indian festive retail campaign with geometric diya motifs, jewel emerald tones, and luxury hamper packaging.
11. **Koto Living — Mindful Spaces** *(Furniture Brand Campaign)* — Scandinavian-Japandi furniture campaign with architectural catalog spreads and urban billboard mockups.
12. **Kronos AI — The Creative Canvas** *(Digital Product Visual Design)* — Next-gen creative workflow app landing page with dark glassmorphic UI, glowing ambient gradients, and node canvas.

### 3. Deep In-Depth Case Studies
Clicking any project card opens a comprehensive modal presentation containing:
- **Project Title & Discipline Tag**
- **Prominent Status**: *Self-Initiated Concept Work*
- **Creative Brief & Problem Statement**
- **Target Audience Breakdown**
- **Creative Direction & Design Rationale**
- **Color Palette with Click-to-Copy HEX Values**
- **Typography Hierarchy & Specimen Breakdowns**
- **Deliverables Checklist & Design Decisions (01, 02, 03)**
- **Previous / Next Project Navigation** and keyboard arrow key navigation
- **Deep-linking Support**: Share or bookmark any project via `#project=aura-botanica`.

### 4. About Me
- **Name**: Harsh Raj
- **Education**: B.Tech in Computer Science, Medhavi Skills University
- **Honest Profile & Biography**: Focus on visual communication, brand systems, and frontend implementation.

### 5. Categorized Skills
- **Design Capabilities**: Canva, Social Media Design, Poster and Banner Design, Visual Composition, Typography and Color Theory, Brand Identity Concepts.
- **Technical Foundation**: HTML5, CSS3 / Modern Styling, JavaScript (ES6+), Responsive Web Design.

### 6. Contact Form & Settings
- Interactive contact form with real-time field validation (Name, Email, Message) and clear animated submission success state.
- Central settings file (`config.js`) for social profiles and contact info.
- LinkedIn: `https://www.linkedin.com/in/kumar-harsh-b58294386`
- GitHub: `https://github.com/harsh1433raj-source`
- Download CV Action: Integrates with `config.js` (`cvAvailable`). If updating, shows a polite request modal allowing recruiters to request a copy or connect on LinkedIn.

---

## 🛠️ File Structure

```
harsh-raj-graphic-design-portfolio/
├── index.html              # Semantic, accessible HTML5 structure
├── style.css               # Editorial CSS, responsive layout, dark theme & mockups
├── config.js               # Central configuration (Name, links, email, resume, skills)
├── projects-data.js        # Complete database of all 12 concept projects
├── project-visuals.js      # Bespoke SVG & CSS visual mockups for cards & case studies
├── script.js               # Interactive controller (Filters, modals, forms, routing)
├── assets/
│   ├── favicon.svg         # Custom vector HR® monogram favicon
│   └── README.txt          # Asset guide
└── README.md               # Documentation & deployment guide
```

---

## ⚙️ Customization (`config.js`)

You can edit `config.js` directly to update your details without touching any HTML:

```javascript
const SITE_CONFIG = {
  name: "Harsh Raj",
  socials: {
    linkedin: "https://www.linkedin.com/in/kumar-harsh-b58294386",
    github: "https://github.com/harsh1433raj-source",
    email: "your.real.email@example.com", // <-- Add your real email here when ready
  },
  resume: {
    cvAvailable: false,                   // <-- Change to true once you put cv.pdf in assets/
    cvPath: "assets/cv.pdf"
  }
};
```

---

## 🚀 One-Click Deployment

### 1. GitHub Pages
1. Push this repository to a public GitHub repository.
2. In your repo, go to **Settings** → **Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch** and select `main` (root).
4. GitHub Pages will publish your site at `https://<username>.github.io/<repo-name>/`.

### 2. Netlify
1. Log in to [Netlify](https://app.netlify.com/).
2. Drag and drop the `harsh-raj-graphic-design-portfolio` folder directly into the Netlify dashboard.
3. Your portfolio goes live instantly with an SSL certificate.

### 3. Vercel
1. Run `npx vercel` inside this folder, or import the GitHub repository into [Vercel](https://vercel.com/).
2. Select default static project settings and click **Deploy**.
