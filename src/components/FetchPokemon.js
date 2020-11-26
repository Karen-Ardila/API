import React, { useState } from 'react';
import axios from 'axios';

const FetchPokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const callAPI = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(response => {
            setPokemon(response.data.results)
        });
    }
    return (
        <div>
            <button onClick={callAPI}>Fetch Pokemon</button>
            {pokemon.map(
                (item, index) => (
                    <p key={index}> {item.name} </p>
                )
                )}
        </div>
    )
}
export default FetchPokemon;