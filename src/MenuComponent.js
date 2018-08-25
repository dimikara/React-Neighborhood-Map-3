import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MenuComponent.css';
// import VenuesList from './VenuesList';


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
        <div>
          <ul role="navigation">
            <li>Sight 1</li>
            <li>Sight 2</li>
            <li>Sight 3</li>
          </ul>
        </div>
      </Menu>
    );
  }
}

export default MenuComponent