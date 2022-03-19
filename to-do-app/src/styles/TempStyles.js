import styled from "styled-components";

const StyledTempApp = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    padding-bottom: 25px;
    border: 5px solid;
    margin-bottom: 15px;
`
const StyledTempBox = styled.div`
    background: #e8e8e8;
    border-radius: 7px;
    max-width: 400px;        
    padding: 10px;
    width: 300px;       
    background-color: #485461;
    margin-bottom: 5px;
    .temp{
        display: flex;
        justify-content: space-between;
        background: #fff;
        border-radius: 3px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 6px;
        padding: 10px;    
    }
`
const StyledTempForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    padding: 5px 0;
    background-color: #485461;
    width: 300px;
    border-radius: 7px;
    max-width: 400px;        
    padding: 10px;
    .num-input{
        width: 60px;
    }
`

export { StyledTempApp, StyledTempBox, StyledTempForm }