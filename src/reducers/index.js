import { combineReducers } from 'redux';
import ImagesReducers from './ImagesReducer';

export default combineReducers({
  images: ImagesReducers,
});
