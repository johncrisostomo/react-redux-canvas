import {
  IMAGES_FETCH_SUCCESS,
  FORM_FILE_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  images: [],
  selectedFile: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMAGES_FETCH_SUCCESS:
      return { ...state, images: action.payload };
    case FORM_FILE_CHANGED:
      return { ...state, selectedFile: action.payload };
    default:
      return state;
  }
};
