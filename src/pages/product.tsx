import { Router } from "@reach/router"
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/main/layout"
import Product from "../components/pages/product"

const RoutePage = ({ data }) => (
  <Layout>
    <Router>
      <Product path="/product/:id" data={data} />
    </Router>
  </Layout>
)

export const query = graphql`
  {
    fauna {
      allProducts {
        data {
          _id
          name
          description
          images
          price
          categoryID
        }
      }
    }
  }
`

export default RoutePage
