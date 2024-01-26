import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GeneralErrorBoundary } from './components/error-boundaries/general-error-boundary/general-error-boundary.tsx';
import { ModalProvider } from './context/modal-context/modal-context.tsx';
import { ThemeProvider } from './context/theme-context/theme-context.tsx';
import { Loader } from './components/common/loader/loader.tsx';
import { CssBaseline } from '@mui/material';
import './styles/global.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GeneralErrorBoundary>
        <ModalProvider>
          <Suspense fallback={<Loader/>}>
            <CssBaseline/>
            <App/>
          </Suspense>
        </ModalProvider>
      </GeneralErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);
