import {
  GET_ALL_DOCTORS_REQUEST,
  GET_ALL_DOCTORS_SUCCESS,
  GET_ALL_DOCTORS_FAILURE,
} from '../../constants/doctor';
  
const initialState = {
  loading: false,
  doctors: [],
  status: '',
  errorMessage: '',
};
  
export default function doctor (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DOCTORS_REQUEST:    
      return {
        ...state,
        loading: action.loading
      };
    case GET_ALL_DOCTORS_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    case GET_ALL_DOCTORS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        doctors: action.doctors
      };
    default:
      return state;
  }
}
  