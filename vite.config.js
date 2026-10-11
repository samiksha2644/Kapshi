import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'legacy-asset-rewrite',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/KAPSHI_WEBSITE_ASSETS/')) {
            req.url = req.url.replace('/KAPSHI_WEBSITE_ASSETS/', '/assets/');
            if (req.url.startsWith('/assets/film/')) {
              req.url = req.url.replace('/assets/film/', '/assets/video/');
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    host: true
  }
})
