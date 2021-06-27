import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOG_OUT,
} from './actionTypes';

const initState = {
  currentUser: null,
  error: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case LOG_OUT:
      localStorage.removeItem('currentUser');
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default authReducer;
