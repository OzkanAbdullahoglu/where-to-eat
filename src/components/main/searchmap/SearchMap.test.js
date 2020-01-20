/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import SearchMap from './SearchMap';
import { storeFactory } from '../../../utils/testUtils';

describe('SearchMap', () => {
  const store = storeFactory();
  const searchMap = shallow(<SearchMap store={store} />).dive().dive();

  it('renders SearchMap component correctly', () => {
    expect(searchMap).toMatchSnapshot();
  });
  it('contains an Alert Modal Component', () => {
    expect(searchMap.find('Connect(AlertModal)').exists()).toBe(true);
  });
  it('contains a Search Box Container Component', () => {
    expect(searchMap.find('.search-box-container').exists()).toBe(true);
  });
});
