import { graphql } from "gatsby"
import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React, { FC } from "react"
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import List from "../components/pages/products"
import Menu from "../components/pages/products/menu"

interface props {
  data: {
    fauna: {
      allCategories: {
        data: {
          _id: number
          label: string
        }
      }
      allProducts: {
        data: {
          _id: number
          name: string
          images: string
          price: number
        }
      }
    }
  }
}

const Products: FC<props> = ({ data }: props) => {
  return (
    <>
      <Layout>
        <SEO title="products" />
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
