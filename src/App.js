import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import List from './pages/List';
import { fetchTeams } from './redux/teams/teams';
import { fetchPlayers } from './redux/players/players';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchTeams());
  dispatch(fetchPlayers());

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:id" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
