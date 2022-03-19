import React from "react";
import { StyledTodo } from "../../../styles/TodoStyle";

export default function Todo({ todo, index, completeTodo, undoTodo, removeTodo }) {
    return (
      <StyledTodo
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          {todo.isCompleted === false ?
            <button onClick={() => completeTodo(index)}>
              Complete
            </button> :
            <button onClick={() => undoTodo(index)}>
              Undo
            </button>
          }
          
          <button onClick={() => removeTodo(index)}>
            Delete
          </button>
        </div>
      </StyledTodo>
    );
  }