/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import LeftPane from './LeftPane';

describe('Left Pane Render', () => {
  const props = {
    closed: true,
  };

  it('renders left pane', () => {
    const leftPaneWrapper = shallow(<LeftPane {...props} />);
    expect(toJson(leftPaneWrapper)).toMatchSnapshot();
  });
  it('renders `closed` props', () => {
    const leftPaneWrapper = shallow(<LeftPane {...props} />);
    expect(leftPaneWrapper).toHaveStyleRule('transform', 'translateX(-408px)');
  });
});
