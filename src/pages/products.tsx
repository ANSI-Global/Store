import { Router } from "@reach/router"
import { graphql } from "gatsby"
import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import Layout from "../components/main/layout"
import List from "../components/pages/products"
import Menu from "../components/pages/products/menu"
import NotFound from "./404"

interface props {
  path
  query?
  data?
}

const Products = ({ data, query }: props) => {
  return (
    <>
      <Layout>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol xs="12" sm="12" md="3" lg="2" xl="2">
              <Menu />
            </MDBCol>
            <MDBCol>
              <List data={data.fauna} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Layout>
    </>
  )
}

const ProductsPage = () => (
  <Router>
    <Products path="//products/query:query" />
    <NotFound default />
  </Router>
)

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

export default ProductsPage
