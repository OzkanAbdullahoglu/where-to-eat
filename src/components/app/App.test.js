/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders main app correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a Map Component', () => {
    expect(app.find('Connect(Map)').exists()).toBe(true);
  });
});
