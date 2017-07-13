import React, { Component } from 'react';
import Draggable from 'react-draggable';

class CanvasImage extends Component {
  onControlledDrag(e, position) {
    const {x, y} = position;
    const payload = { ...this.props.imageObject };
    payload.x = x;
    payload.y = y;
    this.props.updateObjectCoords('image', payload);
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { imageObject } = this.props;

    return (
      <Draggable
        position={{ x: imageObject.x, y: imageObject.y }}
        onDrag={this.onControlledDrag.bind(this)}
        bounds=".canvas"
        axis="both"
        {...dragHandlers}
        >
        <img src={imageObject.url}
          className="handle img-rounded" alt="images from server" />
      </Draggable>
    );
  }
};

export default CanvasImage;
