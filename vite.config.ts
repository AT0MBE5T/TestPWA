import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, type ManifestOptions } from 'vite-plugin-pwa'

const manifest: false | Partial<ManifestOptions> | undefined =
  {
  "theme_color": "#f4f93c",
  "background_color": "#2EC6FE",
  "icons": [
    {
      "purpose": "maskable",
      "sizes": "512x512",
      "src": "icon512_maskable.png",
      "type": "image/png"
    },
    {
      "purpose": "any",
      "sizes": "512x512",
      "src": "icon512_rounded.png",
      "type": "image/png"
    }
  ],
  screenshots:
  [
    {
      src: './screenshots/desktop.png',
      type: 'image/png',
      sizes: '189x193',
      form_factor: 'wide'
    },
    {
      src: './screenshots/mobile.png',
      type: 'image/png',
      sizes: '200x42',
      form_factor: 'narrow'
    }
  ],
  "orientation": "any",
  "display": "standalone",
  "lang": "en-EN",
  "name": "MyTestApp",
  "short_name": "Testik",
  "start_url": "/"
};

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ["**/*.{html, css, js, ico, png, svg}"]
  },
  manifest: manifest
});

export default defineConfig({
  plugins: [react(), vitePWA],
})
