import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // domínio próprio / root
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
