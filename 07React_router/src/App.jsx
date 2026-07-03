import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router'
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
