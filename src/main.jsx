import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App"
import Projects from './pages/Projects'
import ProjectsLayout from './layouts/ProjectsLayout'
import FirstProject from "./pages/FirstProject"
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
  },
  {
    path:'/projects',
    element: <Projects />, 
  },
  {
    path:'/projects/details',
    element: <ProjectsLayout />,
    children: [
      {
      path:'/projects/details/pro',
      element: <FirstProject />,
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
