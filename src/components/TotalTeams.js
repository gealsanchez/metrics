import { useSelector } from 'react-redux';
import WorldMap from '../assets/images/world-map.svg';
import Search from './Search';

const TotalTeams = () => {
  const players = useSelector((state) => state.players.players);
  const totalViews = players.reduce((total, country) => total + +country.id, 0);

  return (
    <section className="total-world">
      <img className="world-map-img" src={WorldMap} alt="world map" />
      <div className="total-world-container-text">
        <p className="city-text">
          Please check the NBA DB about teams & players
        </p>
        <p className="text-views">
          <span className="player-views">{totalViews}</span>
          views
        </p>
        <Search />
      </div>
    </section>
  );
};

export default TotalTeams;
