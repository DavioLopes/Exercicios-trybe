/* eslint-disable no-useless-constructor */
import React from 'react';
import PropTypes from 'prop-types';
import Pokemons from './Pokemons';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {
          pokemons.map((iten) => (
            <Pokemons key={ iten.name } poke={ iten }/>
          ))
        }
      </div>
    );
  }
}

Pokedex.propTypes = {
  poke: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pokedex;
