import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "test",
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
  },
})

const rootReducer = combineReducers({
  test: slice.reducer,
})

export default rootReducer
