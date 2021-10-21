import React from "react";

class Button extends React.Component {
    constructor() {
        super();
        this.botao = this.botao.bind(this);
        this.state = {
            cliquesBotao: 0,
        }
    }
    botao() {
        this.setState((estadoAnterior, _props) => ({
            cliquesBotao: estadoAnterior.cliquesBotao + 1,
        }))
    }
    render() {
        const {text} = this.props;
        return (
        <div onClick={this.botao} className="botao" >
            <div>
            {text}
            </div>
            <p>
            nº cliques: {this.state.cliquesBotao}
            </p>
        </div>)
    }
}

export default Button