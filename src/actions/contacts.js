import axios from 'axios';

export const getContacts = () => dispatch => {
    // console.log("I AM IN");
    axios.get('/api/contacts').then((response) => {
        console.log(response);
        dispatch({type: 'GET_CONTACTS', payload: response.data});
    }).catch((err) => {
        console.log(err.response);
    })
}

export const addContact = (user) => dispatch => {
     return axios.post('/api/contacts/add', user);
}

export const ADD_CONTACT = 'ADD_CONTACT';

export const editUser = (user) => dispatch => {
    console.log("AM IN");
    axios.post('/api/contacts/edit/'+user.id, user).then((response) => {
        console.log(response);
        dispatch({type: "EDIT_CONTACT", payload: response.data});
    }).catch((err) => {
        console.log(err);
    })
}

export const deleteUser = (id, index) => dispatch => {
      axios.post('/api/contacts/delete/' + id).then((response) => {
            console.log(response);
            dispatch({type: 'DELETE_CONTACT', payload: index});
      }).catch((err) => {
            console.log(err);
      })
}