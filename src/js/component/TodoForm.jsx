import PropTypes from "prop-types";
import React, {useState} from "react";

function TodoForm (props) {
    const [input, setInput]= useState('');
    const handleChange=e=> {

        setInput (e.target. value)

    }
    const handleSubmit = e => {
        e.preventDefault();

    props.onSubmit ({
        id:Math.floor(Math.random()*10000),
        text: input
    });

       setInput ('')
    };


    return (

        <form className="todo-form" onSubmit={handleSubmit}> 
        <input type="type"placeholder="Add to todo" value={input} name="text" className="todo-input" 
        onChange={handleChange}/>
        <button className="Todo-button">Add todo</button>
        </form>
       
    )
}
export default TodoForm;