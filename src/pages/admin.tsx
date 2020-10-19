import { Router } from "@reach/router"
import React from "react"
import Layout from "../components/main/adminLayout"
import Home from "../components/pages/admin/components"
import Customers from "../components/pages/admin/customers"
import Login from "../components/pages/admin/login"
import Orders from "../components/pages/admin/orders"
import Products from "../components/pages/admin/products"
import ProductTemplate from "../components/pages/admin/products/components/product/template"
import Guard from "../components/pages/admin/routerGuard"

const AdminPage = () => (
  <Layout>
    <Guard>
      <Router>
        <Home path="/admin" />
        <Products path="/admin/products" />
        <ProductTemplate path="/admin/products/update/:id" />
        <Orders path="/admin/orders" />
        <Customers path="/admin/customers" />
      </Router>
    </Guard>
    <Router>
      <Login path="/admin/login" />
    </Router>
  </Layout>
)

export default AdminPage
