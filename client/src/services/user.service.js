import axios from 'axios';
import authHeader from './auth-header';


class UserService {
  getDogHouses() {
    return axios.get('/dog_houses');
  }

  getOneDogHouse(id) {
    return axios.get(`/dog_houses/${id}`, { headers: authHeader() });
  }

  getdogHouseReviews(id) {
    return axios.get(`/getreviews/${id}`, { headers: authHeader() });
  }

  postReview(data) {
    const options = {
      url: '/reviews',
      method: 'POST',
      headers: authHeader(),
      data: data
    };
    return axios.post(options);
  }

  getMapLocation(lat, long) {
    const base_url = `https://www.mapquestapi.com/geocoding/v1/reverse?key=5V7kPdyRqAQGKE5YWCFSC1sjQAg7Zo6M&location=${lat}%2C${long}&outFormat=json&thumbMaps=false`
    let jsondata = axios.get(base_url)
    return jsondata
  }

  deleteReview(id){
    return axios.delete(`/reviews/${id}`, { headers: authHeader() })
  }
}

export default new UserService();