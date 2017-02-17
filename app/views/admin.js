import React from 'react';

import PageTitle from '../components/pageTitle.js';

import adminUtils from '../utils/adminUtils.js';

class AdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      users: []
    }
  }
  componentWillMount() {
    this.loadUsers();
  }
  loadUsers() {
    adminUtils.getUsers().then((users) => {
      console.log('recieved: ', users);
      this.setState({
        users: users || []
      });
    }).catch((err) => {
      console.warn('could not load users', err);
    });
  }
  handleDelete(id) {
    console.log('Need to delete: ', id);
    adminUtils.removeUser(id).then(() => {
      this.loadUsers.call(this);
    });
  }
  render() {
    return (
      <div>
          <PageTitle text="Admin" />
          <hr />
          <table>
            <tbody>
              <tr>
                <th>id</th>
                <th>email</th>
                <th>cart</th>
                <th>newsletter</th>
              </tr>
              {this.state.users.map((user, idx) => {
                return (
                  <tr key={idx}>
                    <td>{ user._id }</td>
                    <td>{ user.email }</td>
                    <td>{ user.shoppingCart.length }</td>
                    <td>{ user.newsletter ? 'Yes': 'No' }</td>
                    <td><span className="deleteable" onClick={this.handleDelete.bind(this, user._id)}>X</span></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
      </div>
    )
  }
}

export default AdminView;