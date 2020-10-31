import PropTypes, { ReactNodeLike } from "prop-types"
import React, { FC } from "react"
import Footer from "./components/footer"
import NavBar from "./components/navbar"
import "./components/styles.sass"
import "./components/variables.sass"

interface props {
  children: ReactNodeLike
}

const Layout: FC<props> = ({ children }: props) => (
  <section className="bg-color">
    <NavBar />
    {children}
    <Footer />
  </section>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
