import React from 'react';
import { ActivityIndicator } from 'react-native-web';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { LeftPane } from './common/LeftPane';
import { PanelToggleButton } from './common/PanelToggleButton';
import { PanelOnlyToggleButton } from './common/PanelOnlyToggleButton';
import { Tooltip } from './common/Tooltip';
import { getLeftPanelStatus, mapActions } from '../reducers';

const GET_YELP_DATA = gql`
  query Search($latitude: Float!, $longitude: Float!) {
    search(
      term: "restaurants"
      latitude: $latitude
      longitude: $longitude
      limit: 40
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

const LeftPanel = ({
  lat,
  lng,
  setFetchedData,
  setTogglePane,
  setTogglePaneOnly,
  isLeftPanelStatus,
  userLocationUpdate,
}) => {
  const { loading, error, data } = useQuery(GET_YELP_DATA, {
    variables: { latitude: lat, longitude: lng },
  });

  if (loading) {
    return (
      <div id="pane">
        <LeftPane closed={isLeftPanelStatus.toggleLeftPane}>
          <div className="left-pane-content-holder">
            <div className="cards-layout cards-layout-root" tabIndex="-1">
              <div className="cards-searchbox-spacer"></div>
              <ActivityIndicator color="#2E3B4B" />
            </div>
          </div>
        </LeftPane>
      </div>
    );
  }

  if (error) return `Error! ${error}`;
  const fetchedData = data.search.business;
  const itemCount = fetchedData.length;
  setFetchedData(fetchedData);

  return (
    <div id="pane">
      <LeftPane closed={isLeftPanelStatus.toggleLeftPane}>
        <div className="left-pane-content scrollable-y" tabIndex="-1">
          <div className="left-pane-content-holder">
            <div className="cards-layout cards-layout-root" tabIndex="-1">
              <div className="cards-searchbox-spacer"></div>
              <div
                className="cards-layout cards-layout-flex-horizontal"
                tabIndex="-1"
              >
                <button className="header-buttons" onClick={userLocationUpdate}>
                  Use my location
                </button>
                <button
                  className="header-buttons hide-larger-device"
                  onClick={setTogglePaneOnly}
                >
                  Show on map
                </button>
              </div>
              <div className="cards-divider cards-divider-bottom-line"></div>
              <div
                className="cards-layout cards-scrollbox scrollable-y cards-layout-flex-vertical"
                tabIndex="-1"
              >
                {fetchedData.map((item) => (
                  <ListItem
                    key={item.id}
                    name={item.name}
                    itemRate={item.rating}
                    reviewCounts={item.review_count}
                    itemCost={item.price}
                    itemAddress={`${item.location.address1} ${item.location.address1} ${item.location.city}`}
                    itemHours={item.hours}
                    imageURL={item.photos}
                    yelpURL={item.url}
                    itemCategories={item.categories}
                  />
                ))}
                <div className="left-pane-footer">{`Total ${itemCount} items in the list`}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="left-pane-toggle-button-container">
          <PanelToggleButton
            onClick={setTogglePane}
            closed={isLeftPanelStatus.toggleCloseButton}
          >
            <Tooltip>Collapse side panel</Tooltip>
          </PanelToggleButton>
        </div>
        <div className="custom-pane-toggle-button-container">
          <PanelOnlyToggleButton
            onClick={setTogglePaneOnly}
            closed={isLeftPanelStatus.toggleCloseButton}
          />
        </div>
      </LeftPane>
    </div>
  );
};

LeftPanel.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  setFetchedData: PropTypes.func,
  setTogglePane: PropTypes.func,
  setTogglePaneOnly: PropTypes.func,
  isLeftPanelStatus: PropTypes.object,
  userLocationUpdate: PropTypes.func,
};

const mapStateToProps = (store) => ({
  isLeftPanelStatus: getLeftPanelStatus(store),
});

const withRedux = connect(mapStateToProps, { ...mapActions });

export default compose(withRedux)(LeftPanel);
