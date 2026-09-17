import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const prerenderedRoutes = ['/', '/about'];
const shouldHydrate =
  container.hasChildNodes() &&
  prerenderedRoutes.includes(window.location.pathname);

if (shouldHydrate) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
