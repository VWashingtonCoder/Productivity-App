import styled from "styled-components";

const StyledCalcApp = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    border: 5px solid;
    margin-bottom: 15px;
    .calculator {
        width: 340px;
        height: 540px;
        padding: 10px;
        border-radius: 10px;
        background-color: #485461;
        background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
        margin-bottom: 25px;
    }
    .btn-box {
        width: 100%;
        height: calc(98% - 110px);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-gap: 10px;
    }
    .btn-box .equals{
        background-color: rgb (243, 61, 29);
        grid-column: span 2;
    }
    .equals:hover {
        background-color: rgb(228, 39, 15);
    }
`
const StyledScreen = styled.div`
    height: 100px;
    width: 100%;
    margin-bottom: 10px;
    padding: 0 10px;
    background-color: #4357692d;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
    font-weight: bold;
    box-sizing: border-box;
    font-size: 40px;
`
const StyledButtons = styled.div`
    border: none;
    background-color: rgb(80, 60, 209);
    font-size: 24px;
    color: rgb(255, 255, 255);
    font-weight: bold;
    cursor: pointer;
    border-radius: 10px;
    outline: none;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        background-color: rgb(61, 43, 184);
    }
`
export { StyledCalcApp, StyledScreen, StyledButtons }