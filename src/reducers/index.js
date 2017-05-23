import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import films from './films';
import { i18nReducer as i18n} from 'redux-react-i18n';

export default combineReducers({
  routing: routerReducer,
  i18n,
  films
})