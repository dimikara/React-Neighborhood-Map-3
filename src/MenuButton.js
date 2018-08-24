import React, { Component } from 'react';
import './MenuButton.css';
 
class MenuButton extends Component {
  render() {
    return (
      <button type="button" id="squareButton" onMouseDown={this.props.handleMouseDown}>
      Click a marker on the map or click here to show/hide the sights menu</button>
    );
  }
}

export default MenuButton;