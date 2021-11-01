import React from 'react';

class PokemonCard extends React.Component {
    render(){
        const {pokemon} = this.props;
        return (
            <>
            <div className="pokemon-card">
                <img src={pokemon.image} alt={pokemon.name} />
                <h3>
                    {pokemon.name}
                </h3>
                <h4>
                    {pokemon.type}
                </h4>
                <h4>
                    Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit} 
                </h4>
            </div>
            </>
        )
    }
}

export default PokemonCard