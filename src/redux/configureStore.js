import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './teams/teams';
import playersReducer from './players/players';

const store = configureStore({
  reducer: {
    players: playersReducer,
    cities: teamsReducer,
  },
});

export default store;
