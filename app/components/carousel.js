import React from 'react';

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      defaultImage: 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg',
      images: props.images || []
    };
    console.log('images: ', props);
  }
  updateProps(props) {
    console.log('Got Props: ', props);
  }
  handleSelectImage(idx) {
    console.log('Select Image: ', idx);
  }
  render() {
    return (
      <div className="carousel">
        <img className="carousel-image" src={this.state.selectedImage || this.state.defaultImage} />
        <div>
          {this.state.images.map((img, idx) => {
            return (
              <span className="carousel-selector" onClick={this.handleSelectImage.bind(this, idx)}></span>
            );
          })}
        </div>
      </div>
    )
  }
}

export default CarouselComponent;