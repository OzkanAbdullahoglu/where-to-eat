import React, { Component } from 'react';
/* global google*/
import Geocode from 'react-geocode';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { SearchBoxContainer } from './common/SearchBoxContainer';
import { getLeftPanelStatus } from '../reducers';

/**
 * help of react-geocode settled geocode
 */
Geocode.setApiKey('AIzaSyDt0R1NakICIfNoUjNBjQEU3BlIr_QhtHY');

class SearchMap extends Component {
  /**
   * using createRef to manage focus
   * after component mounted we focus on searchbox firstly
   */
  componentDidMount() {
    this.getFocusElement.current.focus();
  }

  /**
   *  @description after component updated we reset the inquiry inside of the search bar
   */
  componentDidUpdate() {
    this.clearQuery();
  }

  getFocusElement = React.createRef();

  clearQuery = () => (document.getElementById('searchboxinput').value = '');

  /**
   *  @description settled a google autocomplete form inside of search bar
   */
  zoomAutocomplete = () => {
    const autoComplete = new google.maps.places.Autocomplete(
      document.getElementById('searchboxinput')
    );
    return autoComplete;
  };

  /**
   *  @description gathering geometrical lat and lng from given location by user
   */
  zoomToArea = () => {
    const searchInput = document.getElementById('searchboxinput').value;

    // checking If we have query from user
    if (searchInput === '') {
      alert('You must enter a place name to get results');
    } else {
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
            `Please check your inquiry , server returned following ${error}`
          );
        }
      );
    }
  };

  render() {
    const { isLeftPanelStatus } = this.props;
    return (
      <div id="searchbox-container">
        <SearchBoxContainer closed={isLeftPanelStatus.toggleSearchBox}>
          <div id="searchbox-single-box">
            <div className="searchbox-singlebox-root searchbox-active">
              <div
                id="search-box"
                role="search"
                className="searchbox searchbox-shadow clear-button-shown"
              >
                <form id="search-box-form">
                  <input
                    ref={this.getFocusElement}
                    aria-label="Perform a search in Google maps"
                    id="searchboxinput"
                    type="text"
                    name="search for any location"
                    placeholder="Search for restaurants"
                    className="tactile-searchbox-input searchboxinput"
                    onChange={this.zoomAutocomplete}
                    onKeyPress={this.keyPressedSubmit}
                  ></input>
                </form>
                <div className="searchbox-searchbutton-container">
                  <button
                    className="searchbox-searchbutton"
                    onClick={this.zoomToArea}
                    aria-label="Search"
                  ></button>
                  <span
                    aria-hidden="true"
                    className="searchbox-tooltip tooltip-dark tooltip-hide"
                  >
                    Search
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

const mapStateToProps = (store) => ({
  isLeftPanelStatus: getLeftPanelStatus(store),
});

const withRedux = connect(mapStateToProps);

export default compose(withRedux)(SearchMap);
