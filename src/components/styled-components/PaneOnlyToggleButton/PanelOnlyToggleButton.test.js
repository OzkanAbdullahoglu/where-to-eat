/* eslint-disable linebreak-style */
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import PanelOnlyToggleButton from './PanelOnlyToggleButton';

describe('Panel Only Toggle Button Render', () => {
  it('renders left Panel Only Toggle Button', () => {
    const toggleButtonForBodyWrapper = shallow(<PanelOnlyToggleButton />);
    expect(toJson(toggleButtonForBodyWrapper)).toMatchSnapshot();
  });
  it('renders properly on modifiers and specific media queries', () => {
    const toggleButtonForBodyWrapper = shallow(<PanelOnlyToggleButton />);
    expect(toggleButtonForBodyWrapper).toHaveStyleRule('background-color', '#fffafb', {
      modifier: ':hover',
    });
    expect(toggleButtonForBodyWrapper).toHaveStyleRule('display', 'none', {
      media: '(min-width:768px)',
    });
  });
});
