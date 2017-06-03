import {
  CANVAS_ADD_IMAGE,
  CANVAS_ADD_TEXT,
  CANVAS_TEXT_UPDATE_COORDS,
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

export const updateTextCoords = (obj) => {
  return {
    type: CANVAS_TEXT_UPDATE_COORDS,
    payload: obj,
  };
};
