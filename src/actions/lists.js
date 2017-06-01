import axios from 'axios';

export const getLists = () => dispatch => {
    axios.get('/api/todolists').then((response) => {
        console.log(response);
        dispatch({type: 'GET_LISTS', payload: response.data});
    }).catch((err) => {
        console.log(err.response);
    })
}

export const createList = (data) => dispatch => {
     return axios.post('/api/todolists/create', data);
}

export const CREATE_LIST = 'CREATE_LIST';

export const getNeeds = (id) => dispatch => {
    axios.post('/api/todolists/needs/'+ id).then((response) => {
        console.log(response);
        dispatch({type: 'GET_NEEDS', payload: response.data});
    }).catch((err) => {
        console.log(err.response)
    })
}

export const addTodo = (data) => dispatch => {
    return axios.post('/api/needs/add/'+data.id, data);
}

export const ADD_TODO = 'ADD_TODO';

export const toggleTodo = (todo) => dispatch => {
    return axios.post('/api/needs/toggle/'+todo.id, todo);
}

export const TOGGLE_TODO = "TOGGLE_TODO";