import './App.css'
import React from "react";
import Button from "./components/Button"

class App extends React.Component {


  render() {
    return(
    <div className="flex">
      <Button text="Botão 1"/>
      <Button text="Botão 2"/>
      <Button text="Botão 3"/>
    </div>)
  }
}

export default App;
