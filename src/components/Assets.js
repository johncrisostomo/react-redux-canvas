import React, { Component } from 'react';

class Assets extends Component {
  render() {
    return (
      <div className="assets">
        {this.props.children}
      </div>
    );
  }
}

export default Assets;
