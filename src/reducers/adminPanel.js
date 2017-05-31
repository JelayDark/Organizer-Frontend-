const initialState = {
  login: false,
  users: [],
  lists: [],
  needs: []
};

export default function adminPanel(state = initialState, action) {
    if (action.type === 'LOGIN_SUCCESS') {
      return {
        ...state,
        login: true
      }
    } else if (action.type === 'GET_LISTS') {
        return {
            ...state,
            lists: action.payload
        }
    } else if(action.type === 'CREATE_LIST') {
        return Object.assign({}, state, {
        lists: [
            ...state.lists,
            {
              _id: action.payload._id,
              name: action.payload.name
            }
          ]
       })
    } else if(action.type === 'GET_NEEDS') {
      return {
        ...state,
        needs: action.payload
      }
    }



    
    // else if (action.type === 'GET_USERS') {
    //     return {
    //       ...state,
    //       users: action.payload
    //     }
    // }

    return state;
} 