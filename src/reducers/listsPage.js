const initialState = {
  lists: []
};

export default function listsPage(state = initialState, action) {
    if (action.type === 'GET_LISTS') {
        return {
            ...state,
            lists: action.payload
        }
    }

    return state;
} 