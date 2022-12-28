import React, {useState} from "react";
import Todo from "./Todo.jsx";
import TodoForm from "./TodoForm.jsx";

function TodoList (){
    const [todos,setTodos]= useState([]);

    const addTodo=Todo => {
          if (!Todo.text|| /^\ s*$/.test(Todo.text))
          {
            return
          }

          const newTodos= [Todo,...todos]
           setTodos (newTodos);
          
    } 
    const removeTodo =id=>{
    const removeArr= [...todos].filter (todo=> todo.id !==id)
    setTodos(removeArr)
    }


   const CompleteTodo = id => {
    let updatedTodos =Todo.map(todo=>{
        if (todo.id===id){
            todo.isComplete=!todo.isComplete
        }
        return todo;
    })
    setTodos(updated);
   }

    return (<div>

        <h1>Procrastinating is not an option here!!</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo 
        todos ={todos}
        completeTodo={CompleteTodo}removeTodo={removeTodo}/>
         </div>
        )
    }

    
    
    
         
        

export default TodoList;