import {
  CANVAS_ADD_IMAGE,
} from './types';

export const addImage = (imageUrl) => {
  return {
    type: CANVAS_ADD_IMAGE,
    payload: imageUrl,
  };
};
