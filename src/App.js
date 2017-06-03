import React, { Component } from 'react';
import Sidepane from './components/Sidepane';
import Assets from './components/Assets';
import ImageUpload from './components/ImageUpload';
import Texts from './components/Texts';
import Images from './components/Images';
import Canvas from './components/Canvas';
import './App.css';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
