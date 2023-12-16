import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ActiveSectionProvider } from './contexts/ActiveSection.context.tsx'
import { ThemeProvider } from './contexts/Theme.context.tsx'

import './global.styles.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ActiveSectionProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ActiveSectionProvider>
  </React.StrictMode>,
)
