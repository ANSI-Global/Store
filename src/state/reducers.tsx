import { combineReducers } from "@reduxjs/toolkit"
import CartReducer from "../components/main/components/cartReducer"
import AdminProductReducer from "../components/pages/admin/product/adminProductReducer"

const rootReducer = combineReducers({
  cart: CartReducer,
  adminProduct: AdminProductReducer,
})

export default rootReducer
