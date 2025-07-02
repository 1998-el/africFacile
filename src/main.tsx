import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom' // <-- Le BrowserRouter est ici !

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter> {/* <-- Il enveloppe bien toute votre application */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)