# Memory Log - Product Showcase Website Development

## Current State
- The website leverages Vite (`localhost:5173`) for local development. We are not pushing to GitHub or Netlify until it is completely perfect locally.
- Integrated a premium floating-product design pattern with smooth CSS animations.
- The original product JPEGs have been entirely replaced with **brand new, ultra-high-resolution (4K) AI-generated imagery**.
- Images are now tightly cropped and completely transparent, sitting beautifully inside the floating cards and the main hero section.
- Fixed global cursor visibility to ensure the custom dot/circle cursor works without clashing with the native system cursor.
- Established a strong 3D depth effect in the Hero section by placing the floating watch in front of the large "OBJECTS THAT LIVE" typography (`z-index` adjusted).

## Assets & Python Processing
- Created and ran Python scripts utilizing `rembg` and `Pillow` to:
  - Remove all backgrounds from the 4K generated images.
  - Surgically crop a stray shoebox out of the generated footwear image.
  - Automatically trim and crop all transparent borders (`getbbox()`) so the images can be scaled to maximum size in CSS.
- Final high-res, trimmed images are stored in `Product Images/HighRes/`.

## Design & CSS Changes
- **Scaling:** Updated `.p-card-obj` containers to use `width: 100%` and `object-fit: contain` so the tightly-cropped PNGs dynamically max out their display size.
- **Hero Image:** Scaled the main top watch to exactly `320px` to maintain premium balance.
- **Upgrades:** Replaced the "Void Watch" (Card 1) with an ultra-luxury two-tone skeleton dial analog watch for enhanced visual impact.
- **Clean UI:** Removed the overlapping `.hero-eyebrow` text that was previously clashing with the header.

## Next Steps
- Final review from the user regarding the current layout, sizes, and new high-res images.
- If approved, proceed with GitHub integration and Netlify deployment.
- Prepare codebase for future features (e.g., Shopping Cart or backend integration).
