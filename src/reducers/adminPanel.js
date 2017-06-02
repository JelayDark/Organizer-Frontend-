const initialState = {
  login: false,
  users: [],
  lists: [],
  needs: [],
  active: []
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
            lists: action.payload,
            active: action.payload[0]
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
        needs: action.payload.needs,
        active: action.payload._id

      }
    } else if(action.type === 'ADD_TODO') {
        return Object.assign({}, state, {
        needs: [
            ...state.needs,
            {
              task: action.payload.task,
              isCompleted: action.payload.isCompleted
            }
          ]
       })
    } else if(action.type === 'TOGGLE_TODO') {
      return {
        ...state,
        needs: action.payload
      }
    } else if(action.type === "DELETE_TODO") {
      return {
        ...state,
        needs: action.payload
      }
    } else if(action.type === "DELETE_LIST") {
        return {
              ...state,
              lists: [
                 ...state.lists.slice(0, action.payload),
                 ...state.lists.slice(action.payload + 1)
              ]
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