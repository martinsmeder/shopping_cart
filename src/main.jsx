import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';
import './styles/root.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/home.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
