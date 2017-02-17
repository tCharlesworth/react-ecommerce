import React from 'react';

class ProductsTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      products: []
    };
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
          </tr>
          {this.state.products.map((product, idx) => {
            return (
              <tr key={idx}>
                <td>{ product._id }</td>
                <td>{ product.email }</td>
                <td>{ product.shoppingCart.length }</td>
                <td><span className="deleteable" onClick={this.handleDelete.bind(this, user._id)}>X</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default ProductsTableComponent;