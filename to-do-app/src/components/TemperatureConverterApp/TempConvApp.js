import React, { useState } from "react";
import { StyledTempApp } from "../../styles/TempStyles";
import TempBox from "./temp-components/TempBox";
import TempForm from "./temp-components/TempForm";


const intialData = {
    tempNums: {
        celsius: "0",
        fahrenheit: "32",
        kelvin: "273.15"
    },
    formValues: {
        scale: "celsius",
        num: "",
    }
}

export default function TempConvApp() {
    const [temp, setTemp] = useState(intialData.tempNums)
    const [formData, setFormData] = useState(intialData.formValues)
    
    //Helper
    function convertTemps(formData) {
        const { scale, num } = formData
        if(scale === "celsius") {
            setTemp({
                ...temp,
                celsius: (+num).toFixed(2),
                fahrenheit: (((+num) * (9/5)) + 32).toFixed(2),
                kelvin: ((+num) + 273.15).toFixed(2),
            })
        } else if(scale === "fahrenheit") {
            setTemp({
                ...temp,
                celsius: (((+num) - 32) * (5/9)).toFixed(2),
                fahrenheit: (+num).toFixed(2),
                kelvin: ((((+num) - 32) *(5/9)) + 273.15).toFixed(2), 
            })
        } else if(scale === "kelvin") {
            setTemp({
                ...temp,
                celsius: ((+num) - 273.15).toFixed(2),
                fahrenheit: ((((+num) - 273.15) * (9/5)) + 32).toFixed(2),
                kelvin: (+num).toFixed(2),
            })
        }
    } 
    //Handlers
    const updateForm = ((inputName, inputValue) => {
        setFormData({...formData, [inputName]: inputValue})
    }) 
    
    const submitForm = () => {
        const newData = {
            scale: formData.scale,
            num: formData.num,
        }
        convertTemps(newData)
        setFormData(intialData.formValues);
        ;
    } 

    return (    
        <StyledTempApp>
            <h2>Simple Temperature Converter</h2>
            <TempBox data={temp}/>
            <TempForm data={formData} update={updateForm} submit={submitForm}/>
        </StyledTempApp>
    )
}
