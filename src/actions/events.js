import axios from 'axios';

export const addEvent = (event) => dispatch => {
    // console.log("I AM IN");
    axios.post('/api/events/add', event).then((response) => {
        console.log(response);
        dispatch({type: 'ADD_EVENT', payload: response.data});
    }).catch((err) => {
        console.log(err);
    })
}

export const getEvents = () => dispatch => {
    // console.log("I AM IN");
    axios.get('/api/events').then((response) => {
        console.log(response);
        dispatch({type: 'GET_EVENTS', payload: response.data});
    }).catch((err) => {
        console.log(err.response);
    })
}

export const editEvent = (event) => dispatch => {
    axios.post('/api/events/edit/'+event.id, event).then((response) => {
        console.log(response);
        dispatch({type: "EDIT_EVENT", payload: response.data});
    }).catch((err) => {
        console.log(err);
    })
}

export const deleteEvent = (id, index) => dispatch => {
      axios.post('/api/events/delete/' + id).then((response) => {
            console.log(response);
            dispatch({type: 'DELETE_EVENT', payload: index});
      }).catch((err) => {
            console.log(err);
      })
}