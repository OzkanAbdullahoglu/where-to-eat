/* eslint-disable linebreak-style */
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apiKey = 'EsxulzN8fXiwfdxgXhVLs3fQ49k-GzEb5gCIr3-H5cmh0yfSfSEp-azxdtTMvwfG_DQp3fLEfw8thTwCJFnio4zYe4fNgiGv32TNACcQKW8mZ9TBmGfGbtehRywRXnYx';
const cache = new InMemoryCache();
// Seting up Apollo Client
const client = new ApolloClient({
  uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Accept-Language': 'en-US',
      },
    });
  },
  cache,
});

export default client;
