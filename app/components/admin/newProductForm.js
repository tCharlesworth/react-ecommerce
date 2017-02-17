import React from 'react';

import AdminUtils from '../../utils/adminUtils.js';

class NewProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: '0.00',
            description: '',
            images: [],
            newImage: ''
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
    handleImageChange(event) {
        this.setState({
            newImage: event.target.value
        });
    }
    addNewImage() {
        console.log('Add Product: ', this.state.newImage);
        let images = this.state.images;
        images.push(this.state.newImage);
        this.setState({
            images: images
        });
        this.state.newImage = '';
    }
    clickAddProduct() {
        if(this.validateForm()) {
            // Send info
            AdminUtils.createProduct({
                name: this.state.name,
                price: this.state.price,
                description: this.state.description,
                images: this.state.images
            });
            this.clearForm();
        }
    }
    clearForm() {
        this.setState({
            name: '',
            price: '0.00',
            description: '',
            images: [],
            newImage: ''
        });
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
                <h4 className="text-center">New Product</h4>
                <input type="text" placeholder="product name" value={this.state.name} onChange={this.handleNameInput.bind(this)} />
                <input type="text" placeholder="price" value={this.state.price} onChange={this.handlePriceInput.bind(this)} />
                <input type="text" placeholder="description" value={this.state.description} onChange={this.handleDescriptionInput.bind(this)} />
                <div className="outlined-box">
                    <p>Images</p>
                    <small className={this.state.images.length > 0 ? 'hidden' : ''}>No Images Found</small>
                    <ul>
                        {this.state.images.map((image, idx) => {
                            return (
                                <li key={idx}>{image}</li>
                            )
                        })}
                    </ul>
                    <input type="text" placeholder="add new image" value={this.state.newImage} onChange={this.handleImageChange.bind(this)} />
                    <button onClick={this.addNewImage.bind(this)}>Add Image</button>
                </div>
                <br />
                <button onClick={this.clickAddProduct.bind(this)}>Add Product</button>
            </div>
        );
    }
}

export default NewProductForm;