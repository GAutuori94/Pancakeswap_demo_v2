import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './route';
import { SymbolsContextProvider } from './components/context/symbolsContext';
import './style/index.css'
import {ThemeProvider} from './components/context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <SymbolsContextProvider>
        <Router />
      </SymbolsContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
