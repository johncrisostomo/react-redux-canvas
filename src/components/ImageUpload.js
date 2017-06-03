import React, { Component } from 'react';

class ImageUpload extends Component {
  render() {
    return (
      <div className="form">
        <h3>Form</h3>
        <input type="file" className="form-control"
          placeholder="Upload Your Images" name="upload" />
          <button id="submit" className="btn btn-default">upload</button>
          {/* <!-- Upload Form here --> */}
      </div>
    );
  }
}

export default ImageUpload;
