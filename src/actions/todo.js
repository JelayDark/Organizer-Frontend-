let nextTodoId = 0;
import axios from 'axios';

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}


// export const addTodo = (data) => dispatch => {
//      return axios.post('/api/todolists/create', data);
// }

// export const CREATE_LIST = 'CREATE_LIST';