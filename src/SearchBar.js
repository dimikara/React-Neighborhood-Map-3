import React, { Component } from 'react'

class SearchBar extends Component {
    
  render() {
      return (
        <div className="locationsFilter" role="application">
          <input 
          type="text"
          id="query-Filter"
          placeholder="Search..."
          aria-label="Locations filter"
          //value={this.props}
          //onChange={ (e) => this.props.updateQuery(e.target.value)}
          //onChange={ (e) => this.props.selectedMarker(this.props.marker, e.target.value)}
          />
        </div>
      );
    }
}


export default SearchBar;