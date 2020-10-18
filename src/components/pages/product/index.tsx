import parser from "html-react-parser"
import { MDBCol, MDBContainer, MDBRow, MDBSpinner } from "mdbreact"
import React, { useEffect, useState } from "react"
import SEO from "../../main/seo"
import BuyNow from "./buyNow"
import Carousel from "./components/carousel"
import Image from "./image"
import RAQ from "./raq"
import Ratings from "./ratings"

interface product {
  _id: string
  title: string
  description?: string
  categoryID: string
  images: [String]
  price: string
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

  const datas = [
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(39).jpg",
      title: "Leather boots",
      id: "279285101169217030",
    },
    {
      src:
        "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(22).jpg",
      title: "Slim jeans",
      id: "279285101169217030",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
      title: "Denim shorts",
      id: "279285101169217030",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
      title: "Denim shorts",
      id: "279285101169217030",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
      title: "Denim shorts",
      id: "279285101169217030",
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Others/img%20(31).jpg",
      title: "Denim shorts",
      id: "279285101169217030",
    },
  ]

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
            <MDBCol xs="12" sm="12" md="6" lg="4" xl="4">
              {typeof window !== "undefined" ? <Image images={null} /> : null}
            </MDBCol>
            <MDBCol size="12" className="buyNow1">
              <BuyNow />
            </MDBCol>
            <MDBCol xs="12" sm="12" md="6" lg="4" xl="4">
              <h2>{product.title} </h2> <br />
              <h6> ID: {product._id}</h6>
              <br />
              <Ratings productID={product._id} fauna={data.fauna} />
              <hr className="px-1" />
              Rs.{product.price}/=
              <br />
              Description:
              <br />
              {parser(product.description)}
            </MDBCol>
            <MDBCol size="3" className="buyNow2">
              <BuyNow />
            </MDBCol>
          </MDBRow>
          <br />
          Variations,
          <Carousel data={datas} />
          <br />
          Similar Items,
          <Carousel data={datas} />
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
    return <MDBSpinner multicolor />
  }
}

export default Product
