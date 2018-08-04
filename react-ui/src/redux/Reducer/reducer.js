
import * as actionTypes from '../ActionTypes';

const initialObj = {
  coins:[],
} 

const todos = (state = initialObj, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.GET_COINS :
      const coins =
      {
        ...state,
        ...action
      }
      return coins;
    default:      
      return state;
  }
}

export default todos