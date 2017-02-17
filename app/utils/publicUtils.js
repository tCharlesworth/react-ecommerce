import axios from 'axios';

const URL = 'http://localhost:3001'

let publicUtils = {
  getProducts() {
    return axios.get(URL+'/api/products').then((response) => {
      return response.data;
    }).catch((err) => {
      console.warn('Unable to retrieve products.');
    });
  },

  createUser(data) {
    return axios.post(URL+'/api/user').then((response) => {
      return response.data;
    }).catch((err) => {
      console.warn('Unable to register user');
    });
  }
};

export default publicUtils;