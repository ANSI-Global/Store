import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const productSlice = createSlice({
  name: "products",
  initialState: {
    departments: [
      "All Departments",
      "Arts & Crafts",
      "Automotive",
      "Baby",
      "Beauty & Personal Care",
      "Books",
      "Computers",
      "Digital Music",
      "Electronics",
      "Women's Fashion",
      "Men's Fashion",
      "Girls' Fashion",
      "Boys' Fashion",
      "Deals",
      "Health  Household",
      "Home  Kitchen",
      "Industrial & Scientific",
      "Luggage",
      "Movies & TV",
      "Music, CDs & Vinyl",
      "Pet Supplies",
      "Software",
      "Sports & Outdoors",
      "Tools & Home Improvement",
      "Toys & Games",
      "Video Games",
    ],
    /**"subcat",
      "PC Accessories",
      "PlayStation 4 Games, Consoles & Accessories",
      "PlayStation 4 Headsets",
      "Xbox One Accessories",
      "Legacy Systems",
      "Mac Accessories",
      "Computer Audio & Video Accessories",
      "Nintendo Switch Accessories", */
    reviews: [],
    brands: [
      "NUBWO",
      "RUNMUS",
      "HyperX",
      "Mpow",
      "BENGOO",
      "Razer",
      "Beexcellent",
    ],
    prices: ["0", "100"],
    operatingSytems: [
      "Windows 10",
      "Windows 8",
      "Windows 7",
      "Windows Vista",
      "Windows ME",
      "Windows 2000",
      "Windows 98",
    ],
    condition: ["New", "Refurbished "],
  },
  reducers: {
    setID(state, action: PayloadAction<[string]>) {
      state.departments = action.payload
    },
  },
})

export const { setID } = productSlice.actions

export default productSlice.reducer
