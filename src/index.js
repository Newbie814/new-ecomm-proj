import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserContextProvider } from './contexts/user.context';
import { ProductsContextProvider } from './contexts/products.context';

import reportWebVitals from './reportWebVitals';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
          <App />
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
