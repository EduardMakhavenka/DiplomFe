import { asyncActionCreator } from '../../utils/action';

import {
  GET_PLANTS_BY_PARAMETES_REQUEST,
  GET_PLANTS_BY_PARAMETES_SUCCESS,
  GET_PLANTS_BY_PARAMETES_FAILURE,
  GET_PLANT_BY_ID_REQUEST,
  GET_PLANT_BY_ID_SUCCESS,
  GET_PLANT_BY_ID_FAILURE,
} from '../../constants/plant';

export const getPlantsByParametersRequest = () => ({
  type: GET_PLANTS_BY_PARAMETES_REQUEST,
  loading: true
});
export const getPlantsByParametersSuccess = (response) => ({
  type: GET_PLANTS_BY_PARAMETES_SUCCESS,
  loading: false,
  plants: response.plants,
});
export const getPlantsByParametersFailure = (error) => ({
  type: GET_PLANTS_BY_PARAMETES_FAILURE,
  loading: false,
  error
});

export const getPlantsByParameters = (items) => asyncActionCreator({
  onRequest: getPlantsByParametersRequest,
  onSuccess: getPlantsByParametersSuccess,
  onFailure: getPlantsByParametersFailure,
}, {
  path: '/plant/ByParameters',
  method: 'post',
  body: {
    items,
  }
});

export const getPlantByIdRequest = () => ({
  type: GET_PLANT_BY_ID_REQUEST,
  loading: true
});
export const getPlantByIdSuccess = (response) => ({
  type: GET_PLANT_BY_ID_SUCCESS,
  loading: false,
  plant: response.plant,
});
export const getPlantByIdFailure = (error) => ({
  type: GET_PLANT_BY_ID_FAILURE,
  loading: false,
  error
});

export const getPlantById = (id) => asyncActionCreator({
  onRequest: getPlantByIdRequest,
  onSuccess: getPlantByIdSuccess,
  onFailure: getPlantByIdFailure,
}, {
  path: `/plant/${id}`,
  method: 'get',
});