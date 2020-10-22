import { useAuth } from "gatsby-theme-firebase"
import { MDBContainer } from "mdbreact"
import React from "react"
import Carousel from "./carousel"
import Featured from "./featured"
import Predicted from "./predicted"
import ProductsList from "./productsList"

const HomePage = () => {
  const { isLoggedIn } = useAuth()
  return (
    <>
      <MDBContainer fluid>
        <Carousel />
        {isLoggedIn ? (
          <Predicted />
        ) : (
          <p className="text-center">Login to see our recomendations!</p>
        )}
        <Featured />
        <ProductsList />
      </MDBContainer>
    </>
  )
}

export default HomePage
