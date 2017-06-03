import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import CanvasImage from './CanvasImage';
import CanvasText from './CanvasText';

class Canvas extends Component {
  renderImages() {
    return this.props.images.map((imageObject) => {
      return <CanvasImage key={uuid.v4()} imageObject={imageObject} />;
    });
  }

  renderTexts() {
    return this.props.texts.map((textObject) => {
      return <CanvasText key={uuid.v4()} textObject={textObject} />;
    });
  }

  render() {
    return (
      <div className="canvas col-sm-8 col-md-8 col-lg-8">
        <div className="block">
          {this.renderImages()}
          {this.renderTexts()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ canvasState }) => {
  return {
    images: canvasState.images,
    texts: canvasState.texts,
  };
}

export default connect(mapStateToProps)(Canvas);
