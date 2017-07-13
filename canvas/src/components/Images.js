import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { fetchImages } from '../actions/ImagesActions';
import Image from './Image';

class Images extends Component {
  componentWillMount() {
    this.props.fetchImages();
  }

  renderImages() {
    return this.props.images.map((src) => {
      return (
        <li key={uuid.v4()}><Image source={src} /></li>
      );
    });
  }

  render() {
    return (
      <div className="image">
        <h4>Images</h4>
          <ul className="list-unstyled">
            {this.renderImages()}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ imagesState }) => {
  return {
    images: imagesState.images,
  };
};

export default connect(mapStateToProps, { fetchImages })(Images);
