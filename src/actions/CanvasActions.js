import {
  CANVAS_ADD_IMAGE,
  CANVAS_ADD_TEXT,
} from './types';

export const addImage = (imageUrl) => {
  return {
    type: CANVAS_ADD_IMAGE,
    payload: imageUrl,
  };
};

export const addText = (text) => {
  return {
    type: CANVAS_ADD_TEXT,
    payload: text,
  };
};
