import * as appConfig from '../../Config/Config';
import * as action from '../Action';
import { RSAA } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'

export const onGetCoinDetails = (coins) => {
  debugger;
  return (dispatch) => {
     fetch(`${appConfig.default.apiRoute}/coins`, {
      method: 'GET',
    })
    .then((res)=> {
      return res.json();      
    })
    .then(function(res){
      dispatch(action.onGetCoinsData(res.result));
    })
    .catch((err)  => {
      console.log(err)
    })
  } 
}
