import React from 'react';

import PageTitle from '../components/pageTitle.js';

import PublicUtils from '../utils/publicUtils.js';

class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }
    componentWillMount() {
        this.loadProduct();
    }
    loadProduct() {
        console.log('loaded id: ', this.props.params.productId);
        PublicUtils.getProduct(this.props.params.productId).then((product) => {
            this.setState({product: product});
        });
    }
    render() {
        return (
            <div>
                <PageTitle text={ this.state.product.name || "No Name" } />
                <hr />
                <p>Price: {this.state.product.price}</p>
                <p>Description: {this.state.product.description}</p>
            </div>
        );
    }
}

export default ProductView;