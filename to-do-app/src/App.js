import React from "react";
import './App.css';
import TodoApp from "./components/TodoApp/TodoApp";
import CalculatorApp from "./components/CalculatorApp/CalculatorApp";
import TempConvApp from "./components/TemperatureConverterApp/TempConvApp";

function App() {
  return(
    <div className="App-main">
      <div className="home">
        <h1>Simple Productivity</h1>
        <h2>Productivity Is Our Vision And Simplicity Is Our Key</h2>
      </div>
      <div className="todoApp">
        <TodoApp/>
      </div>
      <div className="calcApp">
        <CalculatorApp/>
      </div>
      <div className="tempApp">
        <TempConvApp/>
      </div> 
    </div>
  )
}
  

export default App;
