import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { store } from './app/Store'
import { Provider } from 'react-redux'


function App() {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  return (
    <Provider store={store}>
    <AddTodo isTodoEditable ={isTodoEditable} setIsTodoEditable={setIsTodoEditable} />
    <Todos isTodoEditable ={isTodoEditable} setIsTodoEditable={setIsTodoEditable} />
    </Provider>
  )
}

export default App
