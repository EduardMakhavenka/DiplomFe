import {
  GET_ALL_PARAMETERS_REQUEST,
  GET_ALL_PARAMETERS_SUCCESS,
  GET_ALL_PARAMETERS_FAILURE,
} from '../../constants/parameters';
    
const initialState = {
  loading: false,
  parameters: {},
  status: '',
  errorMessage: '',
};
    
export default function parameters (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PARAMETERS_REQUEST:    
      return {
        ...state,
        loading: action.loading
      };
    case GET_ALL_PARAMETERS_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    case GET_ALL_PARAMETERS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        parameters: action.parameters
      };
    default:
      return state;
  }
}
    