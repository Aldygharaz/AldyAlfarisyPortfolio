import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './context/ThemeContext';
import '@fontsource-variable/jost';
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import '@fontsource-variable/playfair-display/wght-italic.css';
import './index.css';
import App from './App.tsx';
import ErrorBoundary from './ErrorBoundary.tsx';
import { LocaleProvider } from './context/LocaleContext.tsx';
import { initAnalytics } from './lib/analytics';

initAnalytics();

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </ErrorBoundary>,
);
