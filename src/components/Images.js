import React, { Component } from 'react';
import axios from 'axios';
import Image from './Image';

class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentWillMount() {
    this.fetchImages();
  }

  fetchImages() {
    axios.get('http://localhost:8000/images')
      .then(({ data }) => {
        this.setState({ images: data });
      });
  }

  renderImages() {
    return this.state.images.map((src) => {
      return (
        <li><Image source={src} /></li>
      );
    });
  }

  render() {
    return (
      <div className="image">
        <h4>Images</h4>
          <ul className="list-unstyled">
            {this.renderImages()}
            {/* <!-- List of images here --> */}
            {/* <!-- <li><img src="images/sample.jpeg" class="img-rounded" /></li> --> */}
          </ul>
      </div>
    );
  }
}

export default Images;
