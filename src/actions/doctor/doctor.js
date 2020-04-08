import { asyncActionCreator } from '../../utils/action';

import {
  GET_ALL_DOCTORS_REQUEST,
  GET_ALL_DOCTORS_SUCCESS,
  GET_ALL_DOCTORS_FAILURE,
} from '../../constants/doctor';

export const getAllDoctorsRequest = () => ({
  type: GET_ALL_DOCTORS_REQUEST,
  loading: true
});
export const getAllDoctorsSuccess = (response) => ({
  type: GET_ALL_DOCTORS_SUCCESS,
  loading: false,
  doctors: response.doctors
});
export const getAllDoctorsFailure = (error) => ({
  type: GET_ALL_DOCTORS_FAILURE,
  loading: false,
  error
});

export const getAllDoctors = () => asyncActionCreator({
  onRequest: getAllDoctorsRequest,
  onSuccess: getAllDoctorsSuccess,
  onFailure: getAllDoctorsFailure,
}, {
  path: '/doctors',
  method: 'get',
});
