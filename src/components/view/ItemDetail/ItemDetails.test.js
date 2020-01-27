/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ItemDetails from './ItemDetails';

describe('Item Details Component', () => {
  const props = {
    cost: '$$$$',
    address: 'test address',
    categories: [
      { title: 'Turkish', alias: 'turkish' },
    ],
  };
  const itemDetail = shallow(<ItemDetails {...props} />);
  it('renders Item Detail Component', () => {
    expect(toJson(itemDetail)).toMatchSnapshot();
  });
  it('render `cost` props', () => {
    const costSpan = itemDetail.find('.cards-result-cost').text();
    expect(costSpan).toEqual(props.cost);
  });
  it('render `address` props', () => {
    const addressSpan = itemDetail.find('.cards-result-location').text();
    expect(addressSpan).toEqual(props.address);
  });
  it('render `categories` props', () => {
    const categoriesSpan = itemDetail.find('.cards-result-details').text();
    expect(categoriesSpan).toEqual(props.categories[0].title);
  });
});

