import React from "react";
import { StyledTempForm } from "../../../styles/TempStyles";



export default function TempForm({data, update, submit}) {
    const { scale, num } = data
    
    const onChange = e => {
        const name = e.target.name
        const value = e.target.value
        update(name, value)
    }
    const onSubmit = e => {
        e.preventDefault()
        submit()
    }
    
    return (
        <StyledTempForm onSubmit={onSubmit}>
            <input
                className="num-input"
                type="number"
                name="num"
                placeholder="Temp#"
                value={num}
                onChange={onChange}
            />
            <select value={scale} name="scale" onChange={onChange}>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>
            <input type="submit" className="submit"/>
        </StyledTempForm>
    )
}