import { AnyAction } from "redux";

export const availabilityReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case "CREATE AVAILABILITY":
      return state
    default:
      return state
  }
}