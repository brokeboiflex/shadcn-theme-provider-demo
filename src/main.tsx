import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "shadcn-theme-provider"
import "./index.css"
import App from "./App.tsx"

const base = import.meta.env.BASE_URL

const themes = {
  default: `${base}themes/default.css`,
  ocean: `${base}themes/ocean.css`,
  rose: `${base}themes/rose.css`,
  "candy land": `${base}themes/candy-land.css`,
  "neo brutalism": `${base}themes/neo-brutalism.css`,
}

// Preload all theme CSS files so switching is instant
for (const href of Object.values(themes)) {
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "style"
  link.href = href
  document.head.appendChild(link)
}

// Pick a random starting palette so the demo feels fresh each visit
const themeNames = Object.keys(themes)
const randomPalette = themeNames[Math.floor(Math.random() * themeNames.length)]

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider themes={themes} defaultMode="light" defaultPalette={randomPalette}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
