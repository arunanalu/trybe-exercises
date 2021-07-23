import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon-card">
        <h2 className="pokemon-name">{ pokemon.name }</h2>
        <h3 className="pokemon-type">{ pokemon.type }</h3>
        <img className="pokemon-img" src={ pokemon.image } alt="img" />
        <h4 className="pokemon-weight">Weight: { pokemon.averageWeight.value } kg</h4>
        <div className="more-info">
          <a target="_blank" rel="noreferrer" className="pokemon-more" href={ pokemon.moreInfo }>More info</a>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
}

export default Pokemon;