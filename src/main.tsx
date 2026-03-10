import React from 'react'
import ReactDOM from 'react-dom/client'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import Home from './app/page'
import Calculator from './app/calculator/page'
import About from './app/about/page'
import Contact from './app/contact/page'
import Docs from './app/docs/page'
import NotFound from './app/not-found'
import Layout from './app/layout'
import './app/globals.css'

const router = createMemoryRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'calculator', element: <Calculator /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'docs', element: <Docs /> },
      { path: '*' , element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)