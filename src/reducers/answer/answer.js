import {
  CREATE_ANSWER_REQUEST,
  CREATE_ANSWER_SUCCESS,
  CREATE_ANSWER_FAILURE,
  GET_ALL_ANSWER_REQUEST,
  GET_ALL_ANSWER_SUCCESS,
  GET_ALL_ANSWER_FAILURE,
} from '../../constants/answer';
      
const initialState = {
  loading: false,
  status: '',
  errorMessage: '',
  answers: [],
};
      
export default function answer (state = initialState, action) {
  switch (action.type) { 
    case GET_ALL_ANSWER_REQUEST:
    case CREATE_ANSWER_REQUEST:    
      return {
        ...state,
        loading: action.loading
      };
    case GET_ALL_ANSWER_FAILURE:     
    case CREATE_ANSWER_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    case CREATE_ANSWER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
      };
    case GET_ALL_ANSWER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        answers: action.answers
      };  
    default:
      return state;
  }
}
      