import axios from 'axios';

let publicUtils = {
  getProducts() {
    return axios.get('/api/products').then((response) => {
      return response.data;
    }).catch((err) => {
      console.warn('Unable to retrieve products.');
    });
  },

  createUser(data) {
    return axios.post('/api/user', data).then((response) => {
      return response.data;
    });
  },

  getProduct(productId) {
    return axios.get('/api/product/'+productId).then((response) => {
      return response.data;
    });
  }
};

export default publicUtils;