import {
  CANVAS_ADD_IMAGE,
  CANVAS_ADD_TEXT,
  CANVAS_TEXT_UPDATE_COORDS,
  CANVAS_IMAGE_UPDATE_COORDS,
  CANVAS_ITEM_REMOVE,
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

export const updateImageCoords = (obj) => {
  return {
    type: CANVAS_IMAGE_UPDATE_COORDS,
    payload: obj,
  };
};

export const removeItem = (type, id) => {
  return {
    type: CANVAS_ITEM_REMOVE,
    payload: {
      type,
      id,
    },
  }
};
