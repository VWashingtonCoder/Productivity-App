import React from "react";

export default function Todo({ todo, index, completeTodo, undoTodo, removeTodo }) {
    return (
      <div 
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button 
            onClick={() => completeTodo(index)} 
            onDoubleClick={() => undoTodo(index)}>
            Complete
          </button>
          <button onClick={() => removeTodo(index)}>
            Delete
          </button>
        </div>
      </div>
    );
  }