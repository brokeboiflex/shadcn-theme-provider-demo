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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider themes={themes} defaultMode="light" defaultPalette="default">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
