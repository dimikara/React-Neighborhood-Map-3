import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
    // this.renderMap()
  }

  /* 
    renderMap does two things: 
    - load the script
    - initialize the map
  */

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBYi5z3xdE31FtV_NUvm7FOMmP2Cvvla3w&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "4ATSMFQDONZ5VLDPFPH4YR1ODXDHGL2VFZZZRE1T2BQEYDPL",
      client_secret: "AVPVOVT4SAAXDDZNGRVI0LZUPBFZ1DASYISP1ONNLB5JBF50",
      query: "food",
      ll: "40.6224858434,22.9423862304",
      v: "20181808"
    }

    /* This is like FETCH API - Axios does the same
    * Reference: https://github.com/axios/axios
    * We put this.renderMap() here instead of inside componentDidMount(), 
    * because the call is asynchronous and when put inside componentDidMount(),
    * the venues array is still empty and the map method to show the markers on map
    * cannot work. The renderMap() MUST be called after getting the response, 
    * NOT before => This is CRUCIAL. 
    */ 
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap())
      // console.log(response.data.response.groups[0].items)
    })
    .catch(error => {
      console.log("ERROR!! " + error)
    })
  }

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.6224858434, lng: 22.9423862304},
      zoom: 12
    })

    this.state.venues.map(myVenue => {

      // Reference: https://developers.google.com/maps/documentation/javascript/markers
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })
    })
  }

  render() {
    return (
      <main>
        <div id="map">
        </div>
      </main>
    );
  }
}

/*
 Function loadScript gets the url.
 var index => Gives the first selected script tag.
 With the var "script" we create our next script tag.
 index.parentNode.insertBefore(script, index) : Instead of appendChild.
 [script: newNode
 index: referenceNode]
 With "index" we select the first script tag, with "parentNode" we select the parent node,
 with "insertBefore" we put our script at the very beginning, we put our script to the
 top of the lists.
*/

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
