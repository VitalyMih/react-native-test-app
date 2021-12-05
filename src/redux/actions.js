import {
  GET_ACCOUNT,
  GET_ORDERS,
  GET_PRODUCTS, GET_REFRESH_PRODUCTS, LOG_OUT,
  SET_AUTHORIZED,
  SET_LOADING,
  SET_MAIL, SET_NULL_PRODUCTS_PAGE,
  SET_PASSWORD,
  SET_PRODUCT_PAGE, SET_REFRESH,
} from "./types"
import axios from "axios"
import { getBase64Authorization } from "../functions/Base64Authorization"


export function getAccount(mail, password) {
  return async dispatch => {
    dispatch(setLoading(true))
    try {
      const response = await axios.get('https://myshop-bre569.myinsales.ru/admin/account.json', {
        headers: {
          'Authorization': getBase64Authorization(mail, password)
        }
      })

      dispatch({
        type: GET_ACCOUNT,
        payload: response.data
      })

      dispatch(setAuthorized(true))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      alert(error)
    }
  }
}

export function getOrders(mail, password) {
  return async dispatch => {
    try {
      const response = await axios.get('https://myshop-bre569.myinsales.ru/admin/orders.json', {
        headers: {
          'Authorization': getBase64Authorization(mail, password)
        }
      })

      dispatch({
        type: GET_ORDERS,
        payload: response.data
      })

    } catch (error) {
      alert(error)
    }
  }
}

export function getProducts(mail, password, page) {
  return async dispatch => {
    try {
      const response = await axios.get(`https://myshop-bre569.myinsales.ru/admin/products.json?page=${page}`, {
        headers: {
          'Authorization': getBase64Authorization(mail, password)
        }
      })

      dispatch({
        type: GET_PRODUCTS,
        payload: response.data
      })

    } catch (error) {
      alert(error)
    }
  }
}

export function getRefreshProducts(mail, password) {
  return async dispatch => {
    dispatch(setRefresh(true))
    try {
      const response = await axios.get(`https://myshop-bre569.myinsales.ru/admin/products.json?page=1`, {
        headers: {
          'Authorization': getBase64Authorization(mail, password)
        }
      })

      dispatch({
        type: GET_REFRESH_PRODUCTS,
        payload: response.data
      })

      dispatch(setNullProductsPage())
      dispatch(setRefresh(false))
    } catch (error) {
      dispatch(setRefresh(false))
      alert(error)
    }
  }
}

export function setMail(mail) {
  return {
    type: SET_MAIL,
    payload: mail
  }
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    payload: password
  }
}

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: loading
  }
}

export function setAuthorized(authorized) {
  return {
    type: SET_AUTHORIZED,
    payload: authorized
  }
}

export function setProductsPage() {
  return {
    type: SET_PRODUCT_PAGE
  }
}

export function setNullProductsPage() {
  return {
    type: SET_NULL_PRODUCTS_PAGE
  }
}

export function setRefresh(refresh) {
  return {
    type: SET_REFRESH,
    payload: refresh
  }
}

export function logOut() {
  return {
    type: LOG_OUT
  }
}
