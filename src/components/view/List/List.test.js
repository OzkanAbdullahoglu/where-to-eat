/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from './List';
import { fetchedDataMock } from '../../../utils/testUtils';

describe('List Component', () => {
  const props = {
    fetchedData: fetchedDataMock,
  };
  const listWrapper = shallow(<List {...props} />);
  it('renders List Component', () => {
    expect(toJson(listWrapper)).toMatchSnapshot();
  });
  it('contains a List Item Component', () => {
    expect(listWrapper.find('ListItem').exists()).toBe(true);
  });

  describe('List Component Passing Props Correctly', () => {
    it('passing `imageURL` props', () => {
      const imageURLProp = listWrapper.find('ListItem').prop('imageURL');
      expect(imageURLProp).toEqual(props.fetchedData[0].photos);
    });
    it('passing `key` props', () => {
      const keyProp = listWrapper.find('ListItem').prop('keyTest');
      expect(keyProp).toEqual(props.fetchedData[0].id);
    });
    it('passing `name` props', () => {
      const nameProp = listWrapper.find('ListItem').prop('name');
      expect(nameProp).toEqual(props.fetchedData[0].name);
    });
    it('passing `itemRate` props', () => {
      const itemRateProp = listWrapper.find('ListItem').prop('itemRate');
      expect(itemRateProp).toEqual(props.fetchedData[0].rating);
    });
    it('passing `reviewCounts` props', () => {
      const reviewCountsProp = listWrapper.find('ListItem').prop('reviewCounts');
      expect(reviewCountsProp).toEqual(props.fetchedData[0].review_count);
    });
    it('passing `itemCost` props', () => {
      const itemCostProp = listWrapper.find('ListItem').prop('itemCost');
      expect(itemCostProp).toEqual(props.fetchedData[0].price);
    });
    it('passing `itemAddress` props', () => {
      const itemAddressProp = listWrapper.find('ListItem').prop('itemAddress');
      expect(itemAddressProp).toEqual(`${props.fetchedData[0].location.address1} ${props.fetchedData[0].location.address1} ${props.fetchedData[0].location.city}`);
    });
    it('passing `itemHours` props', () => {
      const itemHoursProp = listWrapper.find('ListItem').prop('itemHours');
      expect(itemHoursProp).toEqual(props.fetchedData[0].hours);
    });
    it('passing `yelpURL` props', () => {
      const yelpURLProp = listWrapper.find('ListItem').prop('yelpURL');
      expect(yelpURLProp).toEqual(props.fetchedData[0].url);
    });
    it('passing `itemCategories` props', () => {
      const itemCategoriesProp = listWrapper.find('ListItem').prop('itemCategories');
      expect(itemCategoriesProp).toEqual(props.fetchedData[0].categories);
    });
  });
});
