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
import ItemsList from './components/ItemsList';

import reducers from './reducers';
import { loadState, saveState } from './localStorage';

import './App.css';

class App extends Component {
  render() {
    const persistedState = loadState();
    const store = createStore(reducers, persistedState,
      applyMiddleware(ReduxThunk));

    store.subscribe(() => saveState(store.getState()));
    
    return (
      <Provider store={store}>
        <div>
          <Sidepane>
            <ImageUpload />
            <hr />
            <Assets>
              <ItemsList />
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
