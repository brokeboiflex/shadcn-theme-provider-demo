// React-free on purpose: vite.config.ts imports it to inline the theme init
// script into index.html, and main.tsx passes the same options to the provider.
import type { ThemeOptions } from "shadcn-theme-provider/script"

export const base = "/shadcn-theme-provider-demo/"

export const themeOptions = {
  themes: {
    default: `${base}themes/default.css`,
    ocean: `${base}themes/ocean.css`,
    rose: `${base}themes/rose.css`,
    "candy land": `${base}themes/candy-land.css`,
    "neo brutalism": `${base}themes/neo-brutalism.css`,
  },
  defaultMode: "light",
  defaultPalette: "default",
  paletteStorageKey: "shadcn-theme-palette",
} satisfies ThemeOptions

/**
 * Picks a random starting palette for a first visit, so the demo feels fresh.
 * It runs before the init script, which then applies the stored palette; the
 * provider persists whatever is chosen afterwards.
 */
export function getRandomPaletteScript() {
  const key = JSON.stringify(themeOptions.paletteStorageKey)
  const names = JSON.stringify(Object.keys(themeOptions.themes))
  return `try{if(!localStorage.getItem(${key})){var n=${names};localStorage.setItem(${key},n[Math.floor(Math.random()*n.length)])}}catch(e){}`
}
