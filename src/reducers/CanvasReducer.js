import {
  CANVAS_ADD_IMAGE,
  CANVAS_ADD_TEXT,
} from '../actions/types';

const INITIAL_STATE = {
  texts: [],
  images: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CANVAS_ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, { url: action.payload }],
      };
    case CANVAS_ADD_TEXT:
      return {
        ...state,
        texts: [...state.texts, { text: action.payload }],
      };
    default:
      return state;
  }
};
