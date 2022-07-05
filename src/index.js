import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import 'react-image-lightbox/style.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { LanguageProvider } from './context';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>
);

serviceWorker.unregister();
