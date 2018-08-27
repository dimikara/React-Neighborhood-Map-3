import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MenuComponent.css';
import VenuesList from './VenuesList';


class MenuComponent extends Component {

  state ={
    myVenues: []
  }

  render () {
    return (
      <Menu width={ '30%' } isOpen noOverlay >
        <div>
          <ul className="myVenues-list" role="navigation">
            <VenuesList />
          </ul>
        </div>
      </Menu>
    );
  }
}

export default MenuComponent