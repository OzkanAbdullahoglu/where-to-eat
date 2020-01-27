/* eslint-disable linebreak-style */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AlertModal, { BareAlertModal } from './AlertModal';
import { storeFactory, initialStates } from '../../../utils/testUtils';

describe('AlertModal Component', () => {
  const setupUnconnected = (state = {}, props = {}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<BareAlertModal store={store} {...props} />);
    return wrapper;
  };
  const setup = (state = {}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<AlertModal store={store} />).dive();
    return wrapper;
  };
  const closeMocked = jest.fn();
  const props = {
    isAlertModalVisible: false,
    close: closeMocked,
    warning: 'Test Warning Phrase',
  };
  const AlertModalWrapper = setupUnconnected({}, props);

  it('renders Alert Modal Component', () => {
    expect(toJson(AlertModalWrapper)).toMatchSnapshot();
  });

  describe('Alert Modal Renders Material UI Components', () => {
    it('contains a Dialog Component', () => {
      expect(AlertModalWrapper.find('WithStyles(ForwardRef(Dialog))').exists()).toBe(true);
    });
    it('contains a Dialog Title Component', () => {
      expect(AlertModalWrapper.find('WithStyles(ForwardRef(DialogTitle))').exists()).toBe(true);
    });
    it('contains a Dialog Content Component', () => {
      expect(AlertModalWrapper.find('WithStyles(ForwardRef(DialogContent))').exists()).toBe(true);
    });
    it('contains a Dialog Content Text Component', () => {
      expect(AlertModalWrapper.find('WithStyles(ForwardRef(DialogContentText))').exists()).toBe(true);
    });
    it('contains a Dialog Actions Component', () => {
      expect(AlertModalWrapper.find('WithStyles(ForwardRef(DialogActions))').exists()).toBe(true);
    });
    it('contains a Button Component', () => {
      expect(AlertModalWrapper.find('WithStyles(ForwardRef(Button))').exists()).toBe(true);
    });
  });

  describe('Alert Modal Render Props Correctly', () => {
    it('renders `isAlertModalVisible` props', () => {
      const openProp = AlertModalWrapper.find('WithStyles(ForwardRef(Dialog))').prop('open');
      expect(openProp).toEqual(props.isAlertModalVisible);
    });
    it('renders `warning` props', () => {
      const warningProp = AlertModalWrapper.find('WithStyles(ForwardRef(DialogContentText))').text();
      expect(warningProp).toEqual(props.warning);
    });

    it('renders `close` props', () => {
      const closeProp = AlertModalWrapper.find('WithStyles(ForwardRef(Button))');
      closeProp.simulate('click');
      expect(props.close.mock.calls.length).toBe(1);
    });
  });

  describe('redux properties', () => {
    const AlertModalConnectedWrapper = setup(initialStates, {});
    const isAlertModalVisibleProp = AlertModalConnectedWrapper.props()
      .store.getState().map.toggleAlertModal;
    it('has access to `isAlertModalVisible` state', () => {
      expect(isAlertModalVisibleProp).toEqual(props.isAlertModalVisible);
    });
  });
});
