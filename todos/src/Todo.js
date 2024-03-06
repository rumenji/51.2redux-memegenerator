import React from "react";
import "./Todo.css"
function Todo({ removeTodo, todoText, id }) {

    const handleDelete = () => {
        removeTodo(id)
    }

    return (
        <div>
            <p className="text">{todoText}</p>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Todo;