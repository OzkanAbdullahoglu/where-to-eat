/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import LeftPanel from './LeftPanel';
import { storeFactory } from '../../../utils/testUtils';

describe('Handling Apollo Client Side', () => {
  const store = storeFactory();
  const leftPanel = shallow(
    <MockedProvider addTypename={false}>
      <LeftPanel store={store} />
    </MockedProvider>
  ).dive().dive();

  it('renders Left Panel component correctly', () => {
    expect(leftPanel).toMatchSnapshot();
  });
  /*
  describe('Left Panel', () => {
    it('contains a Left Pane Component', () => {
        console.log(leftPanel.debug())
      expect(leftPanel.find('Connect(LeftPane)').exists()).toBe(true);
    });
    it('contains a List Component', () => {
      expect(leftPanel.find('Connect(List)').exists()).toBe(true);
    });
    it('contains a Toggle Button for whole panel Component', () => {
      expect(leftPanel.find('Connect(PanelToggleButton)').exists()).toBe(true);
    });
    it('contains a Tooltip Component', () => {
      expect(leftPanel.find('Connect(Tooltip)').exists()).toBe(true);
    });
    it('contains a Toggle Button for panel body Component', () => {
      expect(leftPanel.find('Connect(PanelOnlyToggleButton)').exists()).toBe(true);
    });
  });*/
});
