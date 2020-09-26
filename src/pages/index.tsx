import React from "react"
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import Page from "../components/pages/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Page />
  </Layout>
)

export default IndexPage
