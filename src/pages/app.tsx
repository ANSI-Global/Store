// import { graphql } from "gatsby"
import { Router } from "@reach/router"
import React from "react"
import Layout from "../components/main/layout"
import Product from "../components/pages/home/product"

const RoutePage = () => (
  <Layout>
    <Router>
      <Product path="/product/:id" />
    </Router>
  </Layout>
)

// export const query = graphql`
//   {
//     fauna {
//       allProducts {
//         data {
//           _id
//           title
//           description
//         }
//       }
//     }
//   }
// `

// const IndexPage = ({ data }) => (
//   <Layout>
//     <ul>
//       {data.fauna.allProducts.data.map(product => (
//         <li>
//           {product.title} - {product.description}
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

export default RoutePage
