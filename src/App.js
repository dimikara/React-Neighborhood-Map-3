import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import MenuComponent from './MenuComponent';
import ErrorBoundary from './ErrorBoundary';
import SearchBar from './SearchBar'
import Header from './Header';


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      venues: [],
      markers: [],
      query: '',
      activeMarker: {}
  }}

  componentDidMount() {
    this.getVenues()
  }

  /*
  clickLocation = event => {
  	this.setState({
  		query: event
  	})
  	for (const venue of this.state.venues) {
  		if (venue.title === event.target) {
  			this.setState({
  				venueDetails: venue
  			})
  		}
  	}
  }
  
  noQuery = () => {
		this.state({
			query: ''
		})
	}

  newQuery = query => {
  	this.setState({
  		query: query
  	})
  }*/


  /* 
  * renderMap does two things: 
  * - loads the script
  * - initializes the map
  */

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBYi5z3xdE31FtV_NUvm7FOMmP2Cvvla3w&callback=initMap")
    window.initMap = this.initMap;
  }

  
  /*
  * endPoint & parameters set following the guidelines in this page:
  * https://developer.foursquare.com/docs/api/venues/explore
  */

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "4ATSMFQDONZ5VLDPFPH4YR1ODXDHGL2VFZZZRE1T2BQEYDPL",
      client_secret: "AVPVOVT4SAAXDDZNGRVI0LZUPBFZ1DASYISP1ONNLB5JBF50",
      query: "sights",
      ll: "40.6224858434,22.9423862304",
      v: "20181808",
      limit: 5
    }

    /* 
    * This is like FETCH API - axios does the same thing
    * Reference: https://github.com/axios/axios
    * I put this.renderMap() here instead of inside componentDidMount(), 
    * because the call is asynchronous and if put inside componentDidMount(),
    * the venues array is empty until the response is fetched and the map method 
    * to show the markers on map cannot work. The renderMap() MUST be called 
    * AFTER getting the response, NOT before => This is CRUCIAL. 
    */ 
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap())
    })
    .catch(error => {
      alert(`Sorry, fetching data from Foursquare was not possible!`)
      console.log("Foursquare error! " + error)
    })
  }


  initMap = () => {

    /* 
    * Create the map.
    * Center coordinates point to my city, Thessaloniki - Greece.
    * Zoom level set to 14.
    */
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.6224858434, lng: 22.9423862304},
      zoom: 14
    })

    // Create an InfoWindow with max width 120px
    const infowindow = new window.google.maps.InfoWindow({ 
      maxWidth: 180
    })

    this.infowindow = infowindow

    // eslint-disable-next-line
    this.state.venues.map(myVenue => {

      /* 
      * Reference: https://developers.google.com/maps/documentation/javascript/infowindows
      * Content of the InfoWindow 
      */
      const contentString = `<b>${myVenue.venue.name}</b> <br><i>${myVenue.venue.location.address}</i> 
      <br><br><i>Data provided by Foursquare.</i>`
    
      /* 
      * Create a marker
      * Reference: https://developers.google.com/maps/documentation/javascript/markers
      */
      const marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
        map: map,
        animation: window.google.maps.Animation.DROP,
        title: myVenue.venue.name
        })
      
        this.state.markers.push(marker)
         
      
      /* 
      * Make a marker bounce. The function is called when the marker is clicked.
      * I was trying to use setTimeout on the bounce animation, but for a reason that
      * I can't explain, it didn't work.
      * The idea to make the animation null AFTER the bouncing came from:
      * https://stackoverflow.com/questions/7339200/bounce-a-pin-in-google-maps-once
      */

      function animationEffect() {
        marker.setAnimation(window.google.maps.Animation.BOUNCE)
        setTimeout(function(){ marker.setAnimation(null) }, 550)
      }

      function openMarker() {
        // Setting the content of the InfoWindow
        infowindow.setContent(contentString)
        animationEffect()
        
      // Open an InfoWindow upon clicking on its marker
        infowindow.open(map, marker)
      }


      // Click on a marker
      marker.addListener('click', function() {
        openMarker()
        })
      this.state.activeMarker
    }
  )
  }


  render() {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong!</div>
    } else {
      return (
      <main>
        <ErrorBoundary>
        
        <div id="header" aria-label="Header">
          <Header />
        </div>

        <div id="SearchBar" aria-label="Search Bar">
          <SearchBar />
        </div>
        
        <div id="container" aria-label="Menu Container">
          <MenuComponent 
          venues={ this.state.venues }
          getVenues={ this.getVenues }
          //noQuery={ this.noQuery }	      	
	      	//newQuery={ b => this.newQuery(b) }
	      	activeMarker={ this.activeMarker }
          markers={ this.state.markers }
          query ={ this.state.query }
          />
        </div>

        <div id="map" aria-label="Map" role="application">
        </div>

        </ErrorBoundary>
      </main>
    );
  }
  }
}

/*
* Function loadScript gets the url.
* let index => Gives the first selected script tag.
* With the let "script" we create our next script tag.
* index.parentNode.insertBefore(script, index) : Instead of appendChild.
* [script: newNode
* index: referenceNode]
* With "index" we select the first script tag, with "parentNode" 
* we select the parent node, with "insertBefore" we put our script
* at the very beginning, to the top of the lists.
*/


function loadScript(url) {
  let index  = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
  script.onerror = function() {
    alert("Error loading map! Check the URL!");
  };
}


export default App;
