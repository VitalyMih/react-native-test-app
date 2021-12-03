import 'react-native-gesture-handler'
import React from "react"
import { Navigator } from "./src/navigation/Navigator"
import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "./src/redux/rootReducer"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  )
}
