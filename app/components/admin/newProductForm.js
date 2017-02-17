import React from 'react';

import AdminUtils from '../../utils/adminUtils.js';

class NewProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '0.00',
            description: ''
        };
    }
    handleNameInput(event) {
        this.setState({
            name: event.target.value
        });
    }
    handlePriceInput(event) {
        this.setState({
            price: event.target.value
        });
    }
    handleDescriptionInput(event) {
        this.setState({
            description: event.target.value
        });
    }
    clickAddProduct() {
        if(this.validateForm()) {
            // Send info
            AdminUtils.createProduct({
                name: this.state.name,
                price: this.state.price,
                description: this.state.description
            });
        }
    }
    validateForm() {
        if(!this.state.name) {
            console.warn('No Product Name');
            return false;
        } else if (!this.state.price) {
            console.warn('No Product Price');
            return false;
        } else if (!this.state.description) {
            console.warn('No Description');
            return false;
        }
        return true;
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="product name" value={this.state.name} onChange={this.handleNameInput.bind(this)} />
                <input type="text" placeholder="price" value={this.state.price} onChange={this.handlePriceInput.bind(this)} />
                <input type="text" placeholder="description" value={this.state.description} onChange={this.handleDescriptionInput.bind(this)} />
                <button onClick={this.clickAddProduct.bind(this)}>Add Product</button>
            </div>
        );
    }
}

export default NewProductForm;