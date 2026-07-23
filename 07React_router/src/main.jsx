import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import User from './Components/User.jsx';
import Github, {githubApiData} from './Components/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [{
//       path: "",
//       element: <Home />
//     },
//     {
//     path: '/About',
//     element: <About />
//     },
//     {
//       path: '/Contact',
//       element: <Contact />
//     }
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='User/:id' element={<User />} />
      <Route loader={githubApiData} path='Github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
 <StrictMode>
   <RouterProvider router={router}/>
 </StrictMode>
 
)
