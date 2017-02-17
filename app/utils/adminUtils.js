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
  }
}