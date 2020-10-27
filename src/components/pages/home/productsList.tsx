import React from "react"
import ProductList from "./components/itemList"

interface props {
  data: {
    allCategories: {
      data: {
        _id: number
        label: string
      }[]
    }
    allProducts: {
      data: {
        _id: number
        name: string
        images: [string]
        price: number
      }[]
    }
  }
}

const EcommercePage = (props: props) => {
  const { data } = props
  const { allProducts } = data

  return (
    <>
      <ProductList title="Our bestsellers" data={allProducts.data} />
      <ProductList title="Featured" data={allProducts.data} />
      <ProductList title="Electronics" data={allProducts.data} />
      <ProductList title="Home Appliance" data={allProducts.data} />
      <ProductList title="Materials" data={allProducts.data} />
      <ProductList title="Arts and other" data={allProducts.data} />
    </>
  )
}

export default EcommercePage
