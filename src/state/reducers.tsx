import { combineReducers } from "@reduxjs/toolkit"
import AdminProductReducer from "./adminProductReducer"
import CartReducer from "./cartReducer"

const rootReducer = combineReducers({
  cart: CartReducer,
  adminProduct: AdminProductReducer,
})

export default rootReducer
