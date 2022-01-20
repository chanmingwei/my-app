
import { combineReducers } from 'redux';
import { orderReducer } from './order';
import { availabilityReducer } from './availability';

// create your reducer

const reducer = combineReducers({
  order: orderReducer,
  availability: availabilityReducer
}
)

export default reducer
