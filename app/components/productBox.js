import React from 'react';

class ProductBoxComponent extends React.Component {
  render() {
    return (
      <div className="product-box">
        <div className="product-info">
          <span>{ this.props.product.name }</span>
          <span className="right">{ this.props.product.price }</span>
        </div>
      </div>
    )
  }
}

export default ProductBoxComponent;