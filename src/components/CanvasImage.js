import React from 'react';
import Draggable from 'react-draggable';

const CanvasImage = ({ imageObject }) => {
  const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

  return (
    <Draggable
      bounds=".block"
      axis="both"
      {...dragHandlers}
      >
      <img src={imageObject.url}
        className="handle img-rounded" alt="images from server" />
    </Draggable>
  );
};

export default CanvasImage;
