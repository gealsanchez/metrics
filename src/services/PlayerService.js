import http from '../http-common';

const getAll = () => http.get('/players?per_page=100&page=27');

const PlayerService = {
  getAll,
};

export default PlayerService;
