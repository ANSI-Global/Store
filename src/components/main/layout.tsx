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
  <>
    <NavBar />
    <main className="bg-color">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
