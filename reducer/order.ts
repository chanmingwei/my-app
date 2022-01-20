import { AnyAction } from "redux";

export const orderReducer = (state = { orderDetail: { billingAddress: "" }, services: [] }, action: AnyAction) => {
  switch (action.type) {
    case "CREATE ORDER":
      console.log("a")
      return action.payload;
    default:
      console.log("ba")
      return state;
  }
}