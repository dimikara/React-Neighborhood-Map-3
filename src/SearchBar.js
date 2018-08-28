import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
      return (
        <form>
          <input 
          type="text" 
          placeholder="Search..."
          aria-label="Locations filter"
          //value={this.props}
          //onChange = { (e) => this.props.selectedMarker (this.props.marker, e.target.value)
          //}
          />
        </form>
      );
    }
}


export default SearchBar;