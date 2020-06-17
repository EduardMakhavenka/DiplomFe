
import { asyncActionCreator } from '../../utils/action';

import {
  GET_ALL_SYMPTOMS_REQUEST,
  GET_ALL_SYMPTOMS_SUCCESS,
  GET_ALL_SYMPTOMS_FAILURE,
  GET_ALL_TITLES_REQUEST,
  GET_ALL_TITLES_SUCCESS,
  GET_ALL_TITLES_FAILURE,
  GET_ALL_DISEASE_BY_ID_REQUEST,
  GET_ALL_DISEASE_BY_ID_SUCCESS,
  GET_ALL_DISEASE_BY_ID_FAILURE,
  GET_ALL_DISEASES_BY_TITLE_REQUEST,
  GET_ALL_DISEASES_BY_TITLE_SUCCESS,
  GET_ALL_DISEASES_BY_TITLE_FAILURE,
  GET_ALL_DISEASES_BY_SYMPTOMS_REQUEST,
  GET_ALL_DISEASES_BY_SYMPTOMS_SUCCESS,
  GET_ALL_DISEASES_BY_SYMPTOMS_FAILURE,
} from '../../constants/disease';

export const getAllSymptomsRequest = () => ({
  type: GET_ALL_SYMPTOMS_REQUEST,
  loading: true
});
export const getAllSymptomsSuccess = (response) => ({
  type: GET_ALL_SYMPTOMS_SUCCESS,
  loading: false,
  symptoms: response.symptoms
});
export const getAllSymptomsFailure = (error) => ({
  type: GET_ALL_SYMPTOMS_FAILURE,
  loading: false,
  error
});

export const getAllSymptoms = () => asyncActionCreator({
  onRequest: getAllSymptomsRequest,
  onSuccess: getAllSymptomsSuccess,
  onFailure: getAllSymptomsFailure,
}, {
  path: '/disease/symptoms',
  method: 'get',
});

export const getAllTitlesRequest = () => ({
  type: GET_ALL_TITLES_REQUEST,
  loading: true
});
export const getAllTitlesSuccess = (response) => ({
  type: GET_ALL_TITLES_SUCCESS,
  loading: false,
  titles: response.titles
});
export const getAllTitlesFailure = (error) => ({
  type: GET_ALL_TITLES_FAILURE,
  loading: false,
  error
});

export const getAllDiseaseTitles = () => asyncActionCreator({
  onRequest: getAllTitlesRequest,
  onSuccess: getAllTitlesSuccess,
  onFailure: getAllTitlesFailure,
}, {
  path: '/disease/titles',
  method: 'get',
});

export const getAllDiseasesByTitleRequest = () => ({
  type: GET_ALL_DISEASES_BY_TITLE_REQUEST,
  loading: true
});
export const getAllDiseasesByTitleSuccess = (response) => ({
  type: GET_ALL_DISEASES_BY_TITLE_SUCCESS,
  loading: false,
  diseases: response.diseases
});
export const getAllDiseasesByTitleFailure = (error) => ({
  type: GET_ALL_DISEASES_BY_TITLE_FAILURE,
  loading: false,
  error
});

export const getAllDiseasesByTitles = (titles) => asyncActionCreator({
  onRequest: getAllDiseasesByTitleRequest,
  onSuccess: getAllDiseasesByTitleSuccess,
  onFailure: getAllDiseasesByTitleFailure,
}, {
  path: '/disease/byTitles',
  method: 'post',
  body: {
    titles: titles,
  }
});


export const getAllDiseasesBySymptomsRequest = () => ({
  type: GET_ALL_DISEASES_BY_SYMPTOMS_REQUEST,
  loading: true
});
export const getAllDiseasesBySymptomsSuccess = (response) => ({
  type: GET_ALL_DISEASES_BY_SYMPTOMS_SUCCESS,
  loading: false,
  diseases: response.diseases
});
export const getAllDiseasesBySymptomsFailure = (error) => ({
  type: GET_ALL_DISEASES_BY_SYMPTOMS_FAILURE,
  loading: false,
  error
});

export const getAllDiseasesBySymptoms = (symptoms) => asyncActionCreator({
  onRequest: getAllDiseasesBySymptomsRequest,
  onSuccess: getAllDiseasesBySymptomsSuccess,
  onFailure: getAllDiseasesBySymptomsFailure,
}, {
  path: '/disease/bySymptoms',
  method: 'post',
  body: {
    symptoms: symptoms,
  }
});


export const getDiseaseByIdRequest = () => ({
  type: GET_ALL_DISEASE_BY_ID_REQUEST,
  loading: true
});
export const getDiseaseByIdSuccess = (response) => ({
  type: GET_ALL_DISEASE_BY_ID_SUCCESS,
  loading: false,
  disease: response.disease,
});
export const getDiseaseByIdFailure = (error) => ({
  type: GET_ALL_DISEASE_BY_ID_FAILURE,
  loading: false,
  error
});

export const getDiseaseById = (id) => asyncActionCreator({
  onRequest: getDiseaseByIdRequest,
  onSuccess: getDiseaseByIdSuccess,
  onFailure: getDiseaseByIdFailure,
}, {
  path: `/disease/${id}`,
  method: 'get',
});