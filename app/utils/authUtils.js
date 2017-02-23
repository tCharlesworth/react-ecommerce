import axios from 'axios';

let currentUser = null;

module.exports = {
    login(email, password) {
        return axios.post('/api/login', null, {
            auth: {
                username: email,
                password: password
            }
        });
    }
}