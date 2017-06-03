import { IMAGES_FETCH_SUCCESS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case IMAGES_FETCH_SUCCESS:
      return action.images;
    default:
      return state;
  }
};
