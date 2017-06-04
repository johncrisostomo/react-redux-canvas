import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions/CanvasActions';

class ItemsList extends Component {
  handleRemove(type, id) {
    this.props.dispatchRemoveItem(type, id);
  }

  renderList() {
    let textCounter = 0;
    let imageCounter = 0;

    return this.props.items.map((item) => {
      if (item.text) {
        textCounter += 1;
        return (
          <li key={item.id}>
            <button
              className="btn btn-xs btn-danger"
              onClick={this.handleRemove.bind(this, 'text', item.id)}
              >
              x
            </button>
            {`Text ${textCounter}`}
          </li>
        )
      }

      imageCounter += 1;
      return (
        <li key={item.id}>
          <button
            className="btn btn-xs btn-danger"
            onClick={this.handleRemove.bind(this, 'image', item.id)}
            >
            x
          </button>
          {`Image ${imageCounter}`}
        </li>
      )
    });
  }

  render() {
    return (
      <div className="text">
        <h4>On Canvas</h4>
          <ul className="list-unstyled">
            { this.props.items.length ? this.renderList() :
              <em>No items on canvas</em>}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ canvasState }) => {
  const items = [...canvasState.texts, ...canvasState.images];
  return {
    items,
  };
};

export default connect(mapStateToProps, {
  dispatchRemoveItem: removeItem,
})(ItemsList);
