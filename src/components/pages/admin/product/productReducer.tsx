import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const adminProductSlice = createSlice({
  name: "adminProduct",
  initialState: {
    id: "",
    name: "",
    description: "",
    categoryID: "",
    price: "",
    warehouse: "",
    quantity: "",
    enabled: false,
    featured: false,
    variants: [],
    images: [],
  },
  reducers: {
    setID(state, action: PayloadAction<string>) {
      state.id = action.payload
    },
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
      state.quantity = action.payload
    },
    setEnabled(state, action: PayloadAction<boolean>) {
      state.enabled = action.payload
    },
    setFeatured(state, action: PayloadAction<boolean>) {
      state.featured = action.payload
    },
    addVariants(state, action: PayloadAction<number>) {
      state.variants.push(action.payload)
    },
    removeVariants(state, action: PayloadAction<number>) {
      state.variants.splice(action.payload, 1)
    },
    setVariants(state, action: PayloadAction<[number]>) {
      state.variants = action.payload
    },
    addImages(state, action: PayloadAction<string>) {
      state.images.push(action.payload)
    },
    removeImages(state, action: PayloadAction<number>) {
      state.images.splice(action.payload, 1)
    },
    setImages(state, action: PayloadAction<[string]>) {
      state.images = action.payload
    },
  },
})

export const {
  setID,
  setName,
  setDescription,
  setCategoryID,
  setPrice,
  setWarehouse,
  setQuantity,
  setEnabled,
  setFeatured,
  addVariants,
  removeVariants,
  setVariants,
  addImages,
  removeImages,
  setImages,
} = adminProductSlice.actions

export default adminProductSlice.reducer
