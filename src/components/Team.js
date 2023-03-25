import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ShowIcon from '../assets/images/ShowIcon.png';

const Team = (props) => {
  const {
    id, city, image,
  } = props;

  const players = useSelector((state) => state.players.players);
  let totalCountryViews = 0;
  players.forEach((player) => {
    if (player.city === city) {
      totalCountryViews += +player.id;
    }
  });

  return (
    <li className="city-container">
      <Link to={`/list/${id}`}>
        <button type="button" className="show-icon">
          <img src={ShowIcon} alt="Show Icon" />
        </button>
      </Link>
      <img src={image} className="map" alt="City" />
      <h2 className="city-text">{city}</h2>
      <p className="text-views">{totalCountryViews}</p>
    </li>
  );
};

export default Team;

Team.propTypes = {
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
