/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import Tooltip from './Tooltip';

describe('Search Box Container Render', () => {
  it('renders search box container', () => {
    const toolTipWrapper = shallow(<Tooltip />);
    expect(toJson(toolTipWrapper)).toMatchSnapshot();
  });
});
