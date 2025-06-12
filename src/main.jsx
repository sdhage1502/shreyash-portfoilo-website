import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ThemeProviders from './components/ThemeProviders.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProviders>
      <App />
    </ThemeProviders>
  </StrictMode>,
)
