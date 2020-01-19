/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';

import SearchMap from './SearchMap';
import GoogleMapComponent from './GoogleMapComponent';
import LeftPanel from './LeftPanel';
import { getFetchedData, getSearchBoxStatus, mapActions } from '../../reducers';

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: 'green',
  diffNameColor: 'aqua',
});

class Map extends Component {
/* static whyDidYouRender = true;*/
  state = {
    // default center as a start incase we can't get user location at the begining
    center: { lat: 37.09024, lng: -95.712891 },
    // default mapping zoom
    zoom: 12,
  };

  componentDidMount() {
    this.zoomToUserLocation();
    /* this.props.setDefault();*/
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { center, zoom } = this.state;
    return (
      center !== nextState.center ||
        zoom !== nextState.zoom ||
        this.props.isFetchedData !== nextProps.isFetchedData
    );
  }

  /**
   *  @description updating center of the map by manipulating the state of center
   *  @param {number} newlat- we  are using newLat and newLng to update lat and lng states
   *  @param {number} newlng
   *  updating zoom of map by manipulating the state of zoom
   */
  markerLocationUpdate = (newLat, newLng) => {
    this.setState({ zoom: 15 });
    this.setState({ center: { lat: newLat, lng: newLng } });
  };

  zoomToUserLocation = () => {
    if (navigator.geolocation) {
      this.geoSuccess = (position) => {
        const newLat = position.coords.latitude;
        const newLng = position.coords.longitude;
        /* this.setState({
          lat: newLat,
          lng: newLng,
        });*/

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
          <SearchMap
            markerLocationTrigger={this.markerLocationUpdate}
          />
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  isFetchedData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

const mapStateToProps = (store) => ({
  isFetchedData: getFetchedData(store),
  isSearchActivated: getSearchBoxStatus(store),
});

const withRedux = connect(mapStateToProps, { ...mapActions });

export default compose(withRedux)(Map);
