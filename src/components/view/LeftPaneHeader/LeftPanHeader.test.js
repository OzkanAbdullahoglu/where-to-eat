/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LeftPaneHeader from './LeftPaneHeader';

describe('Left Panel Header Component', () => {
  const userLocationUpdateMocked = jest.fn();
  const setTogglePaneOnlyMocked = jest.fn();
  const props = {
    userLocationUpdate: userLocationUpdateMocked,
    setTogglePaneOnly: setTogglePaneOnlyMocked,
  };
  const leftPaneHeader = shallow(<LeftPaneHeader {...props} />);
  it('renders Left Panel Header Component', () => {
    expect(toJson(leftPaneHeader)).toMatchSnapshot();
  });
  it('calls `userLocationUpdate` prop function once', () => {
    const useMyLocationButton = leftPaneHeader.find('.use-my-location');
    useMyLocationButton.simulate('click');
    const userLocationUpdateCallCount = userLocationUpdateMocked.mock.calls.length;
    expect(userLocationUpdateCallCount).toBe(1);
  });
  it('calls `setTogglePaneOnly` prop function once', () => {
    const setTogglePaneOnlyButton = leftPaneHeader.find('.set-toggle-pane-only');
    setTogglePaneOnlyButton.simulate('click');
    const setTogglePaneOnlyCallCount = setTogglePaneOnlyMocked.mock.calls.length;
    expect(setTogglePaneOnlyCallCount).toBe(1);
  });
});
