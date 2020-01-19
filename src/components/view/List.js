/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

const List = ({
  fetchedData,
}) => (
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
  </div>

);

List.propTypes = {
  fetchedData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default List;
