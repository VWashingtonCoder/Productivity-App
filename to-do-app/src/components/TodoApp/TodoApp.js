/* Imports */
import React, { useState } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
/* Style */
const StyledTodoApp = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    border: 5px solid;
    .todo-list {
        background: #e8e8e8;
        border-radius: 4px;
        max-width: 400px;
        padding: 5px;
        width: 300px;
        margin: 10px 0 25px;
    }
    .todo {
        align-items: center;
        background: #fff;
        border-radius: 3px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
        display: flex;
        font-size: 12px;
        justify-content: space-between;
        margin-bottom: 6px;
        padding: 3px 10px;
    }
    .todo-form{
        display: flex;
        justify-content: center;
    }
    .input{
        width: 200px;
    }
`
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
        const newTodos = [...todos, { text }];
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
          <h1>Simple To-Do App</h1>
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