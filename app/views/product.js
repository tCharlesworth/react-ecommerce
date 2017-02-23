import React from 'react';

import PageTitle from '../components/pageTitle.js';
import CarouselComponent from '../components/carousel.js';

import PublicUtils from '../utils/publicUtils.js';

class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            images: []
        };
    }
    componentWillMount() {
        this.loadProduct();
    }
    loadProduct() {
        console.log('loaded id: ', this.props.params.productId);
        PublicUtils.getProduct(this.props.params.productId).then((product) => {
            this.setState({
                product: product,
                images: product.images
            });
        });
    }
    testFunc(func) {
        func(this.state.images);
    }
    render() {
        return (
            <div>
                <PageTitle text={ this.state.product.name || "No Name" } />
                <hr />
                <CarouselComponent images={this.state.images} load={this.testFunc.bind(this)} />
                <p>Price: {this.state.product.price}</p>
                <p>Description: {this.state.product.description}</p>
                {/*<p>Images: {this.state.images.map((img, idx) => {
                    return (<li key={idx}>{img}</li>)
                    })}
                </p>*/}
            </div>
        );
    }
}

export default ProductView;