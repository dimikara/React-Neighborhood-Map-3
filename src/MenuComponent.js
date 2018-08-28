import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MenuComponent.css';
import VenuesList from './VenuesList';


class MenuComponent extends Component {

  render () {
    return (
      <Menu width={ '25%' } isOpen noOverlay >
        <div>
            <VenuesList />
        </div>
      </Menu>
    );
  }
}

export default MenuComponent