import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/main/layout"

export const query = graphql`
  {
    fauna {
      allProducts {
        data {
          _id
          title
          description
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.fauna.allProducts.data.map(product => (
        <li>
          {product.title} - {product.description}
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
