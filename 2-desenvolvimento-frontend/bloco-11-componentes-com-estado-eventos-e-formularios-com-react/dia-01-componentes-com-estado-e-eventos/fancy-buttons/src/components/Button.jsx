import React from "react";

class Button extends React.Component {
    constructor() {
        super();
        this.botao = this.botao.bind(this);
        this.state = {
            cliquesBotao: 0,
        }
    }
    botao({target}) {
        this.setState((estadoAnterior, _props) => ({
            cliquesBotao: estadoAnterior.cliquesBotao + 1,
        }))
        if (this.state.cliquesBotao % 2 === 0) {
            target.style.backgroundColor = 'green';
        } else {
            target.style.backgroundColor = 'red';
        }
        

    }
    render() {
        const {text} = this.props;
        return (
        <div onClick={this.botao} className="botao" >
            {`${text}:
            nº cliques: ${this.state.cliquesBotao}`}  
        </div>)
    }
}

export default Button