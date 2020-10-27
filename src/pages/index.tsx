import { graphql } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import Page from "../components/pages/home"

interface props {
  data: {
    fauna: {
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
}

const IndexPage: FC<props> = (props: props) => (
  <Layout>
    <SEO title="Home" />
    <Page data={props.data.fauna} />
  </Layout>
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

export default IndexPage
