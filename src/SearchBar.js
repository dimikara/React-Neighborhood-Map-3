import React, { Component } from 'react'
import sortBy from 'sort-by'

class SearchBar extends Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
        </form>
      );
    }
}


export default SearchBar;