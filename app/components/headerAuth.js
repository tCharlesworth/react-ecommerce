import React from 'react';
import { Link } from 'react-router';

class HeaderAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        };
    }
    componentDidMount() {
        // Check for current user
    }
    render() {
        return (
            <span>
                { this.state.currentUser ? this.renderLogout() : this.renderLogin() }
            </span>
        )
    }
    renderLogout() {
        return (
            <li><Link to="/">Sign Out</Link></li>
        );
    }
    renderLogin() {
        return (
            <li><Link to="/login">Login</Link></li>
        );
    }
}

export default HeaderAuth;