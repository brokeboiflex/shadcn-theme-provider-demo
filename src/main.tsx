import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "shadcn-theme-provider"
import "./index.css"
import App from "./App.tsx"
import { themeOptions } from "./theme"

// Preload all theme CSS files so switching is instant
for (const href of Object.values(themeOptions.themes)) {
  const link = document.createElement("link")
  link.rel = "preload"
  link.as = "style"
  link.href = href
  document.head.appendChild(link)
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* The init script in index.html (vite.config.ts) applied these before paint. */}
    <ThemeProvider {...themeOptions}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
