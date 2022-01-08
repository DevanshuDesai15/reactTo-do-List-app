import React, {useState} from 'react'
import TodoForm from './TodoForm'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Todo({todos,completeTodo, removeTodo, updateTodo}) {

    const [edit, setedit] = useState({
        id: null,
        value:""
    })

    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setedit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }

    return todos.map((todo, index)=>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
             key={index}>
                 <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                     {todo.text}
                 </div>
                 <div className='icons'>
                     <DeleteForeverIcon
                     onClick={()=> removeTodo(todo.id)}
                     className='delete-icon'
                     />
                     <HistoryEduIcon
                     onClick={()=> setedit({id: todo.id, value: todo.text })}
                     className='edit-icon'/>
                 </div>
             </div>
    ))
}

export default Todo
