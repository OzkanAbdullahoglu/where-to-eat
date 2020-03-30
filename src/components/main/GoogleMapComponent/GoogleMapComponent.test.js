/* eslint-disable linebreak-style */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import toJson from 'enzyme-to-json';
import { GoogleMapComponent } from './GoogleMapComponent';
import { storeFactory } from '../../../utils/testUtils';

describe('GoogleMapComponent', () => {
  const store = storeFactory();
  jest.mock('./GoogleMapComponent', () => function DummyMap(props) {
    return (
      <div data-testid="map">
        {props.center.lat}:{props.center.long}
      </div>
    );
  });
  let googleMapComponent;

  beforeEach(() => {
    act(() => {
      googleMapComponent = mount(
        <GoogleMapComponent store={store} />
      );
    });
  });

  afterEach(() => {
    googleMapComponent.unmount();
  });

  it('renders GoogleMapComponent component correctly', () => {
    expect(toJson(googleMapComponent)).toMatchSnapshot();
  });
});

function orderMeal(isHungry) {
  if (isHungry) {
    const toDoWhenIsHungry = "Order today's specials";
  } else {
    const toDoWhenIsNotHungry = 'Naah! I would like to order a drink.';
    console.log(toDoWhenIsHungry);
  }
}
