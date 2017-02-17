import React from 'react';

import PageTitle from '../components/pageTitle.js';
import UsersTableComponent from '../components/admin/usersTable.js';

class AdminView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <PageTitle text="Admin" />
          <hr />
          <h3>Users</h3>
          <UsersTableComponent />
          <h3>Products</h3>
      </div>
    )
  }
}

export default AdminView;