/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const RatingStar = ({ startStyle }) => (
  <li className={`cards-rating-star cards-rating-star${startStyle}`}></li>
);

RatingStar.propTypes = {
  startStyle: PropTypes.string,
};

export default RatingStar;
