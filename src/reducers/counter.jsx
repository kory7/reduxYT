import * as types from '../actions/ActionTypes';

const initialState = {
  number:0
};

export default function counter(state = initialState/*si fuese undefined*/, action){
  switch (action.type) {
    case types.INCREMENT:
      return {...state, number: state.number + 1 };

    case types.DECREMENT:
      return {...state, number: state.number - 1};

    default:
      return state;
  }
}
