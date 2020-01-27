/* eslint-disable linebreak-style */
import React from 'react';
import { ActivityIndicator } from 'react-native-web';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import LeftPanHeader from '../../view/LeftPaneHeader/LeftPaneHeader';
import List from '../../view/List/List';
import { LeftPane } from '../../styled-components/LeftPane/LeftPane';
import PanelToggleButton from '../../styled-components/PanelToggleButton/PanelToggleButton';
import PanelOnlyToggleButton from '../../styled-components/PaneOnlyToggleButton/PanelOnlyToggleButton';
import Tooltip from '../../styled-components/Tooltip/Tooltip';
import { getLeftPanelStatus, getIsMainToggleButtonStatus, mapActions, getFetchStatus } from '../../../reducers';


export const GET_YELP_DATA = gql`
  query Search($latitude: Float!, $longitude: Float!) {
    search(
      term: "restaurants"
      latitude: $latitude
      longitude: $longitude
      limit: 50
    ) {
      total
      business {
        location {
          address1
          address2
          address3
          city
          state
          postal_code
          country
        }
        hours {
          open {
            is_overnight
            end
            start
            day
          }
        }
        categories {
          title
          alias
          parent_categories {
            title
            alias
          }
        }
        coordinates {
          latitude
          longitude
        }
        id
        name
        rating
        review_count
        price
        url
        photos
      }
    }
  }
`;

export const BareLeftPanel = ({
  lat,
  lng,
  isFetchStatus,
  setFetchedData,
  setTogglePane,
  setTogglePaneOnly,
  isLeftPanelStatus,
  userLocationUpdate,
  isMainToggleButtonHide,
}) => {
  const { loading, error, data } = useQuery(GET_YELP_DATA, {
    variables: { latitude: lat, longitude: lng },
  });

  if (isFetchStatus) {
    return (
      <div id="pane">
        <LeftPane className="left-pane" closed={isLeftPanelStatus.toggleLeftPane}>
          <div className="left-pane-content-holder">
            <div className="cards-layout cards-layout-root" tabIndex="-1">
              <div className="cards-searchbox-spacer"></div>
            </div>
          </div>
        </LeftPane>
      </div>
    );
  }
  if (loading) {
    return (
      <div id="pane">
        <LeftPane closed={isLeftPanelStatus.toggleLeftPane}>
          <div className="left-pane-content-holder">
            <div className="cards-layout cards-layout-root" tabIndex="-1">
              <div className="cards-searchbox-spacer"></div>
              <ActivityIndicator className="loading-state" color="#2E3B4B" />
            </div>
          </div>
        </LeftPane>
      </div>
    );
  }

  if (error) return `Error! ${error}`;
  if (data) {
    console.log(data);
    const fetchedData = data.search.business;
    const itemCount = fetchedData.length;
    setFetchedData(fetchedData);
    return (
      <div id="pane">
        <LeftPane className="left-pane" closed={isLeftPanelStatus.toggleLeftPane}>
          <div className="left-pane-content scrollable-y" tabIndex="-1">
            <div className="left-pane-content-holder">
              <div className="cards-layout cards-layout-root" tabIndex="-1">
                <div className="cards-searchbox-spacer"></div>
                <LeftPanHeader className="left-pane-header" userLocationUpdate={userLocationUpdate} setTogglePaneOnly={setTogglePaneOnly} />
                <List className="list" fetchedData={fetchedData} />
                <div className="left-pane-footer">{`Total ${itemCount} items in the list`}</div>
              </div>
            </div>
          </div>
          <div className="left-pane-toggle-button-container">
            <PanelToggleButton
              onClick={setTogglePane}
              closed={isLeftPanelStatus.toggleCloseButton}
              hide={isMainToggleButtonHide}
              className="panel-toggle-button"
            >
              <Tooltip className="tooltip">Collapse side panel</Tooltip>
            </PanelToggleButton>
          </div>
          <div className="custom-pane-toggle-button-container">
            <PanelOnlyToggleButton
              onClick={setTogglePaneOnly}
              closed={isLeftPanelStatus.toggleCloseButton}
              className="panel-body-toggle-button"
            />
          </div>
        </LeftPane>
      </div>
    );
  }
};

BareLeftPanel.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  isFetchStatus: PropTypes.bool,
  setFetchedData: PropTypes.func,
  setTogglePane: PropTypes.func,
  setTogglePaneOnly: PropTypes.func,
  isLeftPanelStatus: PropTypes.object,
  userLocationUpdate: PropTypes.func,
  isMainToggleButtonHide: PropTypes.bool,
};

const mapStateToProps = (store) => ({
  isLeftPanelStatus: getLeftPanelStatus(store),
  isMainToggleButtonHide: getIsMainToggleButtonStatus(store),
  isFetchStatus: getFetchStatus(store),
});

const withRedux = connect(mapStateToProps, { ...mapActions });

export default compose(withRedux)(BareLeftPanel);
