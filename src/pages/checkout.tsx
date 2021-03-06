import React, { FC } from "react"
import Layout from "../components/main/layout"
import SEO from "../components/main/seo"
import Page from "../components/pages/checkout"

const IndexPage: FC = () => (
  <Layout>
    <SEO title="Checkout" />
    <Page />
  </Layout>
)

export default IndexPage
