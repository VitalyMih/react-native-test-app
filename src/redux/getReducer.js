import { GET_ACCOUNT, GET_ORDERS, GET_PRODUCTS, SET_AUTHORIZED, SET_MAIL, SET_PASSWORD } from "./types"

const initialState = {
  mail: null,
  password: null,
  account: null,
  authorized: false,
  orders: null,
  products: null
}

export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT: return {...state, account: action.payload}
    case GET_ORDERS: return {...state, orders: action.payload}
    case GET_PRODUCTS: return {...state, products: action.payload}
    case SET_AUTHORIZED: return {...state, authorized: action.payload}
    case SET_MAIL: return {...state, mail: action.payload}
    case SET_PASSWORD: return {...state, password: action.payload}
    default: return state
  }
}
