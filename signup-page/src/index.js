import React from 'react';
import { createRoot } from 'react-dom/client'; // New import for React 18
import './index.css';
import App from './App';

// Create a root and render the app
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);