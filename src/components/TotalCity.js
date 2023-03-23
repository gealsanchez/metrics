import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const TotalCity = ({ citySelected }) => {
  const players = useSelector((state) => state.players.players);
  let totalCountryViews = 0;
  players.forEach((player) => {
    if (player.city === citySelected.city) {
      totalCountryViews += +player.id;
    }
  });

  return (
    <section className="total-city">
      <img className="world-map-img" src={citySelected.image} alt="World Map" />
      <div className="total-world-container-text">
        <h2 className="name-city">{citySelected.city}</h2>
        <h2 className="name-city">{citySelected.team}</h2>
        <p className="text-views">{totalCountryViews}</p>
      </div>
    </section>
  );
};

export default TotalCity;

TotalCity.propTypes = {
  citySelected: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    team: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
