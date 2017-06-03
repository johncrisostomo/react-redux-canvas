import { combineReducers } from 'redux';
import ImagesReducer from './ImagesReducer';
import canvasReducer from './CanvasReducer';

export default combineReducers({
  imagesState: ImagesReducer,
  canvasState: canvasReducer,
});
