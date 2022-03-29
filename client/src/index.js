import React from 'react';
import "./index.css";
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import GlobalStyle from './GlobalStyle';
import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);