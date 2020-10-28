import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    noItems: 0,
    items: [],
  },
  reducers: {
    updateNoItems(state, action: PayloadAction<number>) {
      state.noItems = action.payload
    },
    addItem(state, action: PayloadAction<string>) {
      state.items.push(action.payload)
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items.splice(action.payload)
    },
    updateItems(state, action: PayloadAction<string>) {
      state.items.push(action.payload)
    },
  },
})

export const {
  updateNoItems,
  addItem,
  removeItem,
  updateItems,
} = cartSlice.actions

export default cartSlice.reducer
