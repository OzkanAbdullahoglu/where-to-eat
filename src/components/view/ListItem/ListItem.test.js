/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListItem from './ListItem';
import { openHoursManage } from '../../../utils/helper';

describe('List Item Component', () => {
  let openHoursManageMocked = jest.fn();

  const props = {
    name: 'test-name',
    itemRate: 5,
    reviewCounts: 123,
    itemCost: '$',
    itemAddress: 'test address',
    itemHours: [
      {
        open: [
          { is_overnight: false, end: '2200', start: '1200', day: 0 },
          { is_overnight: false, end: '2200', start: '1200', day: 1 },
          { is_overnight: false, end: '2200', start: '1200', day: 2 },
          { is_overnight: false, end: '2200', start: '1200', day: 3 },
          { is_overnight: false, end: '2200', start: '1200', day: 4 },
          { is_overnight: false, end: '2200', start: '1200', day: 5 },
          { is_overnight: false, end: '2200', start: '1200', day: 6 },
        ],
      },
    ],
    imageURL: ['test url'],
    yelpURL: 'test yelp url',
    itemCategories: [
      { title: 'Test title' },
    ],
  };

  const listItemWrapper = shallow(<ListItem {...props} />);
  it('renders List Component', () => {
    expect(toJson(listItemWrapper)).toMatchSnapshot();
  });
  it('contains a Item Details Component', () => {
    expect(listItemWrapper.find('ItemDetails').exists()).toBe(true);
  });
  it('contains a Item Rating Component', () => {
    expect(listItemWrapper.find('ItemRating').exists()).toBe(true);
  });

  describe('List Item Component Passing Props Correctly', () => {
    it('passing `rating` props', () => {
      const ratingProp = listItemWrapper.find('ItemRating').prop('rating');
      expect(ratingProp).toEqual(props.itemRate);
    });
    it('passing `reviewCount` props', () => {
      const reviewCountProp = listItemWrapper.find('ItemRating').prop('reviewCount');
      expect(reviewCountProp).toEqual(props.reviewCounts);
    });
    it('passing `cost` props', () => {
      const costProp = listItemWrapper.find('ItemDetails').prop('cost');
      expect(costProp).toEqual(props.itemCost);
    });
    it('passing `address` props', () => {
      const addressProp = listItemWrapper.find('ItemDetails').prop('address');
      expect(addressProp).toEqual(props.itemAddress);
    });
    it('passing `categories` props', () => {
      const categoriesProp = listItemWrapper.find('ItemDetails').prop('categories');
      expect(categoriesProp).toEqual(props.itemCategories);
    });
  });
  describe('List Item Component Render Props Correctly', () => {
    it('renders `name` props', () => {
      const nameSpanProp = listItemWrapper.find('.cards-result-title').children().text();
      expect(nameSpanProp).toEqual(props.name);
    });
    it('renders `yelpURL` props', () => {
      const yelpURLHrefProp = listItemWrapper.find('a').prop('href');
      expect(yelpURLHrefProp).toEqual(props.yelpURL);
    });
    it('renders `itemHours` props', () => {
      openHoursManageMocked = openHoursManage;
      const itemHoursProp = listItemWrapper.find('.cards-result-opening-hours').text();
      expect(itemHoursProp).toEqual(openHoursManageMocked(props.itemHours[0]));
    });
    it('renders `imageURL` props', () => {
      openHoursManageMocked = openHoursManage;
      const imageURLProp = listItemWrapper.find('.cards-result-image').prop('style');
      expect(imageURLProp.backgroundImage).toContain(props.imageURL);
    });
  });
});
