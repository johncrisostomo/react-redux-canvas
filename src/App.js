import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Sidepane from './components/Sidepane';
import Assets from './components/Assets';
import ImageUpload from './components/ImageUpload';
import Texts from './components/Texts';
import Images from './components/Images';
import Canvas from './components/Canvas';

import reducers from './reducers';

import './App.css';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <div>
          <Sidepane>
            <ImageUpload />
            <hr />
            <Assets>
              <Texts />
              <Images />
            </Assets>
          </Sidepane>
          <Canvas />
        </div>
      </Provider>
    );
  }
}

export default App;
