/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import whyDidYouRender from '@welldone-software/why-did-you-render/dist/no-classes-transpile/umd/whyDidYouRender';

/* global google*/
import Geocode from 'react-geocode';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SearchBoxContainer } from '../styled-components/SearchBoxContainer';
import {
  getLeftPanelStatus,
  mapActions,
  getIsMainToggleButtonStatus,
  getIsAlertModalVisible,
  getFetchStatus } from '../../reducers';
import AlertModal from '../view/AlertModal';

whyDidYouRender(React, {
  onlyLogs: true,
  titleColor: 'green',
  diffNameColor: 'aqua',
});

/**
 * help of react-geocode settled geocode
 */
Geocode.setApiKey('AIzaSyDt0R1NakICIfNoUjNBjQEU3BlIr_QhtHY');

class SearchMap extends Component {
  /* static whyDidYouRender = true;*/
  componentDidMount() {
    this.getFocusElement.current.focus();
  }

  shouldComponentUpdate(nextProps) {
    const {
      isLeftPanelStatus,
      isFetchStatus,
      isFetchedData,
      isAlertModalVisible,
    } = this.props;
    return isLeftPanelStatus !== nextProps.isLeftPanelStatus ||
      isFetchStatus !== nextProps.isFetchStatus ||
      isFetchedData !== nextProps.isFetchedData ||
      isAlertModalVisible !== nextProps.isAlertModalVisible
    ;
  }

    /**
     * using createRef to manage focus
     * after component mounted we focus on searchbox firstly
     */
    getFocusElement = React.createRef();

    /**
     *  @description clear searchbox content
     */
    clearQuery = () => {
      const {
        setToggleFetch,
        setTogglePaneOnly,
        setHideMainToggleButton,
        setSearchBoxStatus,
        isFetchStatus,
        setFetchedData,
        isFetchedData,
      } = this.props;
      (document.getElementById('searchboxinput').value = '');
      setSearchBoxStatus();
      if (!isFetchStatus) {
        setToggleFetch();
      }
      if (isFetchedData !== '') {
        setFetchedData('');
      }
      if (!this.props.isLeftPanelStatus.toggleLeftPane) {
        setTogglePaneOnly();
        setHideMainToggleButton();
      }
    }

    /**
     *  @description settled a google autocomplete form inside of search bar
     */
    zoomAutocomplete = () => {
      this.autoComplete = new google.maps.places.Autocomplete(
        document.getElementById('searchboxinput')
      );
      google.maps.event.addDomListener(document.forms[0], 'keydown', (e) => {
        if (e.which === 13) {
          e.preventDefault();
        }
      });

      this.autoComplete.addListener('place_changed', () => {
        const searchInput = document.getElementById('searchboxinput').value;
        if (searchInput === '') {
          this.props.setToggleAlertModal();
        } else {
          this.preZoom();
        }
      });
    };

    /**
     *  @description gathering geometrical lat and lng from given location by user
     */
    preZoom = () => {
      const {
        setToggleFetch,
        setTogglePaneOnly,
        setHideMainToggleButton,
        setSearchBoxStatus,
        isFetchStatus,
      } = this.props;
      const searchInput = document.getElementById('searchboxinput').value;
      // checking If we have query from user
      if (isFetchStatus) {
        setToggleFetch();
      }
      if (this.props.isLeftPanelStatus.toggleLeftPane) {
        setSearchBoxStatus();
        setTogglePaneOnly();
        setHideMainToggleButton();
        this.zoomToArea(searchInput);
      } else {
        this.zoomToArea(searchInput);
      }
    }

  zoomToArea = (searchInput) => {
    // retrieving lat and lng from given location
    // with markerLocationTrigger updating map center and zoom to the new location
    Geocode.fromAddress(searchInput).then(
      (response) => {
        const lat = response.results[0].geometry.location.lat;
        const lng = response.results[0].geometry.location.lng;
        this.props.markerLocationTrigger(lat, lng);
      },
      (error) => {
        alert(
          `Please check your inquiry , server returned following ${searchInput} ${error}`
        );
      }
    );
  };

    captureKeyPress = (event) => {
      const searchInput = document.getElementById('searchboxinput').value;
      if (event.nativeEvent.keyCode === 13 && searchInput === '') {
        event.preventDefault();
      }
    }

    handleCloseAlertModal = () => this.props.setToggleAlertModal();

    render() {
      const { isLeftPanelStatus, isAlertModalVisible } = this.props;
      const warning = 'You must enter a place name to get results';
      return (
        <div id="searchbox-container">
          <AlertModal
            open={isAlertModalVisible}
            close={this.handleCloseAlertModal}
            warning={warning}
          />
          <SearchBoxContainer closed={isLeftPanelStatus.toggleSearchBox}>
            <div id="searchbox-single-box">
              <div className="searchbox-singlebox-root searchbox-active">
                <div
                  id="search-box"
                  role="search"
                  className="searchbox searchbox-shadow clear-button-shown"
                >
                  <form id="search-box-form" >
                    <input
                      ref={this.getFocusElement}
                      aria-label="Perform a search in Google maps"
                      id="searchboxinput"
                      type="text"
                      name="search for any location"
                      placeholder="Search for restaurants"
                      className="tactile-searchbox-input searchboxinput"
                      onChange={this.zoomAutocomplete}
                      onKeyPress={this.captureKeyPress}
                    ></input>
                  </form>
                  <div className="searchbox-searchbutton-container">
                    <button
                      className="searchbox-searchbutton"
                      onClick={this.preZoom}
                      aria-label="Search"
                    ></button>
                    <span
                      aria-hidden="true"
                      className="searchbox-tooltip tooltip-dark tooltip-hide"
                    >
                                        Search{' '}
                    </span>
                  </div>
                  <button
                    className="clear-button"
                    onClick={this.clearQuery}
                    aria-label="Clear search"
                  ></button>
                </div>
              </div>
            </div>
          </SearchBoxContainer>
        </div>
      );
    }
}

SearchMap.propTypes = {
  isLeftPanelStatus: PropTypes.object,
  markerLocationTrigger: PropTypes.func,
  setToggleFetch: PropTypes.func,
  setTogglePaneOnly: PropTypes.func,
  setHideMainToggleButton: PropTypes.func,
  setToggleAlertModal: PropTypes.func,
  setSearchBoxStatus: PropTypes.func,
  isFetchStatus: PropTypes.bool,
  setFetchedData: PropTypes.func,
  isFetchedData: PropTypes.bool,
  isAlertModalVisible: PropTypes.bool,
};

const mapStateToProps = (store) => ({
  isLeftPanelStatus: getLeftPanelStatus(store),
  isMainToggleButtonHide: getIsMainToggleButtonStatus(store),
  isAlertModalVisible: getIsAlertModalVisible(store),
  isFetchStatus: getFetchStatus(store),
});

const withRedux = connect(mapStateToProps, { ...mapActions });

export default compose(withRedux)(SearchMap);
