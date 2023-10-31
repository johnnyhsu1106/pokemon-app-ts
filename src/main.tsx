import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ViewportProvider } from './context/ViewportContext.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ViewportProvider>
      <App />
    </ViewportProvider>
  </React.StrictMode>,
)
