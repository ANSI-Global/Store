import PropTypes from "prop-types"
import React from "react"
import Footer from "./components/footer"
import NavBar from "./components/navbar"

const Layout = ({ children }) => (
  <>
    <NavBar />
    <main style={{ backgroundColor: "gray" }}>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
