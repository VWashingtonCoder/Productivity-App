import React, { useState } from "react";
import { StyledTodoForm } from "../../../styles/TodoStyle";

export default function TodoForm({ addTodo }){
    const [value, setValue] = useState("");
  
    const handleSubmit = evt =>  {
      evt.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return(
      <StyledTodoForm className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-input"
          value={value}
          onChange={evt => setValue(evt.target.value)}
        />
        <input type="submit" className="submit"/>
      </StyledTodoForm>
    )
  }