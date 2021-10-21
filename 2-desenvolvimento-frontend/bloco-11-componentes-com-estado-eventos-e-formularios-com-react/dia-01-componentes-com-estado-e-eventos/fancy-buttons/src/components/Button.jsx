import React from "react";

class Button extends React.Component {
    render() {
        const {text, botao} = this.props;
        return (<div onClick={botao} className="botao" >
            {text}
        </div>)
    }
}

export default Button