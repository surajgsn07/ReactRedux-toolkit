import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {addTodo} from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setinput] = useState('')
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input))
        setinput('');
    }
  return (
        <form onSubmit={addTodoHandler}
        className='flex gap-4 w-full justify-center items-center'>
            <input 
            placeholder='Add todo'
            value={input}
            onChange={(e) => setinput(e.target.value)}
            type="text"
            className='rounded  p-2 w-[80%] text-black' />
            <button
            className='p-2 border-2 rounded bg-slate-400 text-black font-bold'
            type='submit'>
                Add
            </button>
        </form>
  )
}

export default AddTodo