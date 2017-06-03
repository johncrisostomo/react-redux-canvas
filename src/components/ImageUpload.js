import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/ImagesActions';

class ImageUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageFile: null,
    };
  }

  handleChange(e) {
    e.preventDefault();

    const data = new FormData();
    const img = e.target.files[0];

    data.append('upload', img);

    this.setState({
      imageFile: data,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const server = axios.create({
      baseURL: 'http://localhost:8000',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    server.post('/uploads', this.state.imageFile)
      .then(() => this.props.fetchImages());
  }

  render() {
    return (
      <div className="form">
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="file" className="form-control"
            onChange={this.handleChange.bind(this)}
            placeholder="Upload Your Images" name="upload" />
          <input type="submit" className="btn btn-default" />
        </form>
      </div>
    );
  }
}

export default connect(null, { fetchImages })(ImageUpload);
