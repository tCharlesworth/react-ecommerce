import React from 'react';

import PageTitle from '../components/pageTitle.js';
import UsersTableComponent from '../components/admin/usersTable.js';
import ProductsTableComponent from '../components/admin/productsTable.js';
import NewProductFormComponent from '../components/admin/newProductForm.js';

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

          <hr />
          <h3>Products</h3>
          <ProductsTableComponent />
          <NewProductFormComponent />
          <br/>
          <br/>
          <br/>
      </div>
    )
  }
}

export default AdminView;