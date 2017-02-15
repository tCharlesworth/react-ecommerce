import axios from 'axios';

let publicUtils = {
  getProducts() {
    return axios.get('http://localhost:3001/api/products').then((response) => {
      return response.data;
    }).catch((err) => {
      console.warn('Unable to retrieve products.');
    });
  }
};

export default publicUtils;