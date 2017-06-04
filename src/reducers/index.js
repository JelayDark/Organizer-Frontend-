import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import adminPanel from './adminPanel';
import contactsPanel from './contactsPanel';
import eventsPanel from './eventsPanel';


export default combineReducers({
  routing: routerReducer,
  // todos,
  adminPanel,
  contactsPanel,
  eventsPanel
  // listsPage

})