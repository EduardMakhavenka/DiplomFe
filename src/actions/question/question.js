import { asyncActionCreator } from '../../utils/action';

import {
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
  GET_ALL_QUESTION_REQUEST,
  GET_ALL_QUESTION_SUCCESS,
  GET_ALL_QUESTION_FAILURE,
} from '../../constants/question';

export const createQuestionRequest = () => ({
  type: CREATE_QUESTION_REQUEST,
  loading: true
});
export const createQuestionSuccess = (response) => ({
  type: CREATE_QUESTION_SUCCESS,
  loading: false,
});
export const createQuestionFailure = (error) => ({
  type: CREATE_QUESTION_FAILURE,
  loading: false,
  error
});

export const createQuestion = (text, name, email, to) => asyncActionCreator({
  onRequest: createQuestionRequest,
  onSuccess: createQuestionSuccess,
  onFailure: createQuestionFailure,
}, {
  path: '/question',
  method: 'post',
  body: {
    text,
    name,
    email,
    to,
  }
});

export const getAllQuestionsRequest = () => ({
  type: GET_ALL_QUESTION_REQUEST,
  loading: true
});
export const getAllQuestionsSuccess = (response) => ({
  type: GET_ALL_QUESTION_SUCCESS,
  loading: false,
  questions: response.questions
});
export const getAllQuestionsFailure = (error) => ({
  type: GET_ALL_QUESTION_FAILURE,
  loading: false,
  error
});
  
export const getAllQuestions = () => asyncActionCreator({
  onRequest: getAllQuestionsRequest,
  onSuccess: getAllQuestionsSuccess,
  onFailure: getAllQuestionsFailure,
}, {
  path: '/questions',
  method: 'get',
});