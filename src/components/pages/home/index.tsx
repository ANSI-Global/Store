import { MDBContainer } from "mdbreact"
import React from "react"
import Carousel from "./carousel"
import ProductList from "./productList"

const Test = () => {
  return (
    <>
      <Carousel />
      <ProductList />
    </>
  )
}

const HomePage = () => (
  <>
    <MDBContainer>
      <Test />
    </MDBContainer>
  </>
)

export default HomePage
