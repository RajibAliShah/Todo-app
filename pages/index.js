import { useState } from "react";

export default () =>{
    const [todos, setTodos] = useState( ["todo1", "todo2", "todo3"]);
    const  [todo, setTodo] = useState ( ``);
    const removeTodo = todo =>{
        setTodos(todos.filter(t => t != todo));
    };
    return(
        <>
        <input value = {todo} onCharge={e => setTodo(e.target.value)} />
        <button onClick = {() => setTodos ([...todos, todo])}>Add</button>
        {todos.map((todo, index) =>(
           <>
           <h1>{todo}</h1>
           <button onClick={() => removeTodo(todo)}>remove</button>
           </>
        ))}
        </>
    );
};