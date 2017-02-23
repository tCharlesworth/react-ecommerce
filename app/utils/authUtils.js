import axios from 'axios';

let currentUser = null;
let token = null;

module.exports = {
    login(email, password) {
        return axios.post('/api/login', {
                username: email,
                password: password
            }).then((response) => {
                console.log('Recieved token? ', response.data);
                token = response.data;
            });
    }
}