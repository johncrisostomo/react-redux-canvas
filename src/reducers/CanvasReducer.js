import {
  CANVAS_ADD_IMAGE,
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
    default:
      return state;
  }
};
