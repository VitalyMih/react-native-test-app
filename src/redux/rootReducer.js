import { combineReducers } from "redux"
import { appReducer } from "./appReducer"
import { getReducer } from "./getReducer"

export const rootReducer = combineReducers({
  app: appReducer, get: getReducer
})
