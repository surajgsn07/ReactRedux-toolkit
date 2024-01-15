import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(removeTodo(id));
      };
  return (
    <div className='w-[100%] m-2'>
        <div className='font-semibold text-xl'>Todos</div>
        {todos.length == 0 ? <div className='mt-2 font-semibold text-xl p-2 border-2 rounded-xl'> Nothing to do for today </div> : todos.map((todo)=>(
            <li key={todo.id} className='m-1 border-2 p-2 rounded-xl list-none flex justify-between w-full items-center'>
                <div >
                    {todo.text}
                </div>
                <button
                className='bg-slate-400 p-1 text-black font-semibold rounded-2xl px-3'
                onClick={() => handleRemove(todo.id)}
                >X </button>
            </li>
        ))}
        
    </div>
  )
}

export default Todos