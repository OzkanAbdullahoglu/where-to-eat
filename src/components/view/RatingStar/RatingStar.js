/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const RatingStar = ({ starStyle }) => (
  <li className={`cards-rating-star cards-rating-star${starStyle}`}></li>
);

RatingStar.propTypes = {
  starStyle: PropTypes.string,
};

export default RatingStar;
