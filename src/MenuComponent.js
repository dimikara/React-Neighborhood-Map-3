import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MenuComponent.css';
import VenuesList from './VenuesList';


class MenuComponent extends Component {

  state ={
    mySights: []
  }

  render () {
    return (
      <Menu width={ '30%' } >
        <div>
          <ul className="mySights-list" role="navigation">
            <VenuesList />
          </ul>
        </div>
      </Menu>
    );
  }
}

export default MenuComponent