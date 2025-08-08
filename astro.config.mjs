// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Cambia por tu dominio real
  site: 'https://amandacabellopino-abogada.com',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel()
});