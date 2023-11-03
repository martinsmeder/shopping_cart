import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router';
import './styles/root.css';
import './styles/nav.css';
import './styles/footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
