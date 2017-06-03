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
        <div className="handle">
          <span>{textObject.text}</span>
        </div>
    </Draggable>
  );
};

export default CanvasText;
