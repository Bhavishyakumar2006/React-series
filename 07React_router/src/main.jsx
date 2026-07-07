import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: "",
      element: <Home />
    },
    {
    path: '/About',
    element: <About />
    },
    {
      path: '/Contact',
      element: <Contact />
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <StrictMode>
   <RouterProvider router={router}/>
 </StrictMode>
 
)
