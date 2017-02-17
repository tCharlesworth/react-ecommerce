import React from 'react';
import { Link } from 'react-router';

// Components
import PageTitle from '../components/pageTitle.js';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            confirmEmail: '',
            password: '',
            newsletter: true,
            terms: false
        };
    }
    tryRegister() {
        console.log('clicked register')
    }
    render() {
        return (
            <div>
                <PageTitle text="Register" />
                <div className="text-center">
                    <div>
                        <input type="email" placeholder="email" value={this.state.email} />
                        <input type="email" placeholder="confirm email" value={this.state.confirmEmail} />
                        <input type="password" placeholder="password" value={this.state.password} />
                        <div className="text-left">
                            <div>
                                <input type="checkbox" checked={this.state.newsletter} />
                                <label>I would like to receive the newsletter</label>
                            </div>
                            <div>
                                <input type="checkbox" checked={this.state.terms} />
                                <label>I agree to the terms & conditions</label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <button onClick={ this.tryRegister.bind(this) }>Register</button><br/><br/>
                    <small>Already have an account? <Link to="/login">Login</Link></small>
                </div>
            </div>
        );
    }
}

export default RegisterView;