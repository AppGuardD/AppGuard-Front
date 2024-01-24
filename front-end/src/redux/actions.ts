import axios from 'axios';

export const LOGIN = 'LOGIN';
export const CLEAR_STATE = 'CLEAR_STATE';

export const login = (password) => async (dispatch) => {
  try{

    const URL = '/dogs/login';
    const query = `?password=${password}` 
    const { data } = await axios(URL + query);
    const { access } = data;

    dispatch({
      type: LOGIN,
      payload: access,
    })

  }catch(error){
    alert("Contraseña incorrecta");
  }
};

export const clearState = ()=>(dispatch)=>{
  try {
    dispatch({
      type: CLEAR_STATE,
      payload: [],
      payloadobj: {},
    });
  } catch (error) {
    console.log(error);
  }
}; 