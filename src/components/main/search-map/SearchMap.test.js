/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import createGoogleMapsMock from 'jest-google-maps-mock';
import SearchMap from './SearchMap';
import { storeFactory } from '../../../utils/testUtils';

describe('SearchMap', () => {
  const store = storeFactory();
  const mockZoomToArea = jest.fn();
  const searchMap = shallow(<SearchMap store={store} />)
    .dive()
    .dive();

  it('renders SearchMap component correctly', () => {
    expect(toJson(searchMap)).toMatchSnapshot();
  });
  it('contains an Alert Modal Component', () => {
    expect(searchMap.find('Connect(BareAlertModal)').exists()).toBe(true);
  });
  it('contains a Search Box Container Component', () => {
    expect(searchMap.find('.search-box-container').exists()).toBe(true);
  });
  it('contains a form and input', () => {
    expect(searchMap.find('form').exists()).toBe(true);
    expect(searchMap.find('input').exists()).toBe(true);
  });
  it('contains submit and clear buttons', () => {
    expect(searchMap.find('.searchbox-searchbutton').exists()).toBe(true);
    expect(searchMap.find('.clear-button').exists()).toBe(true);
  });

  describe('SearchMap Events', () => {
    let googleMaps;
    /* const setupGoogleMock = () => {
      /*** Mock Google Maps JavaScript API
      const google = {
        maps: {
          places: {
            AutocompleteService: () => { },
            PlacesServiceStatus: {
              INVALID_REQUEST: 'INVALID_REQUEST',
              NOT_FOUND: 'NOT_FOUND',
              OK: 'OK',
              OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
              REQUEST_DENIED: 'REQUEST_DENIED',
              UNKNOWN_ERROR: 'UNKNOWN_ERROR',
              ZERO_RESULTS: 'ZERO_RESULTS',
            },
          },
          Geocoder: { },
          GeocoderStatus: {
            ERROR: 'ERROR',
            INVALID_REQUEST: 'INVALID_REQUEST',
            OK: 'OK',
            OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
            REQUEST_DENIED: 'REQUEST_DENIED',
            UNKNOWN_ERROR: 'UNKNOWN_ERROR',
            ZERO_RESULTS: 'ZERO_RESULTS',
          },
        },
      };
      global.window.google = google;
    };
    beforeEach(() => {
      googleMaps = createGoogleMapsMock();
      console.log(googleMaps);
    });*/

    it(' has an input field that user can type in', () => {
      let zoomAutocompleteMock = jest.fn();
      zoomAutocompleteMock = searchMap.instance().zoomAutocomplete;

      console.log(searchMap.instance());
      searchMap.find('input').simulate('change', () => {
        const zoomAutocompleteCallCount = zoomAutocompleteMock.mock.calls.length;
        expect(zoomAutocompleteCallCount).toBe(1);
      });
    });
  });
});
