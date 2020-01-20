/* eslint-disable linebreak-style */
import { mapTypes } from './index';
import mapReducer from './mapReducer';

describe('mapReducer', () => {
  const initialState = {
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
  it('returns default initial state of `false`', () => {
    expect(mapReducer(undefined, {})).toEqual(initialState);
  });
  it('returns state of toggleSearchBoxStatus true upon receiving an action of type `SEARCH_BOX_STATUS`', () => {
    expect(mapReducer(undefined, { type: mapTypes.DEFAULTS })).toEqual(initialState);
  });
});
