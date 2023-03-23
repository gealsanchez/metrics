import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.balldontlie.io/api/v1',
  headers: {
    'Content-type': 'application/json',
  },
});
