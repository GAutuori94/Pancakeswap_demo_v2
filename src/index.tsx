import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './route';
import Container from './components/shared'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Router />
      </Container>
    </BrowserRouter>
  </React.StrictMode>
)