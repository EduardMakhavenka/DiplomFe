import {
  GET_ALL_SYMPTOMS_REQUEST,
  GET_ALL_SYMPTOMS_SUCCESS,
  GET_ALL_SYMPTOMS_FAILURE,
  GET_ALL_TITLES_REQUEST,
  GET_ALL_TITLES_SUCCESS,
  GET_ALL_TITLES_FAILURE,
  GET_ALL_DISEASES_BY_TITLE_REQUEST,
  GET_ALL_DISEASES_BY_TITLE_SUCCESS,
  GET_ALL_DISEASES_BY_TITLE_FAILURE,
  GET_ALL_DISEASES_BY_SYMPTOMS_REQUEST,
  GET_ALL_DISEASES_BY_SYMPTOMS_SUCCESS,
  GET_ALL_DISEASES_BY_SYMPTOMS_FAILURE,
  GET_ALL_DISEASE_BY_ID_REQUEST,
  GET_ALL_DISEASE_BY_ID_SUCCESS,
  GET_ALL_DISEASE_BY_ID_FAILURE,
} from '../../constants/disease';
    
const initialState = {
  loading: false,
  symptoms: [],
  status: '',
  errorMessage: '',
  titles: [],
  diseases: [],
  disease: {},
};
    
export default function disease (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_DISEASE_BY_ID_REQUEST:
    case GET_ALL_DISEASES_BY_SYMPTOMS_REQUEST:
    case GET_ALL_DISEASES_BY_TITLE_REQUEST:
    case GET_ALL_TITLES_REQUEST:
    case GET_ALL_SYMPTOMS_REQUEST:    
      return {
        ...state,
        loading: action.loading
      };
    case GET_ALL_DISEASE_BY_ID_FAILURE:
    case GET_ALL_DISEASES_BY_SYMPTOMS_FAILURE:
    case GET_ALL_DISEASES_BY_TITLE_FAILURE:  
    case GET_ALL_TITLES_FAILURE:
    case GET_ALL_SYMPTOMS_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    case GET_ALL_SYMPTOMS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        symptoms: action.symptoms
      };
    case GET_ALL_TITLES_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        titles: action.titles
      };
    case GET_ALL_DISEASES_BY_TITLE_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        diseases: action.diseases
      };
    case  GET_ALL_DISEASES_BY_SYMPTOMS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        diseases: action.diseases
      };     
    case GET_ALL_DISEASE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        disease: action.disease
      };  
    default:
      return state;
  }
}
    