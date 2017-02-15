import React from 'react';
import { Link } from 'react-router';

// Components
import PageTitle  from '../components/pageTitle.js';
import ProductBox from '../components/productBox.js';
// Utils
import publicUtils from '../utils/publicUtils.js';

class ProductsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    // Load Data
    publicUtils.getProducts().then((data) => {
      this.setState({ products: data });
    });
  }
  render() {
    return (
      <div>
        <PageTitle text="Products" />
        <div className="container">
          { this.state.products.map((product, idx) => {
            return (
              <ProductBox key={ idx } product={ product } />
            )
          })}
        </div>
      </div>
    )
  }
}

export default ProductsView;