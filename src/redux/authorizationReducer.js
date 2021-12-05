import { GET_ACCOUNT, LOG_OUT, SET_AUTHORIZED, SET_MAIL, SET_PASSWORD } from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  mail: null,
  password: null,
  authorized: false,
  account: null
}

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT: return {...state, account: action.payload}
    case SET_MAIL: return {...state, mail: action.payload}
    case SET_PASSWORD: return {...state, password: action.payload}
    case SET_AUTHORIZED: return {...state, authorized: action.payload}
    case LOG_OUT: return AsyncStorage.removeItem('persist:root')
    default: return state
  }
}
