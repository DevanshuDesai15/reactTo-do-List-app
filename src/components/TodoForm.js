import React,{useState, useEffect, useRef} from 'react'
import TextField from '@mui/material/TextField';

function TodoForm(props) {

    const [input, setinput] = useState(props.edit ? props.edit.value : '')

    const inputref = useRef(null)
    useEffect(() => {
        inputref.current.focus()
    })

    const handleChange = e =>{
        setinput(e.target.value)
    }
    const handleSubmit = e =>{
        e.preventDefault();
         
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setinput('')
    };

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (<>
            <input 
            type='text' 
            placeholder='Update item' 
            value={input}
            name='text' 
            className='todo-input edit' 
            onChange={handleChange}
            ref={inputref}/>
            <button className='todo-button'>Update</button> 
            </>) : (<>
            <input type='text' placeholder='Add a todo' value={input}
            name='text' className='todo-input' onChange={handleChange}
            ref={inputref}/>
            <button className='todo-button edit'>Add todo</button></>
        )}
        </form>
    )
}

export default TodoForm
