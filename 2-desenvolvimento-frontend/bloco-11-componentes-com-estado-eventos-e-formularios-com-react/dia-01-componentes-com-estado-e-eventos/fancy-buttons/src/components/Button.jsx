import React from "react";

class Button extends React.Component {
    constructor() {
        super();
        this.botao = this.botao.bind(this);
    }
    botao({target}) {
        console.log(target.innerText ===
            'Botão 1'?
            'Clicou Botão 1' : ( target.innerText === 'Botão 2' ?
            'Clicou Botão 2' : 'Clicou botão 3'));
    }
    render() {
        const {text} = this.props;
        return (<div onClick={this.botao} className="botao" >
            {text}
        </div>)
    }
}

export default Button