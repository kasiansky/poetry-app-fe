import {
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RECOVER_PASSWORD_SUCCESS,
  RECOVER_PASSWORD_FAILURE,
} from '../auth/actionTypes';
import { CLOSE_MODAL_WINDOW } from './notificationActionTypes';

const initState = {
  text: '',
  isOpen: false,
};

const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_FAILURE:
      return {
        text: action?.payload?.response?.data?.message,
        isOpen: true,
      };
    case LOGIN_FAILURE:
      return {
        text: action?.payload?.response?.data?.message,
        isOpen: true,
      };
    case CLOSE_MODAL_WINDOW:
      return {
        isOpen: false,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        text: 'The message with password recovery was send to your email',
        isOpen: true,
      };
    case FORGOT_PASSWORD_FAILURE:
      return {
        text: action?.payload?.response?.data?.message,
        isOpen: true,
      };
    case RECOVER_PASSWORD_SUCCESS:
      return {
        text: 'The password recovered successfully',
        isOpen: true,
      };
    case RECOVER_PASSWORD_FAILURE:
      return {
        text: action?.payload?.response?.data?.message,
        isOpen: true,
      };
    default:
      return state;
  }
};

export default notificationReducer;
