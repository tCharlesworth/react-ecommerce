import React from 'react';
import { Link, browserHistory } from 'react-router';

// Components
import PageTitle from '../components/pageTitle.js';

// Utils
import publicUtils from '../utils/publicUtils.js';

class RegisterView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            confirmEmail: '',
            password: '',
            newsletter: true,
            terms: false,
            disableSubmit: true
        };
    }
    handleEmailInput(event) {
        this.setState({
            email: event.target.value
        });
    }
    handleEmailConfirmInput(event) {
        let newValue = event.target.value;
        this.setState({
            confirmEmail: event.target.value
        });
    }
    handlePasswordInput(event) {
        this.setState({
            password: event.target.value
        });
    }
    handleNewsletterChange(event) {
        this.setState({
            newsletter: event.target.value
        });
    }
    handleTermsChange(event) {
        this.setState({
            terms: event.target.value
        });
    }
    tryRegister() {
        console.log('Registering');
        // Validate all required values exist
        if(!this.validateForm()) { return; }

        publicUtils.createUser({
            email: this.state.email,
            password: this.state.password,
            newsletter: this.state.newsletter
        }).then((res) => {
            // REDIRECT?
            console.log("Success", res);
            browserHistory.push('/home');
        }).catch((err) => {
            console.log("FAIL: ", err);
        });
    }
    validateForm() {
        console.log('validating');
        if(!this.state.email) {
            console.warn('missing email');
            return false;
        } else if(!this.state.confirmEmail) {
            console.warn('missing email confirmation');
            return false;
        } else if(this.state.email != this.state.confirmEmail) {
            console.warn('email does not match');
            return false;
        } else if(!this.state.password) {
            console.warn('missing password');
            return false;
        } else if(!this.state.terms) {
            console.warn('must agree to terms');
            return false;
        }
        console.log('VALID');
        return true;
    }
    render() {
        return (
            <div>
                <PageTitle text="Register" />
                <div className="text-center">
                    <div>
                        <input type="email" placeholder="email" value={this.state.email} onChange={this.handleEmailInput.bind(this)} />
                        <input type="email" placeholder="confirm email" value={this.state.confirmEmail} onChange={this.handleEmailConfirmInput.bind(this)} />
                        <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordInput.bind(this)} />
                        <div className="text-left">
                            <div>
                                <input type="checkbox" defaultChecked={this.state.newsletter} onChange={this.handleNewsletterChange.bind(this)} />
                                <label>I would like to receive the newsletter</label>
                            </div>
                            <div>
                                <input type="checkbox" defaultChecked={this.state.terms} onChange={this.handleTermsChange.bind(this)} />
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