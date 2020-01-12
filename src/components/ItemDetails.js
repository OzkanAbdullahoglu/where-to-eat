import React from "react";
import { getCategoriesTitle } from "../utils/helper";

const ItemDetails = ({ cost, address, categories }) => (
  <div id="item-details">
    <span className="cards-result-cost">{cost}</span>
    <span className="cards-result-separator"> - </span>
    <span className="cards-result-details">
      {getCategoriesTitle(categories)}
    </span>
    <span className="cards-result-separator"> - </span>
    <span className="cards-result-location">{address}</span>
  </div>
);

export default ItemDetails;
