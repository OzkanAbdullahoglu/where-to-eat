/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const LeftPaneHeader = ({
  userLocationUpdate,
  setTogglePaneOnly,
}) => (
  <div>
    <div
      className="cards-layout cards-layout-flex-horizontal"
      tabIndex="-1"
    >
      <button className="use-my-location header-buttons" onClick={userLocationUpdate}>
                    Use my location
      </button>
      <button
        className="set-toggle-pane-only header-buttons hide-larger-device"
        onClick={setTogglePaneOnly}
      >
                    Show on map
      </button>
    </div>
    <div className="cards-divider cards-divider-bottom-line"></div>
  </div>
);

LeftPaneHeader.propTypes = {
  userLocationUpdate: PropTypes.func,
  setTogglePaneOnly: PropTypes.func,
};

export default LeftPaneHeader;
