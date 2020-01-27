/* eslint-disable linebreak-style */
import '@testing-library/jest-dom/extend-expect';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

window.google = {
  maps: {
    Marker: class { },
    Map: class { setTilt() { } fitBounds() { } },
    LatLngBounds: class { },
    event: { addDomListener: () => {} },
    places: {
      Autocomplete: class { addListener() {} },
      AutocompleteService: class { },
      PlacesServiceStatus: {
        INVALID_REQUEST: 'INVALID_REQUEST',
        NOT_FOUND: 'NOT_FOUND',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS',
      },
      PlacesAutocomplete: {
        INVALID_REQUEST: 'INVALID_REQUEST',
        NOT_FOUND: 'NOT_FOUND',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS',
      },
    },

    MarkerClusterer: class { },
    Geocoder: class { },
  },
};

