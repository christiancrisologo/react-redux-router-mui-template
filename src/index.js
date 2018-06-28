import React from 'react';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor, history } from './store';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
