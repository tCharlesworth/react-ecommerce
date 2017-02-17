import React from 'react';

import { Link } from 'react-router';

class ProductBoxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      product: props.product
    };
  }
  render() {
    return (
      <div className="product-box">
        <div className="product-info">
          <Link to={"/products/"+this.state.product._id}><span>{ this.state.product.name }</span></Link>
          <span className="right">{ this.state.product.price }</span>
        </div>
      </div>
    );
  }
}

export default ProductBoxComponent;