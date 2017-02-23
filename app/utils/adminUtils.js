import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

module.exports = {
  getUsers() {
    return axios.get("/admin/users").then((response) => {
      return response.data;
    });
  },
  removeUser(userId) {
    return axios.delete("/admin/user/"+userId);
  },
  createProduct(data) {
    return axios.post('/admin/products', data).then((response) => {
      return response.data;
    });
  },
  removeProduct(productId) {
    return axios.delete('/admin/product/'+productId);
  }
}