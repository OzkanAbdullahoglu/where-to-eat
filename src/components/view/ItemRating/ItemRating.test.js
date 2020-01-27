/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemRating from './ItemRating';

describe('Item Rating Component', () => {
  const props = {
    rating: 4.5,
    reviewCount: 133,
  };
  const itemRating = shallow(<ItemRating {...props} />);
  it('renders Item Rating Component', () => {
    expect(toJson(itemRating)).toMatchSnapshot();
  });
  it('renders Rating Star Component', () => {
    expect(itemRating.find('RatingStar').exists()).toBe(true);
  });
  it('renders `rating` props', () => {
    const ratingSpan = itemRating.find('.cards-rating-score').text();
    expect(ratingSpan).toEqual((props.rating).toString());
  });
  it('renders `reviewCount` props', () => {
    const reviewCounSpan = itemRating.find('.cards-result-num-ratings').text();
    expect(reviewCounSpan).toEqual(`${props.reviewCount} reviews`);
  });
});
