import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes';

const initState = {
  currentUser: '',
  error: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      localStorage.setItem(JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
