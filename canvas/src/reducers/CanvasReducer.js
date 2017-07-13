import uuid from 'uuid';
import {
  CANVAS_ADD_IMAGE,
  CANVAS_ADD_TEXT,
  CANVAS_TEXT_UPDATE_COORDS,
  CANVAS_IMAGE_UPDATE_COORDS,
  CANVAS_ITEM_REMOVE,
} from '../actions/types';

const INITIAL_STATE = {
  texts: [],
  images: [],
};

const updateCoords = (oldArray, updatedObject) => {
  return oldArray.map((obj) => {
      if (updatedObject.id === obj.id) {
        obj.x = updatedObject.x;
        obj.y = updatedObject.y;

        return obj;
      }

      return obj;
    });
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case CANVAS_ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, {
          id: uuid.v4(),
          url: action.payload,
          x: 0,
          y: 0,
        }],
      };

    case CANVAS_ADD_TEXT:
      return {
        ...state,
        texts: [...state.texts, {
          id: uuid.v4(),
          text: action.payload,
          x: 0,
          y: 0,
         }],
      };

    case CANVAS_TEXT_UPDATE_COORDS:
      const updatedTexts = updateCoords(state.texts, action.payload);
      return {
        ...state,
        texts: updatedTexts,
      };

    case CANVAS_IMAGE_UPDATE_COORDS:
      const updatedImages = updateCoords(state.images, action.payload);
      return {
        ...state,
        images: updatedImages,
      };

    case CANVAS_ITEM_REMOVE:
      const { id, type } = action.payload;

      if (type === 'text') {
        return { ...state,
          texts: state.texts.filter(text => text.id !== id) };
      }

      return { ...state,
        images: state.images.filter(image => image.id !== id) };
    default:
      return state;
  }
};
