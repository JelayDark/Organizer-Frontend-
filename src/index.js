import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducer from './reducers';

import { i18nActions } from 'redux-react-i18n';
import languages from './temp/languages';
import dictionaries from './temp/dictionaries';

import './styles/dist/normalize.css';
import './styles/dist/main.min.css';

import App from './App';
import NotFound from './components/NotFound';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(i18nActions.setDictionaries(dictionaries));
store.dispatch(i18nActions.setLanguages(languages));
store.dispatch(i18nActions.setCurrentLanguage('ru-RU'));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
