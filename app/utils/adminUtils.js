import axios from 'axios';

const URL = 'http://localhost:3001';

module.exports = {
  getUsers() {
    return axios.get(URL+"/admin/users").then((response) => {
      return response.data;
    });
  },
  removeUser(userId) {
    return axios.delete(URL+"/admin/user/"+userId);
  },
  createProduct(data) {
    return axios.post(URL+'/admin/products', data).then((response) => {
      return response.data;
    });
  },
  removeProduct(productId) {
    return axios.delete(URL+'/admin/product/'+productId);
  }
}