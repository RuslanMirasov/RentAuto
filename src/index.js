import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PopupProvider } from './contexts/PopupContext';
import { store } from './redux/store';
import App from 'components/App';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/RentAuto">
        <PopupProvider>
          <App />
        </PopupProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
