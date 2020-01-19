/* eslint-disable linebreak-style */
import { combineReducers } from 'redux';
import mapReducer, {
  selectors as mapSelectors,
  actions as mapActions,
} from './mapReducer';

const rootReducer = combineReducers({
  map: mapReducer,
  version: () => ({
    number: '0.0.1',
  }),
});

// MAP SELECTORS
export const getFetchedData = (store) =>
  mapSelectors.getFetchedData(store.map);
export const getLeftPanelStatus = (store) =>
  mapSelectors.getLeftPanelStatus(store.map);
export const getSearchBoxStatus = (store) =>
  mapSelectors.getSearchBoxStatus(store.map);
export const getIsMainToggleButtonStatus = (store) =>
  mapSelectors.getIsMainToggleButtonStatus(store.map);
export const getIsAlertModalVisible = (store) =>
  mapSelectors.getIsAlertModalVisible(store.map);
export const getFetchStatus = (store) =>
  mapSelectors.getFetchStatus(store.map);

export { mapActions };

export default rootReducer;
