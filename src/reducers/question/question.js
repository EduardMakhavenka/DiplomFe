import {
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
} from '../../constants/question';
    
const initialState = {
  loading: false,
  status: '',
  errorMessage: '',
};
    
export default function question (state = initialState, action) {
  switch (action.type) {
    case CREATE_QUESTION_REQUEST:    
      return {
        ...state,
        loading: action.loading
      };
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
    default:
      return state;
  }
}
    