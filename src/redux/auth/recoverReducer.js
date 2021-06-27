import { RECOVER_PASSWORD_SUCCESS } from './actionTypes';

const initState = {
  isPasswordRecovered: false,
};

const recoverReducer = (state = initState, action) => {
  switch (action.type) {
    case RECOVER_PASSWORD_SUCCESS:
      return {
        isPasswordRecovered: true,
      };
    default:
      return state;
  }
};

export default recoverReducer;
