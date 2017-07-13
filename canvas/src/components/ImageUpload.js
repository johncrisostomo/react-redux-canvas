import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  selectImage,
  uploadImage,
 } from '../actions/ImagesActions';

class ImageUpload extends Component {
  handleChange(e) {
    e.preventDefault();
    const img = e.target.files[0];
    this.props.selectImage(img);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.uploadImage(this.props.selectedFile);
  }

  render() {
    return (
      <div className="form">
        <h3>Form</h3>
        <input type="file" className="form-control"
            onChange={this.handleChange.bind(this)}
            placeholder="Upload Your Images" name="upload" />
        <button onClick={this.handleSubmit.bind(this)} className="btn btn-default">
            Submit
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ imagesState }) => {
  return {
    selectedFile: imagesState.selectedFile,
  };
}

export default connect(mapStateToProps, {
  selectImage, uploadImage })(ImageUpload);
