/* eslint-disable linebreak-style */
export const types = {
  FETCHED_DATA: 'FETCHED_DATA',
  TOGGLE_PANE: 'TOGGLE_PANE',
  TOGGLE_PANE_ONLY: 'TOGGLE_PANE_ONLY',
  SEARCH_BOX_STATUS: 'SEARCH_BOX_STATUS',
  HIDE_MAIN_TOGGLE_BUTTON: 'HIDE_MAIN_TOGGLE_BUTTON',
  TOGGLE_ALERT_MODAL: 'TOGGLE_ALERT_MODAL',
  TOGGLE_FETCH: 'TOGGLE_FETCH',
  DEFAULTS: 'DEFAULTS',
};

export const INITIAL_STATE: State = {
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

export default (state: State = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.FETCHED_DATA:
      return {
        ...state,
        fetchedData: action.fetchedData,
      };
    case types.TOGGLE_PANE:
      return {
        ...state,
        togglePane: {
          toggleSearchBox: action.toggleSearchBox,
          toggleCloseButton: action.toggleCloseButton,
          toggleLeftPane: action.toggleLeftPane,
        },
      };
    case types.TOGGLE_PANE_ONLY:
      return {
        ...state,
        togglePane: {
          toggleSearchBox: action.toggleSearchBox,
          toggleCloseButton: action.toggleCloseButton,
          toggleLeftPane: action.toggleLeftPane,
        },
      };
    case types.SEARCH_BOX_STATUS:
      return {
        ...state,
        toggleSearchBoxStatus: action.toggleSearchBoxStatus,
      };
    case types.HIDE_MAIN_TOGGLE_BUTTON:
      return {
        ...state,
        hideMainToggleButton: action.hideMainToggleButton,
      };
    case types.TOGGLE_ALERT_MODAL:
      return {
        ...state,
        toggleAlertModal: action.toggleAlertModal,
      };
    case types.TOGGLE_FETCH:
      return {
        ...state,
        toggleFetch: action.toggleFetch,
      };
    case types.DEFAULTS:
      return INITIAL_STATE;
    default:
      return state;
  }
};


// ACTIONS
const setFetchedData = (fetchedData) => (dispatch) => {
  dispatch({
    type: types.FETCHED_DATA,
    fetchedData,
  });
};
const setTogglePane = () => (dispatch, getStore) => {
  const mapStore = getStore().map;
  const isLeftPanelStatus = getLeftPanelStatus(mapStore);
  dispatch({
    type: types.TOGGLE_PANE,
    toggleSearchBox: !isLeftPanelStatus.toggleSearchBox,
    toggleCloseButton: !isLeftPanelStatus.toggleCloseButton,
    toggleLeftPane: !isLeftPanelStatus.toggleLeftPane,
  });
};

const setTogglePaneOnly = () => (dispatch, getStore) => {
  const mapStore = getStore().map;
  const isLeftPanelStatus = getLeftPanelStatus(mapStore);
  dispatch({
    type: types.TOGGLE_PANE_ONLY,
    toggleSearchBox: isLeftPanelStatus.toggleSearchBox,
    toggleCloseButton: isLeftPanelStatus.toggleCloseButton,
    toggleLeftPane: !isLeftPanelStatus.toggleLeftPane,
  });
};

const setSearchBoxStatus = () => (dispatch, getStore) => {
  const mapStore = getStore().map;
  const isSearchBoxStatus = getSearchBoxStatus(mapStore);
  dispatch({
    type: types.SEARCH_BOX_STATUS,
    toggleSearchBoxStatus: !isSearchBoxStatus,
  });
};
const setHideMainToggleButton = () => (dispatch, getStore) => {
  const mapStore = getStore().map;
  const isMainToggleButtonHide = getIsMainToggleButtonStatus(mapStore);
  dispatch({
    type: types.HIDE_MAIN_TOGGLE_BUTTON,
    hideMainToggleButton: !isMainToggleButtonHide,
  });
};

const setToggleAlertModal = () => (dispatch, getStore) => {
  const mapStore = getStore().map;
  const isAlertModalVisible = getIsAlertModalVisible(mapStore);
  dispatch({
    type: types.TOGGLE_ALERT_MODAL,
    toggleAlertModal: !isAlertModalVisible,
  });
};

const setToggleFetch = () => (dispatch, getStore) => {
  const mapStore = getStore().map;
  const isFetchStatus = getFetchStatus(mapStore);
  dispatch({
    type: types.TOGGLE_FETCH,
    toggleFetch: !isFetchStatus,
  });
};

const setDefault = () => ({
  type: types.DEFAULTS,
});

export const actions = {
  setFetchedData,
  setTogglePane,
  setTogglePaneOnly,
  setSearchBoxStatus,
  setHideMainToggleButton,
  setToggleAlertModal,
  setToggleFetch,
  setDefault,
};

// SELECTORS
const getFetchedData = (state) => state.fetchedData;
const getLeftPanelStatus = (state) => state.togglePane;
const getSearchBoxStatus = (state) => state.toggleSearchBoxStatus;
const getIsMainToggleButtonStatus = (state) => state.hideMainToggleButton;
const getIsAlertModalVisible = (state) => state.toggleAlertModal;
const getFetchStatus = (state) => state.toggleFetch;

export const selectors = {
  getFetchedData,
  getLeftPanelStatus,
  getSearchBoxStatus,
  getIsMainToggleButtonStatus,
  getIsAlertModalVisible,
  getFetchStatus,
};
