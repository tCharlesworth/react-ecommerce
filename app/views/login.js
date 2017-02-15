import React from 'react';

import { Link } from 'react-router';

import PageTitle from '../components/pageTitle.js';

class LoginView extends React.Component {
    render() {
        return (
            <div>
                <PageTitle text="Login" />
                <div className="text-center">
                    <div>
                        <input type="email" placeholder="email" />
                        <input type="password" placeholder="password" />
                    </div>
                    <br/>
                    <button>Login</button><br/><br/>
                    <small>Need an account? <Link to="/register">Sign Up</Link></small>
                </div>
            </div>
        );
    }
}

export default LoginView;