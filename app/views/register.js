import React from 'react';
import { Link } from 'react-router';

// Components
import PageTitle from '../components/pageTitle.js';

class RegisterView extends React.Component {
    render() {
        return (
            <div>
                <PageTitle text="Register" />
                <div className="text-center">
                    <div>
                        <input type="text" placeholder="username" />
                        <input type="email" placeholder="email" />
                        <input type="email" placeholder="confirm email" />
                        <input type="password" placeholder="password" />
                        <div className="text-left">
                            <div>
                                <input type="checkbox" />
                                <label>I would like to receive the newsletter</label>
                            </div>
                            <div>
                                <input type="checkbox" />
                                <label>I agree to the terms & conditions</label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <button>Register</button><br/><br/>
                    <small>Already have an account? <Link to="/login">Login</Link></small>
                </div>
            </div>
        );
    }
}

export default RegisterView;