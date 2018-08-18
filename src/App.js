import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.renderMap()
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

  initMap = () => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
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
