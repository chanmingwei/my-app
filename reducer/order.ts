import { AnyAction } from "redux";

export const orderReducer = (state = { orderDetail: { billingAddress: "" }, services: [] }, action: AnyAction) => {
  switch (action.type) {
    case "CREATE ORDER":
      return action.payload;
    default:
      return state;
  }
}