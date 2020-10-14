import { graphql } from "gatsby"
import React from "react"
import ProductsPage from "../components/pages/products"
import Carousel from "../components/pages/products/carousel"

const Products = ({ data }) => {
  return (
    <>
      <Carousel />
      <ProductsPage data={data.fauna} />
    </>
  )
}

export const query = graphql`
  {
    fauna {
      allCategories {
        data {
          _id
          label
        }
      }
      allProducts {
        data {
          _id
          name
          images
          price
        }
      }
    }
  }
`

export default Products
