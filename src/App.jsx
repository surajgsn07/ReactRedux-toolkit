import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-[70%] flex flex-col justify-center items-center border-2 p-5 mx-[auto] rounded-lg bg-slate-800 text-white'>
    <div className='font-semibold text-3xl m-3'>Todo list</div>
    <AddTodo/>
    <Todos/>
    </div>
    </>
  )
}

export default App
