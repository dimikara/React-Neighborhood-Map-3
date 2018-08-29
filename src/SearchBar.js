import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp';

class SearchBar extends Component {

  state = {
    venues: this.props.venues,
    query: ''
  };
  
  updateQuery = query => {
    this.setState({ query })

    let updatedVenues
    let showVenues = this.props.venues

    if (query !== '') {
      const match = new RegExp(escapeRegExp(query), 'i')
      updatedVenues = showVenues.filter(myVenue =>
        match.test(myVenue.venue.name)
      )
      this.setState({ venues: updatedVenues })
      this.props.filteredVenues(updatedVenues)
      
    } else if ((query.length === 0) && (updatedVenues != [])) {
      this.setState({ venues: showVenues })
     } 
    else {
      this.setState({ venues: this.state.showVenues })
    }
  }

  render() {
      return (
        <div>
        <div className="locationsFilter" role="application">
          <input 
          type="text"
          id="query-Filter"
          placeholder="Search..."
          aria-label="Locations filter"
          value={this.props.query}
          onChange={event => this.updateQuery(event.target.value)}
          />
        </div>
        {this.state.venues === 0 && (
                    <ul className="search-result">
                        <li className="item">No Places Found..</li>
                    </ul>
                )}
        </div>
      );
    }
}


export default SearchBar;