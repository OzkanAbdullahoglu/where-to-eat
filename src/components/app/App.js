/* eslint-disable linebreak-style */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../../store';
import Client from '../../Client';
import Map from '../main/map/Map';
import './App.css';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={Client}>
        <Map />
      </ApolloProvider>
    </PersistGate>
  </Provider>
);

export default App;
