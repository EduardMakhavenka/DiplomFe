import { combineReducers } from 'redux';

import doctor from './doctor';
import question from './question';
import answer from './answer';
import disease from './disease';
import parameters from './parameters';
import plant from './plant';

export default combineReducers({
  doctor,
  question,
  answer,
  disease,
  parameters,
  plant,
});
