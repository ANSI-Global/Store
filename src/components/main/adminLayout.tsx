import PropTypes from "prop-types"
import React from "react"
import SideNav from "./components/adminSideNav"
import "./components/styles.sass"
import "./components/variables.sass"

interface props {
  children: Node
}

const Layout = ({ children }: props) => (
  <section className="bg-color">
    <SideNav />
    {children}
  </section>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
