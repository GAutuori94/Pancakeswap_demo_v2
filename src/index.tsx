import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './route';
import { SymbolsContextProvider } from './components/context/symbolsContext';
import './style/index.css';
import Nav from './components/shared/Nav';
import Footer from './components/shared/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SymbolsContextProvider>
        <Nav />
        <Router />
        <Footer />
        
      </SymbolsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
