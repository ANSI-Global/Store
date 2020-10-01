import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"

const Product = () => (
  <MDBContainer fluid>
    <MDBRow>
      <MDBCol size="4">Image</MDBCol>
      <MDBCol size="5">
        Title
        <br />
        Description
        <br />
        <a href="https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ?pd_rd_w=oMM0v&pf_rd_p=1f552c7a-1af2-4608-bc6f-ba06ca3c43ac&pf_rd_r=S91YZAD37R6Q3KDKJH48&pd_rd_r=c8687d70-d273-4ad7-a509-3067fb0b5ddb&pd_rd_wg=KqVgq">
          Example site
        </a>
      </MDBCol>
      <MDBCol size="3">Purchase</MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default Product
