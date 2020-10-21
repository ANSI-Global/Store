import { Router } from "@reach/router"
import React from "react"
import Layout from "../components/main/adminLayout"
import Home from "../components/pages/admin/components"
import Customers from "../components/pages/admin/customers"
import Login from "../components/pages/admin/login"
import Orders from "../components/pages/admin/orders"
import Products from "../components/pages/admin/products"
import Product from "../components/pages/admin/products/product"
import Guard from "../components/pages/admin/routerGuard"
import NotFound from "./404"

const AdminPage = () => (
  <Layout>
    <Guard>
      <Router>
        <Home path="/admin" />
        <Products path="/admin/products" />
        <Product path="/admin/product" />
        <Product path="/admin/product/:id" />
        <Orders path="/admin/orders" />
        <Customers path="/admin/customers" />
        <NotFound default />
      </Router>
    </Guard>
    <Router>
      <Login path="/admin/login" />
    </Router>
  </Layout>
)

export default AdminPage
