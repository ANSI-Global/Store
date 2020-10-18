import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import QA from "./components/qa"
import Reviews from "./components/reviews"
import "./style.sass"

const Product = () => (
  <MDBContainer fluid>
    <MDBRow>
      <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
        <h4> Reviews:</h4>
        <MDBRow>
          <MDBCol className="raq">
            <Reviews />
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol xs="12" sm="12" md="6" lg="6" xl="6">
        <h4> Questions and answers:</h4>
        <MDBRow>
          <MDBCol className="raq">
            <QA />
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default Product
