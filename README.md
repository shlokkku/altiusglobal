# Altius Global Website

React + Vite website for Altius Global Trading LLC.

## Local Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. The current dev server usually runs at:

```txt
http://127.0.0.1:5173/
```

## Project Structure

```txt
src/
  app/                 main page assembly
  components/
    layout/            Navbar and Footer
    ui/                shared UI primitives
  data/                editable site, product, feature, and process content
  sections/            landing-page sections
  styles/              global theme CSS
public/
  assets/              deployable public media, including landing-hero.mp4
```

## Common Edits

- Add, remove, or edit products in `src/data/products.js`.
- Edit nav, brand, contact, stats, and certifications in `src/data/site.js`.
- Edit why-us cards in `src/data/features.js`.
- Edit procurement process steps in `src/data/processSteps.js`.
- Replace the landing video at `public/assets/landing-hero.mp4`.

## Production Build

```bash
npm run lint
npm run build
```

The production output is generated in `dist/`.

## Deployment

For Vercel or Netlify:

- Framework: Vite
- Build command: `npm run build`
- Publish directory: `dist`

For static hosting or cPanel:

1. Run `npm run build`.
2. Upload the contents of `dist/` to the web root.
3. Keep `public/assets/landing-hero.mp4` in the project before building so it is included in the final output.
