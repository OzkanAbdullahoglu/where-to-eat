import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './store';
import Client from '../src/components/Client';
import Map from '../src/components/Map';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={Client}>
          <Map />
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
