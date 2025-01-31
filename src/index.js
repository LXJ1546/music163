import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import './assets/css/index.less'
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 传递store
  <Provider store={store}>
    {/* 哈希路由 */}
    <HashRouter> 
      <App />
    </HashRouter>
  </Provider>
);
