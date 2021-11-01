import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();
    this.genericHandleChange = this.genericHandleChange.bind(this);
    this.state = {
      escolhaValor:'',
      estadoFavorito: '',
      idade:'',
      vaiComparecer:''
    };
  }

  genericHandleChange({target}) {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]:value,
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <select onClick={this.genericHandleChange} name="escolhaValor">
          <option value="valor1">Valor 1</option>
          <option value="valor2">Valor 2</option>
          <option value="valor3">Valor 3</option>
        </select>
        <form className="form">
          <label>
            {'Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)'}
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.genericHandleChange} />
          </label>
          <input
            type="number"
            name="idade"
            onChange={this.genericHandleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            onChange={this.genericHandleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;