import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./todoSlice";
import Todo from "./Todo";

export function TodoList () {
    const todos = useSelector((state) => state.todos.value)
    const dispatch = useDispatch();
    console.log(todos)
    
    return (
        <div>
            <h3>Todos:</h3>
            {todos.map((todo,id)=> (
                <Todo key={id} todoText={todo.todoText} removeTodo={() => dispatch(remove(id))} />
            ))}
        </div>
    )
    
}