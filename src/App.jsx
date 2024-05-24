// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Home, Project, Contact } from './pages/index';
import Layout from './Layouts/Layouts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/project',
        element: <Project />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
