import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync, existsSync } from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [
        react(),
        {
          name: 'copy-cname',
          closeBundle() {
            // Copy CNAME file to dist folder
            const cnamePath = path.resolve(__dirname, 'public/CNAME');
            const distPath = path.resolve(__dirname, 'dist/CNAME');
            if (existsSync(cnamePath)) {
              copyFileSync(cnamePath, distPath);
            }
          }
        }
      ],
      base: '/enspire/', // GitHub Pages base path
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      server: {
        port: 3000,
        open: true,
        host: true
      }
    };
});
