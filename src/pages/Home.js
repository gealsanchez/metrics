import TotalTeams from '../components/TotalTeams';
import Cities from '../components/Cities';

const Home = () => (
  <div>
    <TotalTeams />
    <div className="players-city">CITIES</div>
    <Cities />
  </div>
);

export default Home;
