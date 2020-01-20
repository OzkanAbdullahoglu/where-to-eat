/* eslint-disable linebreak-style */
import { mapActions, mapTypes } from './index';
import { storeFactory } from '../utils/testUtils';

describe('return initial state', () => {
  it('returns an action with type `DEFAULTS`', () => {
    const setDefaultAction = mapActions.setDefault();
    expect(setDefaultAction).toEqual({ type: mapTypes.DEFAULTS });
  });
  const map = {
    fetchedData: '',
    togglePane: {
      toggleSearchBox: false,
      toggleCloseButton: false,
      toggleLeftPane: true,
    },
    toggleSearchBoxStatus: false,
    toggleAlertModal: false,
    toggleFetch: true,
    hideMainToggleButton: true,
  };
  const version = { number: '0.0.1' };

  describe('action dispatcher to manipulate initial state', () => {
    let store;
    const initialState = { map, version };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    it('toggle search box status', () => {
      store.dispatch(mapActions.setSearchBoxStatus());
      const newState = store.getState();
      map.toggleSearchBoxStatus = !map.toggleSearchBoxStatus;
      const expectedState = { map, version };
      expect(newState).toEqual(expectedState);
    });
    it('toggle alert modal', () => {
      store.dispatch(mapActions.setToggleAlertModal());
      const newState = store.getState();
      map.toggleAlertModal = !map.toggleAlertModal;
      const expectedState = { map, version };
      expect(newState).toEqual(expectedState);
    });
    it('toggle fetch status', () => {
      store.dispatch(mapActions.setToggleFetch());
      const newState = store.getState();
      map.toggleFetch = !map.toggleFetch;
      const expectedState = { map, version };
      expect(newState).toEqual(expectedState);
    });
    it('toggle hide main toggle button', () => {
      store.dispatch(mapActions.setHideMainToggleButton());
      const newState = store.getState();
      map.hideMainToggleButton = !map.hideMainToggleButton;
      const expectedState = { map, version };
      expect(newState).toEqual(expectedState);
    });
    it('toggle pane elements state', () => {
      store.dispatch(mapActions.setTogglePane());
      const newState = store.getState();
      map.togglePane.toggleSearchBox = !map.togglePane.toggleSearchBox;
      map.togglePane.toggleCloseButton = !map.togglePane.toggleCloseButton;
      map.togglePane.toggleLeftPane = !map.togglePane.toggleLeftPane;
      const expectedState = { map, version };
      expect(newState).toEqual(expectedState);
    });
    it('toggle just pane body in pane', () => {
      store.dispatch(mapActions.setTogglePaneOnly());
      const newState = store.getState();
      map.togglePane.toggleLeftPane = !map.togglePane.toggleLeftPane;
      const expectedState = { map, version };
      expect(newState).toEqual(expectedState);
    });
  });
});
