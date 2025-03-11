import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import NewFeatures from './pages/NewFeatures';
import Featured from './pages/Featured';
import Contact from './pages/Contact';
import About from './pages/About';
import Products from './pages/Products';

const root = ReactDOM.createRoot(document.getElementById('root'));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",  element: <Home />,
        },
        {
          path: "/products",  element: <Products />,
        },
        {
          path: "/new-features",  element: <NewFeatures />,
        },
        {
          path: "/featured",  element: <Featured />,
        },
        {
          path: "/about",  element: <About />,
        },
        {
          path: "/contact",  element: <Contact />,
        },
      ]
    }

  ])
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
