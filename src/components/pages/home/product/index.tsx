import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React from "react"
import Image from "./image"
import Stars from "./stars"

const Product = () => (
  <MDBContainer fluid>
    <MDBRow>
      <MDBCol size="4">
        <Image />
      </MDBCol>
      <MDBCol size="5">
        Title
        <br />
        <MDBRow>
          <MDBCol size="3">
            <Stars rating={2} />
          </MDBCol>
          <MDBCol>40,000 ratings</MDBCol>
        </MDBRow>
        <hr className="px-1" />
        Rs.400/=
        <br />
        Variations
        <br />
        <ul>
          <li>Brand: Dog</li>
          <li>Model:102</li>
          <li>Color: Blue</li>
        </ul>
        <br />
        Description
        <ul>
          <li>This is a product</li>
          <li>It's color is Blue</li>
          <li>It's size is xl</li>
          <li>It's strong and sturdy</li>
        </ul>
        <br />
        Similar Items
        <ul>
          <li>This is a product</li>
          <li>It's color is Blue</li>
          <li>It's size is xl</li>
          <li>It's strong and sturdy</li>
        </ul>
        <br />
        Variations
        <ul>
          <li>This is a product</li>
          <li>It's color is Blue</li>
          <li>It's size is xl</li>
          <li>It's strong and sturdy</li>
        </ul>
        <br />
        <MDBRow>
          <MDBCol>Reviews</MDBCol>
          <MDBCol>Questions and anwsers</MDBCol>
        </MDBRow>
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
