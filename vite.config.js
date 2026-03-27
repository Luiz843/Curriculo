/**
 * @file vite.config.js
 * @description Configuração do Vite com suporte a React e ambiente de testes Vitest.
 * @author Luiz Carlos Polli <lcpolli@ucs.br>
 * @copyright 2025 Luiz Carlos Polli
 * @license MIT
 * @version 1.0.0
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base path para GitHub Pages: https://luiz843.github.io/Curriculo/
  base: '/Curriculo/',

  test: {
    // Simula o DOM do navegador usando jsdom
    environment: 'jsdom',

    // Permite usar describe/it/expect sem importar explicitamente
    globals: true,

    // Arquivo de setup global — importa @testing-library/jest-dom
    setupFiles: './src/test/setup.js',

    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**'],
      exclude: [
        'src/test/**',
        'src/main.jsx',
        '**/*.styles.js',
      ],
    },
  },
});
