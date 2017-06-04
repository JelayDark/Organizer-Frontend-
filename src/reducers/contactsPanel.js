const initialState = {
  users: []
};

export default function contactsPanel(state = initialState, action) {
    if (action.type === 'GET_CONTACTS') {
        return {
            ...state,
            users: action.payload
        }
    } else if (action.type === 'ADD_CONTACT') {
       return Object.assign({}, state, {
        users: [
            ...state.users,
            {
              _id: action.payload._id,
              name: action.payload.name,
              company: action.payload.company,
              phone: action.payload.phone,
              email: action.payload.email,
              image: action.payload.image,
              about: action.payload.about
            }
          ]
       })
    } else if (action.type === 'EDIT_CONTACT') {
        return {
            ...state,
            users: action.payload
      }
    } else if(action.type === "DELETE_CONTACT") {
        return {
              ...state,
              users: [
                 ...state.users.slice(0, action.payload),
                 ...state.users.slice(action.payload + 1)
              ]
            }
    }












    return state;
} 