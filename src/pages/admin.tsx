import { Router } from "@reach/router"
import React from "react"
import Layout from "../components/main/adminLayout"
import Home from "../components/pages/admin/components"
import Login from "../components/pages/admin/login"
import Guard from "../components/pages/admin/routerGuard"

const AdminPage = () => (
  <Layout>
    <Guard>
      <Router>
        <Home path="/admin" />
      </Router>
    </Guard>
    <Router>
      <Login path="/admin/login" />
    </Router>
  </Layout>
)

export default AdminPage
