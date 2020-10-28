import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const globalSlice = createSlice({
  name: "global",
  initialState: { currency: "Rs." },
  reducers: {
    updateCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload
    },
  },
})

export const { updateCurrency } = globalSlice.actions

export default globalSlice.reducer
