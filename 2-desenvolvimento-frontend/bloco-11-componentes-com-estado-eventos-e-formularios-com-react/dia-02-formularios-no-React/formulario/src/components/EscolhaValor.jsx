import React from 'react';

class EscolhaValor extends React.Component {
    render() {
      const {setEscolhaValor} = this.props;
      return (
      <select onClick={setEscolhaValor} name='escolhaValor'>
        <option value="">Escolha um valor</option>
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </select>
      )
    }
}

export default EscolhaValor;