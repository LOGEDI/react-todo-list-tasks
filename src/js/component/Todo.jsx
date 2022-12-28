import React ,{useState}from "react";
import TodoForm from "./TodoForm.jsx";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

 function Todo({todos,CompleteTodo ,removeTodo}) {
    const [edits,setEdits]=useState ({
        id: null,
        value:''
    })
    
    return todos.map((todo,index)=>(
        <div className={todo.isComplete ? 'todo -row complete':'todo-row'} key={index}>
         <div key={todo.id} onClick= {()=>CompleteTodo(todo.id)}>
            {todo.text}
         </div>
        <div className="icons">
            <RiCloseCircleLine onClick={ () =>removeTodo(todo.id)}
            className='delete-icon' />
            <TiEdit onClick={ () =>setEdits({id: todo.id, value: todo.text})}
            className='edits-icon' /> 
        </div>
       
        </div>
    ));
    
 }

 export default Todo;
