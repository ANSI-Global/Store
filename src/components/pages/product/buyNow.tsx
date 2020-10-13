import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact"
import React from "react"

const BuyNow = () => {
  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol size="3">
          Purchase
          <MDBIcon icon="cart" />
          <MDBBtn>Add to cart</MDBBtn>
          <MDBBtn>BuyNow</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default BuyNow
