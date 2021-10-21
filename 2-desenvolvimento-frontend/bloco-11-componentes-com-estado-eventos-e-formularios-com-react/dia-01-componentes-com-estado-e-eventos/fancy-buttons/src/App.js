import './App.css'
import React from "react";
import Button from "./components/Button"

const botao1 = () => {
  console.log('Este é o botão 1');
}
const botao2 = () => {
  console.log('Este é o botão 2');
}
const botao3 = () => {
  console.log('Este é o botão 3');
}

class App extends React.Component {
  render() {
    return(
    <div className="flex">
      <Button botao={botao1} text="Botão 1"/>
      <Button botao={botao2} text="Botão 2"/>
      <Button botao={botao3} text="Botão 3"/>
    </div>)
  }
}

export default App;
