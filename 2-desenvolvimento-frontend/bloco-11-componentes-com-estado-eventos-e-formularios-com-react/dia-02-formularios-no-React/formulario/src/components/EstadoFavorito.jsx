import React from 'react';

class EstadoFavorito extends React.Component {
    render() {
        const {setEstadoFavorito} = this.props;
        return (
        <label>
        {'Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)'}
        <textarea 
            name="estadoFavorito" 
            onChange={setEstadoFavorito} />
        </label>
        )
    }
}

export default EstadoFavorito