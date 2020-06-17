import {
  GET_PLANTS_BY_PARAMETES_REQUEST,
  GET_PLANTS_BY_PARAMETES_SUCCESS,
  GET_PLANTS_BY_PARAMETES_FAILURE,
  GET_PLANT_BY_ID_REQUEST,
  GET_PLANT_BY_ID_SUCCESS,
  GET_PLANT_BY_ID_FAILURE,
} from '../../constants/plant';
    
const initialState = {
  loading: false,
  plants: [],
  plant: {},
  status: '',
  errorMessage: '',
};
    
export default function plant (state = initialState, action) {
  switch (action.type) {
    case GET_PLANT_BY_ID_REQUEST:
    case GET_PLANTS_BY_PARAMETES_REQUEST:    
      return {
        ...state,
        loading: action.loading
      };
    case GET_PLANT_BY_ID_FAILURE:  
    case GET_PLANTS_BY_PARAMETES_FAILURE:
      return {
        ...state,
        loading: action.loading,
        error: action.error
      };
    case GET_PLANTS_BY_PARAMETES_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        plants: action.plants
      };
    case GET_PLANT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        plant: action.plant
      }; 
    default:
      return state;
  }
}
    