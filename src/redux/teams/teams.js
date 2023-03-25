import { createAsyncThunk } from '@reduxjs/toolkit';
import TeamService from '../../services/TeamService';
import city0 from '../../assets/images/city0.svg';
import city1 from '../../assets/images/city1.svg';
import city2 from '../../assets/images/city2.svg';
import city3 from '../../assets/images/city3.svg';
import city4 from '../../assets/images/city4.svg';
import city5 from '../../assets/images/city5.svg';
import city6 from '../../assets/images/city6.svg';
import city7 from '../../assets/images/city7.svg';
import city8 from '../../assets/images/city8.svg';
import city9 from '../../assets/images/city9.svg';
import city10 from '../../assets/images/city10.svg';

const initialState = {
  cities: [],
};

const images = [city0, city1, city2, city3, city4, city5, city6, city7, city8, city9, city10];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export const fetchTeams = createAsyncThunk(
  'cities/fetchTeams',
  async () => {
    const response = await TeamService.getAll();
    const data = response.data.data.map((team) => ({
      id: team.id,
      name: team.name,
      city: team.city,
      image: images[getRandomInt(10)],
    }));
    return data;
  },
);

export const searchCity = (city) => ({
  type: 'cities/searchCity',
  payload: city,
});

const teamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'cities/fetchTeams/fulfilled':
      return {
        ...state,
        cities: action.payload,
      };
    case 'cities/searchCity':
      return {
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;
