import { fromJS } from 'immutable';

import {
  REQUEST_SUCCESS,
} from './constants';

const initialState = fromJS({
  source: [],
});

function cabinetMenuReducer(state = initialState, action) {  
  switch (action.type) {
    case REQUEST_SUCCESS:
      if (action)
        return state
          .set('source', action.response);
      else return state;
    default:
      return state;
  }
}

export default cabinetMenuReducer;
