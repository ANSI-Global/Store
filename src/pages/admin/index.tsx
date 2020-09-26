import React from "react"
import Layout from "../../components/main/adminLayout"
import SEO from "../../components/main/seo"
import Page from "../../components/pages/admin/components"

const IndexPage = () => (
  <Layout>
    <SEO title="Dashboard" />
    <Page />
  </Layout>
)

export default IndexPage
