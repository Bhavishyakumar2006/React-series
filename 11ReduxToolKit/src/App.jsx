import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { store } from './app/Store'
import { Provider } from 'react-redux'


function App() {

  return (
    <Provider store={store}>
    <AddTodo />
    <Todos />
    </Provider>
  )
}

export default App
