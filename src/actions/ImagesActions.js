import axios from 'axios';
import {
  IMAGES_FETCH,
  IMAGES_FETCH_SUCCESS,
} from './types';

export const fetchImages = () => {
  return (dispatch) => {
    axios.get('http://localhost:8000/images')
      .then(({data}) => {
        dispatch({
          type: IMAGES_FETCH_SUCCESS,
          images: data,
        });
      });
  };
};
