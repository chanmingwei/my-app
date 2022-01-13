
import { createStore, AnyAction, Store } from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

export interface State {
  server: any;
  client: any;
}

// create your reducer
const reducer = (state: State = { orderForm: {}, availabilityForm: {} }, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        server: {
          ...state.server,
          ...action.payload.server,
        },
      };
    case 'ORDER_DETAIL':
      return {
        ...state,
        client: {
          ...state.client,
          ...action.payload.client,
        },
      };
    default:
      return state;
  }
}

// create a makeStore function
const makeStore = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true });