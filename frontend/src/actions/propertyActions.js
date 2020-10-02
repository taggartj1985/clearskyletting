import { PROPERTY_LIST_REQUEST, PROPERTY_LIST_SUCCESS, PROPERTY_LIST_FAIL } from "../constants/propertyConstants"
import axios from 'axios';

const listPropertys = () => async (dispatch) => {
try{

  dispatch({ type: PROPERTY_LIST_REQUEST});
  const {data} = axios.get("/api/propertys");
  dispatch({type: PROPERTY_LIST_SUCCESS, payload: data});
}
  catch(error){
    dispatch({type: PROPERTY_LIST_FAIL, payload: error.message});
  }
}

export { listPropertys }
