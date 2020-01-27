/* eslint-disable linebreak-style */
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import SearchBoxContainer from './SearchBoxContainer';

describe('Search Box Container Render', () => {
  const props = {
    closed: true,
  };

  it('renders search box container', () => {
    const searchBoxWrapper = shallow(<SearchBoxContainer {...props} />);
    expect(toJson(searchBoxWrapper)).toMatchSnapshot();
  });
  it('renders `closed` props', () => {
    const searchBoxWrapper = shallow(<SearchBoxContainer {...props} />);
    expect(searchBoxWrapper).toHaveStyleRule('transform', 'translateX(-408px)');
  });
});
