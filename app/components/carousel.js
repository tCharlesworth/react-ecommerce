import React from 'react';

class CarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      selectedIndex: 0,
      defaultImage: 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg',
      images: props.images || []
    };
    // console.log('images: ', props);
    this.loadme()
  }
  handleSelectImage(idx) {
    console.log('Select Image: ', idx);
    this.setState({
      selectedImage: this.state.images[idx] || this.state.defaultImage,
      selectedIndex: idx
    });
  }
  loadme(images) {
    if(images && images.length) {
      this.setState({
        images: images,
        selectedImage: images[0],
        selectedIndex: 0
      });
    } else {
      window.setTimeout(() => {
        this.props.load(this.loadme.bind(this));
      }, 200);
    }
  }
  render() {
    return (
      <div className="carousel">
        <img className="carousel-image" src={this.state.selectedImage || this.state.defaultImage} />
        <div className="selectors">
          {this.state.images.map((img, idx) => {
            return (
              <span key={idx} className={"carousel-selector"+ (idx == this.state.selectedIndex ? " carousel-selector-active" : "")} onClick={this.handleSelectImage.bind(this, idx)}></span>
            );
          })}
        </div>
      </div>
    )
  }
}

export default CarouselComponent;