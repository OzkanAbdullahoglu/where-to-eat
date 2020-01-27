/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { storeFactory } from '../../../utils/testUtils';
import Map from './Map';

describe('Map', () => {
  const setup = (state = {}) => {
    const store = storeFactory(state);
    const map = shallow(<Map store={store} />).dive().dive();
    return map;
  }
  const mapWrapper = setup();
  it('renders map component correctly', () => {
    
    expect(toJson(mapWrapper)).toMatchSnapshot();
  });
  it('contains a Left Panel Component', () => {
    expect(mapWrapper.find('Connect(BareLeftPanel)').exists()).toBe(true);
  });
  it('contains a Google Map Component', () => {
    expect(mapWrapper.find('Connect(withProps(lifecycle(withScriptjs(withGoogleMap(Component)))))').exists()).toBe(true);
  });
  it('contains a Search Box Component', () => {
    expect(mapWrapper.find('Connect(SearchMap)').exists()).toBe(true);
  });
  it('has an initial center with a lat 37.09024 and a lng -95.712891, and zoom 12', () => {
    const lat = 37.09024;
    const lng = -95.712891;
    expect(mapWrapper.state()).toEqual({ center: { lat, lng }, zoom: 12 });
  });
  describe('updating coordinates and zoom', () => {
    const newLat = 25.25;
    const newLng = 50.50;
    beforeEach(() => {
      mapWrapper.instance().markerLocationUpdate(newLat, newLng);
    });
    it('updates coordinates and zoom', () => {
      expect(mapWrapper.state()).toEqual({ center: { lat: newLat, lng: newLng }, zoom: 15 });
    });

    it('triggers zoomToUser function to get the user location when mounted', () => {
      const mapPropertyMock = jest.fn();
      mapWrapper.instance().zoomToUserLocation = mapPropertyMock;
      mapWrapper.instance().componentDidMount();
      expect(mapPropertyMock.mock.calls.length).toBe(1);
    });
  });
  describe('redux properties', () => {
    it('has access to `isFetchedData` state', () => {
      const isFetchedData = '';
      const fetchedDataProp = mapWrapper.instance().props.store.getState().map.fetchedData;
      expect(fetchedDataProp).toEqual(isFetchedData);
    });
  });
});
