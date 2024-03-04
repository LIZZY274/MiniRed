import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sprint from './Pages/Sprint.jsx';
import ProfileForm1 from './components/ui/perfil/ProfileFrom1.jsx';
import Register from './Pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Sprint/>
  },
  {
    path: "/",
    element: <ProfileForm1/>
  },
  {
    path: "/register",
    element: <Register/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
