import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from 'next-themes'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './ErrorBoundary.tsx'
import { LocaleProvider } from './context/LocaleContext.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>,
)
