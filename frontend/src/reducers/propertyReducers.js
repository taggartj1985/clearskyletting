import { PROPERTY_LIST_REQUEST, PROPERTY_LIST_SUCCESS, PROPERTY_LIST_FAIL} from "../constants/propertyConstants"

function propertyListReducer(state= {propertys:[]}, action){

  switch (action.type) {
    case PROPERTY_LIST_REQUEST:
      return {loading: true};
    case PROPERTY_LIST_SUCCESS:
      return {loading: false, propertys: action.payload};
    case PROPERTY_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state;
  }
}

export {propertyListReducer}
