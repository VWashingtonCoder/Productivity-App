import styled from "styled-components";

const StyledTodoApp = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    .todo-list {
        background: #e8e8e8;
        border-radius: 7px;
        max-width: 400px;
        padding: 10px;
        width: 300px;
        margin-bottom: 25px;
        background-color: #485461;
    }
`
const StyledTodo = styled.div`
    align-items: center;
    background: #fff;
    border-radius: 3px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
    display: flex;
    font-size: 12px;
    font-weight: bold;
    justify-content: space-between;
    margin-bottom: 6px;
    padding: 10px;
    button {
        font-style: italic;
    }
`
const StyledTodoForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    padding: 5px 0;
    .text-input{
        width: 200px;
    }
`

export { StyledTodoApp, StyledTodo, StyledTodoForm }