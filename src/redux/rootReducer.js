import { combineReducers } from "redux"
import { appReducer } from "./appReducer"
import { getReducer } from "./getReducer"
import { authorizationReducer } from "./authorizationReducer"
import { persistReducer } from "redux-persist"
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authorization']
}

const rootReducer = combineReducers({
  app: appReducer, get: getReducer, authorization: authorizationReducer
})

export default persistReducer(persistConfig, rootReducer)
