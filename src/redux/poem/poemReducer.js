import { POST_POEM_SUCCESS } from './poemActionTypes';

const initState = {
  poems: [],
};

const poemReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_POEM_SUCCESS:
      const newPoems = [...state.poems];
      newPoems.push(action.payload);
      return {
        ...state,
        poems: newPoems,
      };

    default:
      return state;
  }
};

export default poemReducer;
