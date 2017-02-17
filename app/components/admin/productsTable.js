import React from 'react';

import PublicUtils from '../../utils/publicUtils.js';
import AdminUtils from '../../utils/adminUtils.js';

class ProductsTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      products: []
    };
  }
  componentWillMount() {
    this.loadProducts();
  }
  loadProducts() {
    PublicUtils.getProducts().then((products) => {
      this.setState({
        products: products || []
      });
    });
  }
  handleDelete(productId) {
    AdminUtils.removeProduct(productId).then(() => {
      this.loadProducts();
    });
  }
  render() {
    return (
      <div>
        <h4 className="text-center">Product List</h4>
        <table>
          <tbody>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>images</th>
            </tr>
            {this.state.products.map((product, idx) => {
              return (
                <tr key={idx}>
                  <td>{ product._id }</td>
                  <td>{ product.name }</td>
                  <td>{ product.price }</td>
                  <td>{ product.images.length }</td>
                  <td><span className="deleteable" onClick={this.handleDelete.bind(this, product._id)}>X</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ProductsTableComponent;