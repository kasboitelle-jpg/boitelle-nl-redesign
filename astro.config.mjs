// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.boitelle.nl',
  // Volledig statische output — Vercel detecteert Astro automatisch.
  // 'Waarom ons?' heet sinds november 2026 'Over'; oude links blijven werken.
  redirects: {
    '/waarom-ons': '/over',
  },
});
