import React from 'react';
// import ReactDOM, {render} from 'react-dom';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { Router, Route, browserHistory } from 'react-router';
// import {
//   // BrowserRouter as Router,
//   // Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers';

// import { i18nActions } from 'redux-react-i18n';
// import languages from './temp/languages';
// import dictionaries from './temp/dictionaries';

import './styles/dist/normalize.css';
import './styles/dist/main.min.css';

import App from './App';
import NotFound from './components/NotFound';
// import Contacts from './components/ContactsOLD';
import Login from './components/Login';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Login} />
      <Route path="/signup" component={Login} />
      {/*<Route path="/contacts" component={Contacts} />*/}
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
