import * as appConfig from '../../Config/Config';


export const onGetCoinsData = coins => {
  return {
    type: 'GET_COINS',
    coins
  }
}


export const onGetCoinDetails = (coins) => {
  return (dispatch) => {
     fetch(`${appConfig.default.coinDetails}/coins`, {
      method: 'GET',
    })
    .then((res)=> {
      return res.json();      
    })
    .then(function(res){
      dispatch(onGetCoinsData(res.result));
    })
    .catch((err)  => {
      console.log(err)
    })
  } 
}