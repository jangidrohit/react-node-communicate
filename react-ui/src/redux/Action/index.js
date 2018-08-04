import * as actionTypes from '../ActionTypes';


//Home Action Type 


export const onGetCoinsData = coins => {
  return {
    type: actionTypes.GET_COINS,
    coins
  }
}




