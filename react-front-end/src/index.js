import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';

const root = document.getElementById('root');

if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);