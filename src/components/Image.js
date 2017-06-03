import React from 'react';

const Image = ({ source }) => {
  return (
    <img src={source} className="img-rounded" alt="images from server" />
  );
};

export default Image;
