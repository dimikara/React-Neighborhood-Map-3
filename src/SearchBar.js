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
          //noQuery={ this.noQuery }	      	
          //newQuery={ b => this.newQuery(b) }
          //value={this.props}
          //onChange={ (e) => this.props.updateQuery(e.target.value)}
          />
        </div>
      );
    }
}


export default SearchBar;