import {
  IMAGES_FETCH_SUCCESS,
  FORM_FILE_CHANGED,
  FORM_TEXT_CHANGED,
  FORM_TEXT_CLEAR,
} from '../actions/types';

const INITIAL_STATE = {
  images: [],
  selectedFile: null,
  textInput: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMAGES_FETCH_SUCCESS:
      return { ...state, images: action.payload };
    case FORM_FILE_CHANGED:
      return { ...state, selectedFile: action.payload };
    case FORM_TEXT_CHANGED:
      return { ...state, textInput: action.payload };
    case FORM_TEXT_CLEAR:
      return { ...state, textInput: '' };
    default:
      return state;
  }
};
