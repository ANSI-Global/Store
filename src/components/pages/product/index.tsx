import parser from "html-react-parser"
import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React, { useEffect, useState } from "react"
import SEO from "../../main/seo"
import BuyNow from "./buyNow"
import Image from "./image"
import RAQ from "./raq"
import Ratings from "./ratings"
import Variants from "./variant"

interface product {
  _id: string
  title: string
  description?: string
}

interface props {
  path?: string
  id?: string
  data?: { fauna: { allProducts: { data: [product] } } }
}

const Product = ({ id, data }: props) => {
  const [product, setProduct] = useState<product>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    data.fauna.allProducts.data.map(item => {
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
          <SEO
            key={product._id}
            lang="en"
            title={product.title}
            description={product.description}
          />
          <MDBRow>
            <MDBCol size="4">
              {typeof window !== "undefined" ? <Image images={null} /> : null}
            </MDBCol>
            <MDBCol size="5">
              <h2>{product.title} </h2> <br />
              <h6> ID: {product._id}</h6>
              <br />
              <Ratings productID={product._id} fauna={data.fauna} />
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
              <BuyNow />
            </MDBCol>
          </MDBRow>
          <br />
          Similar Items
          <Variants />
          <br />
          Variations
          <Variants />
          <br />
          <RAQ />
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
