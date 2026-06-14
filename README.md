# Pedigree Visualizer

A minimal React + Vite app to draw interactive genetic pedigrees with optional PedigreeJS layout.

## Quick Start

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Make sure the file
`public/pedigreejs/pedigreejs.v2.1.0-rc7.min.js` exists. This repo already includes it if you used the provided ZIP.

## Build

```bash
npm run build
npm run preview
```

## Notes
- Tailwind classes are used via CDN in `public/index.html`. No Tailwind build step required.
- If PedigreeJS is loaded, the title shows **(PedigreeJS فعال)**, otherwise it falls back to the internal layout.
