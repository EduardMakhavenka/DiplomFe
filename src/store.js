import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const appStore = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default appStore;