import { Router } from "@reach/router"
import React from "react"
import Layout from "../components/main/adminLayout"
import Home from "../components/pages/admin/components"
import Customers from "../components/pages/admin/customers"
import Login from "../components/pages/admin/login"
import Orders from "../components/pages/admin/orders"
import Product from "../components/pages/admin/product"
import Products from "../components/pages/admin/products"
import Guard from "../components/pages/admin/routerGuard"
import NotFound from "./404"

const AdminPage = () => (
  <Layout>
    <Guard>
      <div style={{ backgroundColor: "gray" }}>
        <Router>
          <Home path="/admin" />
          <Products path="/admin/products" />
          <Product path="/admin/product" />
          <Product path="/admin/product/:id" />
          <Orders path="/admin/orders" />
          <Orders path="/admin/order/:id" />
          <Customers path="/admin/customers" />
          <Customers path="/admin/customer/:id" />
          <NotFound default />
        </Router>
      </div>
    </Guard>
    <Router>
      <Login path="/admin/login" />
    </Router>
  </Layout>
)

export default AdminPage
