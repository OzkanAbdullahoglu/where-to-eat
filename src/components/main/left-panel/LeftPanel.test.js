/* eslint-disable linebreak-style */
import React from 'react';
import { shallow, mount } from 'enzyme';
import wait from 'waait';
import { MockedProvider } from '@apollo/react-testing';
import { act } from '@testing-library/react';
import toJson from 'enzyme-to-json';
import LeftPanel, { BareLeftPanel } from './LeftPanel';
import { storeFactory, queryMock, queryErrorMock } from '../../../utils/testUtils';

describe('Handling Apollo Client Side', () => {
  let leftPanel;
  const store = storeFactory();
  const setFetchedDataMock = jest.fn();
  const props = {
    lat: 40.9625,
    lng: 29.1102,
    isFetchStatus: false,
    isLeftPanelStatus: {
      toggleSearchBox: false,
      toggleCloseButton: false,
      toggleLeftPane: true,
    },
    setFetchedData: setFetchedDataMock,

  };

  it('renders Left Panel component correctly', async () => {
    act(() => {
      leftPanel = mount(
        <MockedProvider mocks={queryMock} addTypename={false}>
          <BareLeftPanel store={store} {...props} />
        </MockedProvider>
      );
    });
    await wait(0); // wait for response
    expect(toJson(leftPanel)).toMatchSnapshot();
    leftPanel.unmount();
  });

  it('should render loading state initially', async () => {
    act(() => {
      leftPanel = mount(
        <MockedProvider mocks={[]} addTypename={false}>
          <BareLeftPanel store={store} {...props} />
        </MockedProvider>
      );
    });
    await wait(5); // wait for response
    expect(leftPanel.find('.loading-state').exists()).toBe(true);
  });

  it('should show error UI', async () => {
    act(() => {
      leftPanel = mount(
        <MockedProvider mocks={queryErrorMock} addTypename={false}>
          <BareLeftPanel store={store} {...props} />
        </MockedProvider>
      );
    });
    await wait(10); // wait for response
    leftPanel.update();
    expect(leftPanel.render().text()).toContain('Test error!');
    leftPanel.unmount();
  });

  it('should render results', async () => {
    act(() => {
      leftPanel = mount(
        <MockedProvider mocks={queryMock} addTypename={false}>
          <BareLeftPanel store={store} {...props} />
        </MockedProvider>
      );
    });
    await wait(15); // wait for response
    leftPanel.update();
    expect(leftPanel.find('.left-pane-footer').text()).toEqual('Total 1 items in the list');
  });

  describe('Rendering sub components', () => {
    it('contains a List Component', () => {
      expect(leftPanel.find('.list').exists()).toBe(true);
    });
    it('contains a Toggle Button for whole panel Component', () => {
      expect(leftPanel.find('.panel-toggle-button').exists()).toBe(true);
    });
    it('contains a Tooltip Component', () => {
      expect(leftPanel.find('.tooltip').exists()).toBe(true);
    });
    it('contains a Toggle Button for panel body Component', () => {
      expect(leftPanel.find('.panel-body-toggle-button').exists()).toBe(true);
    });
    it('contains a header Component', () => {
      expect(leftPanel.find('.left-pane-header').exists()).toBe(true);
    });
  });

  describe('redux properties', () => {
    leftPanel = shallow(
      <MockedProvider mocks={queryMock} addTypename={false}>
        <LeftPanel store={store} />
      </MockedProvider>
    );

    it('has access to `isFetchStatus` state', () => {
      const isFetchStatus = true;
      const fetchedDataProp = leftPanel.instance()
        .props.children.props.store.getState()
        .map.toggleFetch;
      expect(fetchedDataProp).toEqual(isFetchStatus);
    });
    it('has access to `isLeftPanelStatus` state', () => {
      const togglePane = {
        toggleSearchBox: false,
        toggleCloseButton: false,
        toggleLeftPane: true,
      };
      const toggleSearchBoxProp = leftPanel.instance()
        .props.children.props.store.getState()
        .map.togglePane.toggleSearchBox;
      const toggleCloseButtonProp = leftPanel.instance()
        .props.children.props.store.getState()
        .map.togglePane.toggleCloseButton;
      const toggleLeftPaneProp = leftPanel.instance()
        .props.children.props.store.getState()
        .map.togglePane.toggleLeftPane;
      expect(toggleSearchBoxProp).toEqual(togglePane.toggleSearchBox);
      expect(toggleCloseButtonProp).toEqual(togglePane.toggleCloseButton);
      expect(toggleLeftPaneProp).toEqual(togglePane.toggleLeftPane);
    });

    it('has access to `isMainToggleButtonHide` state', () => {
      const hideMainToggleButton = true;
      const hideMainToggleProp = leftPanel.instance()
        .props.children.props.store.getState()
        .map.hideMainToggleButton;
      expect(hideMainToggleProp).toEqual(hideMainToggleButton);
    });
  });
});

