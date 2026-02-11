import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'icon512_maskable.png',
        'icon512_rounded.png',
        'vite.svg',
        'react.svg'
      ],

      manifest: {
        theme_color: '#f4f93c',
        background_color: '#2EC6FE',

        name: 'MyTestApp',
        short_name: 'Testik',

        start_url: '/',
        display: 'standalone',

        icons: [
          {
            src: 'icon512_maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icon512_rounded.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },

      workbox: {
        navigateFallback: '/index.html',
      }
    })
  ]
})
