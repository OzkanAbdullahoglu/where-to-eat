/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import ItemRating from '../ItemRating/ItemRating';
import ItemDetails from '../ItemDetail/ItemDetails';
import { openHoursManage } from '../../../utils/helper';

const ListItem = ({
  name,
  itemRate,
  reviewCounts,
  itemCost,
  itemAddress,
  itemHours,
  imageURL,
  yelpURL,
  itemCategories,
}) => {
  const fallBackImgURL = 'https://via.placeholder.com/80x92.png/ffdede/304368?text=NO+PHOTO';
  return (
    <a href={yelpURL} target="_blank" rel="noopener noreferrer">
      <div className="cards-result">
        <div className="cards-result-content">
          <div className="cards-result-text-content">
            <div className="cards-result-header">
              <div className="cards-result-title-container">
                <h3 className="cards-result-title">
                  <span>{name}</span>
                </h3>
                <ItemRating rating={itemRate} reviewCount={reviewCounts} />
              </div>
            </div>
            <div className="cards-result-details-container">
              <ItemDetails
                cost={itemCost}
                address={itemAddress}
                categories={itemCategories}
              />
            </div>
            <div className="cards-result-opening-hours">
              {openHoursManage(itemHours[0])}
            </div>
          </div>

          <div className="cards-image-container">
            <div
              className="cards-result-image"
              style={{
                backgroundImage: `url(${imageURL}), url(${fallBackImgURL})`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cards-divider-bottom-line"></div>
    </a>
  );
};

ListItem.propTypes = {
  itemRate: PropTypes.number,
  reviewCounts: PropTypes.number,
  name: PropTypes.string,
  itemCost: PropTypes.string,
  itemHours: PropTypes.array,
  yelpURL: PropTypes.string,
  imageURL: PropTypes.array,
  itemCategories: PropTypes.array,
  itemAddress: PropTypes.string,
};

export default ListItem;
