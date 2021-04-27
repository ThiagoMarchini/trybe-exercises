import React, { Component } from 'react';
import data from '../data'
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      data.map((pokemon, index) => <Pokemon name={pokemon.name} type={pokemon.type} image={pokemon.image} averageWeight={pokemon.averageWeight} key={index}/>)
    )
  }
}
export default Pokedex;