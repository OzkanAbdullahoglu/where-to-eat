import React from 'react';

/* global google*/
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { compose, withProps, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native-web';
import { getFetchedData } from '../reducers';

let filteredFetchedData;
/**
 *  @description creating GoogleMap API structure and implement it to the DOM
 *  react-google-maps is used for implementation
 */
const GoogleMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?libraries=geometry,places&key=AIzaSyDt0R1NakICIfNoUjNBjQEU3BlIr_QhtHY&v=3.exp',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="container-element" />,
    mapElement: <div className="map-element" />,
  }),
  lifecycle({
    componentDidCatch(error) {
      alert(
        `${error} Error Occured while trying to render google maps API Please check your credentials`
      );
    },
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const markerLinkRedirection = (url) =>
    window.open(url, '_blank');

  if (!props.isFetchedData) {
    return (
      <ActivityIndicator color="#2E3B4B" />
    );
  }

  filteredFetchedData = props.isFetchedData.filter((data) => data.coordinates !== null);

  return (
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 41.0082376, lng: 28.9783589 }}
      center={props.center}
      zoom={props.zoom}
    >
      {/*
        mapping through updatedLocations array
        we implement markers with their lat and lng information
        we assigin all markers an unique key as an id of venue
      */}
      {/*
        we animate clicked marker with Animation.BOUNCE
        we locate exact clicked marker with its unique key
      */}
      {/*
        with onClick event here we trigger
        handleToggle for implementation of InfoWindow
        implementPhoto to trigger photo fetching process from FourSquare API
        markerOnTriggered to find out which marker was clicked
        zoomTrigger to update center of map to the marker's exact location and to update zoom
      */}

      {filteredFetchedData.map((getUpdatedLoc) => (
        <Marker
          position={{
            lat: getUpdatedLoc.coordinates.latitude,
            lng: getUpdatedLoc.coordinates.longitude,
          }}
          key={getUpdatedLoc.id}
          animation={
            props.markerUniqueKey === getUpdatedLoc.id &&
            props.markerClicked === true &&
            google.maps.Animation.BOUNCE
          }
          onClick={() => markerLinkRedirection(getUpdatedLoc.url)}
        />
      ))}
    </GoogleMap>
  );
});

const mapStateToProps = (store) => ({
  isFetchedData: getFetchedData(store),
});

const withRedux = connect(mapStateToProps);

export default compose(withRedux)(GoogleMapComponent);

