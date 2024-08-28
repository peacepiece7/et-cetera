import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Sonner, Toaster } from '@repo/ui-shadcn';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <Sonner />
    <App />
  </React.StrictMode>,
);
