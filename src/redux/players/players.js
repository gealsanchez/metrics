import { createAsyncThunk } from '@reduxjs/toolkit';
import PlayerService from '../../services/PlayerService';

const initialState = {
  players: [],
};

export const fetchPlayers = createAsyncThunk(
  'players/fetchPlayers',
  async () => {
    const response = await PlayerService.getAll();
    const playersList = response.data.data.map((player) => ({
      id: player.id,
      name: player.first_name,
      lname: player.last_name,
      city: player.team.city,
    }));
    return playersList;
  },
);

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchPlayers.fulfilled.type:
      return {
        ...state,
        players: action.payload,
      };
    default:
      return state;
  }
};

export default playersReducer;
