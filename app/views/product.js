import React from 'react';

import PageTitle from '../components/pageTitle.js';

class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {}
        };
    }
    render() {
        return (
            <div>
                <PageTitle text={ this.state.product.name || "No Name" } />
            </div>
        );
    }
}

export default ProductView;