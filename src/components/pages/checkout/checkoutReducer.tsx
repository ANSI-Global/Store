import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "products",
  initialState: {
    cart: [],
    name: "",
    email: "", // (optional)
    mobile: "",
    shippingOptions: [
      ["Courier", "$0.00"],
      ["Another Shipping Method", "$19.00"],
    ],
    paymentOptions: ["Cash", "Another Payment Method"],
    // Shipping
    shippingName: "", // (optional)
    addressline1: "", // (optional)
    addressline2: "", // (optional)
    postalcode: "", // (optional)
    shippingPhone: "", // (optional)
    billingAddress: "Same as shipping address",
    orderDetails: "",
  },
  reducers: {
    setID(state, action: PayloadAction<[string]>) {
      state.cart = action.payload
    },
  },
})

export const { setID } = productSlice.actions

export default productSlice.reducer
