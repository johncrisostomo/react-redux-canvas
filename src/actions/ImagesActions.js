import axios from 'axios';
import {
  IMAGES_FETCH_SUCCESS,
  FORM_FILE_CHANGED,
  FORM_TEXT_CHANGED,
  FORM_TEXT_CLEAR,
} from './types';

export const textInputChanged = (text) => {
  return {
    type: FORM_TEXT_CHANGED,
    payload: text,
  };
};

export const clearTextInput = () => {
  return {
    type: FORM_TEXT_CLEAR,
  };
};

export const selectImage = (img) => {
  const data = new FormData();
  data.append('upload', img);

  return { type: FORM_FILE_CHANGED, payload: data };
};

const refreshImages = (dispatch) => {
    axios.get('http://localhost:8000/images')
      .then(({ data }) => {
        dispatch({
          type: IMAGES_FETCH_SUCCESS,
          payload: data,
        });
      });
};

export const fetchImages = () => {
  return (dispatch) => {
    refreshImages(dispatch);
  };
};

export const uploadImage = (image) => {
  return (dispatch) => {
    const server = axios.create({
      baseURL: 'http://localhost:8000',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    server.post('/uploads', image)
      .then(() => refreshImages(dispatch));
  };
};
