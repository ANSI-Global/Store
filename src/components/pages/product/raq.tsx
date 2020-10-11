import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import QA from "./qa"
import Reviews from "./reviews"

const Product = () => (
  <MDBContainer fluid>
    <MDBRow>
      <MDBCol>
        Reviews
        <Reviews />
      </MDBCol>
      <MDBCol>
        Questions and anwsers
        <QA />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default Product
