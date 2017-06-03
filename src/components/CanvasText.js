import React from 'react';
import Draggable from 'react-draggable';

const CanvasText = ({ textObject }) => {
  const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

  return (
    <Draggable
      bounds=".canvas"
      axis="both"
      {...dragHandlers}
      >
        <h1 className="canvasText">{textObject.text}</h1>
    </Draggable>
  );
};

export default CanvasText;
