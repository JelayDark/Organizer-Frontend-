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

// export const getNeeds = (data) => dispatch => {
//     console.log("action id: ", data);
//     axios.post('/api/todolists/needs', data).then((response) => {
//         console.log(response);
//         dispatch({type: 'GET_NEEDS', payload: response.data});
//     }).catch((err) => {
//         console.log(err.response)
//     })
// }

export const getNeeds = (id) => dispatch => {
    // console.log("action id: ", id);
    axios.post('/api/todolists/needs/'+ id).then((response) => {
        console.log(response);
        dispatch({type: 'GET_NEEDS', payload: response.data});
    }).catch((err) => {
        console.log(err.response)
    })
}