import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
    <div className="pokedex">
      {pokemons.map((element) => {
        return <Pokemon pokemon = { element } key={ element.id } />
      })}
    </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Pokedex;
