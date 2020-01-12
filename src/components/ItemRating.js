import React from 'react';
import RatingStar from './RatingStar';


const ItemRating = ({ rating, reviewCount }) => {
  const createStars = [...Array(5).keys()];
  let starStyle = '';
  return (
    <span>
      <span className="cards-result-rating" aria-label="4 stars">
        <span className="cards-rating-score">{rating}</span>
        <ol className="cards-rating-stars">
          {createStars.map(
            (item, i) => {
              if (i === Math.floor(rating) && Math.floor(rating) !== rating) {
                starStyle = '-half';
              } else if (i + 1 > Math.floor(rating)) {
                starStyle = '-empty';
              }
              return (
                <RatingStar startStyle={starStyle} key={item} />
              );
            }
          )
          }
        </ol>
      </span>
      <span className="cards-result-num-ratings">{`${reviewCount} reviews`}</span>
    </span>
  );
};
export default ItemRating;
