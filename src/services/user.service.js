import axios from 'axios';
import authHeader from './auth-header';

const API_URL = `${process.env.VUE_APP_API_HOST}`;

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all.json');
  }

  //for real life project
  // getUserContent() {
  //   return axios.get(API_URL + 'user.json', { headers: authHeader() });
  // }

  ///for demo 
  getUserContent() {
    return axios.get(API_URL + 'user.json');
  }

  getModeratorContent() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminContent() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();