import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Get the root element
const rootElement = document.getElementById('root')

// Only render if rootElement exists
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  console.error("Could not find root element with id 'root'")
}
