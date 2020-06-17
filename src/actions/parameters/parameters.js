import { asyncActionCreator } from '../../utils/action';

import {
  GET_ALL_PARAMETERS_REQUEST,
  GET_ALL_PARAMETERS_SUCCESS,
  GET_ALL_PARAMETERS_FAILURE,
} from '../../constants/parameters';

export const getAllParametersRequest = () => ({
  type: GET_ALL_PARAMETERS_REQUEST,
  loading: true
});
export const getAllParametersSuccess = (response) => ({
  type: GET_ALL_PARAMETERS_SUCCESS,
  loading: false,
  parameters: response.parameters
});
export const getAllParametersFailure = (error) => ({
  type: GET_ALL_PARAMETERS_FAILURE,
  loading: false,
  error
});

export const getAllParameters = () => asyncActionCreator({
  onRequest: getAllParametersRequest,
  onSuccess: getAllParametersSuccess,
  onFailure: getAllParametersFailure,
}, {
  path: '/parameters',
  method: 'get',
});
