import http from '../http';

const getOptions = options => ({
  method: 'get',
  body: {},
  ...options,
});

export const asyncActionCreator = (actions, opt) => (dispatch) => {
  const options = getOptions(opt);
  const { onRequest, onSuccess, onFailure } = actions;

  dispatch(onRequest());
  return http[options.method](options.path, options.body)
    .then((response) => {
      if (response.success) {
        dispatch(onSuccess(response));
      } else {
        dispatch(onFailure(response));
      }
      return response;
    })
    .catch(err => err);
};
