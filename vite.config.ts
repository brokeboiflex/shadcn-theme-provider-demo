import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { getThemeScript } from "shadcn-theme-provider/script"
import { base, getRandomPaletteScript, themeOptions } from "./src/theme"

export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    {
      // Applies the stored mode and palette before the first paint; a
      // client-only app has no server-rendered script to do it.
      name: "theme-init-script",
      transformIndexHtml: () => [
        {
          tag: "script",
          children: getRandomPaletteScript() + getThemeScript(themeOptions),
          injectTo: "head-prepend",
        },
      ],
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
