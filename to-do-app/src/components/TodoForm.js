import React, { useState } from "react";

export default function TodoForm({ addTodo }){
    const [value, setValue] = useState("");
  
    const handleSubmit = evt =>  {
      evt.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return(
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={evt => setValue(evt.target.value)}
        />
      </form>
    )
  }