import { createAsyncThunk } from '@reduxjs/toolkit';
import TeamService from '../../services/TeamService';
import city1 from '../../assets/images/city1.svg';
import city2 from '../../assets/images/city2.svg';
import city3 from '../../assets/images/city3.svg';
import city4 from '../../assets/images/city4.svg';
import city5 from '../../assets/images/city5.svg';
import city6 from '../../assets/images/city6.svg';

const initialState = {
  cities: [
    { id: 1433, image: city1, city: 'city' }, { id: 2346, image: city2, city: 'city' }, { id: 3780, image: city3, city: 'city' },
    { id: 4349, image: city4, city: 'city' }, { id: 587, image: city5, city: 'city' }, { id: 62, image: city6, city: 'city' },
    { id: 346, image: city2, city: 'city' }, { id: 13, image: city1, city: 'city' }, { id: 443, image: city4, city: 'city' },
    { id: 632, image: city6, city: 'city' }, { id: 6666, image: city2, city: 'city' }, { id: 53, image: city1, city: 'city' },
    { id: 234627, image: city5, city: 'city' }, { id: 3590, image: city3, city: 'city' }, { id: 4532, image: city6, city: 'city' },
    { id: 5871, image: city5, city: 'city' }, { id: 7, image: city5, city: 'city' }, { id: 9992, image: city3, city: 'city' },
    { id: 1434, image: city2, city: 'city' }, { id: 345, image: city4, city: 'city' }, { id: 111, image: city1, city: 'city' },
    { id: 1138, image: city6, city: 'city' }, { id: 904, image: city3, city: 'city' }, { id: 567, image: city1, city: 'city' },
    { id: 35, image: city5, city: 'city' }, { id: 78, image: city3, city: 'city' },
  ],
};

export const fetchTeams = createAsyncThunk(
  'cities/fetchTeams',
  async () => {
    const response = await TeamService.getAll();
    return response.data.data;
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
        cities: state.cities.map((city, index) => ({
          ...city,
          city: action.payload[index].city,
          team: action.payload[index].name,
        })),
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
