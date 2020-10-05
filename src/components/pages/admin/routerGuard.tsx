import { navigate } from "gatsby"
import PropTypes from "prop-types"

const adminGuard = ({ children }) => {
  if (typeof window !== "undefined") {
    const isLoggedIn = window.sessionStorage.getItem("admin")
    if (isLoggedIn == "true") {
      return children
    } else {
      navigate("/admin/login")
      return null
    }
  } else {
    console.info("This is SSR")
    return null
  }
}

adminGuard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default adminGuard
