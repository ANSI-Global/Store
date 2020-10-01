import React from "react"
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import Page from "../components/pages/home/product"

const IndexPage = () => (
  <Layout>
    <SEO title="Product" />
    <Page />
  </Layout>
)

export default IndexPage
