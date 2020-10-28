import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState: {
    name: "",
    description: "",
    categoryID: "",
    price: "",
    warehouse: "",
    quantity: "",
    enabled: false,
    variants: [],
    images: [],
  },
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload
    },
    setCategoryID(state, action: PayloadAction<string>) {
      state.categoryID = action.payload
    },
    setPrice(state, action: PayloadAction<string>) {
      state.price = action.payload
    },
    setWarehouse(state, action: PayloadAction<string>) {
      state.warehouse = action.payload
    },
    setQuantity(state, action: PayloadAction<string>) {
      state.warehouse = action.payload
    },
    setEnabled(state, action: PayloadAction<boolean>) {
      state.enabled = action.payload
    },
    addVariants(state, action: PayloadAction<number>) {
      state.variants.push(action.payload)
    },
    removeVariants(state, action: PayloadAction<number>) {
      state.variants.splice(action.payload)
    },
    setVariants(state, action: PayloadAction<[number]>) {
      state.variants = action.payload
    },
    addImages(state, action: PayloadAction<string>) {
      state.images.push(action.payload)
    },
    removeImages(state, action: PayloadAction<number>) {
      state.images.splice(action.payload)
    },
    setImages(state, action: PayloadAction<[string]>) {
      state.images = action.payload
    },
  },
})

export const {
  setName,
  setDescription,
  setCategoryID,
  setPrice,
  setWarehouse,
  setQuantity,
  setEnabled,
  addVariants,
  removeVariants,
  setVariants,
  addImages,
  removeImages,
  setImages,
} = adminProductSlice.actions

export default adminProductSlice.reducer
