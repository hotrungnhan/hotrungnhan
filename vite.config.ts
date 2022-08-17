/* eslint-disable no-undef */
import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import shimReactPdf from 'vite-plugin-shim-react-pdf'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // eslint-disable-next-line no-undef
  const isDev = command == 'serve'
  return {
    plugins: [
      react(),
      eslint({
        exclude: ['node_modules/**'],
      }),
      shimReactPdf(),
      createHtmlPlugin({
        minify: true,
        entry: 'src/main.tsx',
        inject: {
          data: { dev: isDev },
        },
      }),
    ],
    build: {
      commonjsOptions: {
        include: ['tailwind.config.cjs'],
      },
    },
    optimizeDeps: {
      include: [path.resolve(__dirname, 'tailwind.config.cjs')],
    },
    resolve: {
      alias: {
        'tailwind.config.cjs': path.resolve(__dirname, 'tailwind.config.cjs'),
      },
    },
  }
})
