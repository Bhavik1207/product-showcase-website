# Memory Log - Product Showcase Website Development

## Current State
- **Architecture:** Transitioned from a Single Page Application (SPA) to a **Multi-Page Site** (5 production-ready HTML pages).
- **Styling & Interaction:** Extracted shared CSS (`src/style.css`) and JS (`src/main.js`) to ensure the premium AURA aesthetic (custom cursor, ambient blobs, typography) is consistent across all pages.
- **Deployment:** Live on both GitHub Pages and Netlify.
- **Custom Domain:** Configured `vite.config.js` with `base: '/'` to support the custom domain `auraog.run.place`.

## Pages Overview
1. **Home (`index.html`):** The primary hero showcase with floating cards and cinematic entrance animations.
2. **Browse Collection (`browse-collection.html`):** Redesigned as a staggered editorial list with large product visuals and detailed feature copy.
3. **Learn More (`learn-more.html`):** A high-fidelity deep-dive page for the "Void Watch" featuring a specs grid and detailed material showcase.
4. **Add to Cart (`add-to-cart.html`):** A split-pane checkout preview with glassmorphic order summary cards.
5. **Contact Us (`contact-us.html`):** A premium, glassmorphic contact form layout matching the dark-mode aesthetic.

## Functional Features
- **Persistent Cart:** Implemented `localStorage` logic in `main.js`. Cart count increments on all pages when "Add to Cart" or `+` is clicked and persists across page transitions.
- **Interactive Buttons:** Fixed `pointer-events` and `cursor: none` issues on the hero section to ensure all CTA buttons (Explore Now, Learn More) are clickable.
- **Visual Feedback:** Buttons show an "Added ✓" confirmation state for 1.5s after clicking.

## Assets & Python Processing
- Used Python scripts (`rembg`, `Pillow`) to generate high-resolution, transparent, and tightly cropped product assets.
- Final production assets are stored in `Product Images/HighRes/`.

## Deployment & Hosting
- **GitHub Pages:** [https://Bhavik1207.github.io/product-showcase-website/](https://Bhavik1207.github.io/product-showcase-website/)
- **Netlify:** [https://auraog.netlify.app](https://auraog.netlify.app)
- **Custom Domain Config:** DNS setup for `auraog.run.place` using CNAME pointing to GitHub Pages.

## Next Steps
- Monitor DNS propagation for `auraog.run.place`.
- Final visual polish based on live testing.
