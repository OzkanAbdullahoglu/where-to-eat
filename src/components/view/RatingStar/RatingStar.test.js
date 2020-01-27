/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RatingStar from './RatingStar';

describe('Rating Star Component', () => {
  const props = {
    starStyle: '-half',
  };

  const ratingStarWrapper = shallow(<RatingStar {...props} />);
  it('renders Rating Star Component', () => {
    expect(toJson(ratingStarWrapper)).toMatchSnapshot();
  });
  it('renders `startStyle` props', () => {
    const startStyleProp = ratingStarWrapper.find('li').prop('className');
    expect(startStyleProp).toContain(props.starStyle);
  });
});
