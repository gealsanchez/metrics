import { useDispatch } from 'react-redux';
import TotalTeams from '../components/TotalTeams';
import Cities from '../components/Cities';
import { fetchTeams } from '../redux/teams/teams';
import { fetchPlayers } from '../redux/players/players';

const Home = () => {
  const dispatch = useDispatch();
  dispatch(fetchTeams());
  dispatch(fetchPlayers());
  return (
    <div>
      <TotalTeams />
      <div className="players-city">CITIES</div>
      <Cities />
    </div>
  );
};

export default Home;
