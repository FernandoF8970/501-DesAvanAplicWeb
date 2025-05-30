import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { readdirSync, statSync } from 'fs'
import { join } from 'path'

function findHtmlFiles(dir: string, files: Record<string, string> = {}) {
  const entries = readdirSync(dir)
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    if (statSync(fullPath).isDirectory()) {
      findHtmlFiles(fullPath, files)
    } else if (entry.endsWith('.html')) {
      const name = fullPath
        .replace(/\\/g, '/')           
        .replace(/^.*src\//, '')       
        .replace(/\.html$/, '')        
      files[name] = fullPath
    }
  }
  return files
}

const inputHtmlFiles = findHtmlFiles(resolve(__dirname, 'src'))

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), 
        ...inputHtmlFiles
      }
    }
  }
})