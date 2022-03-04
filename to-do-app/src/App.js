import React, { useState } from "react";
import './App.css';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm"



function App() {
  const [todos, setTodos] = useState([
    { 
      text: "Get A Cup Of Coffee",
      isCompleted: false 
    },
    { 
      text: "Buy New Laptop",
      isCompleted: false
    },
    { 
      text: "Solve World Hunger",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>Simple To-Do App</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>  
    </div>
  );
}

export default App;
