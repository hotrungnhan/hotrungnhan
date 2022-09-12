/* eslint-disable no-undef */
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteImagemin from 'vite-plugin-imagemin'
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
      createHtmlPlugin({
        minify: true,
        entry: 'src/main.tsx',
        inject: {
          data: { dev: isDev },
        },
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
  }
})
