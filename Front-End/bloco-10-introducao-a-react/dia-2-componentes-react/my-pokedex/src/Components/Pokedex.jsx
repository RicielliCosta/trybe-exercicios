import React from "react";
import pokemons from "../data";
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
    render() {
        const pokemonHtmlElement = pokemons.map((pokemon) => {
            return <Pokemon key={ pokemon.id } pokemon = { pokemon } />
        });
        return (
            <div> { pokemonHtmlElement }  </div>
        );
    }
}

export default Pokedex;
