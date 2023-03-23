import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ShowIcon from '../assets/images/ShowIcon.png';

const Players = ({ citySelected }) => {
  const players = useSelector((state) => state.players.players);

  return (
    <ul className="list-players">
      {players.map((player) => {
        if (player.city === citySelected.city) {
          return (
            <li className="player-container" key={player.id}>
              <h2 className="city-text">{player.name}</h2>
              <h2 className="city-text">{player.lname}</h2>
              <div className="player-list-container-views">
                <p className="text-views">
                  <span className="player-views">{player.id}</span>
                  views
                </p>
                <button type="button" className="show-icon"><img src={ShowIcon} alt="Show icon" /></button>
              </div>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Players;

Players.propTypes = {
  citySelected: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    name: PropTypes.string,
    lname: PropTypes.string,
  }).isRequired,
};
