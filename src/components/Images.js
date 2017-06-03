import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/ImagesActions';
import axios from 'axios';
import Image from './Image';

class Images extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }

  renderImages() {
    return this.props.images.map((src) => {
      return (
        <li><Image source={src} /></li>
      );
    });
  }

  render() {
    console.log(this.props.images);
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

const mapStateToProps = ({ images }) => {
  return { images };
};

export default connect(mapStateToProps, { fetchImages })(Images);
