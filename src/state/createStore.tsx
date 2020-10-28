import { compose, configureStore } from "@reduxjs/toolkit"
import rootReducer from "./reducers"

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}

// preloadedState will be passed in by the plugin
export default (preloadedState: any) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}
