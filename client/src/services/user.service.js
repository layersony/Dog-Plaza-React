import axios from 'axios';
import authHeader from './auth-header';


class UserService {
  getDogHouses() {
    return axios.get('/dog_houses');
  }

  getOneDogHouse(id) {
    return axios.get(`/dog_houses/${id}`, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get('/mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get('/admin', { headers: authHeader() });
  }
}

export default new UserService();