import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'KSRTC Bus Route',
        short_name: 'KSRTC Route',
        description: 'Bus route app from Vadakke Stand to Kuravapady',
        theme_color: '#1976d2',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          }
        ],
      },
      workbox: {
        // Cache everything under /src and index.html
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      }
    })
  ]
});
