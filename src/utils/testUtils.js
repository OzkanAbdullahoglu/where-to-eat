/* eslint-disable linebreak-style */
import { createStore, applyMiddleware } from 'redux';
import { middlewares } from '../store';
import rootReducer from '../reducers';
import { GET_YELP_DATA } from '../components/main/left-panel/LeftPanel';

const map = {
  fetchedData: '',
  togglePane: {
    toggleSearchBox: false,
    toggleCloseButton: false,
    toggleLeftPane: true,
  },
  toggleSearchBoxStatus: false,
  toggleAlertModal: false,
  toggleFetch: true,
  hideMainToggleButton: true,
};
const version = { number: '0.0.1' };

export const initialStates = { map, version };

export const storeFactory = (initalState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initalState);
};

export const queryMock = [
  {
    request: {
      query: GET_YELP_DATA,
      variables: { latitude: 40.9625, longitude: 29.1102 },
    },
    result: {
      data: {
        search: {
          total: 1,
          business: [
            {
              location: {
                address1: 'Kayışdağı Cad.',
                address2: 'No: 39',
                address3: null,
                city: 'Istanbul',
                state: '34',
                postal_code: '34710',
                country: 'TR',
              },
              hours: [
                {
                  open: [
                    { is_overnight: false, end: '2200', start: '1200', day: 0 },
                    { is_overnight: false, end: '2200', start: '1200', day: 1 },
                    { is_overnight: false, end: '2200', start: '1200', day: 2 },
                    { is_overnight: false, end: '2200', start: '1200', day: 3 },
                    { is_overnight: false, end: '2200', start: '1200', day: 4 },
                    { is_overnight: false, end: '2200', start: '1200', day: 5 },
                    { is_overnight: false, end: '2200', start: '1200', day: 6 },
                  ],
                },
              ],
              categories: [
                { title: 'Turkish', alias: 'turkish', parent_categories: Array(1) },
              ],
              coordinates: { latitude: 40.979116, longitude: 29.108306 },
              id: 'vaa6WniuBUkxqp1LgBdB7Q',
              name: 'Uludağ Kebapçısı Cemal & Cemil Usta',
              rating: 5,
              review_count: 9,
              price: '₺₺',
              url: 'https://www.yelp.com/biz/uluda%C4%9F-kebap%C3%A7%C4%B1s%C4%B1-cemal-ve-cemil-usta-istanbul?adjust_creative=lQpxUARWc1tWB0NFQoQQZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=lQpxUARWc1tWB0NFQoQQZQ',
              photos: ['https://s3-media2.fl.yelpcdn.com/bphoto/BIHWiUEsQRukg-tccQ8H-w/o.jpg'],
            },
          ],
        },
      },
    },
  },
];

export const queryErrorMock = [
  {
    request: {
      query: GET_YELP_DATA,
      variables: { latitude: 40.9625, longitude: 29.1102 },
    },
    error: new Error('Test error!'),
  },
];

export const fetchedDataMock = [
  {
    id: '123456789test',
    name: 'test name',
    rating: 4,
    review_count: 123,
    price: '$$$$$',
    location: {
      address1: 'test address heading',
      address2: 'test address body',
      city: 'test address city',
    },
    hours: [
      {
        open: [
          { is_overnight: false, end: '2200', start: '1200', day: 0 },
          { is_overnight: false, end: '2200', start: '1200', day: 1 },
          { is_overnight: false, end: '2200', start: '1200', day: 2 },
          { is_overnight: false, end: '2200', start: '1200', day: 3 },
          { is_overnight: false, end: '2200', start: '1200', day: 4 },
          { is_overnight: false, end: '2200', start: '1200', day: 5 },
          { is_overnight: false, end: '2200', start: '1200', day: 6 },
        ],
      },
    ],
    url: 'https://www.yelp.com/biz/uluda%C4%9F-kebap%C3%A7%C4%B1s%C4%B1-cemal-ve-cemil-usta-istanbul?adjust_creative=lQpxUARWc1tWB0NFQoQQZQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_graphql&utm_source=lQpxUARWc1tWB0NFQoQQZQ',
    photos: ['https://s3-media2.fl.yelpcdn.com/bphoto/BIHWiUEsQRukg-tccQ8H-w/o.jpg'],
    categories: [
      { title: 'Turkish' },
    ],
  },
];

