import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './MenuComponent.css';

/* NOT to be used, finally
const myVenues = [
  { name: "White Tower", address: "White Tower Square", location: {"lat": 40.626450528116514, "lng": 22.94831943690908}, id: "4bd9a4d1d2cbc928b330d1ad"},
  { name: "Vassiliko Theatre", address: "2, Megalou Alexandrou street", location: {"lat": 40.62546853426347, "lng": 22.9494665664597}, id: "4bebade662c0c928f86fe2d4"},
  { name: "White Tower Square", address: "White Tower Square", location: {"lat": 40.62656254010239, "lng": 22.94831361908057}, id: "4e7b2af82271813db090af4e"},
  { name: "Statue of Alexander the Great", address: "2, Megalou Alexandrou street", location: {"lat": 40.624347840710115, "lng": 22.95037894569014}, id: "4d8736cb7e8ef04d117542be"},
  { name: "Umbrellas", address: "2, Megalou Alexandrou street", location: {"lat": 40.62191967047792, "lng": 22.95156714233805}, id: "4dbe65d10437955ec063e65b"}
];
*/
class MenuComponent extends Component {

  /* 
   * openMarker function: is called with the onClick event
   * when a list item is clicked   
  */
  // eslint-disable-next-line
  openMarker = locationName => {
    // eslint-disable-next-line
    this.props.markers.map(marker => {
      if (marker.title === locationName) {
        window.google.maps.event.trigger(marker, "click")
      }
    })
  }

  
  render () {
    return (
      <Menu width={ '25%' } isOpen noOverlay >
        <div className="listOfVenues" aria-label="List of Venues"> 
        {this.props.venues.map(myVenue => (
            <li role="menuitem"
              onClick={() => {
                this.openMarker(myVenue.venue.name);
              }}
              aria-label={myVenue.venue.name}
              tabIndex="0"
              id={myVenue.venue.id}
              key={myVenue.venue.id}
            >
              <br/>
              <b>{myVenue.venue.name}</b>
              <br/> 
              <i>{myVenue.venue.location.address}</i>
            </li>
          ))}
          <p>
            <i>Data fetched from Foursquare</i>
          </p>
          </div>
      </Menu>
    );
  }
}

export default MenuComponent