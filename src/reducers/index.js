import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import adminPanel from './adminPanel';
// import listsPage from './listsPage';


export default combineReducers({
  routing: routerReducer,
  todos,
  visibilityFilter,
  adminPanel,
  // listsPage

})