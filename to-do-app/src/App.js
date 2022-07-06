import React, { useState } from "react";
import './App.css';
import MainScreen from "./components/mainScreen";
import TodoApp from "./components/TodoApp/TodoApp";
import CalculatorApp from "./components/CalculatorApp/CalculatorApp";
import TempConvApp from "./components/TemperatureConverterApp/TempConvApp";

function App() {
  const [appDisplayed, setAppDisplayed] = useState("null");
  
  console.log(appDisplayed)

  
  function appChange(evt) {
    const { value } = evt.target;
    setAppDisplayed(value);
  }

  return(
    <div className="App-main">
      <div className="home">
        <h1>Simple Productivity</h1>
        <h2>Productivity Is Our Vision And Simplicity Is Our Key</h2>
      </div>

      <form id='appMenu'>
        <select id="appSelector" onChange={appChange}>
          <option key="null" value="null">Select An App</option>
          <option key="todoApp" value="todoApp">Todo-List ✔️</option>
          <option key="calcApp" value="calcApp">Calculator 🧮</option>
          <option key="tempApp" value="tempApp">Temperaure Converter 🌡️</option>
        </select>
      </form>
      
      <div id="mainScreen" hidden={appDisplayed === "null" ? false : true}>
        <MainScreen />
      </div>
      <div id="todoApp" hidden={appDisplayed === "todoApp" ? false : true}>
        <TodoApp/>
      </div>
      <div id="calcApp" hidden={appDisplayed === "calcApp" ? false : true}>
        <CalculatorApp/>
      </div>
      <div id="tempApp" hidden={appDisplayed === "tempApp" ? false : true}>
        <TempConvApp/>
      </div> 
    </div>
  )
}

export default App;
