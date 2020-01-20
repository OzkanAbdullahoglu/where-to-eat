/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../../../utils/testUtils';
import Map from './Map';

describe('Map', () => {
  const store = storeFactory();
  const map = shallow(<Map store={store} />).dive().dive();
  it('renders map component correctly', () => {
    expect(map).toMatchSnapshot();
  });
  it('contains a Left Panel Component', () => {
    expect(map.find('Connect(LeftPanel)').exists()).toBe(true);
  });
  it('contains a Google Map Component', () => {
    expect(map.find('Connect(withProps(lifecycle(withScriptjs(withGoogleMap(Component)))))').exists()).toBe(true);
  });
  it('contains a Search Box Component', () => {
    expect(map.find('Connect(SearchMap)').exists()).toBe(true);
  });
  it('has an initial center with a lat 37.09024 and a lng -95.712891, and zoom 12', () => {
    const lat = 37.09024;
    const lng = -95.712891;
    expect(map.state()).toEqual({ center: { lat, lng }, zoom: 12 });
  });
  describe('updating coordinates and zoom', () => {
    const newLat = 25.25;
    const newLng = 50.50;
    beforeEach(() => {
      map.instance().markerLocationUpdate(newLat, newLng);
    });
    it('updates coordinates and zoom', () => {
      expect(map.state()).toEqual({ center: { lat: newLat, lng: newLng }, zoom: 15 });
    });
  });
});

