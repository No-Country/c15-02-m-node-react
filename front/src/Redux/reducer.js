import { GET_ALL_USERS, GET_USER, ADD_USER } from "./action-types";


const initialState = {
  users: [],
  userInfo: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.payload], // Add the new user to the existing list
      };
    }
    default: {
      return state;
    }
    
  }
};

export default reducer;
