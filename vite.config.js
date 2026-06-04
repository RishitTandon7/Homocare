import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    {
      name: 'homeocare-jsx-loader',
      enforce: 'pre',
      transform(code, id) {
        if (!id.endsWith('/Homeocare.js') && !id.endsWith('\\Homeocare.js')) {
          return null;
        }

        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic'
        });
      }
    },
    react(),
    tailwindcss()
  ]
});
