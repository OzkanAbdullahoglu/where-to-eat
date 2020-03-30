/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchMap from './SearchMap';
import { storeFactory } from '../../../utils/testUtils';

describe('SearchMap', () => {
  const store = storeFactory();
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
    it('has events that triggers proper functions', () => {
      let zoomAutocompleteMock = jest.fn();
      let preZoomMock = jest.fn();
      let captureKeyPressMock = jest.fn();
      let clearQueryMock = jest.fn();
      zoomAutocompleteMock = searchMap.instance().zoomAutocomplete;
      preZoomMock = searchMap.instance().preZoom;
      captureKeyPressMock = searchMap.instance().captureKeyPress;
      clearQueryMock = searchMap.instance().clearQuery;
      let events;
      document.addEventListener = jest.fn((event, cb) => {
        events[event] = cb;
      });
      searchMap.find('input').simulate('change', () => {
        const zoomAutocompleteCallCount = zoomAutocompleteMock.mock.calls.length;
        const preZoomCallCount = preZoomMock.mock.calls.length;
        expect(zoomAutocompleteCallCount).toBe(1);
        expect(preZoomCallCount).toBe(1);
      });
      searchMap.find('input').simulate('keypress', () => {
        const captureKeyPressCallCount = captureKeyPressMock.mock.calls.length;
        expect(captureKeyPressCallCount).toBe(1);
      });
      searchMap.find('.searchbox-searchbutton').simulate('click', () => {
        const preZoomCallCount = preZoomMock.mock.calls.length;
        expect(preZoomCallCount).toBe(1);
      });
      searchMap.find('.clear-button').simulate('click', () => {
        const clearQueryMockCount = clearQueryMock.mock.calls.length;
        expect(clearQueryMockCount).toBe(1);
      });
    });
  });
});
