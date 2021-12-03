import { GET_ACCOUNT, GET_ORDERS, GET_PRODUCTS, SET_AUTHORIZED, SET_LOADING, SET_MAIL, SET_PASSWORD } from "./types"
import axios from "axios"
import { getBase64Authorization } from "../functions/Base64Authorization"


export function getAccount(mail, password, navigation) {
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

      dispatch(setLoading(false))
      dispatch(setAuthorized(true))
      navigation.navigate('TabNavigator')
    } catch (error) {
      dispatch(setLoading(false))
      alert(error)
    }
  }
}

export function getOrders(mail, password) {
  return async dispatch => {
    dispatch(setLoading(true))
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

      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      alert(error)
    }
  }
}

export function getProducts(mail, password) {
  return async dispatch => {
    dispatch(setLoading(true))
    try {
      const response = await axios.get('https://myshop-bre569.myinsales.ru/admin/products.json', {
        headers: {
          'Authorization': getBase64Authorization(mail, password)
        }
      })

      dispatch({
        type: GET_PRODUCTS,
        payload: response.data
      })

      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
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
