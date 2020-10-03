import { MDBContainer } from "mdbreact"
import React from "react"
import Carousel from "./carousel"
import MainCaousel from "./mainCarousel"
import ProductList from "./productList"

const HomePage = () => (
  <>
    <MDBContainer fluid>
      <MainCaousel />
      <Carousel />
      <ProductList />
    </MDBContainer>
  </>
)

export default HomePage
