import http from '../http-common';

const getAll = () => http.get('/teams?per_page=26');

const TeamService = {
  getAll,
};

export default TeamService;
