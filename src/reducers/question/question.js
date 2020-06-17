import {
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
  GET_ALL_QUESTION_REQUEST,
  GET_ALL_QUESTION_SUCCESS,
  GET_ALL_QUESTION_FAILURE,
} from '../../constants/question';
    
const initialState = {
  loading: false,
  status: '',
  errorMessage: '',
  questions: [],
};
    
export default function question (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_QUESTION_REQUEST:  
    case CREATE_QUESTION_REQUEST:    
      return {
        ...state,
        loading: action.loading
      };
    case  GET_ALL_QUESTION_FAILURE:  
    case CREATE_QUESTION_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        loading: action.loading,
      };
    case GET_ALL_QUESTION_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        questions: action.questions
      };    
    default:
      return state;
  }
}
    