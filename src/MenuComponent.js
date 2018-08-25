import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MenuComponent.css';
//import VenuesList from './VenuesList';


class MenuComponent extends Component {
    showSettings (event) {
        event.preventDefault();
    }

  state ={
    mySights: this.props.venues
  }

  render () {
    return (
      <Menu width={ '30%' } >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}

export default MenuComponent