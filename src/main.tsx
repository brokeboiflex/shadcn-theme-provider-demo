import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "shadcn-theme-provider"
import "./index.css"
import App from "./App.tsx"

const themes = {
  default: "/themes/default.css",
  ocean: "/themes/ocean.css",
  rose: "/themes/rose.css",
  "candy land": "/themes/candy-land.css",
  "neo brutalism": "/themes/neo-brutalism.css",
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider themes={themes} defaultMode="light" defaultPalette="default">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
