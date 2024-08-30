import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Toaster } from '@repo/ui-shadcn/ui/toaster';
import { Sonner } from '@repo/ui-shadcn/ui/sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <Sonner />
    <App />
  </React.StrictMode>,
);
