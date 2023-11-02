import React from 'react';
import ReactDOM from 'react-dom/client';
// import Router from './components/router/Router';
import App from './components/App';
import './styles/root.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router /> */}
    <App />
  </React.StrictMode>
);
