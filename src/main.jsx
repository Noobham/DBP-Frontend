import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Routes } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')).render(
  <Routes>
  <CookiesProvider>
    <App />
  </CookiesProvider>
  </Routes>,
)
