/* Imports */
import React, { useState } from "react";
import { StyledTodoApp } from "./todo-components/TodoStyle";
import Todo from "./todo-components/Todo";
import TodoForm from "./todo-components/TodoForm";

/* Data */
const intialList = [
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
  ]

export default function TodoApp() {
    const [todos, setTodos] = useState(intialList);
    
      const addTodo = text => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
      }
    
      const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      }

      const undoTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = false;
        setTodos(newTodos);
      }
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      }
    
      return (
        <StyledTodoApp>
          <h2>Simple To-Do App</h2>
          <div className="todo-list">
            {todos.map((todo, index) => (
              <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                undoTodo={undoTodo}
                removeTodo={removeTodo}
              />
            ))}
            <TodoForm addTodo={addTodo} />
          </div>  
        </StyledTodoApp>
      );
    }