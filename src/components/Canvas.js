import React, { Component } from 'react';
import { connect } from 'react-redux';
import CanvasImage from './CanvasImage';
import CanvasText from './CanvasText';
import { updateTextCoords } from '../actions/CanvasActions';

class Canvas extends Component {
  updateObjectCoords(payload) {
    this.props.dispatchUpdateCoords(payload);
  }

  renderImages() {
    return this.props.images.map((imageObject) => {
      return <CanvasImage key={imageObject.id} imageObject={imageObject} />;
    });
  }

  renderTexts() {
    return this.props.texts.map((textObject) => {
      return <CanvasText
        updateObjectCoords={this.updateObjectCoords.bind(this)}
        key={textObject.id}
        textObject={textObject} />;
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

export default connect(mapStateToProps, {
  dispatchUpdateCoords: updateTextCoords,
})(Canvas);
