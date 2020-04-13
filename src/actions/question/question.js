import { asyncActionCreator } from '../../utils/action';

import {
  CREATE_QUESTION_REQUEST,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
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

export const createQuestion = (text, name, email) => asyncActionCreator({
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
  }
});