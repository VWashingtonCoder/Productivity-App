import React from "react";
import { StyledTempBox } from "../../../styles/TempStyles";

export default function TempBox({data}) {
    const { celsius, fahrenheit, kelvin } = data;

    return (
        <StyledTempBox>
            <div className="temp">
                <div className="temp-name">Celsius: </div>
                <div className="temp-num">{celsius}°</div>
            </div>
            <div className="temp">
                <div className="temp-name">Fahrenheit: </div>
                <div className="temp-num">{fahrenheit}°</div>
            </div>
            <div className="temp">
                <div className="temp-name">Kelvin: </div>
                <div className="temp-num">{kelvin}°</div> 
            </div>
        </StyledTempBox>
    )
}