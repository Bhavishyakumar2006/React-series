import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("black");

  return (
    <>
    <div className='h-screen bg-black text-white flex justify-center items-center'
    style={{backgroundColor: color}}>
      <div className=' h-12 border-2 border-orange-600 rounded-3xl text-black bg-slate-700 p-2.5 mt-110'>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-red-500'
      onClick={()=>setcolor("red")}>red</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-blue-500'
      onClick={()=>setcolor("blue")}>blue</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-yellow-500'
      onClick={()=>setcolor("yellow")}>yellow</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-green-500'
      onClick={()=>setcolor("green")}>green</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-gray-500'
      onClick={()=>setcolor("gray")}>gray</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-pink-500'
      onClick={()=>setcolor("pink")}>pink</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-orange-500'
      onClick={()=>setcolor("orange")}>orange</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-white'
      onClick={()=>setcolor("white")}>white</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-purple-500'
      onClick={()=>setcolor("purple")}>purple</button>
      <button className=' border text-black w-14 h-6.5 rounded-3xl mr-2 bg-violet-500'
      onClick={()=>setcolor("violet")}>violet</button>
      </div>
    </div>
    </>
  )
}

export default App
