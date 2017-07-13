import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addText } from '../actions/CanvasActions';
import { textInputChanged, clearTextInput } from '../actions/ImagesActions';

class Texts extends Component {
  handleInput(e) {
    e.preventDefault();
    this.props.dispatchTextChange(e.target.value);
  }

  handleAddToCanvas(e) {
    e.preventDefault();
    this.props.dispatchAddText(this.props.textInput);
    this.props.dispatchClearText();
  }

  render() {
    const { textInput } = this.props;

    return (
      <div className="text">
        <h4>Text</h4>
        <input
          placeholder="enter text here"
          type="text"
          className="form-control"
          onChange={this.handleInput.bind(this)}
          value={textInput}
        />
        <button
          onClick={this.handleAddToCanvas.bind(this)}
          className="btn btn-default"
        >
          Add Text
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ imagesState }) => {
  return {
    textInput: imagesState.textInput,
  };
};

export default connect(mapStateToProps, {
  dispatchAddText: addText,
  dispatchTextChange: textInputChanged,
  dispatchClearText: clearTextInput,
})(Texts);
