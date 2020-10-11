import parser from "html-react-parser"
import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdbreact"
import React, { useEffect, useState } from "react"
import SEO from "../../main/seo"
import Carousel from "./carousel"
import Image from "./components/image"
import Stars from "./components/stars"
import UserRatings from "./components/userRating"
import QA from "./qa"
import Reviews from "./reviews"
import Test from "./test"
import Variants from "./variant"

interface props {
  path?: string
  id?: string
  data?: any
}

interface product {
  _id: string
  title: string
  description?: string
}

const ex = [
  "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
]

const Product = ({ id, data }: props) => {
  const [product, setProduct] = useState<product>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    data.fauna.allProducts.data.map((item: product) => {
      if (item._id == id) {
        setProduct(item)
      }
    })
    setIsLoading(false)
  }, [])

  if (!isLoading) {
    if (product) {
      return (
        <MDBContainer fluid>
          <SEO title={`Product ${id}`} />
          <Carousel images={ex} />
          <Test />
          <MDBRow>
            <MDBCol size="4">
              <Image />
            </MDBCol>
            <MDBCol size="5">
              Title: {product.title} <br /> ID is: {id}
              <br />
              <MDBRow>
                <MDBCol size="2">
                  <Stars rating={5} />
                </MDBCol>
                <MDBCol size="6">
                  <MDBContainer fluid>
                    <MDBRow>
                      <MDBCol>Your rating: </MDBCol>
                      <MDBCol>
                        <UserRatings />
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                </MDBCol>
                <MDBCol size="4">40,000 ratings</MDBCol>
              </MDBRow>
              <hr className="px-1" />
              Rs.400/=
              <br />
              Features,
              <br />
              <ul>
                <li>Brand: Dog</li>
                <li>Model:102</li>
                <li>Color: Blue</li>
              </ul>
              <br />
              Description:
              <br />
              {parser(product.description)}{" "}
              <a href="https://www.amazon.com/BENGOO-G9000-Controller-Cancelling-Headphones/dp/B01H6GUCCQ?pd_rd_w=oMM0v&pf_rd_p=1f552c7a-1af2-4608-bc6f-ba06ca3c43ac&pf_rd_r=S91YZAD37R6Q3KDKJH48&pd_rd_r=c8687d70-d273-4ad7-a509-3067fb0b5ddb&pd_rd_wg=KqVgq">
                Example site
              </a>
            </MDBCol>
            <MDBCol size="3">
              Purchase
              <MDBIcon icon="cart" />
              <MDBBtn>Add to cart</MDBBtn>
              <MDBBtn>BuyNow</MDBBtn>
            </MDBCol>
          </MDBRow>
          <br />
          Similar Items
          <Variants />
          <br />
          Variations
          <Variants />
          <br />
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
    } else {
      return (
        <>
          <p>Sorry the product {id} was not available!</p>
        </>
      )
    }
  } else {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }
}

export default Product
