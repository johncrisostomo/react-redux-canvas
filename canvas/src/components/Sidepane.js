import React, { Component } from 'react';

class Sidepane extends Component {
  render() {
    return (
      <div className="sidepane col-sm-2 col-md-2 col-lg-2">
        {this.props.children}
      </div>
    );
  }
}

export default Sidepane;
