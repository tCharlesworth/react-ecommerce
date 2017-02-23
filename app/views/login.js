import React from 'react';

import { Link } from 'react-router';

import PageTitle from '../components/pageTitle.js';

import AuthUtils from '../utils/authUtils.js';

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleEmailInput(event) {
        this.setState({
            email: event.target.value
        });
    }
    handlePasswordInput(event) {
        this.setState({
            password: event.target.value
        });
    }
    tryLogin() {
        console.log('Login with: ', this.state.email, this.state.password);
        AuthUtils.login(this.state.email, this.state.password).then((user) => {
            console.log('success');
        }).catch((err) => {
            console.error(err);
        });
    }
    render() {
        return (
            <div>
                <PageTitle text="Login" />
                <div className="text-center">
                    <div>
                        <input type="email" placeholder="email" value={this.state.email} onChange={this.handleEmailInput.bind(this)}/>
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordInput.bind(this)} />
                    </div>
                    <br/>
                    <button onClick={this.tryLogin.bind(this)}>Login</button><br/><br/>
                    <small>Need an account? <Link to="/register">Sign Up</Link></small>
                </div>
            </div>
        );
    }
}

export default LoginView;