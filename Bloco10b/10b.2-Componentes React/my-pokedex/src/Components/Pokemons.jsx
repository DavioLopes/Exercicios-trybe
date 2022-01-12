/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

class Pokemons extends React.Component {
  render() {
    const { poke: { id, name, type, averageWeight, image, moreInfo } } = this.props;
    return (
      <div className="pokemon">
        <div>
        <h1 >{ name }</h1>
        <h2 >{ type }</h2>
        <p>
          {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>

    )
  }
}
Pokemons.propTypes = {
  poke: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemons;