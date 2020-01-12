import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import SearchMap from './SearchMap';
import GoogleMapComponent from './GoogleMapComponent';
import LeftPanel from './LeftPanel';
import { getFetchedData } from '../reducers';

class Map extends Component {
  state = {
    // default center as a start
    center: { lat: 41.0082376, lng: 28.9783589 },
    // default mapping zoom
    zoom: 12,
  };

  /**
   *  @description updating center of the map by manipulating the state of center
   *  @param {number} newlat- we  are using newLat and newLng to update lat and lng states
   *  @param {number} newlng
   *  updating zoom of map by manipulating the state of zoom
   *  to reset all venue IDs for a fresh start?????????*
   *  calling getParameters function to fetch new locations????????
   */
  markerLocationUpdate = (newLat, newLng) => {
    this.setState({ center: { lat: newLat, lng: newLng } });
    this.setState({ zoom: 15 });
  };

  zoomToUserLocation = () => {
    if (navigator.geolocation) {
      this.geoSuccess = (position) => {
        const newLat = position.coords.latitude;
        const newLng = position.coords.longitude;
        this.setState({
          lat: newLat,
          lng: newLng,
        });
        this.markerLocationUpdate(newLat, newLng);
      };
      this.geoError = (error) => {
        switch (error.code) {
          case 0:
            alert(
              'Unknown error occured while attempting to identify user location'
            );
            break;
          case 1:
            alert('Permission denied!');
            break;
          case 2:
            alert('Position is unavailable');
            break;
          case 3:
            alert('Operation time out');
            break;
          default:
            console.log(error.code);
            break;
        }
      };
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
  };
  render() {
    const { lat, lng } = this.state.center;
    return (
      <div className="main-container" role="main">
        <div
          id="map-container"
          role="application"
          aria-label="Google Map Container"
        >
          <LeftPanel
            lat={lat}
            lng={lng}
            userLocationUpdate={this.zoomToUserLocation}
          />
          <GoogleMapComponent
            center={this.state.center}
            zoom={this.state.zoom}
          />
          <SearchMap markerLocationTrigger={this.markerLocationUpdate} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  isFetchedData: getFetchedData(store),
});

const withRedux = connect(mapStateToProps);

export default compose(withRedux)(Map);
