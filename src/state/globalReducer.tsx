import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const globalSlice = createSlice({
  name: "global",
  initialState: { currency: "Rs.", searchBar: "" },
  reducers: {
    updateCurrency(state, action: PayloadAction<string>) {
      state.currency = action.payload
    },
    updateSearchBar(state, action: PayloadAction<string>) {
      state.searchBar = action.payload
    },
  },
})

export const { updateCurrency, updateSearchBar } = globalSlice.actions

export default globalSlice.reducer
