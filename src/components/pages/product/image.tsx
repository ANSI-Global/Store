import { MDBCol, MDBContainer, MDBRow } from "mdbreact"
import React, { useEffect, useState } from "react"
import Carousel from "./carousel"
import Image from "./components/image"

interface props {
  images?: any
}

const imagesEx = [
  {
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
    alt: "image1",
  },
  {
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
    alt: "image2",
  },
  {
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg",
    alt: "image3",
  },
]

const Product = ({ images }: props) => {
  const [windowWidth, setWindowWidth] = useState<number>(null)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [window.innerWidth])

  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Carousel images={imagesEx} />
          </MDBCol>
          <MDBCol>
            <MDBRow>
              <MDBCol size="4">
                <Image images={imagesEx} />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Product
