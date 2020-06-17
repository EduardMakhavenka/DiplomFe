import { asyncActionCreator } from '../../utils/action';

import {
  CREATE_ANSWER_REQUEST,
  CREATE_ANSWER_SUCCESS,
  CREATE_ANSWER_FAILURE,
  GET_ALL_ANSWER_REQUEST,
  GET_ALL_ANSWER_SUCCESS,
  GET_ALL_ANSWER_FAILURE,
} from '../../constants/answer';

export const createAnswerRequest = () => ({
  type: CREATE_ANSWER_REQUEST,
  loading: true
});
export const createAnswerSuccess = (response) => ({
  type: CREATE_ANSWER_SUCCESS,
  loading: false,
});
export const createAnswerFailure = (error) => ({
  type: CREATE_ANSWER_FAILURE,
  loading: false,
  error
});

export const createAnswer = (text, author, role, questionId) => asyncActionCreator({
  onRequest: createAnswerRequest,
  onSuccess: createAnswerSuccess,
  onFailure: createAnswerFailure,
}, {
  path: '/answer',
  method: 'post',
  body: {
    text,
    author,
    role,
    questionId,
  }
});

export const getAllAnswersRequest = () => ({
  type: GET_ALL_ANSWER_REQUEST,
  loading: true
});
export const getAllAnswersSuccess = (response) => ({
  type: GET_ALL_ANSWER_SUCCESS,
  loading: false,
  answers: response.answers
});
export const getAllAnswersFailure = (error) => ({
  type: GET_ALL_ANSWER_FAILURE,
  loading: false,
  error
});
  
export const getAllAnswers = () => asyncActionCreator({
  onRequest: getAllAnswersRequest,
  onSuccess: getAllAnswersSuccess,
  onFailure: getAllAnswersFailure,
}, {
  path: '/answers',
  method: 'get',
});