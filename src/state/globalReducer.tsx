import { createSlice } from "@reduxjs/toolkit"

interface globalState {
  currency: string
}

const initialState: globalState = { currency: "Rs." }

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
})

export const {} = todosSlice.actions

export default todosSlice.reducer
