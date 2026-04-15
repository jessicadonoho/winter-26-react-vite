import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    base:'/winter-26-react-vite/',
    babel({ presets: [reactCompilerPreset()] })
  ],
})
