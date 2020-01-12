export const types = {
  FETCHED_DATA: 'FETCHED_DATA',
  TOGGLE_PANE: 'TOGGLE_PANE',
  TOGGLE_PANE_ONLY: 'TOGGLE_PANE_ONLY',
  DEFAULTS: 'DEFAULTS',
};

export const INITIAL_STATE: State = {
  fetchedData: '',
  togglePane: {
    toggleSearchBox: false,
    toggleCloseButton: false,
    toggleLeftPane: false,
  },
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
          toggleLeftPane: action.toggleLeftPane,
        },
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
    toggleLeftPane: !isLeftPanelStatus.toggleLeftPane,
  });
};

export const actions = {
  setFetchedData,
  setTogglePane,
  setTogglePaneOnly,
};

// SELECTORS
const getFetchedData = (state) => state.fetchedData;
const getLeftPanelStatus = (state) => state.togglePane;

export const selectors = {
  getFetchedData,
  getLeftPanelStatus,
};
