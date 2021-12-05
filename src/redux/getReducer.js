import {
  GET_ORDERS,
  GET_PRODUCTS, GET_REFRESH_PRODUCTS,
  SET_NULL_PRODUCTS_PAGE,
  SET_PRODUCT_PAGE, SET_REFRESH,
} from "./types"

const initialState = {
  orders: null,
  products: [],
  productsPage: 1,
  refresh: false
}

export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS: return {...state, orders: action.payload}
    case GET_PRODUCTS: return {...state, products: [...state.products, ...action.payload]}
    case GET_REFRESH_PRODUCTS: return {...state, products: action.payload}
    case SET_PRODUCT_PAGE: return {...state, productsPage: state.productsPage + 1}
    case SET_NULL_PRODUCTS_PAGE: return {...state, productsPage: 2}
    case SET_REFRESH: return {...state, refresh: action.payload}
    default: return state
  }
}
