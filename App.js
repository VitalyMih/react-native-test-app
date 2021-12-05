import 'react-native-gesture-handler'
import React from "react"
import { Navigator } from "./src/navigation/Navigator"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./src/redux/rootReducer"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { ActivityIndicator } from "react-native";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const persistor = persistStore(store)

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<ActivityIndicator size="large" color="#5b39b8" />}>
        <Navigator />
      </PersistGate>
    </Provider>
  )
}
