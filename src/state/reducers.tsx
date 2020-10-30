import { combineReducers } from "@reduxjs/toolkit"
import CartReducer from "../components/main/components/cartReducer"
import AdminProductReducer from "../components/pages/admin/product/adminProductReducer"
import checkoutReducer from "../components/pages/checkout/checkoutReducer"
import ProductsReducer from "../components/pages/products/productsReducer"
import GlobalReducer from "./globalReducer"

const rootReducer = combineReducers({
  global: GlobalReducer,
  cart: CartReducer,
  products: ProductsReducer,
  checkout: checkoutReducer,
  adminProduct: AdminProductReducer,
})

export default rootReducer
