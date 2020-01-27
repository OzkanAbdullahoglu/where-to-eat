/* eslint-disable linebreak-style */
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import PanelToggleButton from './PanelToggleButton';

describe('Panel Toggle Button Render', () => {
  const props = {
    closed: true,
    hide: false,
  };

  it('renders toggle button', () => {
    const toggleButtonWrapper = shallow(<PanelToggleButton {...props} />);
    expect(toJson(toggleButtonWrapper)).toMatchSnapshot();
  });
  it('renders `closed` and `hide`  props', () => {
    const toggleButtonWrapper = shallow(<PanelToggleButton {...props} />);
    expect(toggleButtonWrapper).toHaveStyleRule('transform', 'scaleX(-1)');
    expect(toggleButtonWrapper).toHaveStyleRule('display', 'inline-block');
  });
  it('renders properly on modifiers and specific media queries', () => {
    const toggleButtonWrapper = shallow(<PanelToggleButton {...props} />);
    expect(toggleButtonWrapper).toHaveStyleRule('background-color', '#fffafb', {
      modifier: ':hover',
    });
    expect(toggleButtonWrapper).toHaveStyleRule('display', 'none', {
      media: '(max-width:414px)',
    });
  });
});
