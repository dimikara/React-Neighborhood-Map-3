import React, { Component } from 'react';
import './Menu.css';
 
class Menu extends Component {
  render() {
    let visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="sightsMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2>Sight 1</h2>
        <h2>Sight 2</h2>
        <h2>Sight 3</h2>
        <h2>Sight 4</h2>
      </div>
    );
  }
}
 
export default Menu;