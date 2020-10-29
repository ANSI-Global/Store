import { combineReducers } from "@reduxjs/toolkit"
import CartReducer from "../components/main/components/cartReducer"
import AdminProductReducer from "../components/pages/admin/product/adminProductReducer"
import ProductsReducer from "../components/pages/products/productsReducer"

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductsReducer,
  adminProduct: AdminProductReducer,
})

export default rootReducer
