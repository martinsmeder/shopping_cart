import React from 'react';
import ReactDOM from 'react-dom/client';
// import Router from './components/router/Router';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import App from './components/App';
import './styles/root.css';
import './styles/nav.css';
import Exchange from './components/Exchange';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <nav>
          <div className='nav left'>
            <Link to='/'>HOME</Link>
            <Link to='/exchange'>EXCHANGE</Link>
          </div>
          <div className='nav right'>{/* <Link to='/cart'>CART</Link> */}</div>
        </nav>
        <Home />
      </>
    ),
  },
  {
    path: 'exchange',
    element: (
      <>
        <nav>
          <div className='nav left'>
            <Link to='/'>HOME</Link>
            <Link to='/exchange'>EXCHANGE</Link>
          </div>
          <div className='nav right'>{/* <Link to='/cart'>CART</Link> */}</div>
        </nav>
        <Exchange />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router /> */}
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
