import React, { Component } from 'react';

const Image = ({ source }) => {
  return (
    <img src={source} className="img-rounded" />
  );
};

export default Image;
