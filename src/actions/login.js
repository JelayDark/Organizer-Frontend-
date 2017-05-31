import axios from 'axios';

export const userLoginRequest = (data) => dispatch => {
      return axios.post('/api/auth', data);
}

export const getUsers = () => dispatch => {
      axios.get('/api/users').then((response) => {
            console.log(response);
            dispatch({type: 'GET_USERS', payload: response.data});
      }).catch((err) => {
            console.log(err.response);
      })
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
