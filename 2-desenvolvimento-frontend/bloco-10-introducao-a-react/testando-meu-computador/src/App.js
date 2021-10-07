import './App.css';
import React from 'react';

class Text extends React.Component {
  render(){
    const textJSX = 'Hello, JSX';
    return <h1>{textJSX}</h1>;
  }
}

function merdaDeRelogio() {
  return new Date().toLocaleTimeString();
}

function Horas () {
  
  const hora = merdaDeRelogio();
  console.log(hora);
  return `Agoras são ${hora}`;
}

function App() {
  
  return (<div className="App-header">
            <Text></Text>
            <Horas></Horas>
          </div>); 
}
export default App;
