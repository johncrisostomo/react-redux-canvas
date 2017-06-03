import React, { Component } from 'react';
import Draggable from 'react-draggable';

class CanvasText extends Component {
  onControlledDrag(e, position) {
    const {x, y} = position;
    const payload = { ...this.props.textObject };
    payload.x = x;
    payload.y = y;
    this.props.updateObjectCoords('text', payload);
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };

    const { textObject } = this.props;

    return (
      <Draggable
        position={{ x: textObject.x, y: textObject.y }}
        onDrag={this.onControlledDrag.bind(this)}
        bounds=".canvas"
        axis="both"
        {...dragHandlers}
        >
          <h1 className="canvasText">{textObject.text}</h1>
      </Draggable>
    );
  }
};

export default CanvasText;
