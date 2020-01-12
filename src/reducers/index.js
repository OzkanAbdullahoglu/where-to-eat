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

export { mapActions };

export default rootReducer;
