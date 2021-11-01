import React, { Component } from 'react'
import EscolhaValor from './EscolhaValor'
import EstadoFavorito from './EstadoFavorito'
class Form extends Component {
  constructor(props) {
    super(props);
    this.genericHandleChange = this.genericHandleChange.bind(this);
    this.state = {
      escolhaValor:'',
      estadoFavorito: '',
      idade:'',
      vaiComparecer:'',
      formularioComErros: true,
    };
  }

  genericHandleChange({target}) {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]:value,
    })
    if (!value) {
      this.setState({
        formularioComErros: true,
      })
    } else {
      this.setState({
        formularioComErros: false,
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
        <EscolhaValor 
        setEscolhaValor={this.genericHandleChange}
        />
        <EstadoFavorito 
        setEstadoFavorito={this.genericHandleChange}
        />
        <label htmlFor="idade">Idade:
          <input
          type="number"
          name="idade"
          onChange={this.genericHandleChange}
          />
          </label>
          <label htmlFor="vaiComparecer">Vai Comparecer?
          <input
            type="checkbox"
            name="vaiComparecer"
            onChange={this.genericHandleChange}
          />
          </label>
          <label htmlFor="">Insira seu formuário de inscrição:
          <input 
            type="file"
            name="enviarFormulario" 
          />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;