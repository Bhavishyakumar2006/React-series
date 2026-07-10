import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router'
import Home from './Components/Home'
import User from './Components/User'
// import './App.css'

function App() {
  
  return (
    <>
    <Header />  
    <Outlet />
    <Footer />
    </>
  )
}

export default App
