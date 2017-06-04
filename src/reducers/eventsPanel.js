const initialState = {
  events: []
};

export default function eventsPanel(state = initialState, action) {
    if (action.type === 'GET_EVENTS') {
        return {
            ...state,
            events: action.payload
        }
    } else if (action.type === 'ADD_EVENT') {
       return Object.assign({}, state, {
        events: [
            ...state.events,
            {
              _id: action.payload._id,
              title: action.payload.title,
              start: action.payload.start,
              end: action.payload.end,
              desc: action.payload.desc,
            }
          ]
       })
    } else if (action.type === 'EDIT_EVENT') {
        return {
            ...state,
            events: action.payload
      }
    } else if(action.type === "DELETE_EVENT") {
        return {
              ...state,
              events: action.payload
            }
    }

    return state;
} 