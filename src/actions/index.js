import * as types from './ActionTypes';

export function increment(){
  return{
    type: types.INCREMENT
  };
}

export function decrement(){
  return{
    type: types.INCREMENT
  };
}

export function setColor(color){
  return{
    type:types.SET_COLOR,
    color
  };
}
